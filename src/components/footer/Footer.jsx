import { Box, SvgIcon, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Text from '../Text';
import Divider from '../Divider';
import SvgFacebook from 'damocloids-library/media/SvgIcons/SvgFacebook';
import SvgTiktok from 'damocloids-library/media/SvgIcons/SvgTiktok';
import SvgYoutube from 'damocloids-library/media/SvgIcons/SvgYoutube';
import SvgInstagram from 'damocloids-library/media/SvgIcons/SvgInstagram';

const Footer = () => {
  return (
    <Box sx={{}}>
      <Box
        component="footer"
        sx={{ backgroundColor: 'primary.bg', p: '20px 20px' }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: { md: 'left', sm: 'center', xs: 'center' },
            alignContent: 'center',
            pb: '10px',
          }}
        >
          <Grid item>
            <Text
              name={'ĐẠI LỘC'}
              props={{
                color: 'primary.color',
              }}
            />
          </Grid>
          <Grid item>
            <Text
              name={'TRANG TRÍ NỘI THẤT'}
              props={{ color: 'primary.color' }}
            />
          </Grid>
          <Grid item>
            <Text name={'CÔNG TRÌNH'} props={{ color: 'primary.color' }} />
          </Grid>
          <Grid item>
            <Text name={'TUYỂN DỤNG'} props={{ color: 'primary.color' }} />
          </Grid>
          <Grid item>
            <Text name={'LIÊN HỆ'} props={{ color: 'primary.color' }} />
          </Grid>
        </Grid>
        <Divider />

        {/* Information of Dai loc  */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: {
              lg: 'space-between',
              sm: 'space-between',
              xs: 'center',
            },
            pt: '10px',
            flexDirection: { lg: 'row', sm: 'row', xs: 'column' },
            gap: { lg: 3, md: 1, xs: 1 },
          }}
        >
          <Typography
            sx={{
              color: 'primary.secondaryColor',
              fontSize: '12px',
              textAlign: 'center',
            }}
          >
            Copyright © 2023 Dai Loc Interior Design. All Rights Reserved.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              flexDirection: { lg: 'row', md: 'column', xs: 'column' },
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{ color: 'primary.secondaryColor', fontSize: '12px' }}
            >
              Follow Us On
            </Typography>
            <Box sx={{ gap: 1, display: 'flex' }}>
              <SvgIcon
                component={SvgFacebook}
                inheritViewBox
                fontSize="medium"
              />
              <SvgIcon component={SvgTiktok} inheritViewBox fontSize="medium" />
              <SvgIcon
                component={SvgInstagram}
                inheritViewBox
                fontSize="medium"
              />
              <SvgIcon
                component={SvgYoutube}
                inheritViewBox
                fontSize="medium"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
