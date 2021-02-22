import NextImage from 'next/image';
import { Container, Grid, Typography } from '@material-ui/core';

import { urlFor } from 'lib/api';
import PostType from 'types/post';
import { PageLayout } from 'components/PageLayout';
import { BlogContent } from 'components/BlogContent';
import styles from './BlogPost.module.scss';

type BlogPostProps = {
  blogPost: PostType;
};

export function BlogPost({ blogPost }: BlogPostProps) {
  return (
    <>
      <PageLayout title={blogPost.title}>
        <NextImage
          src={
            urlFor(blogPost.coverImage)
              .height(400)
              .width(1920)
              .quality(100)
              .fit('crop')
              .url() || ''
          }
          height={400}
          width={1920}
        />
        <Container maxWidth="lg" component="article">
          <Typography gutterBottom align="center" component="h1" variant="h2">
            {blogPost.title}
          </Typography>
          <div className={styles['text-container']}>
            <BlogContent content={blogPost.body} />
          </div>
        </Container>
      </PageLayout>
    </>
  );
}
