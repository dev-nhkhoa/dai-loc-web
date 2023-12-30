import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Text = ({ name, link, props }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <Typography
        variant="mainText"
        sx={{
          fontSize: {
            xl: '28px',
            xs: '20.5px',
          },
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
    </Link>
  );
};

export default Text;
