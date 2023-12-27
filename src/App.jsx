import { Box } from '@mui/material';
import Order from './pages/orders/Order';
import Header from './components/header/Header';

const App = () => {
  return (
    <Box
      sx={{
        minWidth: '100%',
        minHeight: '100vh',
        backgroundColor: '#1d1c1c',
      }}
    >
      <Header />
      <Order />
    </Box>
  );
};

export default App;
