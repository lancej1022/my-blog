import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Container } from '@material-ui/core';

import PostBody from '../../components/post-body';

import PostHeader from '../../components/post-header';
import { PageLayout } from 'components/PageLayout';
import { getPostBySlug, getAllPosts } from 'lib/api';
import PostTitle from '../../components/post-title';

import PostType from 'types/post';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <PageLayout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </PageLayout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params = { slug: '' } }: Params) {
  const post = await getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  console.log(`post: ${JSON.stringify(post)}`);

  return {
    props: {
      post: { ...post },
    },
    revalidate: 1,
  };
}

// used to convert some pages that would normally be SSR into SSG
export async function getStaticPaths() {
  const posts = await getAllPosts(['slug']);
  const paths = posts?.map((p) => {
    return { params: { slug: p.slug } };
  });

  return {
    paths,
    fallback: false, // true relies on a custom 404 page
  };
}
