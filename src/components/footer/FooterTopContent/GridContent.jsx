import { Grid } from '@mui/material';
import Text from '../../Text';

// eslint-disable-next-line react/prop-types
const GridContent = ({ name }) => {
  return (
    <Grid item>
      <Text name={name} props={{ color: 'primary.color' }} />
    </Grid>
  );
};

export default GridContent;
