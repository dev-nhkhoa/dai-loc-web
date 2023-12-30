import { Box, Typography, useMediaQuery } from '@mui/material';
import Text from '../../Text';
import SearchIcon from '@mui/icons-material/Search';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const HeaderBottomContent = () => {
  const isShowTexts = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: 2,
        backgroundColor: 'primary.bg',
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
        variant="mainText"
        sx={{
          fontFamily: 'montserrat',
          color: 'primary.color',
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
          <Text name={'GIỚI THIỆU'} link={'/gioi-thieu'} />
          <Text name={'TRANG TRÍ NỘI THẤT'} />
          <Text name={'CÔNG TRÌNH'} />
          <Text name={'NỘI THẤT'} />
          <Text name={'CỬA HÀNG'} />
          <Text name={'LIÊN HỆ'} />
        </Box>
      )}
      <SearchIcon sx={{ color: 'primary.color' }} />
    </Box>
  );
};

export default HeaderBottomContent;
