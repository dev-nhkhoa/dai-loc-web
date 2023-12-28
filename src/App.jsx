import { Box } from '@mui/material';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Order from '~/pages/orders/Order';
import { Routes, Route } from 'react-router-dom';
import ImportProducts from './pages/orders/ImportProducts/ImportProducts';
import Delivery from './pages/orders/Delivery/Delivery';
import PriceForCustomer from './pages/orders/PriceForCustomer/PriceForCustomer';

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
      <Routes>
        {/* in development */}
        <Route path="/import-products" element={<ImportProducts />} />
        <Route path="/ship-and-print" element={<Delivery />} />
        <Route path="/price-for-customer" element={<PriceForCustomer />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
