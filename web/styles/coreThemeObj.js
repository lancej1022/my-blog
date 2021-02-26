import { red } from '@material-ui/core/colors';

/**
 * This serves as the basis, and we will overwrite properties as needed within `./theme.js`
 */
export const coreThemeObj = {
  palette: {
    primary: {
      main: '#14589d',
      // main: '--color-homepage-bg', TODO: update this to CSS Variables once MUI supports them
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
};
