import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { donHang } from '~/lib/mock_data';
import { Typography } from '@mui/material';

function SimpleDialog(props) {
  const { onClose, idDonHang, open } = props;

  const handleClose = () => {
    onClose(idDonHang);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Vui lòng chọn đơn hàng</DialogTitle>
      <List sx={{ pt: 0 }}>
        {donHang.map((dh, index) => (
          <ListItem disableGutters key={index}>
            <ListItemButton onClick={() => handleListItemClick(dh._id)}>
              <ListItemText primary={`${dh._id} - ${dh.name}`} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => onClose('')}>
            <ListItemText
              primary="THOÁT KHỎI TRANG"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bold',
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  idDonHang: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [idDonHang, setIdDonHang] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setIdDonHang(value);
  };

  return (
    <div>
      <Typography>{idDonHang}</Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        Chỉnh sửa đơn cũ
      </Button>
      <SimpleDialog idDonHang={idDonHang} open={open} onClose={handleClose} />
    </div>
  );
}
