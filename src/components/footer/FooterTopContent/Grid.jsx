import GridContent from './GridContent';
import { Grid as MuiGrid } from '@mui/material';

const Grid = () => {
  return (
    <MuiGrid
      container
      spacing={3}
      sx={{
        justifyContent: { md: 'left', sm: 'center', xs: 'center' },
        alignContent: 'center',
        pb: '10px',
      }}
    >
      <GridContent name={'ĐẠI LỘC'} />
      <GridContent name={'TRANG TRÍ NỘI THẤT'} />
      <GridContent name={'CÔNG TRÌNH'} />
      <GridContent name={'TUYỂN DỤNG'} />
      <GridContent name={'LIÊN HỆ'} />
    </MuiGrid>
  );
};

export default Grid;
