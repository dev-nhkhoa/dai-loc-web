import { experimental_extendTheme as extendTheme } from '@mui/material'

const APP_BAR_HEIGHT = '58px'

export const theme = extendTheme({
  typography: { mainText: { fontSize: '16px' }, detailsText: { fontSize: '12px' } },
  components: {},
  dailoc: { appBarHeight: APP_BAR_HEIGHT, padding: '20px' },
  colorSchemes: {
    light: { palette: { primary: { main: '#fff', bg: '#111', color: '#fff', secondaryColor: '#666' } } },
    dark: { palette: { primary: { main: '#fff', bg: '#111', color: '#fff', secondaryColor: '#666' } } }
  }
})
