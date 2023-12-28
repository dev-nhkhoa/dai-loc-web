import NhapHangTable from './NhapHangTable';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
// import styled from '@emotion/styled';
// import { alpha } from '@mui/material';
import { Button } from '@mui/material';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   width: '100%',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

const NhapHangPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          color: 'primary.color',
          py: 3,
          px: 30,
        }}
      >
        <Button sx={{ cursor: 'pointer' }}>Đơn hàng mới</Button>
        {/* làm một input để tìm kiếm theo tên công trình, mã đơn hàng, tên KH hoặc tên mình tự đặt. Tạo thêm nameDonHang trong mock_data (làm sau vì khó)*/}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Khi nhấn, hiện bảng full các đơn để user chọn. Khi chọn xong sẽ đổ data vào bảng */}
          <Button>Chỉnh sửa đơn cũ</Button>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Mã đơn hàng, tên KH, ngày,..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Box>

        {/* 
      - phía dưới là table hiển thị data của đơn hàng gần nhất, nếu chưa có đơn hàng nào thì hiển thị bảng trống. 
      - Khi user nhập tìm kiếm đơn hàng thì sẽ check xem bảng hiện tại có data hay không, nếu có thì hiện thông báo để tránh bị mất data.
      - Nút lưu đơn hàng là cần thiết
      - Xử lí logic: 
          + viết hàm tìm kiếm theo tên, mã ĐH, tên KH, tên tự đặt, theo ngày.
          + Nhấn enter sẽ tìm hoặc nhấn icon search
          + Tạo một mock đơn hàng, khi nhập thông tin xong trong input, user thoát input hoặc nhấn enter sẽ được lưu tạm vào mock, như vậy sẽ không bị mất data khi chuyển qua đơn cũ. nếu thoát về /home mà không lưu đơn hàng thì sẽ xóa mock đi
       */}
      </Box>
      <NhapHangTable />
    </Box>
  );
};

export default NhapHangPage;
