import { Box, Typography, useMediaQuery } from '@mui/material';
import Text from './Text';
import SearchIcon from '@mui/icons-material/Search';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const BottomContent = () => {
  const isShowTexts = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: 2,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: {
          lg: 'center',
          md: 'space-between',
          xs: 'space-between',
        },
        p: '10px 20px',
      }}
    >
      <Typography
        sx={{
          fontSize: '20.5px',
          fontFamily: 'montserrat',
          color: '#fff',
          cursor: 'pointer',
          letterSpacing: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {!isShowTexts && <MenuRoundedIcon fontSize="large" />}
        ĐẠI LỘC
      </Typography>
      {isShowTexts && (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Text name={'GIỚI THIỆU'} />
          <Text name={'TRANG TRÍ NỘI THẤT'} />
          <Text name={'CÔNG TRÌNH'} />
          <Text name={'NỘI THẤT'} />
          <Text name={'CỬA HÀNG'} />
          <Text name={'LIÊN HỆ'} />
        </Box>
      )}
      <SearchIcon sx={{ color: '#fff' }} />
    </Box>
  );
};

export default BottomContent;
