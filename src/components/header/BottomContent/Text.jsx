import { Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const Text = ({ name }) => {
  return (
    <Typography
      sx={{
        fontSize: '17.5px',
        fontFamily: 'montserrat',
        color: '#999999',
        cursor: 'pointer',
        '&:hover': {
          textDecoration: 'none',
          color: '#fff',
          transition: 'color 200ms ease-in-out',
        },
      }}
    >
      {name}
    </Typography>
  );
};

export default Text;
