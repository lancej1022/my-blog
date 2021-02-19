import NextImage from 'next/image';

import { urlFor } from 'lib/api';
import PostType from 'types/post';
import { PageLayout } from 'components/PageLayout';
import { Typography } from '@material-ui/core';

type BlogPostProps = {
  blogPost: PostType;
};

export function BlogPost({ blogPost }: BlogPostProps) {
  return (
    <>
      <PageLayout title={blogPost.title}>
        <NextImage
          src={urlFor(blogPost.coverImage).url() || ''}
          height={450}
          width={1920}
        />
        <Typography align="center" component="h1" variant="h2">
          {blogPost.title}
        </Typography>
      </PageLayout>
    </>
  );
}
