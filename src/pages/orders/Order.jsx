import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LinkToPage = ({ to, path }) => {
  return (
    <Link to={path}>
      <Typography
        variant="detailText"
        sx={{
          color: '#fff',
          '&:hover': {
            textDecoration: 'underline',
            color: '#111',
          },
        }}
      >
        {to}
      </Typography>
    </Link>
  );
};

const Order = () => {
  return (
    <Box
      sx={{
        height: '100%',
        backgroundColor: '#666',
        display: 'flex',
        justifyContent: 'center',
        paddingY: 2,
        gap: 2,
        color: '#fff',
        cursor: 'pointer',
      }}
    >
      <LinkToPage to={'Lấy hàng'} path={'/import-products'} />
      <LinkToPage to={'Báo giá'} path={'/price-for-customer'} />
      <LinkToPage to={'Phiếu bán hàng & Giao hàng'} path={'/ship-and-print'} />
    </Box>
  );
};

export default Order;
