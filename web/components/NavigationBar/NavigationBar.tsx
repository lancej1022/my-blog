import NextLink from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MoonIcon from '@material-ui/icons/Brightness3';
import SunIcon from '@material-ui/icons/Brightness5';

import { Toggle } from 'components/Toggle';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: '1rem 1.5rem',
  },
}));

export const NavigationBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color="default" elevation={0} position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarTitle}>
          <NextLink href="/login" passHref>
            <Button className={`classes.link`} color="primary" variant="text">
              Lance Jeffers
            </Button>
          </NextLink>
        </div>
        <nav>
          <NextLink href="/posts" passHref>
            <Button className={classes.link} color="primary" variant="text">
              Blog
            </Button>
          </NextLink>
        </nav>

        <Toggle
          aria-label="Dark mode toggle"
          defaultChecked
          icons={{
            checked: <MoonIcon htmlColor="#fffa5c" />,
            unchecked: <SunIcon htmlColor="#fffa5c" />,
          }}
        />
      </Toolbar>
    </AppBar>
  );
};
