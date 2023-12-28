import { Box, Typography } from '@mui/material';
import InputField from './InputField';

// eslint-disable-next-line react/prop-types
const CustomerInfo = ({ title, width }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box>
        <Typography variant="detailsText" color="primary.color" sx={{ pt: 2 }}>
          {title}
        </Typography>
      </Box>
      <InputField width={width} />
    </Box>
  );
};

export default CustomerInfo;
