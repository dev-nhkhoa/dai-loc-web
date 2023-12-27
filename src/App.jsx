import { Box } from '@mui/material';
import Order from './pages/orders/Order';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        minHeight: '100%',
        backgroundColor: '#1d1c1c',
      }}
    >
      <Header />
      <Order />
      <Footer />
    </Box>
  );
};

export default App;
