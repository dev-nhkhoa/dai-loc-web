import { experimental_extendTheme as extendTheme } from '@mui/material';

const APP_BAR_HEIGHT = '58px';

export const theme = extendTheme({
  typography: {
    mainText: { fontSize: '22.5px' },
    detailsText: { fontSize: '12px' },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          mainText: { fontSize: '22.5px' },
          detailsText: { fontSize: '12px' },
          DLHeader: { fontSize: '18px' },
        },
      },
    },
  },
  dailoc: {
    appBarHeight: APP_BAR_HEIGHT,
    padding: '20px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#fff',
          bg: '#111',
          color: '#fff',
          secondaryColor: '#666',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#fff',
          bg: '#111',
          color: '#fff',
          secondaryColor: '#666',
        },
      },
    },
  },
});
