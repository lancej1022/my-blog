import NextImage from 'next/image';
import { Container, Typography } from '@material-ui/core';

import { urlFor } from 'lib/api';
import PostType from 'types/post';
import { PageLayout } from 'components/PageLayout';

import styles from './BlogPost.module.scss';
import { ArticleHeader } from './components/ArticleHeader';

type BlogPostProps = {
  blogPost: PostType;
};

export function BlogPost({ blogPost, renderedContent }: BlogPostProps) {
  return (
    <>
      <PageLayout title={blogPost.title}>
        <div className={styles['hero-image']}>
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
        </div>
        <Container maxWidth="lg" component="article">
          <Typography
            gutterBottom
            align="center"
            component="h1"
            variant="h3"
            color="textSecondary"
          >
            {blogPost.title}
          </Typography>

          <section className={styles['article-header']}>
            <ArticleHeader blogPost={blogPost} />
          </section>

          <div className={styles['text-container']}>{renderedContent}</div>
        </Container>
      </PageLayout>
    </>
  );
}
