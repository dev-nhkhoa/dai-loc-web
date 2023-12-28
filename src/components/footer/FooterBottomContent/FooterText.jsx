import { Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const FooterText = ({ title, props }) => {
  return (
    <Typography
      sx={{ color: 'primary.secondaryColor', fontSize: '12px', ...props }}
    >
      {title}
    </Typography>
  );
};

export default FooterText;
