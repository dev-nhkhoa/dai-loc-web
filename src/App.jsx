import { Box } from '@mui/material';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
// import PriceForCustomer from './pages/orders/PriceForCustomer/PriceForCustomer';
// import NhapHangPage from './pages/orders/NhapHangPage/NhapHangPage';
import GioiThieu from './pages/GioiThieu/GioiThieu';

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
      <Routes>
        <Route path="/" element={<GioiThieu />} />
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        {/* in development */}
        {/* <Route path="/import-products" element={<NhapHangPage />} />
        <Route path="/price-for-customer" element={<PriceForCustomer />} /> */}
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
