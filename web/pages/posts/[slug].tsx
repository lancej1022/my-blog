import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Container } from '@material-ui/core';

import { PageLayout } from 'components/PageLayout';
import { getPostBySlug, getAllPosts } from 'lib/api';

import PostType from 'types/post';
import { BlogPost } from 'views/BlogPost';

type Props = {
  blogPost: PostType;
  preview?: boolean;
};

const Post = ({ blogPost }: Props) => {
  const router = useRouter();
  // console.log(JSON.stringify(blogPost));

  // if we are not on the fallback page and we dont have a blog slug, display an error page
  if (!router.isFallback && !blogPost?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <BlogPost blogPost={blogPost} />
    </>
    // <PageLayout>
    //   <Container>
    //     <Header />
    //     {router.isFallback ? (
    //       <PostTitle>Loading…</PostTitle>
    //     ) : (
    //       <>
    //         <article className="mb-32">
    //           {/* <PostHeader
    //             title={blogPost.title}
    //             coverImage={blogPost.coverImage}
    //             date={blogPost.date}
    //             author={blogPost.author}
    //           /> */}
    //           <PostBody content={blogPost.content} />
    //         </article>
    //       </>
    //     )}
    //   </Container>
    // </PageLayout>
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
  // console.log(`post: ${JSON.stringify(post)}`);

  return {
    props: {
      blogPost: { ...post },
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
