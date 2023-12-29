export const findViaIdDonHang = (id) => {
  return donHang.filter((dh) => dh._id === id)[0];
};

export const findDetailItemsVidId = (id) => {
  return findViaIdDonHang(id).detailItems;
};

const taoIdMoiChoDonHang = () => {
  return `DL${donHang.length + 1}`;
};

export function calcTotalGiaBanVidId(id) {
  let result = 0;
  const items = findDetailItemsVidId(id);
  if (items === undefined) return 0;
  items.forEach((item) => {
    result += item.thanhTienGiaBan(item.giaBan, item.soLuong);
  });
  return result;
}

export const donHang = [
  {
    _id: 'DL0001',
    name: 'Đơn Hàng Mẫu',
    customer_info: {
      name: 'Trương Nguyễn Anh Khoa',
      build_name: 'Công Trình ven biển',
      phone: '0796802399',
      address: '28, 14E Bình Hưng Hòa B, Bình Tân, TPHCM',
    },
    created_date: '28/12/2023',
    created_time: '15:54',
    giaoHang_date: '29/12/2023',
    giaohang_time: '14:00',
    thanhToan: true,
    thanhToan_date: '29/12/2023',
    thanhToan_time: '16:00',
    detailItems: [
      {
        name: 'GẠCH 60*60 LÓT NỀN',
        donVi: 'MÉT',
        soLuong: 1000.12,
        donGia: 100000,
        giaNhap: 80000,
        giaBan: 120000,
        thanhTienGiaNhap: (giaNhap, soLuong) => giaNhap * soLuong,
        thanhTienGiaBan: (giaBan, soLuong) => giaBan * soLuong,
        tienLoi: (thanhTienGiaBan, thanhTienGiaNhap) =>
          thanhTienGiaBan - thanhTienGiaNhap,
        note: '',
      },
    ],
  },
];

export const donHangMoi = {
  _id: taoIdMoiChoDonHang(),
  name: '',
  customer_info: {
    name: '',
    build_name: '',
    phone: '',
    address: '',
  },
  created_date: '',
  created_time: '',
  giaoHang_date: '',
  giaohang_time: '',
  thanhToan: true,
  thanhToan_date: '',
  thanhToan_time: '',
  detailItems: [
    {
      name: '',
      donVi: '',
      soLuong: 0,
      donGia: 0,
      giaNhap: 0,
      giaBan: 0,
      thanhTienGiaNhap: (giaNhap, soLuong) => giaNhap * soLuong,
      thanhTienGiaBan: (giaBan, soLuong) => giaBan * soLuong,
      tienLoi: (thanhTienGiaBan, thanhTienGiaNhap) =>
        thanhTienGiaBan - thanhTienGiaNhap,
      note: '',
    },
  ],
};
