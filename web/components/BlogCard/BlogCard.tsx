import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { parseISO, format } from 'date-fns';

import DateFormatter from 'components/date-formatter';
import { useMemo } from 'react';
import { urlFor } from 'lib/api';
import PostType from 'types/post';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
});

type BlogCardProps = {
  blogPost: PostType;
};

export function BlogCard({ blogPost }: BlogCardProps) {
  const classes = useStyles();

  const postPreview = useMemo(() => {
    console.log(JSON.stringify(blogPost));
    const arr = blogPost.body[0].children[0].text.split(' ');
    const preview = arr.slice(0, 25).join(' ') + ' ...';
    return preview;
  }, [blogPost]);

  // TODO: this entire card should be clickable/submittable (a11y + UX)
  return (
    <Card className={classes.root} variant="outlined" component="article">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={blogPost.coverImageAlt}
          height="150"
          image={urlFor(blogPost.coverImage).url()}
          title={blogPost.coverImageAlt}
        />
        <CardContent>
          <Typography variant="h4" component="h3">
            {blogPost.title}
          </Typography>
          <Typography component="time" variant="body2">
            {format(parseISO(blogPost.date), 'LLLL d, yyyy')}
          </Typography>
          <Box fontStyle="italic">
            <Typography variant="body1" color="textSecondary" component="p">
              {postPreview}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          color="primary"
          variant="outlined"
          endIcon={<ArrowRightAltIcon />}
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}
