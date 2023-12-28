/* eslint-disable react/prop-types */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { calcTotalGiaBanVidId } from '~/lib/mock_data';

const calcChietKhau = (a, b) => {
  return `${Math.round(-(1 - a / b) * 100)}%`;
};

// eslint-disable-next-line react/prop-types
const PriceForCustomerTable = ({ listItems, id }) => {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: '100%', borderRadius: 0, pt: 3 }}
      >
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow
              sx={{
                '& .MuiTableCell-root': {
                  fontSize: 8,
                  padding: 0,
                  fontWeight: 'bold',
                  border: '1px solid #111',
                },
              }}
            >
              <TableCell align="center" size="small">
                STT
              </TableCell>
              <TableCell align="center">TÊN HÀNG HÓA</TableCell>
              <TableCell align="center">ĐƠN VỊ</TableCell>
              <TableCell align="center">SỐ LƯỢNG</TableCell>
              <TableCell align="center">ĐƠN GIÁ</TableCell>
              <TableCell align="center">CK</TableCell>
              <TableCell align="center">SAU CK</TableCell>
              <TableCell align="center">THÀNH TIỀN</TableCell>
              <TableCell align="center">GHI CHÚ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listItems.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '& .MuiTableCell-root': {
                    fontSize: 8,
                    paddingY: '5px',
                    fontWeight: 'bold',
                    border: '1px solid #111',
                  },
                }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center">{row.donVi}</TableCell>
                <TableCell align="center">
                  {parseFloat(row.soLuong).toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  {parseFloat(row.donGia).toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  {calcChietKhau(row.giaBan, row.donGia)}
                </TableCell>
                <TableCell align="center">
                  {parseFloat(row.giaBan).toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  {parseFloat(
                    row.thanhTienGiaBan(row.giaBan, row.soLuong)
                  ).toLocaleString()}
                </TableCell>
                <TableCell align="center">{row.note}</TableCell>
              </TableRow>
            ))}
            <TableRow
              sx={{
                '& .MuiTableCell-root': {
                  fontSize: 10,
                  paddingY: 1,
                  fontWeight: 'bold',
                  color: 'red',
                },
              }}
            >
              <TableCell colSpan={7}>TỔNG CỘNG:</TableCell>
              <TableCell colSpan={1} align="left">
                {parseFloat(calcTotalGiaBanVidId(id)).toLocaleString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PriceForCustomerTable;
