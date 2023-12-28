import '@fontsource/montserrat/500.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PriceForCustomerTable from './PriceForCustomerTable';
import { findViaIdDonHang, findDetailItemsVidId } from '~/lib/mock_data';

const A4_WIDTH = 700;

const A4 = { width: A4_WIDTH, height: A4_WIDTH * Math.sqrt(2) };

const DON_HANG_NO_EXISTS = () => {
  return <Typography variant="mainText">ĐƠN HÀNG KHÔNG TỒN TẠI!</Typography>;
};

const PriceForCustomer = () => {
  const donHang = findViaIdDonHang('DL0001');
  console.log(donHang);
  console.log(findDetailItemsVidId('DL0001'));
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'montserrat',
      }}
    >
      {donHang === undefined ? (
        DON_HANG_NO_EXISTS
      ) : (
        <Box
          sx={{
            ...A4,
            backgroundColor: '#fff',
          }}
        >
          {/* LOGO + HEADER */}
          <Box
            sx={{
              display: 'flex',
              height: 100,
              gap: '10%',
            }}
          >
            <Box sx={{ width: '20%' }}>LOGO</Box>
            <Box
              sx={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="DLHeader"
                sx={{ color: 'red', fontWeight: 'semi-bold' }}
              >
                CỬA HÀNG TRANG TRÍ NỘI THẤT ĐẠI LỘC
              </Typography>
              <Typography
                variant="DLHeader"
                sx={{ color: '#111', fontWeight: 'semi-bold' }}
              >
                Đ/C: 28, ĐƯỜNG 14E, BÌNH HƯNG HÒA B, BÌNH TÂN, THCM
              </Typography>
              <Typography
                variant="DLHeader"
                sx={{ color: '#111', fontWeight: 'semi-bold' }}
              >
                HOTLINE & ZALO: +84932481842
              </Typography>
            </Box>
          </Box>

          {/* Title*/}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              px: 2,
            }}
          >
            <Typography
              variant="mainText"
              sx={{ py: 3, color: 'red', fontWeight: 'bold' }}
            >
              PHIẾU BÁO GIÁ
            </Typography>
            {/* Customer infomation */}
            <Box sx={{ width: '100%' }}>
              <Box sx={{ display: 'flex', gap: '5%' }}>
                <Box sx={{ width: '60%' }}>
                  <Typography variant="detailsText">Tên khách hàng:</Typography>
                  <Typography
                    variant="detailsText"
                    sx={{ fontSize: '14px', fontWeight: 'bold', pl: '10px' }}
                  >
                    {donHang.customer_info.name}
                  </Typography>
                </Box>
                <Box sx={{ width: '35%' }}>
                  <Typography variant="detailsText">Mã đơn hàng:</Typography>
                  <Typography
                    variant="detailsText"
                    sx={{ fontSize: '14px', fontWeight: 'bold', pl: '10px' }}
                  >
                    {donHang._id}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: '5%' }}>
                <Box sx={{ width: '60%' }}>
                  <Typography variant="detailsText">Công Trình:</Typography>
                  <Typography
                    variant="detailsText"
                    sx={{ fontSize: '14px', fontWeight: 'bold', pl: '10px' }}
                  >
                    {donHang.customer_info.build_name}
                  </Typography>
                </Box>
                <Box sx={{ width: '35%' }}>
                  <Typography variant="detailsText">Sđt Khách Hàng:</Typography>
                  <Typography
                    variant="detailsText"
                    sx={{ fontSize: '14px', fontWeight: 'bold', pl: '10px' }}
                  >
                    {donHang.customer_info.phone}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="detailsText">Chú thích:</Typography>
                <Typography
                  variant="detailsText"
                  sx={{ fontSize: '14px', fontWeight: 'bold', pl: '10px' }}
                >
                  Khách Vip
                </Typography>
              </Box>

              {/* Table  */}
              <PriceForCustomerTable
                listItems={donHang.detailItems}
                id={'DL0001'}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PriceForCustomer;
