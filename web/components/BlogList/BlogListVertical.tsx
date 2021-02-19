import { Grid } from '@material-ui/core';
import { BlogCard } from 'components/BlogCard';

export const BlogListVertical = ({ blogList = [1, 2] }) => {
  return (
    <>
      <Grid container spacing={3}>
        {blogList.map((i) => {
          return (
            <Grid item xs={12}>
              <BlogCard />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
