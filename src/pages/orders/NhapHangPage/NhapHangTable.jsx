import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import React from 'react';
import NhapThongTin from './NhapThongTin';

/**
 *
 * @param {*} name tên sản phẩm
 * @param {*} qty số lượng sản phẩm
 * @param {*} unit đơn vị sản phẩm
 * @param {*} price giá tiền sản phẩm
 * @param {*} note ghi chú sản phẩm
 * @returns trả về 1 object kèm theo tính toán tổng giá tiền từ giá sản phẩm * số lượng sản phẩm
 */

// TODO:
// eslint-disable-next-line no-unused-vars
function createRow(name, unit, qty, price, note) {
  const priceByQty = qty * price;
  return { name, unit, qty, price, priceByQty, note };
}

const NhapHangTable = () => {
  const [rows, setRow] = React.useState([]);

  const handleAddRowClicked = () => {
    setRow([...rows, {}]);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 3,
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '80%', color: '#fff' }}>
        <Box sx={{ display: 'flex', gap: '5%' }}>
          <Box
            sx={{ width: '60%', display: 'flex', alignItems: 'center', gap: 3 }}
          >
            <Typography variant="detailsText">Tên khách hàng:</Typography>
            <NhapThongTin id={'ten-khach-hang'} />
          </Box>
          <Box
            sx={{ width: '35%', display: 'flex', alignItems: 'center', gap: 3 }}
          >
            <Typography variant="detailsText">Mã đơn hàng:</Typography>
            <NhapThongTin id={'ma-don-hang'} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '5%' }}>
          <Box
            sx={{ width: '60%', display: 'flex', alignItems: 'center', gap: 3 }}
          >
            <Typography variant="detailsText">Địa Chỉ Công Trình:</Typography>
            <NhapThongTin id={'dia-chi-cong-trinh'} />
          </Box>
          <Box
            sx={{ width: '35%', display: 'flex', alignItems: 'center', gap: 3 }}
          >
            <Typography variant="detailsText">SĐT Khách Hàng:</Typography>
            <NhapThongTin id={'sdt-khach-hang'} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography variant="detailsText">Chú thích:</Typography>
          <NhapThongTin id={'chu-thich'} />
        </Box>
      </Box>
      <Box sx={{ overflow: 'auto', maxWidth: '100%', maxHeight: '50vh' }}>
        <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
          <Table aria-label="spanning table">
            <TableHead>
              <TableRow
                sx={{
                  '& .MuiTableCell-root': {
                    fontSize: 8,
                    padding: 1,
                    maxHeight: '10px',
                    fontWeight: 'bold',
                    border: '1px solid #111',
                  },
                }}
              >
                <TableCell align="center">STT</TableCell>
                <TableCell align="center">TÊN HÀNG HÓA</TableCell>
                <TableCell align="center">ĐƠN VỊ</TableCell>
                <TableCell align="center">SỐ LƯỢNG</TableCell>
                <TableCell align="center">ĐƠN GIÁ</TableCell>
                <TableCell align="center">GIÁ NHẬP</TableCell>
                <TableCell align="center">GIÁ BÁN</TableCell>
                <TableCell align="center">THÀNH TIỀN GIÁ NHẬP</TableCell>
                <TableCell align="center">THÀNH TIỀN GIÁ BÁN</TableCell>
                <TableCell align="center">LỢI NHUẬN</TableCell>
                <TableCell align="center">GHI CHÚ</TableCell>
                <TableCell align="center">THAO TÁC</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '& .MuiTableCell-root': {
                      fontSize: 8,
                      padding: 0,
                      maxHeight: '10px',
                      fontWeight: 'bold',
                      border: '1px solid #111',
                    },
                  }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">
                    <NhapThongTin
                      width={300}
                      textColor={'primary.bg'}
                      borderColor={'primary.bg'}
                      dfValue={row.name}
                      id={`name-${index}`}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <NhapThongTin
                      width={50}
                      textColor={'primary.bg'}
                      borderColor={'primary.bg'}
                      dfValue={row.donVi}
                      id={`don-vi-${index}`}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <NhapThongTin
                      width={50}
                      textColor={'primary.bg'}
                      borderColor={'primary.bg'}
                      dfValue={row.soLuong}
                      id={`so-luong-${index}`}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <NhapThongTin
                      width={100}
                      textColor={'primary.bg'}
                      borderColor={'primary.bg'}
                      dfValue={row.donGia}
                      id={`don-gia-${index}`}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <NhapThongTin
                      width={100}
                      textColor={'primary.bg'}
                      borderColor={'primary.bg'}
                      dfValue={row.giaNhap}
                      id={`gia-nhap-${index}`}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <NhapThongTin
                      width={100}
                      textColor={'primary.bg'}
                      borderColor={'primary.bg'}
                      dfValue={row.giaBan}
                      id={`gia-ban-${index}`}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <NhapThongTin
                      width={100}
                      textColor={'primary.bg'}
                      borderColor={'primary.bg'}
                      dfValue={row.thanhTienGiaNhap}
                      id={`thanh-tien-gia-nhap-${index}`}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <NhapThongTin
                      width={100}
                      textColor={'primary.bg'}
                      borderColor={'primary.bg'}
                      dfValue={row.thanhTienGiaBan}
                      id={`thanh-tien-gia-ban-${index}`}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <NhapThongTin
                      width={100}
                      textColor={'primary.bg'}
                      borderColor={'primary.bg'}
                      dfValue={row.loiNhuan}
                      id={`loi-nhuan-${index}`}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <NhapThongTin
                      width={150}
                      textColor={'primary.bg'}
                      borderColor={'primary.bg'}
                      dfValue={row.ghiChu}
                      id={`ghi-chu-${index}`}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Kéo thả dòng">
                      <DragHandleRoundedIcon
                        fontSize="large"
                        sx={{
                          color: 'primary.secondaryColor',
                          cursor: 'pointer',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Xóa dòng">
                      <DeleteForeverRoundedIcon
                        fontSize="large"
                        sx={{
                          color: 'primary.secondaryColor',
                          cursor: 'pointer',
                        }}
                      />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={5}>TỔNG NHẬP HÀNG</TableCell>
                <TableCell colSpan={3} align="right">
                  {0.0}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={5}>TỔNG BÁN HÀNG</TableCell>
                <TableCell colSpan={4} align="right">
                  {0.0}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={5}>TỔNG LỢI NHUẬN</TableCell>
                <TableCell colSpan={5} align="right">
                  {0.0}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          px: 3,
        }}
      >
        <Button
          onClick={() => handleAddRowClicked()}
          sx={{
            width: 200,
            height: '38px',
            borderRadius: '26px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.secondaryColor',
            color: 'primary.color',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          <Typography variant="detailText">ADD THÊM DÒNG MỚI</Typography>
        </Button>

        <Button
          onClick={() => {}}
          sx={{
            width: 200,
            height: '38px',
            borderRadius: '26px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.secondaryColor',
            color: 'primary.color',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          <Typography variant="detailText">LƯU ĐƠN HÀNG</Typography>
        </Button>

        <Button
          onClick={() => {}}
          sx={{
            width: 200,
            height: '38px',
            borderRadius: '26px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.secondaryColor',
            color: 'primary.color',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          <Typography variant="detailText">XEM TRƯỚC PHIẾU BÁO GIÁ</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default NhapHangTable;
