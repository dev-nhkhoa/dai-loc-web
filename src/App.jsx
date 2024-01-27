import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'

const App = () => {
  return (
    <Box sx={{ maxWidth: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: { sm: '600px', sx: '350px' }, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
