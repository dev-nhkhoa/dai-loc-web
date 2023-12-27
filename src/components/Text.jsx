import { Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const Text = ({ name, props }) => {
  return (
    <Typography
      variant="mainText"
      sx={{
        fontSize: { lg: '22.5px', md: '17.5px', sm: '14.5px', xs: '13.5px' },
        fontFamily: 'montserrat',
        color: 'primary.secondaryColor',
        cursor: 'pointer',
        '&:hover': {
          textDecoration: 'none',
          color: 'primary.color',
          transition: 'color 200ms ease-in-out',
        },
        ...props,
      }}
    >
      {name}
    </Typography>
  );
};

export default Text;
