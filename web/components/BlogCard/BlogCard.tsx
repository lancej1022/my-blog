import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DateFormatter from 'components/date-formatter';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
});

const defaultPost = {
  coverImageSrc: '/assets/unsplash-asoggetti.jpg',
  coverImageAlt: 'look at dem mountains',
  title: 'Super crazy blog post',
  date: Date.now(),
  body:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt tempora eos doloribus natus? Impedit eligendi ea cupiditate delectus sit maiores.',
};

export function BlogCard({ blogPost = defaultPost }) {
  const classes = useStyles();

  // TODO: this entire card should be clickable/submittable (a11y + UX)
  return (
    <Card className={classes.root} variant="outlined" component="article">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={blogPost.coverImageAlt}
          height="200"
          image={blogPost.coverImageSrc}
          title={blogPost.coverImageAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h3">
            {blogPost.title}
          </Typography>
          {/* <DateFormatter dateString={blogPost.date.toString()} /> */}
          <Box fontStyle="italic">
            <Typography variant="body1" color="textSecondary" component="p">
              {blogPost.body}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* TODO: include a little arrow button, similar to https://kentcdodds.com/ blog card */}
        <Button size="small" color="primary" variant="outlined">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}
