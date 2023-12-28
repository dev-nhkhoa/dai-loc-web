import '@fontsource/montserrat/500.css';
import HeaderBottomContent from './HeaderBottomContent/HeaderBottomContent';
import HeaderTopContent from './HeaderTopContent/HeaderTopContent';
import { Box } from '@mui/material';
import Divider from '../Divider';

const Header = () => {
  return (
    <Box>
      <HeaderTopContent />
      <Divider />
      <HeaderBottomContent />
    </Box>
  );
};

export default Header;
