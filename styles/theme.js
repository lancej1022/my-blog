import { createMuiTheme } from '@material-ui/core/styles';

import { coreThemeObj } from './coreThemeObj';

// Create a theme instance.
export const lightTheme = createMuiTheme({
  ...coreThemeObj,
  palette: {
    ...coreThemeObj.palette,
    type: 'light',
  },
});

export const darkTheme = createMuiTheme({
  ...coreThemeObj,
  palette: {
    ...coreThemeObj.palette,
    type: 'dark',
  },
});
