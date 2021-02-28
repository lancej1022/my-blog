import Typography from '@material-ui/core/Typography';

export function Copyright(): JSX.Element {
  return (
    <Typography align="center" color="textSecondary" variant="body2">
      {'Copyright © Lance Jeffers '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
