import { Box } from '@mui/material';
import Divider from '../Divider';
import FooterTopContent from './FooterTopContent/FooterTopContent';
import FooterBottomContent from './FooterBottomContent/FooterBottomContent';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.bg', p: '20px 20px' }}>
      <FooterTopContent />
      <Divider />
      <FooterBottomContent />
    </Box>
  );
};

export default Footer;
