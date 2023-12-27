import { Box } from '@mui/material';

const Divider = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          width: `calc(100% - 40px)`,
          borderTop: '1px solid #666 ',
        }}
      />
    </Box>
  );
};

export default Divider;
