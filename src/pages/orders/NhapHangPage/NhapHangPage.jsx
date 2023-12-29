import NhapHangTable from './NhapHangTable';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { donHang as MockDonHang, donHangMoi } from '~/lib/mock_data';
import SimpleDialogDemo from './DialogChinhSuaDonHang';
import React from 'react';

const NhapHangPage = () => {
  const [donHang, setDonHang] = React.useState(MockDonHang);
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
        <Button
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            setDonHang([...donHang, donHangMoi]);
          }}
        >
          Đơn hàng mới
        </Button>
        {/* làm một input để tìm kiếm theo tên công trình, mã đơn hàng, tên KH hoặc tên mình tự đặt. Tạo thêm nameDonHang trong mock_data (làm sau vì khó)*/}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Khi nhấn, hiện bảng full các đơn để user chọn. Khi chọn xong sẽ đổ data vào bảng */}
          <SimpleDialogDemo donHang={donHang} />
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
