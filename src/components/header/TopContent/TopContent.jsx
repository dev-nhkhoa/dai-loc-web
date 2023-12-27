import { Box, SvgIcon, Typography } from '@mui/material';
import '@fontsource/montserrat/300.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import SvgUsFlag from 'damocloids-library/media/SvgIcons/SvgUsFlag';
import SvgVnFlag from 'damocloids-library/media/SvgIcons/SvgVnFlag';

const TopContent = () => {
  const isShowHotlineAndLang = useMediaQuery((theme) =>
    theme.breakpoints.up('lg')
  );

  const HEADER_STYLE = {
    fontFamily: 'montserrat',
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
        backgroundColor: 'primary.bg',
        color: 'primary.color',
        p: '10px 20px',
      }}
    >
      <Typography
        sx={{
          color: 'primary.color',
          display: 'flex',
          gap: 2,
          textAlign: { xs: 'left', md: 'center' },
        }}
      >
        <Typography variant="detailsText" sx={HEADER_STYLE}>
          ĐẠI LỘC INTERIOR DECOR
        </Typography>
        <Typography
          variant="detailsText"
          sx={{ fontWeight: '900', color: '#666' }}
        >
          |
        </Typography>
        <Typography
          variant="detailsText"
          sx={{
            fontFamily: 'montserrat',
            fontWeight: 'light',
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
              color: 'primary.color',
              transition: 'color 200ms ease-in-out',
            },
            color: 'primary.secondaryColor',
          }}
        >
          ONLINE STORE
        </Typography>
      </Typography>
      {isShowHotlineAndLang && (
        <Box sx={BOX_HEADER_STYLE}>
          <Typography variant="detailsText" sx={HEADER_STYLE}>
            HOTLINE: 0932 841 842
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
            <SvgIcon component={SvgUsFlag} inheritViewBox fontSize="small" />
            ENG
          </Typography>
          <Typography
            variant="detailsText"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontFamily: 'montserrat',
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            <SvgIcon component={SvgVnFlag} inheritViewBox fontSize="small" />
            VIE
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TopContent;
