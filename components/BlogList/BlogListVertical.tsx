import { Grid } from '@material-ui/core';

import Post from 'types/post';
import { BlogCard } from 'components/BlogCard';

import styles from './BlogList.module.scss';

type BlogListProps = {
  posts: Post[];
};

export const BlogListVertical = ({ posts = [] }: BlogListProps) => {
  return (
    <>
      <Grid container spacing={6}>
        {posts.map((p) => {
          return (
            <Grid className={styles['blog-card-container']} key={p._id} item xs={12}>
              <BlogCard blogPost={p} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
