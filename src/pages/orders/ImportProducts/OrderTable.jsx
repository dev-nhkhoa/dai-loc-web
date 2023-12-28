import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputField from './InputField';
import { Button, Tooltip, Typography } from '@mui/material';
import React from 'react';

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
// 1. REFACTOR CODE
// 2. XỬ LÝ LOGIC
// eslint-disable-next-line no-unused-vars
function createRow(name, unit, qty, price, note) {
  const priceByQty = qty * price;
  return { name, unit, qty, price, priceByQty, note };
}

const OrderTable = () => {
  const [rows, setRow] = React.useState([]);

  const handleAddRowClicked = () => {
    setRow([...rows, {}]);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 'xl', borderRadius: '26px' }}
      >
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="center">TÊN HÀNG HÓA</TableCell>
              <TableCell align="center">ĐƠN VỊ</TableCell>
              <TableCell align="center">SỐ LƯỢNG</TableCell>
              <TableCell align="center">ĐƠN GIÁ</TableCell>
              <TableCell align="center">THÀNH TIỀN</TableCell>
              <TableCell align="center">GHI CHÚ</TableCell>
              <TableCell align="center">THAO TÁC</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.desc}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">
                  <InputField
                    width={400}
                    textColor={'primary.bg'}
                    borderColor={'primary.bg'}
                    dfValue={row.name}
                    id={`name-${index}`}
                  />
                </TableCell>
                <TableCell align="center">
                  <InputField
                    width={80}
                    textColor={'primary.bg'}
                    borderColor={'primary.bg'}
                    dfValue={row.unit}
                    id={`unit-${index}`}
                  />
                </TableCell>
                <TableCell align="center">
                  <InputField
                    width={50}
                    textColor={'primary.bg'}
                    borderColor={'primary.bg'}
                    dfValue={row.qty}
                    id={`qty-${index}`}
                  />
                </TableCell>
                <TableCell align="center">
                  <InputField
                    width={100}
                    textColor={'primary.bg'}
                    borderColor={'primary.bg'}
                    dfValue={row.price}
                    id={`price-${index}`}
                  />
                </TableCell>
                <TableCell align="center">
                  <InputField
                    width={100}
                    textColor={'primary.bg'}
                    borderColor={'primary.bg'}
                    dfValue={row.priceByQty}
                    id={`priceByQty-${index}`}
                  />
                </TableCell>
                <TableCell align="center">
                  <InputField
                    width={130}
                    textColor={'primary.bg'}
                    borderColor={'primary.bg'}
                    dfValue={row.note}
                    id={`note-${index}`}
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
              <TableCell colSpan={5}>Tổng cộng</TableCell>
              <TableCell align="center">{0.0}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        onClick={() => handleAddRowClicked()}
        sx={{
          width: 1200,
          height: '58px',
          borderRadius: '26px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'primary.secondaryColor',
          color: 'primary.color',
          cursor: 'pointer',
          fontSize: '22.5px',
        }}
      >
        <Typography variant="mainText">ADD THÊM DÒNG MỚI</Typography>
      </Button>
    </>
  );
};

export default OrderTable;
