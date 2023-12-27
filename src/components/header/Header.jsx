import '@fontsource/montserrat/500.css';
import BottomContent from './BottomContent/BottomContent';
import TopContent from './TopContent/TopContent';
import { Box } from '@mui/material';
import Divider from '../Divider';

const Header = () => {
  return (
    <Box>
      <TopContent />
      <Divider />
      <BottomContent />
    </Box>
  );
};

export default Header;
