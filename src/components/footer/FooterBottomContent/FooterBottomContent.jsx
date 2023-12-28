import SvgFacebook from 'damocloids-library/media/SvgIcons/SvgFacebook';
import SvgTiktok from 'damocloids-library/media/SvgIcons/SvgTiktok';
import SvgYoutube from 'damocloids-library/media/SvgIcons/SvgYoutube';
import SvgInstagram from 'damocloids-library/media/SvgIcons/SvgInstagram';
import Icons from '~/components/Icons';
import FooterText from './FooterText';
import { Box } from '@mui/material';

const FooterBottomContent = () => {
  return (
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
      <FooterText
        title={'Copyright © 2023 Dai Loc Interior Design. All Rights Reserved.'}
        props={{ textAlign: 'center' }}
      />
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexDirection: { lg: 'row', md: 'column', xs: 'column' },
          alignItems: 'center',
        }}
      >
        <FooterText title={'Follow Us On'} />
        <Box sx={{ gap: 1, display: 'flex' }}>
          <Icons icon={SvgFacebook} size={'medium'} />
          <Icons icon={SvgTiktok} size={'medium'} />
          <Icons icon={SvgInstagram} size={'medium'} />
          <Icons icon={SvgYoutube} size={'medium'} />
        </Box>
      </Box>
    </Box>
  );
};

export default FooterBottomContent;
