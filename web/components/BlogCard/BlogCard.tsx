import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
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

import { urlFor } from 'lib/api';
import { humanReadableEstimate } from 'utils';
import PostType from 'types/post';
import styles from './BlogCard.module.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  timeText: {
    marginRight: '3rem',
  },
});

type BlogCardProps = {
  blogPost: PostType;
};

export function BlogCard({ blogPost }: BlogCardProps) {
  const router = useRouter();
  const classes = useStyles();

  const textPreview = useMemo(() => {
    const arr = blogPost.content.split(' ');
    const preview = arr.slice(0, 25).join(' ') + ' ...';
    return preview;
  }, [blogPost]);

  const handleCardClick = () => {
    router.push(`posts/${blogPost?.slug}`);
  };

  return (
    <Card className={classes.root} variant="outlined" component="article">
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          alt={blogPost.coverImageAlt}
          height="150"
          image={
            urlFor(blogPost.coverImage)
              .height(150)
              .width(800)
              .quality(90)
              .fit('crop')
              .url() || ''
          }
          title={blogPost.coverImageAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h3">
            {blogPost.title}
          </Typography>
          <span className={styles['date-wrapper']}>
            <Typography className={classes.timeText} component="time" variant="body1">
              {format(parseISO(blogPost.date), 'LLLL d, yyyy')}
            </Typography>
            <Typography variant="body1" component="span">
              Estimated read time: {humanReadableEstimate(blogPost)}
            </Typography>
          </span>
          <Box fontStyle="italic">
            <Typography variant="body1" color="textSecondary" component="p">
              {textPreview}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/posts/${blogPost.slug}`} passHref>
          <Button
            size="medium"
            color="primary"
            variant="outlined"
            endIcon={<ArrowRightAltIcon />}
          >
            Read more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
