import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import MoonIcon from '@material-ui/icons/Brightness3';
import SunIcon from '@material-ui/icons/Brightness5';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuItem from '@material-ui/core/MenuItem';
import MaterialLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

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
  nav: {
    display: 'inline',
  },
}));

export const NavigationBar = (): JSX.Element => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar className={classes.appBar} color="default" elevation={0} position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarTitle}>
          <NextLink href="/" passHref>
            <Button className={`classes.link`} color="primary" variant="text">
              Lance Jeffers
            </Button>
          </NextLink>
        </div>

        {/* Render hamburger w/ drawer if mobile*/}
        <Box display={{ xs: 'block', sm: 'none' }}>
          <IconButton aria-label="menu" aria-haspopup="true" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Drawer open={drawerOpen} onClose={handleDrawerOpen}>
            <MaterialLink href="https://www.linkedin.com/in/lance-jeffers">
              <MenuItem>LinkedIn</MenuItem>
            </MaterialLink>
            <MaterialLink href="https://github.com/lancej1022">
              <MenuItem>GitHub</MenuItem>
            </MaterialLink>
          </Drawer>
        </Box>

        {/* Render normal navbar if non-mobile */}
        <Box display={{ xs: 'none', sm: 'block' }}>
          <nav className={classes['nav']}>
            <NextLink href="/posts" passHref>
              <Button className={classes.link} color="primary" variant="text">
                Blog
              </Button>
            </NextLink>
          </nav>

          <IconButton
            color="primary"
            aria-label="Twitter link"
            component="a"
            href="https://twitter.com"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="LinkedIn link"
            component="a"
            href="https://www.linkedin.com/in/lance-jeffers"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="GitHub link"
            component="a"
            href="https://github.com/lancej1022"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
