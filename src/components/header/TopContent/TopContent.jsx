import { Box, SvgIcon, Typography } from '@mui/material';
import '@fontsource/montserrat/300.css';
import SvgUs from '../../../assets/logo/SvgUs';
import SvgVn from '../../../assets/logo/SvgVn';
import useMediaQuery from '@mui/material/useMediaQuery';

const TopContent = () => {
  const isShowHotlineAndLang = useMediaQuery((theme) =>
    theme.breakpoints.up('lg')
  );

  const HEADER_STYLE = {
    fontFamily: 'montserrat',
    fontSize: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': { textDecoration: 'underline' },
  };

  const BOX_HEADER_STYLE = { display: 'flex', gap: 2 };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { lg: 'space-between', md: 'center', xs: 'end' },
        width: '100vw',
        backgroundColor: '#111',
        color: '#fff',
        p: '10px 20px',
      }}
    >
      <Typography
        sx={{
          color: '#fff',
          display: 'flex',
          gap: 2,
          textAlign: { xs: 'left', md: 'center' },
        }}
      >
        <Typography sx={HEADER_STYLE}>ĐẠI LỘC INTERIOR DECOR</Typography>
        <Typography sx={{ fontSize: '12px', fontWeight: '900', color: '#666' }}>
          |
        </Typography>
        <Typography
          sx={{
            fontFamily: 'montserrat',
            fontSize: '12px',
            fontWeight: 'light',
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
              color: '#fff',
              transition: 'color 200ms ease-in-out',
            },
            color: '#666',
          }}
        >
          ONLINE STORE
        </Typography>
      </Typography>
      {isShowHotlineAndLang && (
        <Box sx={BOX_HEADER_STYLE}>
          <Typography sx={HEADER_STYLE}>HOTLINE: 0932 841 842</Typography>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '12px',
              gap: 1,
              fontFamily: 'montserrat',
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            <SvgIcon component={SvgUs} inheritViewBox fontSize="small" />
            ENG
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '12px',
              gap: 1,
              fontFamily: 'montserrat',
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            <SvgIcon component={SvgVn} inheritViewBox fontSize="small" />
            VIE
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TopContent;
