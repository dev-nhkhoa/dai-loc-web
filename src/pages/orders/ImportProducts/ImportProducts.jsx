import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomerInfo from './CustomerInfo';
import OrderTable from './OrderTable';

const ImportProducts = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'primary.main',
        height: '100vh',
        alignItems: 'center',
        gap: 2,
        overflow: 'auto',
      }}
    >
      <Typography variant="mainText" color="primary.color" sx={{ pt: 2 }}>
        NHẬP ĐƠN HÀNG MỚI
      </Typography>

      <Box sx={{ width: 1200, px: 3 }}>
        <CustomerInfo title={'TÊN KHÁCH HÀNG'} width={500} />
        <CustomerInfo title={'CÔNG TRÌNH'} width={500} />
        <CustomerInfo title={'SĐT KHÁCH HÀNG'} width={100} />
        <CustomerInfo title={'MÃ ĐƠN HÀNG'} width={100} />
      </Box>

      <OrderTable />
    </Box>
  );
};

export default ImportProducts;
