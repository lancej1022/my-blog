import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { MdxRemote } from 'next-mdx-remote/types';

import { getPostBySlug, getAllPosts } from 'lib/api';
import PostType from 'types/post';
import { BlogPost, sanityComponents } from 'containers/BlogPost';

type Props = {
  blogPost: PostType;
  mdxSource: MdxRemote.Source;
  preview?: boolean;
};

// actual component that is rendered by [slug].tsx
const Post = ({ blogPost, mdxSource }: Props) => {
  const router = useRouter();

  const renderedContent = hydrate(mdxSource, {
    components: sanityComponents as MdxRemote.Components,
  });

  // if we are not on the fallback page and we dont have a blog slug, display an error page
  if (!router.isFallback && !blogPost?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <BlogPost renderedContent={renderedContent} blogPost={blogPost} />
    </>
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

  const mdxSource = await renderToString(post.content, {
    components: sanityComponents,
  });

  return {
    props: {
      blogPost: { ...post },
      mdxSource,
    },
    revalidate: 1,
  };
}

// used to convert some pages that would normally be SSR into SSG
export async function getStaticPaths() {
  const posts = await getAllPosts(['slug']);
  const paths = posts?.map((p: any) => {
    return { params: { slug: p.slug } };
  });

  return {
    paths,
    fallback: false, // true relies on a custom 404 page
  };
}
