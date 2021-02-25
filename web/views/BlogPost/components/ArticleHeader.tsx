import { format, parseISO } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { urlFor } from 'lib/api';
import PostType from 'types/post';
import { humanReadableEstimate } from 'utils';
import styles from './blogPostComponents.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  avatarSize: {
    width: 80,
    height: 80,
  },
}));

type CardHeaderProps = {
  blogPost: PostType;
};

export function ArticleHeader({ blogPost }: CardHeaderProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            className={classes.avatarSize}
            aria-label="recipe"
            src={
              urlFor(blogPost.author.picture)
                .height(80)
                .width(80)
                .quality(100)
                .fit('crop')
                .url() || ''
            }
          />
        }
        title={
          <Typography component="span" variant="h6">
            {blogPost.author.name}
          </Typography>
        }
        subheader={
          <span className={styles['date-wrapper']}>
            <Typography component="time" variant="body1">
              {format(parseISO(blogPost.date), 'LLLL d, yyyy')}
            </Typography>
            <Typography variant="body1" component="span">
              Estimated read time: {humanReadableEstimate(blogPost)}
            </Typography>
          </span>
        }
      />
    </Card>
  );
}
