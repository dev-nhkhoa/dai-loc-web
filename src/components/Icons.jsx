import { SvgIcon } from '@mui/material';

// eslint-disable-next-line react/prop-types
const Icons = ({ icon, size }) => {
  return <SvgIcon component={icon} inheritViewBox fontSize={size} />;
};

export default Icons;
