import { Box, Typography } from '@mui/material';
import { DAI_LOC } from '~/lib/dai_loc_information';

// eslint-disable-next-line react/prop-types
const GioiThieuTitle = ({ name, fontSize }) => {
  return (
    <Typography
      color="primary.color"
      sx={{ fontSize: { fontSize }, fontWeight: 'bold' }}
    >
      {name}
    </Typography>
  );
};

const GioiThieu = () => {
  return (
    <Box sx={{ backgroundColor: '#000', py: '100px' }}>
      <Box
        sx={{
          fontFamily: 'montserrat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: '80px',
        }}
      >
        <GioiThieuTitle name="GIỚI THIỆU" fontSize="16px" />
        <GioiThieuTitle name="CỬA HÀNG" fontSize="52px" />

        <Box sx={{ display: 'flex' }}>
          <Typography
            variant="detailsText"
            color="primary.color"
            sx={{
              columnCount: { lg: 3, sm: 2, xs: 1 },
              columnGap: '80px',
              columnWidth: '50px',
              lineHeight: '45px',
              fontFamily: 'montserrat',
            }}
          >
            {DAI_LOC.gioi_thieu.title}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: { lg: '40%', xs: '90%' },
          pl: '80px',
          pt: '100px',
        }}
      >
        <Typography
          color="primary.color"
          sx={{ fontSize: '30px', fontWeight: 'bold' }}
        >
          {DAI_LOC.gioi_thieu.uy_tin_title}
        </Typography>
        <Typography variant="detailsText" color="primary.color">
          {DAI_LOC.gioi_thieu.uy_tin_body}
        </Typography>
      </Box>
    </Box>
  );
};

export default GioiThieu;
