import { Box, Typography } from '@mui/material';
import Text from './Text';
import SearchIcon from '@mui/icons-material/Search';

const BottomContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: 2,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
        p: '10px 5px',
      }}
    >
      <Typography
        sx={{
          fontSize: '20.5px',
          fontFamily: 'montserrat',
          color: '#fff',
          cursor: 'pointer',
          letterSpacing: '8px',
        }}
      >
        ĐẠI LỘC
      </Typography>
      <Text name={'GIỚI THIỆU'} />
      <Text name={'TRANG TRÍ NỘI THẤT'} />
      <Text name={'CÔNG TRÌNH'} />
      <Text name={'NỘI THẤT'} />
      <Text name={'CỬA HÀNG'} />
      <Text name={'LIÊN HỆ'} />
      <SearchIcon sx={{ color: '#fff' }} />
    </Box>
  );
};

export default BottomContent;
