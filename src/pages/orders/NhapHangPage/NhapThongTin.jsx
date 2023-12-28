import Box from '@mui/material/Box';
import { FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(
  ({ theme, width, textColor, borderColor }) => ({
    '& .MuiInputBase-input': {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: 'primary.bg',
      fontSize: '12px',
      width: width,
      transition: theme.transitions.create(['border-color', 'border']),
      '&:focus': {
        border: '1px solid',
        borderColor: borderColor,
      },
    },
    '& input': { color: textColor, textAlign: 'center' },
  })
);

// eslint-disable-next-line react/prop-types
const NhapThongTin = ({ width, textColor, borderColor, dfValue, id }) => {
  return (
    <Box sx={{}}>
      <FormControl variant="standard" sx={{ mt: '1px' }}>
        <BootstrapInput
          defaultValue={dfValue ? dfValue : ''}
          id={id}
          width={width ? width : 'auto'}
          textColor={textColor ? textColor : '#fff'}
          borderColor={borderColor ? borderColor : '#fff'}
        />
      </FormControl>
    </Box>
  );
};

export default NhapThongTin;
