import { Box, Typography } from '@mui/material'
import { MESSAGE } from '../../language'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline'

const Header = () => {
  return (
    <Box sx={{ backgroundColor: '#000', display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '5px 10px' }}>
      <ViewHeadlineIcon fontSize='large' sx={{ color: '#fff' }} />
      <Typography variant='mainText' color='#fff' sx={{ fontWeight: '500' }}>
        {MESSAGE.name.toUpperCase()}
      </Typography>
    </Box>
  )
}

export default Header
