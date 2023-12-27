import { experimental_extendTheme as extendTheme } from '@mui/material';

const APP_BAR_HEIGHT = '58px';

export const theme = extendTheme({
  dailoc: {
    appBarHeight: APP_BAR_HEIGHT,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#fff',
          color: '#111',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#111',
          color: '#fff',
        },
      },
    },
  },
});
