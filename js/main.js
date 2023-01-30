var song = document.querySelector(".playing-song");
/* Song list */
var prevSongList = [
  {
    song_name: "Đừng Lo Nhé! Có Anh Đây",
    singer: ["Thiên Tú"],
    song_img: "./assets/Images/Playlist/1.webp",
    src: "./assets/Songs/Main_Song/song_1.mp3",
  },
  {
    song_name: "Trót Trao Duyên",
    singer: ["NB3 Hoài Bão", "CT"],
    song_img: "./assets/Images/Playlist/2.webp",
    src: "./assets/Songs/Main_Song/song_2.mp3",
  },
];

var nextSongList = [
  {
    song_name: "Anh Chưa Nghĩ Tới",
    singer: ["Phan Duy Anh", "ACV"],
    song_img: "./assets/Images/Playlist/3.webp",
    src: "./assets/Songs/Main_Song/song_3.mp3",
  },
  {
    song_name: "Lỡ Duyên Kiếp Này, Liệu Có Kiếp Sau",
    singer: ["Khả Hiệp", "ACV"],
    song_img: "./assets/Images/Playlist/4.webp",
    src: "./assets/Songs/Main_Song/song_4.mp3",
  },
  {
    song_name: "Sao Cũng Được",
    singer: ["Thành Đạt"],
    song_img: "./assets/Images/Playlist/5.webp",
    src: "./assets/Songs/Main_Song/song_5.mp3",
  },
  {
    song_name: "Con Hứa Sẽ Về",
    singer: ["Lê Bảo Bình"],
    song_img: "./assets/Images/Playlist/6.webp",
    src: "./assets/Songs/Main_Song/song_6.mp3",
  },
  {
    song_name: "Người Thương Em Đây Mà",
    singer: ["Đinh Kiến Phong"],
    song_img: "./assets/Images/Playlist/7.webp",
    src: "./assets/Songs/Main_Song/song_7.mp3",
  },
  {
    song_name: "Chịu Em Đi",
    singer: ["Tracy Thảo My", "YuniBoo"],
    song_img: "./assets/Images/Playlist/8.webp",
    src: "./assets/Songs/Main_Song/song_8.mp3",
  },
];

var personalSongList = [
  {
    song_name: "Thời Gian Sẽ Trả Lời",
    singer: ["Tiên Cookie", "JustaTee", "Big Daddy"],
    song_img: "./assets/Images/Personal_Song/1.webp",
    song_album: "Sau Tất Cả (Single)",
    src: "./assets/Songs/ThoiGianSeTraLoi.mp3",
    song_duration: "04:31",
  },
  {
    song_name: "Ngây Thơ (Ciray Remix)",
    singer: ["Tăng Duy Tăng", "Phong Max"],
    song_img: "./assets/Images/Personal_Song/2.webp",
    song_album: "",
    src: "./assets/Songs/NgayTho.mp3",
    song_duration: "03:51",
  },
  {
    song_name: "Thích Thích",
    singer: ["Phương Ly"],
    song_img: "./assets/Images/Personal_Song/3.webp",
    song_album: "ThichThich (Single)",
    src: "./assets/Songs/ThichThich.mp3",
    song_duration: "04:25",
  },
  {
    song_name: "Về",
    singer: ["Đạt G", "DuUyen", "BeeBB"],
    song_img: "./assets/Images/Personal_Song/4.webp",
    song_album: "Về (Single)",
    src: "./assets/Songs/Ve.mp3",
    song_duration: "05:24",
  },
  {
    song_name: "Đắm (Nhựt Trường Remix)",
    singer: ["Xesi", "Ricky Star"],
    song_img: "./assets/Images/Personal_Song/5.webp",
    song_album: "",
    src: "./assets/Songs/Dam.mp3",
    song_duration: "02:11",
  },
  {
    song_name: "Tình Ka Ngọt Ngào",
    singer: ["Lập Nguyên", "Yến Nồi Cơm Điện"],
    song_img: "./assets/Images/Personal_Song/6.webp",
    song_album: "Tình Ka Ngọt Ngào (Single)",
    src: "./assets/Songs/TinhKaNgotNgao.mp3",
    song_duration: "03:58",
  },
  {
    song_name: "Con Yêu Mẹ",
    singer: ["Bảo Thy"],
    song_img: "./assets/Images/Personal_Song/7.webp",
    song_album: "",
    src: "./assets/Songs/ConYeuMe.mp3",
    song_duration: "04:01",
  },
  {
    song_name: "Bên Trên Tầng Lầu (Zang Remix)",
    singer: ["Tăng Duy Tân"],
    song_img: "./assets/Images/Personal_Song/8.webp",
    song_album: "",
    src: "./assets/Songs/BenTrenTangLau.mp3",
    song_duration: "02:51",
  },
  {
    song_name: "Somewhere",
    singer: ["July"],
    song_img: "./assets/Images/Personal_Song/9.webp",
    song_album: "Somewhere",
    src: "./assets/Songs/Somewhere.mp3",
    song_duration: "03:30",
  },
  {
    song_name: "Umbrella (The White Panda Remix)",
    singer: ["Ember Island", "The White Panda"],
    song_img: "./assets/Images/Personal_Song/10.webp",
    song_album: "Umbrella (The White Panda Remix)",
    src: "./assets/Songs/TinhKaNgotNgao.mp3",
    song_duration: "03:58",
  },
  {
    song_name: "Nụ Cười 18 20",
    singer: ["Doãn Hiếu", "BMZ"],
    song_img: "./assets/Images/Personal_Song/11.webp",
    song_album: "Nụ Cười 18 20 (Single)",
    src: "./assets/Songs/NuCuoi1820.mp3",
    song_duration: "04:03",
  },
  {
    song_name: "Anh Đã Lạc Vào",
    singer: ["Green"],
    song_img: "./assets/Images/Personal_Song/12.webp",
    song_album: "Anh Đã Lạc Vào (Single)",
    src: "./assets/Songs/AnhDaLacVao.mp3",
    song_duration: "03:33",
  },
  {
    song_name: "Tell Ur Mom II (Curak Remix)",
    singer: ["Winno", "Heily", "CUKAK"],
    song_img: "./assets/Images/Personal_Song/13.webp",
    song_album: "Tell Ur Mom II (Cukak Remix) (Single)",
    src: "./assets/Songs/TellYourMom2.mp3",
    song_duration: "04:11",
  },
  {
    song_name: "Tương Tư Thành Họa",
    singer: ["Trịnh Diệc Thần"],
    song_img: "./assets/Images/Personal_Song/14.webp",
    song_album: "",
    src: "./assets/Songs/TuongTuThanhHoa.mp3",
    song_duration: "04:23",
  },
  {
    song_name: "I'm Coming Home - Skylar Grey (PART II)",
    singer: ["Skylar Grey"],
    song_img: "./assets/Images/Personal_Song/14.webp",
    song_album: "",
    src: "./assets/Songs/ImComingHome.mp3",
    song_duration: "02:47",
  },
  {
    song_name: "Kẻ Đuổi Theo Ánh Sáng",
    singer: ["Huy Vạc"],
    song_img: "./assets/Images/Personal_Song/15.webp",
    song_album: "Kẻ Đuổi Theo Ánh Sáng (Single)",
    src: "./assets/Songs/KeTheoDuoiAnhSang.mp3",
    song_duration: "03:47",
  },
  {
    song_name: "Không Bằng",
    singer: ["Na"],
    song_img: "./assets/Images/Personal_Song/16.webp",
    song_album: "Không Bằng (Single)",
    src: "./assets/Songs/KhongBang.mp3",
    song_duration: "04:11",
  },
  {
    song_name: "Em Sẽ Là Cô Dâu",
    singer: ["Minh Vương M4U", "Huy Cung"],
    song_img: "./assets/Images/Personal_Song/17.webp",
    song_album: "Em Sẽ Là Cô Dâu (Single)",
    src: "./assets/Songs/EmSeLaCoDau.mp3",
    song_duration: "04:53",
  },
  {
    song_name: "Xách Ba Lô Lên Đi Đi Thật Xa Cover",
    singer: ["Thực Mai Cover"],
    song_img: "./assets/Images/Personal_Song/14.webp",
    song_album: "",
    src: "./assets/Songs/XachBaLoMaDi.mp3",
    song_duration: "03:22",
  },
];

var chartSongs = [
  {
    song_name: "Tết Là Đông Mới Vui",
    singer: ["Đức Phúc ★", "GDucky", "DTAP"],
    song_img: "./assets/Images/Chart_Page/0.webp",
    song_album: "Tết Là Đông Mới Vui (Single)",
    src: "./assets/Songs/TetLaDongMoiVui_0421.mp3",
    song_duration: "04:21",
  },
  {
    song_name: "Quả Phụ Tướng",
    singer: ["Dunghoangpham"],
    song_img: "./assets/Images/Chart_Page/1.webp",
    song_album: "Quả Phụ Tướng (Single)",
    status: null,
    src: "./assets/Songs/QuaPhuTuong_0335.mp3",
    song_duration: "03:35",
  },
  {
    song_name: "Đừng Lo Nhé! Có Anh Đây",
    singer: ["Thiên Tú"],
    song_img: "./assets/Images/Chart_Page/2.webp",
    song_album: "Đừng Lo Nhé! Có Anh Đây (Single)",
    status: null,
    src: "./assets/Songs/DungLoNheCoAnhDay_0455.mp3",
    song_duration: "04:55",
  },
  {
    song_name: "Cuối Cùng Thì",
    singer: ["Jack J97"],
    song_img: "./assets/Images/Chart_Page/3.webp",
    song_album: "Cuối Cùng Thì (Single)",
    status: null,
    src: "./assets/Songs/CuoiCungThi_0332.mp3",
    song_duration: "03:32",
  },
  {
    song_name: "Khuất Lối",
    singer: ["H-Kray"],
    song_img: "./assets/Images/Chart_Page/4.webp",
    song_album: "Khuất Lối (Single)",
    status: null,
    src: "./assets/Songs/KhuatLoi_0427.mp3",
    song_duration: "04:27",
  },
  {
    song_name: "Trịnh Gia",
    singer: ["Jack J97"],
    song_img: "./assets/Images/Chart_Page/5.webp",
    song_album: "Trịnh Gia (Single)",
    status: null,
    src: "./assets/Songs/TrinhGia_0300.mp3",
    song_duration: "03:00",
  },
  {
    song_name: "Trót Trao Duyên",
    singer: ["NB3 Hoài Bảo", "CT"],
    song_img: "./assets/Images/Chart_Page/6.webp",
    song_album: "Trót Trao Duyên (Single)",
    status: null,
    src: "./assets/Songs/TrotTraoDuyen_0410.mp3",
    song_duration: "04:10",
  },
  {
    song_name: "Sao Cũng Được",
    singer: ["Thành Đạt"],
    song_img: "./assets/Images/Chart_Page/7.webp",
    song_album: "Sao Cũng Được (Single)",
    status: [true, 1],
    src: "./assets/Songs/SaoCungDuoc_0607.mp3",
    song_duration: "06:07",
  },
  {
    song_name: "Thủy Chung",
    singer: ["Thương Võ", "K-ICM", "ACV"],
    song_img: "./assets/Images/Chart_Page/8.webp",
    song_album: "Thủy Chung (Single)",
    status: [false, 1],
    src: "./assets/Songs/ThuyChung_0432.mp3",
    song_duration: "04:32",
  },
  {
    song_name: "Lỡ Duyên Kiếp Này, Liệu Có Kiếp Sau",
    singer: ["Khả Hiệp", "ACV"],
    song_img: "./assets/Images/Chart_Page/9.webp",
    song_album: "Lỡ Duyên Kiếp Này, Liệu Có Kiếp Sau (Single)",
    status: null,
    src: "./assets/Songs/LoDuyenKiepNayLieuCoKiepSau_0444.mp3",
    song_duration: "04:44",
  },
  {
    song_name: "Cưới Hông Chốt Nha",
    singer: ["Út Nhị Mino", "Đỗ Thành Duy", "NH4T"],
    song_img: "./assets/Images/Chart_Page/10.webp",
    song_album: "Cưới Hông Chốt Nha (Single)",
    status: null,
    src: "./assets/Songs/CuoiHongChotNha_0408.mp3",
    song_duration: "04:08",
  },
  {
    song_name: "Tòng Phu",
    singer: ["Keyo"],
    song_img: "./assets/Images/Chart_Page/11.webp",
    song_album: "Tòng Phu (Single)",
    status: [true, 3],
    src: "./assets/Songs/TongPhu_0454.mp3",
    song_duration: "04:54",
  },
  {
    song_name: "Vui Đón Xuân",
    singer: ["Thiên Ân", "SOI", "LQ MEDIA"],
    song_img: "./assets/Images/Chart_Page/12.webp",
    song_album: "Vui Đón Xuân (Single)",
    status: [true, 1],
    src: "./assets/Songs/VuiDonXuan_0333.mp3",
    song_duration: "03:33",
  },
  {
    song_name: "Xuân Này Con Chưa Về",
    singer: ["Quang Hảo", "LQ MEDIA"],
    song_img: "./assets/Images/Chart_Page/13.webp",
    song_album: "Xuân Này Con Chưa Về (Single)",
    status: [false, 1],
    src: "./assets/Songs/XuanNayConChuaVe_0538.mp3",
    song_duration: "05:38",
  },
  {
    song_name: "Người Thương Em Đây Mà",
    singer: ["Đinh Kiến Phong"],
    song_img: "./assets/Images/Chart_Page/14.webp",
    song_album: "Người Thuomg7 Em Đây Mà (Single)",
    status: [true, 1],
    src: "./assets/Songs/NguoiThuongEmDayMa_0625.mp3",
    song_duration: "06:25",
  },
  {
    song_name: "Anh Chưa Nghĩ Tới",
    singer: ["Phan Duy Anh", "ACV"],
    song_img: "./assets/Images/Chart_Page/15.webp",
    song_album: "Anh Chưa Nghĩ Tới (Single)",
    status: [true, 2],
    src: "./assets/Songs/AnhChuaNghiToi_0413.mp3",
    song_duration: "04:13",
  },
  {
    song_name: "Không Đâu Bằng Nhà",
    singer: ["Phùng Ngọc Huy"],
    song_img: "./assets/Images/Chart_Page/16.webp",
    song_album: "Không Đâu Bằng Nhà (Single)",
    status: null,
    src: "./assets/Songs/KhongDauBangNha_0359.mp3",
    song_duration: "3:59",
  },
  {
    song_name: "Con Hứa Sẽ Về",
    singer: ["Lê Bảo Bình"],
    song_img: "./assets/Images/Chart_Page/17.webp",
    song_album: "Con Hứa Sẽ Về (Single)",
    status: [true, 1],
    src: "./assets/Songs/ConHuaSeVe_0502.mp3",
    song_duration: "05:02",
  },
  {
    song_name: "Trót Trao Duyên (Remix)",
    singer: ["NB3 Hoài Bảo", "CT"],
    song_img: "./assets/Images/Chart_Page/6.webp",
    song_album: "Trót Trao Duyên (Single)",
    status: [true, 1],
    src: "./assets/Songs/TrotTraoDuyenRemix_0411.mp3",
    song_duration: "04:11",
  },
  {
    song_name: "Tết Bình An (Remix)",
    singer: ["Hana Cẩm Tiên"],
    song_img: "./assets/Images/Chart_Page/19.webp",
    song_album: "Tết Bình An (Remix) (Single)",
    status: [false, 8],
    src: "./assets/Songs/TetBinhAn_0349.mp3",
    song_duration: "03:49",
  },
  {
    song_name: "Níu Duyên Không Thành",
    singer: ["Hương Ly", "LY.M"],
    song_img: "./assets/Images/Chart_Page/20.webp",
    song_album: "Níu Duyên Không Thành (Single)",
    status: [true, 1],
    src: "./assets/Songs/NiuDuyenKhongThanh_0530.mp3",
    song_duration: "05:30",
  },
  {
    song_name: "Ai Rồi Cũng Sẽ Khác",
    singer: ["Hà Nhi"],
    song_img: "./assets/Images/Chart_Page/21.webp",
    song_album: "Giao Lộ Thời Gian Tập 8",
    status: [true, 1],
    src: "./assets/Songs/AiRoiCungSeKhac_0446.mp3",
    song_duration: "04:46",
  },
  {
    song_name: "Trót Vô Tình",
    singer: ["Hồ Phương Liên", "CT"],
    song_img: "./assets/Images/Chart_Page/22.webp",
    song_album: "Trót Vô Tình (Single)",
    status: [true, 1],
    src: "./assets/Songs/TrotVoTinh_0514.mp3",
    song_duration: "05:14",
  },
  {
    song_name: "Có Chơi Có Chịu",
    singer: ["Karik ★", "Only C ★"],
    song_img: "./assets/Images/Chart_Page/23.webp",
    song_album: "Có Chơi Có Chịu (Single)",
    status: [true, 3],
    src: "./assets/Songs/CoChoiCoChiu_0446.mp3",
    song_duration: "04:46",
  },
  {
    song_name: "Đón Xuân",
    singer: ["Thanh Hà"],
    song_img: "./assets/Images/Chart_Page/24.webp",
    song_album: "Đón Xuân (Single)",
    status: [false, 4],
    src: "./assets/Songs/DonXuan_0333.mp3",
    song_duration: "03:33",
  },
  {
    song_name: "Đợi Chờ Đừng Cáu",
    singer: ["Phan Mạnh Quỳnh", "Hoàng Thùy Linh"],
    song_img: "./assets/Images/Chart_Page/25.webp",
    song_album: "Đợi Chờ Đừng Cáu (Single)",
    status: null,
    src: "./assets/Songs/DoiChoDungCau_0550.mp3",
    song_duration: "05:50",
  },
  {
    song_name: "Kỳ Vọng Sai Lầm",
    singer: ["Tăng Phúc", "Nguyễn Đình Vũ", "Yuno Bigboi"],
    song_img: "./assets/Images/Chart_Page/26.webp",
    song_album: "Kỳ Vọng Sai Lầm (Single)",
    status: [true, 2],
    src: "./assets/Songs/KyVongSaiLam_0351.mp3",
    song_duration: "03:51",
  },
  {
    song_name: "ngủ một mình",
    singer: ["HIEUTHUHAI", "Negav", "Kewtiie"],
    song_img: "./assets/Images/Chart_Page/27.webp",
    song_album: "ngủ một mình (Single)",
    status: null,
    src: "./assets/Songs/NguMotMinh_0325.mp3",
    song_duration: "03:25",
  },
  {
    song_name: "Trăm Ngàn Lời Thương",
    singer: ["Thủy Chi", "Ricky Star"],
    song_img: "./assets/Images/Chart_Page/28.webp",
    song_album: "Trăm Ngàn Lời Thương (Single)",
    status: [true, 2],
    src: "./assets/Songs/TramNganLoiThuong_0302.mp3",
    song_duration: "03:02",
  },
  {
    song_name: "Năm Qua Đã Làm Gì",
    singer: ["Hồ Ngọc Hà"],
    song_img: "./assets/Images/Chart_Page/29.webp",
    song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
    status: [false, 5],
    src: "./assets/Songs/NamQuaDaLamGi_0329.mp3",
    song_duration: "03:29",
  },
  {
    song_name: "để tôi ôm em bằng giai điệu này",
    singer: ["Kai Đinh", "MIN ★", "GREY D"],
    song_img: "./assets/Images/Chart_Page/30.webp",
    song_album: "winter warmer (AP)",
    status: [true, 2],
    src: "./assets/Songs/DeToiOmEmBangGiaiDieuNay_0434.mp3",
    song_duration: "03:34",
  },
  {
    song_name: "Yêu Người Có Ước Mơ",
    singer: ["buitruonglinh"],
    song_img: "./assets/Images/Chart_Page/31.webp",
    song_album: "Vọng",
    status: [true, 2],
    src: "./assets/Songs/YeuNguoiCoUocMo_0445.mp3",
    song_duration: "04:45",
  },
  {
    song_name: "Bao Lâu Chưa Về Nhà?",
    singer: ["DatKaa"],
    song_img: "./assets/Images/Chart_Page/32.webp",
    song_album: "Bao Lâu Chưa Về Nhà? (Single)",
    status: [false, 3],
    src: "./assets/Songs/BaoLauChuaVeNha_0523.mp3",
    song_duration: "05:23",
  },
  {
    song_name: "Ân Tình Sang Trang",
    singer: ["Châu Khải Phong", "ACV"],
    song_img: "./assets/Images/Chart_Page/33.webp",
    song_album: "Ân Tình Sang Trang (Single)",
    status: [true, 2],
    src: "./assets/Songs/AnTinhSangTrang_0542.mp3",
    song_duration: "05:42",
  },
  {
    song_name: "Cái Tết Giàu",
    singer: ["Bùi Công Nam", "Lương Bích Hữu", "Đông Nhi", "Bé Winnie"],
    song_img: "./assets/Images/Chart_Page/34.webp",
    song_album: "Cái Tết Giàu (Single)",
    status: [false, 3],
    src: "./assets/Songs/CaiTetGiau_0530.mp3",
    song_duration: "05:30",
  },
  {
    song_name: "Chịu Em Đi",
    singer: ["Tracy Thảo Mi", "YuniBoo"],
    song_img: "./assets/Images/Chart_Page/35.webp",
    song_album: "Chịu Em Đi (Single)",
    status: [false, 1],
    src: "./assets/Songs/ChiuEmDi_0434.mp3",
    song_duration: "04:34",
  },
  {
    song_name: "Waiting For You",
    singer: ["MONO", "Onionn"],
    song_img: "./assets/Images/Chart_Page/36.webp",
    song_album: "22",
    status: [true, 5],
    src: "./assets/Songs/WaitingForYou_0425.mp3",
    song_duration: "04:25",
  },
  {
    song_name: "Người Như Chúng Ta",
    singer: ["Mr. Siro ★"],
    song_img: "./assets/Images/Chart_Page/37.webp",
    song_album: "Người Như Chúng Ta (Single)",
    status: [false, 1],
    src: "./assets/Songs/NguoiNhuChungTa_0449.mp3",
    song_duration: "04:49",
  },
  {
    song_name: "Em Sẽ Quên Anh",
    singer: ["Nal", "CT"],
    song_img: "./assets/Images/Chart_Page/38.webp",
    song_album: "Em Sẽ Quên Anh (Single)",
    status: [false, 1],
    src: "./assets/Songs/EmSeQuenAnh_0403.mp3",
    song_duration: "04:03",
  },
  {
    song_name: "Tết Yêu, Tết Ghét",
    singer: ["Ninh Dương Lan Ngọc", "HuyR"],
    song_img: "./assets/Images/Chart_Page/39.webp",
    song_album: "Tết Yêu, Tết Ghét (Single)",
    status: null,
    src: "./assets/Songs/TetYeuTetGhet_0349.mp3",
    song_duration: "03:49",
  },
  {
    song_name: "Tết Bùng Nội Lực",
    singer: ["Hòa Minzy ★", "Bùi Công Nam"],
    song_img: "./assets/Images/Chart_Page/40.webp",
    song_album: "Tết Bùng Nội Lực (Single)",
    status: null,
    src: "./assets/Songs/TetBungNoiLuc_0330.mp3",
    song_duration: "03:30",
  },
  {
    song_name: "Chàng Trai Của Em",
    singer: ["Duy Văn Phạm", "ACV"],
    song_img: "./assets/Images/Chart_Page/41.webp",
    song_album: "Chàng Trai Của Em (Single)",
    status: [true, 3],
    src: "./assets/Songs/ChangTraiCuaEm_0330.mp3",
    song_duration: "03:30",
  },
  {
    song_name: "Nụ Cười Xuân",
    singer: ["Hương Ly", "YuniBoo"],
    song_img: "./assets/Images/Chart_Page/42.webp",
    song_album: "Nụ Cười Xuân (Single)",
    status: [false, 4],
    src: "./assets/Songs/NuCuoiXuan_0429.mp3",
    song_duration: "04:29",
  },
  {
    song_name: "Kiếp Má Hồng",
    singer: ["Tú Na", "Tiểu Nhi"],
    song_img: "./assets/Images/Chart_Page/43.webp",
    song_album: "Kiếp Má Hồng (Single)",
    status: [false, 1],
    src: "./assets/Songs/KiepMaHong_0443.mp3",
    song_duration: "04:43",
  },
  {
    song_name: "Vui Như Tết",
    singer: ["Văn Mai Hương", "Ricky Star"],
    song_img: "./assets/Images/Chart_Page/29.webp",
    song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
    status: [true, 6],
    src: "./assets/Songs/VuiNhuTet_0343.mp3",
    song_duration: "03:43",
  },
  {
    song_name: "Khuất Lối (Remix #1)",
    singer: ["H-Kray"],
    song_img: "./assets/Images/Chart_Page/4.webp",
    song_album: "Khuất Lối (Single)",
    status: [true, 1],
    src: "./assets/Songs/KhuatLoiRemix_0425.mp3",
    song_duration: "04:25",
  },
  {
    song_name: "Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau",
    singer: ["O.lew"],
    song_img: "./assets/Images/Chart_Page/46.webp",
    song_album: "",
    status: [true, 12],
    src: "./assets/Songs/RoiTaSeNgamPhaoHoaCungNhau_0442.mp3",
    song_duration: "04:42",
  },
  {
    song_name: "Tết Nay Con Hứa Về",
    singer: ["Đan Trường"],
    song_img: "./assets/Images/Chart_Page/47.webp",
    song_album: "Tết Nay Con Hứa Về (Single)",
    status: [true, 2],
    src: "./assets/Songs/TetNayConHuaVe_0451.mp3",
    song_duration: "04:51",
  },
  {
    song_name: "Định Mệnh",
    singer: ["Noo Phước Thịnh"],
    song_img: "./assets/Images/Chart_Page/48.webp",
    song_album: "Định Mệnh (Single)",
    status: [false, 5],
    src: "./assets/Songs/DinhMenh_0458.mp3",
    song_duration: "04:58",
  },
  {
    song_name: "Gấp Lắm Rồi",
    singer: ["Hana Cẩm Tiên", "TVk"],
    song_img: "./assets/Images/Chart_Page/49.webp",
    song_album: "Gấp Lắm Rồi (Single)",
    status: [true, 2],
    src: "./assets/Songs/GapLamRoi_0518.mp3",
    song_duration: "05:18",
  },
  {
    song_name: "Em Chịu Hông",
    singer: ["Hoàng Lan", "Jin Tuấn Nam"],
    song_img: "./assets/Images/Chart_Page/50.webp",
    song_album: "Em Chịu Hông (Single)",
    status: [false, 3],
    src: "./assets/Songs/EmChiuHong_0405.mp3",
    song_duration: "04:05",
  },
  {
    song_name: "Luyến Lưu",
    singer: ["Phát Hồ"],
    song_img: "./assets/Images/Chart_Page/51.webp",
    song_album: "Luyến Lưu (Single)",
    status: [false, 6],
    src: "./assets/Songs/LuyenLuu_0415.mp3",
    song_duration: "04:15",
  },
  {
    song_name: "Em Là Kẻ Đáng Thương",
    singer: ["Phát Huy T4"],
    song_img: "./assets/Images/Chart_Page/52.webp",
    song_album: "Em Là Kẻ Đáng Thương (Single)",
    status: null,
    src: "./assets/Songs/EmLaKeDangThuong_0421.mp3",
    song_duration: "04:21",
  },
  {
    song_name: "Bông Hoa Nở Muộn",
    singer: ["Khánh Trung", "Hana Cẩm Tiên"],
    song_img: "./assets/Images/Chart_Page/53.webp",
    song_album: "Bông Hoa Nở Muộn (Single)",
    status: [false, 5],
    src: "./assets/Songs/BongHoaNoMuon_0506.mp3",
    song_duration: "05:06",
  },
  {
    song_name: "Chia Cách Bình Yên (Live)",
    singer: ["Hoài Lâm"],
    song_img: "./assets/Images/Chart_Page/54.webp",
    song_album: "",
    status: [false, 1],
    src: "./assets/Songs/ChiaCachBinhYen_0402.mp3",
    song_duration: "04:02",
  },
  {
    song_name: "Ngày Mai Em Đi Mất",
    singer: ["Khải Đăng", "Đạt G"],
    song_img: "./assets/Images/Chart_Page/55.webp",
    song_album: "Ngày Mai Em Đi Mất (Single)",
    status: [true, 1],
    src: "./assets/Songs/NgayMaiEmDiMat_0413.mp3",
    song_duration: "04:13",
  },
  {
    song_name: "Ui Dza! Là Tết",
    singer: ["Ngọc Dolil"],
    song_img: "./assets/Images/Chart_Page/56.webp",
    song_album: "Ui Dza! Là Tết (Single)",
    status: [true, 3],
    src: "./assets/Songs/UiDzaLaTet_0256.mp3",
    song_duration: "02:56",
  },
  {
    song_name: "Người Như Anh",
    singer: ["Mai Tiến Dũng"],
    song_img: "./assets/Images/Chart_Page/57.webp",
    song_album: "Người Như Anh (Single)",
    status: [false, 3],
    src: "./assets/Songs/NguoiNhuAnh_0501.mp3",
    song_duration: "05:01",
  },
  {
    song_name: "Như Hoa Mùa Xuân",
    singer: ["Phùng Khánh Linh", "Wren Evans"],
    song_img: "./assets/Images/Chart_Page/29.webp",
    song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
    status: [false, 1],
    src: "./assets/Songs/NhuHoaMuaXuan_0459.mp3",
    song_duration: "04:59",
  },
  {
    song_name: "anh đến cùng cơn mưa",
    singer: ["Hứa Kim Tuyền", "GREY D"],
    song_img: "./assets/Images/Chart_Page/59.webp",
    song_album: "anh đến cùng cơn mưa (Single)",
    status: [true, 8],
    src: "./assets/Songs/AnhSeDenCungConMua_0428.mp3",
    song_duration: "04:28",
  },
  {
    song_name: "Em Nên Dừng Lại",
    singer: ["Khang Việt"],
    song_img: "./assets/Images/Chart_Page/60.webp",
    song_album: "Em Nên Đừng Lại (Single)",
    status: [true, 2],
    src: "./assets/Songs/EmNenDungLai_0554.mp3",
    song_duration: "05:54",
  },
  {
    song_name: "Thương Thì Về Đây",
    singer: ["Tiến Tới", "Trường Lê"],
    song_img: "./assets/Images/Chart_Page/61.webp",
    song_album: "Thương Thì Về Đây (Single)",
    status: [true, 5],
    src: "./assets/Songs/ThuongThiVeDay_0410.mp3",
    song_duration: "04:10",
  },
  {
    song_name: "Tình Yêu Đến Sau",
    singer: ["Myra Trần", "Đức Phúc ★"],
    song_img: "./assets/Images/Chart_Page/62.webp",
    song_album: "Tình Yêu Đến Sau (Single)",
    status: [true, 7],
    src: "./assets/Songs/TinhYeuDenSau_0533.mp3",
    song_duration: "05:33",
  },
  {
    song_name: "Cô Đơn Trên Sofa",
    singer: ["Hồ Ngọc Hà"],
    song_img: "./assets/Images/Chart_Page/63.webp",
    song_album: "Cô Đơn Trên Sofa (Single)",
    status: [true, 1],
    src: "./assets/Songs/CoDonTrenSofa_0437.mp3",
    song_duration: "04:37",
  },
  {
    song_name: "Chơi Banh Tết",
    singer: ["QNT", "Fanny"],
    song_img: "./assets/Images/Chart_Page/64.webp",
    song_album: "Chơi Banh Tết (Single)",
    status: [false, 4],
    src: "./assets/Songs/ChoiBanhTet_0323.mp3",
    song_duration: "03:23",
  },
  {
    song_name: "Yêu Mấy Cũng Đừng Quay Lại",
    singer: ["Mr. Siro ★"],
    song_img: "./assets/Images/Chart_Page/65.webp",
    song_album: "Yêu Mấy Cũng Đừng Quay Lại (Single)",
    status: [true, 11],
    src: "./assets/Songs/YeuMayCungDungQuayLai_0503.mp3",
    song_duration: "05:03",
  },
  {
    song_name: "Cơm Đoàn Viên",
    singer: ["Thành Đạt"],
    song_img: "./assets/Images/Chart_Page/66.webp",
    song_album: "Cơm Đoàn Viên (Single)",
    status: [true, 4],
    src: "./assets/Songs/ComDoanVien_0445.mp3",
    song_duration: "04:45",
  },
  {
    song_name: "Thèm Được Về Nhà",
    singer: ["Tăng Phúc", "Trương Thảo Nhi"],
    song_img: "./assets/Images/Chart_Page/67.webp",
    song_album: "Thèm Được Về Nhà (Single)",
    status: [true, 13],
    src: "./assets/Songs/ThemDuocVeNha_0430.mp3",
    song_duration: "04:30",
  },
  {
    song_name: "Tết Đi Em Ơi",
    singer: ["Masew", "Khoi Vu", "Kaybo"],
    song_img: "./assets/Images/Chart_Page/68.webp",
    song_album: "Tết Đi Em Ơi (Single)",
    status: [true, 5],
    src: "./assets/Songs/TetDiEmOi_0317.mp3",
    song_duration: "03:17",
  },
  {
    song_name: "Bài Ca Tết Cho Em",
    singer: ["Khánh Bình", "Hồ Việt Trung"],
    song_img: "./assets/Images/Chart_Page/69.webp",
    song_album: "Xuân Họp Mặt",
    status: [false, 14],
    src: "./assets/Songs/BaiCaTetChoEm_0315.mp3",
    song_duration: "03:15",
  },
  {
    song_name: "Anh Tệ",
    singer: ["DatKaa"],
    song_img: "./assets/Images/Chart_Page/70.webp",
    song_album: "Anh Tệ (Single)",
    status: [true, 11],
    src: "./assets/Songs/AnhTe_0354.mp3",
    song_duration: "03:54",
  },
  {
    song_name: "O Phải Hôm Nay",
    singer: ["QNT", "HuyR"],
    song_img: "./assets/Images/Chart_Page/71.webp",
    song_album: "O Phải Hôm Nay (Single)",
    status: [true, 6],
    src: "./assets/Songs/0PhaiHomNay_0237.mp3",
    song_duration: "02:37",
  },
  {
    song_name: "Cứu Vãn Kịp Không",
    singer: ["Vương Anh Tú"],
    song_img: "./assets/Images/Chart_Page/72.webp",
    song_album: "Cứu Vãn Kịp Không (Single)",
    status: [true, 13],
    src: "./assets/Songs/CuuVanKipKhong_0453.mp3",
    song_duration: "04:53",
  },
  {
    song_name: "Tết Rộn Ràng",
    singer: ["Hana Cẩm Tiên"],
    song_img: "./assets/Images/Chart_Page/73.webp",
    song_album: "Tết Rộn Ràng (Single)",
    status: [false, 5],
    src: "./assets/Songs/TetRonRang_0401.mp3",
    song_duration: "04:01",
  },
  {
    song_name: "Bông Hoa Nở Muộn",
    singer: ["Khánh Trung"],
    song_img: "./assets/Images/Chart_Page/74.webp",
    song_album: "Bông Hoa Nở Muộn (Single)",
    status: [false, 5],
    src: "./assets/Songs/BongHoaNoMuon_0415.mp3",
    song_duration: "04:15",
  },
  {
    song_name: "Bài này không để đi diễn",
    singer: ["Anh Tú Atus"],
    song_img: "./assets/Images/Chart_Page/75.webp",
    song_album: "Bài này không để đi diễn (Single)",
    status: [true, 3],
    src: "./assets/Songs/BaiNayKhongDeDiDien_0300.mp3",
    song_duration: "03:00",
  },
  {
    song_name: "Xuôi Dòng Cửu Long",
    singer: ["Diệu Kiên"],
    song_img: "./assets/Images/Chart_Page/76.webp",
    song_album: "Xuôi Dòng Cửu Long (Single)",
    status: [true, 6],
    src: "./assets/Songs/XuoiDongCuuLong_0354.mp3",
    song_duration: "03:54",
  },
  {
    song_name: "Nếu Không Yêu Sẽ Không Đau Lòng",
    singer: ["Minh Vương M4U", "ACV"],
    song_img: "./assets/Images/Chart_Page/77.webp",
    song_album: "Nếu Không Yêu Sẽ Không Đau Lòng (Single)",
    status: [false, 2],
    src: "./assets/Songs/NeuKhongYeuSeKhongDauLong_0419.mp3",
    song_duration: "04:19",
  },
  {
    song_name: "Mong Ước Sum Vầy",
    singer: ["Fanny", "Vũ Thịnh"],
    song_img: "./assets/Images/Chart_Page/78.webp",
    song_album: "Mong Ước Sum Vầy (Single)",
    status: [true, 9],
    src: "./assets/Songs/MongUocSungVay_0343.mp3",
    song_duration: "03:43",
  },
  {
    song_name: "Mang Hạnh Phúc Đến Thăm",
    singer: ["Huyền Tâm Môn"],
    song_img: "./assets/Images/Chart_Page/79.webp",
    song_album: "Mang Hạnh Phúc Đến Thăm (Single)",
    status: [true, 16],
    src: "./assets/Songs/MangHanhPhucDenTham_0320.mp3",
    song_duration: "03:20",
  },
  {
    song_name: "Thuyền Quyên",
    singer: ["Diệu Kiên"],
    song_img: "./assets/Images/Chart_Page/80.webp",
    song_album: "Thuyền Quyên (Single)",
    status: [true, 8],
    src: "./assets/Songs/ThuyenQuyen_0333.mp3",
    song_duration: "03:33",
  },
  {
    song_name: "Má La Anh Giờ",
    singer: ["Nana Liu"],
    song_img: "./assets/Images/Chart_Page/81.webp",
    song_album: "Má La Anh Giờ (Single)",
    status: [false, 9],
    src: "./assets/Songs/",
    song_duration: "03:06",
  },
  {
    song_name: "ngủ một mình (tình rất tình)",
    singer: ["HIEUTHUHAI", "Negav", "Kewtiie"],
    song_img: "./assets/Images/Chart_Page/82.webp",
    song_album: "ngủ một mình (tình rất tình) (Single)",
    status: [false, 19],
    src: "./assets/Songs/NguMotMinh_0301.mp3",
    song_duration: "03:01",
  },
  {
    song_name: "Tết Này Con Sẽ Về",
    singer: ["Hòa Minzy ★", "Lăng LD"],
    song_img: "./assets/Images/Chart_Page/29.webp",
    song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
    status: null,
    src: "./assets/Songs/TetNayConSeVe_0355.mp3",
    song_duration: "03:55",
  },
  {
    song_name: "Chung Rượu Hồng",
    singer: ["Anh Rồng", "Sakhar"],
    song_img: "./assets/Images/Chart_Page/84.webp",
    song_album: "Chung Rượu Hồng (Single)",
    status: [true, 14],
    src: "./assets/Songs/ChungRuouHong_0340.mp3",
    song_duration: "03:40",
  },
  {
    song_name: "Định Tết Này Con Không Về",
    singer: ["Trịnh Đình Quang"],
    song_img: "./assets/Images/Chart_Page/85.webp",
    song_album: "Định Tết Này Con Không Về (Single)",
    status: [false, 11],
    src: "./assets/Songs/DinhTetNayConKhongVe_0618.mp3",
    song_duration: "06:18",
  },
  {
    song_name: "Anh Tự Do Nhưng Cô Đơn",
    singer: ["Trung Quân Idol"],
    song_img: "./assets/Images/Chart_Page/86.webp",
    song_album: "Anh Tự Do Nhưng Cô Đơn (EP)",
    status: [false, 7],
    src: "./assets/Songs/AnhTuDoNhungCoDon_0540.mp3",
    song_duration: "05:40",
  },
  {
    song_name: "Tết Này Sâu Đậm",
    singer: ["Thanh Tú Vote For Five"],
    song_img: "./assets/Images/Chart_Page/87.webp",
    song_album: "Tết Này Sâu Đậm (Single)",
    status: [false, 3],
    src: "./assets/Songs/TetNaySauDam_0600.mp3",
    song_duration: "06:00",
  },
  {
    song_name: "Tết Là Đông Mới Vui",
    singer: ["Đức Phúc ★", "GDucky", "DTAP"],
    song_img: "./assets/Images/Chart_Page/88.webp",
    song_album: "Tết Là Đông Mới Vui (Single)",
    status: [true, 4],
    src: "./assets/Songs/TetLaDongMoiVui_0421.mp3",
    song_duration: "04:21",
  },
  {
    song_name: "Mashup Xuân",
    singer: ["W Girls"],
    song_img: "./assets/Images/Chart_Page/89.webp",
    song_album: "1st Mini Album - Mashup: Tết Đến Thật Rồi (EP)",
    status: [true, 3],
    src: "./assets/Songs/MashupXuan_0345.mp3",
    song_duration: "03:45",
  },
  {
    song_name: "Tết Cùng Đoàn Viên",
    singer: ["Bùi Dương Thái Hà"],
    song_img: "./assets/Images/Chart_Page/90.webp",
    song_album: "Tết Cùng Đoàn Viên (Single)",
    status: [true, 3],
    src: "./assets/Songs/TetCungDoanVien_0439.mp3",
    song_duration: "04:39",
  },
  {
    song_name: "Đừng Lo Nhé! Có Em Đây",
    singer: ["Oanh Tạ"],
    song_img: "./assets/Images/Chart_Page/91.webp",
    song_album: "Đừng Lo Nhé! Có Em Đây (Single)",
    status: [false, 2],
    src: "./assets/Songs/DungLoNheCoEmDay_0439.mp3",
    song_duration: "04:39",
  },
  {
    song_name: "Ghé Vào Tai",
    singer: ["UMIE", "Freaky", "Hổ"],
    song_img: "./assets/Images/Chart_Page/92.webp",
    song_album: "Ghé Vào Tai (Single)",
    status: [false, 31],
    src: "./assets/Songs/GheVaoTai_0257.mp3",
    song_duration: "02:57",
  },
  {
    song_name: "Anh Không Thể Ngờ",
    singer: ["Đinh Tùng Huy", "ACV"],
    song_img: "./assets/Images/Chart_Page/93.webp",
    song_album: "Anh Không Thể Ngờ (Single)",
    status: [true, 4],
    src: "./assets/Songs/AnhKhongTheNgo_0425.mp3",
    song_duration: "04:25",
  },
  {
    song_name: "Tết Này Phất Luôn",
    singer: ["Hồng Thanh"],
    song_img: "./assets/Images/Chart_Page/94.webp",
    song_album: "Tết Này Phất Luôn (Single)",
    status: [false, 4],
    src: "./assets/Songs/TetNayPhatLuon_0239.mp3",
    song_duration: "02:39",
  },
  {
    song_name: "Đến Giờ Cơm",
    singer: ["Ái Phương", "Minh Cà Ri"],
    song_img: "./assets/Images/Chart_Page/95.webp",
    song_album: "Đến Giờ Cơm (Single)",
    status: [true, 1],
    src: "./assets/Songs/DenGioCom_0503.mp3",
    song_duration: "05:03",
  },
  {
    song_name: "Rồi Em Sẽ Ổn Thôi",
    singer: ["Bảo Uyên", "RIN9"],
    song_img: "./assets/Images/Chart_Page/96.webp",
    song_album: "Rồi Em Sẽ Ổn Thôi (Single)",
    status: [false, 5],
    src: "./assets/Songs/RoiEmSeOnThoi_0429.mp3",
    song_duration: "04:29",
  },
  {
    song_name: "Thương Phận Đời Con Gái",
    singer: ["Hồ Việt Trung"],
    song_img: "./assets/Images/Chart_Page/97.webp",
    song_album: "Thương Phận Đời Con Gái (Single)",
    status: [false, 26],
    src: "./assets/Songs/ThuongPhanDoiConGai_0457.mp3",
    song_duration: "04:57",
  },
  {
    song_name: "Pháo Hồng",
    singer: ["Đạt Long Vinh"],
    song_img: "./assets/Images/Chart_Page/98.webp",
    song_album: "Pháo Hồng (Single)",
    status: [true, 1],
    src: "./assets/Songs/PhaoHong_0352.mp3",
    song_duration: "03:52",
  },
  {
    song_name: "Tự Nhiên Cái Tết",
    singer: ["Bùi Công Nam"],
    song_img: "./assets/Images/Chart_Page/99.webp",
    song_album: "",
    status: null,
    src: "./assets/Songs/TuNhienCaiTet_0309.mp3",
    song_duration: "03:09",
  },
  {
    song_name: "Vương Vấn (Qinn Remix)",
    singer: ["TVk", "Hana Cẩm Tiên", "93NEW-G"],
    song_img: "./assets/Images/Chart_Page/100.webp",
    song_album: "Vương Vấn (Single)",
    status: null,
    src: "./assets/Songs/VuongVan_0403.mp3",
    song_duration: "04:03",
  },
];

var albumSongList = [
  {
    song_name: "Trăm Ngàn Lời Thương",
    singer: ["Thùy Chi", "Ricky Star"],
    song_img: "./assets/Images/Album_Image/TramNganLoiThuong.webp",
    song_album: "Trăm Ngàn Lời Thương (Single)",
    src: "./assets/Songs/TramNganLoiThuong_0302.mp3",
    song_duration: "03:02",
  },
  {
    song_name: "Bao Lâu Chưa Về Nhà",
    singer: ["DatKaa"],
    song_img: "./assets/Images/Album_Image/BaoLauChuaVeNha.webp",
    song_album: "Bao Lâu Chưa Về Nhà (Single)",
    src: "./assets/Songs/BaoLauChuaVeNha_0523.mp3",
    song_duration: "05:23",
  },
  {
    song_name: "Đợi Chờ Đừng Cáu",
    singer: ["Phan Mạnh Quỳnh", "Hoàng Thùy Link"],
    song_img: "./assets/Images/Album_Image/DoiChoDungCau.webp",
    song_album: "Đợi Chờ Đừng Cáu (Single)",
    src: "./assets/Songs/DoiChoDungCau_0550.mp3",
    song_duration: "05:50",
  },
  {
    song_name: "Như Hoa Mùa Xuân",
    singer: ["Phùng Khánh Linh", "Wren Evans"],
    song_img: "./assets/Images/Album_Image/NhuHoaMuaXuan.webp",
    song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
    src: "./assets/Songs/NhuHoaMuaXuan_0459.mp3",
    song_duration: "04:59",
  },
  {
    song_name: "Tết Bùng Nội Lực",
    singer: ["Hòa Minzy ★", "Bùi Công Nam"],
    song_img: "./assets/Images/Album_Image/TetBungNoiLuc.webp",
    song_album: "Tết Bùng Nội Lực (Single)",
    src: "./assets/Songs/TetBungNoiLuc_0330.mp3",
    song_duration: "03:30",
  },
  {
    song_name: "Tự Nhiên Cái Tết",
    singer: ["Bùi Công Nam"],
    song_img: "./assets/Images/Album_Image/TuNhienCaiTet.webp",
    song_album: "",
    src: "./assets/Songs/TuNhienCaiTet_0309.mp3",
    song_duration: "03:09",
  },
  {
    song_name: "Tết Yêu, Tết Ghét",
    singer: ["Ninh Dương Lan Ngọc", "HuyR"],
    song_img: "./assets/Images/Album_Image/TetYeuTetGhet.webp",
    song_album: "Tết Yêu, Tết Ghét (Single)",
    src: "./assets/Songs/TetYeuTetGhet_0349.mp3",
    song_duration: "03:49",
  },
  {
    song_name: "Mang Hạnh Phúc Đến Thăm",
    singer: ["Huyền Tâm Môn"],
    song_img: "./assets/Images/Album_Image/MangHanhPhucDenTham.webp",
    song_album: "Mang Hạnh Phúc Đến Thăm (Single)",
    src: "./assets/Songs/MangHanhPhucDenTham_0320.mp3",
    song_duration: "03:20",
  },
  {
    song_name: "Cái Tết Giàu",
    singer: ["Bùi Công Nam", "Lương Bích Hữu", "Đông Nhi", "Bé Winnie"],
    song_img: "./assets/Images/Album_Image/TramNganLoiThuong.webp",
    song_album: "Cái Tết Giàu (Single)",
    src: "./assets/Songs/CaiTetGiau_0530.mp3",
    song_duration: "05:30",
  },
  {
    song_name: "Chơi Banh Tết",
    singer: ["QNT", "Fanny"],
    song_img: "./assets/Images/Album_Image/ChoiBanhTet.webp",
    song_album: "Chơi Banh Tết (Single)",
    src: "./assets/Songs/ChoiBanhTet_0323.mp3",
    song_duration: "03:23",
  },
  {
    song_name: "Đón Xuân",
    singer: ["Thanh Hà"],
    song_img: "./assets/Images/Album_Image/DonXuan.webp",
    song_album: "Đón Xuân (Single)",
    src: "./assets/Songs/DonXuan_0333.mp3",
    song_duration: "03:33",
  },
  {
    song_name: "Năm Qua Đã Làm Gì",
    singer: ["Hồ Ngọc Hà"],
    song_img: "./assets/Images/Album_Image/NhuHoaMuaXuan.webp",
    song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
    src: "./assets/Songs/NamQuaDaLamGi_0329.mp3",
    song_duration: "03:29",
  },
  {
    song_name: "Ui Dza! Là Tết",
    singer: ["Ngọc Dolil"],
    song_img: "./assets/Images/Album_Image/UiDzaLaTet.webp",
    song_album: "Ui Dza! Là Tết (Single)",
    src: "./assets/Songs/UiDzaLaTet_0256.mp3",
    song_duration: "02:56",
  },
  {
    song_name: "Tết Là Đông Mới Vui",
    singer: ["Đức Phúc ★", "GDucky", "DTAP"],
    song_img: "./assets/Images/Album_Image/TetLaDongMoiVui.webp",
    song_album: "Tết Là Đông Mới Vui (Single)",
    src: "./assets/Songs/TetLaDongMoiVui_0421.mp3",
    song_duration: "04:21",
  },
  {
    song_name: "Tết Đi Em Ơi",
    singer: ["Masew", "Khoi Vu", "kaybo"],
    song_img: "./assets/Images/Album_Image/TetDiEmOi.webp",
    song_album: "Tết Đi Em Ơi (Single)",
    src: "./assets/Songs/TetDiEmOi_0317.mp3",
    song_duration: "03:17",
  },
  {
    song_name: "Đón Tết Quê Hương",
    singer: ["Ngọc Dolil"],
    song_img: "./assets/Images/Album_Image/NhuHoaMuaXuan.webp",
    song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
    src: "./assets/Songs/DonTetQueHuong_0412.mp3",
    song_duration: "04:12",
  },
  {
    song_name: "Mừng Con Về Nhà",
    singer: ["Anh Tú"],
    song_img: "./assets/Images/Album_Image/MungConVeNha.webp",
    song_album: "Mừng Con Về Nhà (Single)",
    src: "./assets/Songs/MungConVeNha_0433.mp3",
    song_duration: "04:33",
  },
  {
    song_name: "Định Tết Này Con Không Về",
    singer: ["Trịnh Đình Quang"],
    song_img: "./assets/Images/Album_Image/DinhTetNayConKhongVe.webp",
    song_album: "Định Tết Này Con Không Về (Single)",
    src: "./assets/Songs/DinhTetNayConKhongVe_0618.mp3",
    song_duration: "06:18",
  },
  {
    song_name: "Thèm Được Về Nhà",
    singer: ["Tăng Phúc", "Trương Thảo Nhi"],
    song_img: "./assets/Images/Album_Image/ThemDuocVeNha.webp",
    song_album: "Thèm Được Về Nhà (Single)",
    src: "./assets/Songs/ThemDuocVeNha_0430.mp3",
    song_duration: "04:30",
  },
];

var tempPrevSongList = [],
  tempNextSongList = [];

var nextBtn = document.querySelector(".footer-center .next-btn");
var prevBtn = document.querySelector(".footer-center .previous-btn");

function loadFooterSong() {
  if (prevSongList.length > 0) {
    if (prevSongList.length === 1) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }
    if (nextSongList.length === 0) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
    var songLink = document.querySelector(".playing-song source");
    var songInfo = document.querySelector(".footer-left");
    /* Change audio link */
    songLink.src = prevSongList[prevSongList.length - 1].src;
    /* Change song image */
    songInfo.querySelector(".footer-left__song-img img").src =
      prevSongList[prevSongList.length - 1].song_img;
    /* Change song name */
    songInfo.querySelector(
      ".footer-left__song-info .footer-left__song-name"
    ).innerHTML = prevSongList[prevSongList.length - 1].song_name;
    /* Change song singer */
    var singerName = document.createElement("span");
    singerName.classList.add("singer-list");
    if (prevSongList[prevSongList.length - 1].singer.length === 1) {
      singerName.innerHTML = `<span class="singer-name">${
        prevSongList[prevSongList.length - 1].singer
      }</span>`;
    } else {
      for (
        let i = 0;
        i < prevSongList[prevSongList.length - 1].singer.length - 1;
        i++
      ) {
        singerName.innerHTML += `<span class="singer-name">${
          prevSongList[prevSongList.length - 1].singer[i]
        }</span>, `;
      }
      singerName.innerHTML += `<span class="singer-name">${
        prevSongList[prevSongList.length - 1].singer[
          prevSongList[prevSongList.length - 1].singer.length - 1
        ]
      }</span>`;
    }
    songInfo.querySelector(
      ".footer-left__song-info .footer-left__singer .singer-list"
    ).innerHTML = singerName.innerHTML;
    song.load();
    /* Change time */
    song.onloadedmetadata = function () {
      document.querySelector(".remaining-time .minute").innerHTML =
        Math.floor(song.duration / 60) > 9
          ? Math.floor(song.duration / 60)
          : "0" + Math.floor(song.duration / 60);
      document.querySelector(".remaining-time .second").innerHTML =
        Math.floor(song.duration % 60) > 9
          ? Math.floor(song.duration % 60)
          : "0" + Math.floor(song.duration % 60);
    };
  }
}

function loadPrevSongList() {
  var sidebarPrevList = document.querySelector(".sidebar-right__previous-list");
  if (prevSongList.length > 0) {
    var temp = document.createElement("div");
    for (let i = 0; i < prevSongList.length; i++) {
      temp.innerHTML += `
      <div class="sidebar-right__song-item is-space-between cursor-pointer">
        <div class="sidebar-right__song-content is-space-between">
            <div class="sidebar-right__song-img cursor-pointer">
                <img src="${prevSongList[i].song_img}" class="main-img"/>
                <svg fill="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 460.114 460.114" xml:space="preserve" class="play-icon" onclick="playSongPrev(prevSongList[${i}])">
                    <path d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173
                        c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087
                        c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"/>
                </svg>
                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" class="playing-song-icon"/>
            </div>
            <div class="sidebar-right__song-info">
                <h5 class="sidebar-right__song-name limit">${prevSongList[i].song_name}</h5>
                <h6 class="sidebar-right__singer cursor-pointer">
                    <span class="singer-list">
                    </span>
                </h6>
            </div>
        </div>
        <div class="reactive-icon">
            <button class="like-btn is-center inactive cursor-pointer">
                <div class="tippy-top">Thêm vào thư viện</div>
                <svg
                    width="14" height="14"
                    fill="var(--element-color)"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 471.701 471.701" xml:space="preserve"
                    style="enable-background:new 0 0 471.701 471.701;"
                    class="inactive-like-icon"
                >
                    <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                        c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                        l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                        C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                        s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                        c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                        C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                </svg>
                <svg
                    width="14" height="14" class="active-like-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="var(--element-color)"
                >
                    <path
                        d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z"
                    />
                </svg>
            </button>
            <button class="more-btn is-center cursor-pointer">
                <div class="tippy-top">Xem thêm</div>
                <svg
                    width="14" height="14"
                    fill="var(--element-color)"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 210 210" xml:space="preserve"
                    style="enable-background:new 0 0 210 210;"
                >
                    <path d="M25,80C11.215,80,0,91.215,0,105s11.215,25,25,25c13.785,0,25-11.215,25-25S38.785,80,25,80z"/>
                    <path d="M105,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S118.785,80,105,80z"/>
                    <path d="M185,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S198.785,80,185,80z"/>
                </svg>
            </button>
        </div>
      </div>`;
      var singerName = temp.querySelectorAll(".singer-list")[i];
      if (prevSongList[i].singer.length === 1) {
        singerName.innerHTML = `<span class="singer-name">${prevSongList[i].singer}</span>`;
      } else {
        for (let j = 0; j < prevSongList[i].singer.length - 1; j++) {
          singerName.innerHTML += `<span class="singer-name">${prevSongList[i].singer[j]}</span>, `;
        }
        singerName.innerHTML += `<span class="singer-name">${
          prevSongList[i].singer[prevSongList[i].singer.length - 1]
        }</span>`;
      }
    }
    sidebarPrevList.innerHTML = temp.innerHTML;
    sidebarPrevList
      .querySelectorAll(".sidebar-right__song-item")
      [
        sidebarPrevList.querySelectorAll(".sidebar-right__song-item").length - 1
      ].classList.add("active");
  } else {
    sidebarPrevList.innerHTML = "";
  }
}

function loadNextSongList() {
  var sidebarNextList = document.querySelector(".sidebar-right__next-list");
  if (nextSongList.length > 0) {
    var temp = document.createElement("div");
    for (let i = 0; i < nextSongList.length; i++) {
      temp.innerHTML += `
      <div class="sidebar-right__song-item is-space-between cursor-pointer">
        <div class="sidebar-right__song-content is-space-between">
            <div class="sidebar-right__song-img cursor-pointer">
                <img src="${nextSongList[i].song_img}" class="main-img"/>
                <svg fill="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 460.114 460.114" xml:space="preserve" class="play-icon" onclick="playSongNext(nextSongList[${i}])">
                    <path d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173
                        c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087
                        c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"/>
                </svg>
                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" class="playing-song-icon"/>
            </div>
            <div class="sidebar-right__song-info">
                <h5 class="sidebar-right__song-name limit">${nextSongList[i].song_name}</h5>
                <h6 class="sidebar-right__singer cursor-pointer">
                    <span class="singer-list">
                    </span>
                </h6>
            </div>
        </div>
        <div class="reactive-icon">
            <button class="like-btn is-center inactive cursor-pointer">
                <div class="tippy-top">Thêm vào thư viện</div>
                <svg
                    width="14" height="14"
                    fill="var(--element-color)"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 471.701 471.701" xml:space="preserve"
                    style="enable-background:new 0 0 471.701 471.701;"
                    class="inactive-like-icon"
                >
                    <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                        c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                        l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                        C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                        s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                        c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                        C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                </svg>
                <svg
                    width="14" height="14" class="active-like-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="var(--element-color)"
                >
                    <path
                        d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z"
                    />
                </svg>
            </button>
            <button class="more-btn is-center cursor-pointer">
                <div class="tippy-top">Xem thêm</div>
                <svg
                    width="14" height="14"
                    fill="var(--element-color)"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 210 210" xml:space="preserve"
                    style="enable-background:new 0 0 210 210;"
                >
                    <path d="M25,80C11.215,80,0,91.215,0,105s11.215,25,25,25c13.785,0,25-11.215,25-25S38.785,80,25,80z"/>
                    <path d="M105,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S118.785,80,105,80z"/>
                    <path d="M185,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S198.785,80,185,80z"/>
                </svg>
            </button>
        </div>
      </div>`;
      var singerName = temp.querySelectorAll(".singer-list")[i];
      if (nextSongList[i].singer.length === 1) {
        singerName.innerHTML = `<span class="singer-name">${nextSongList[i].singer}</span>`;
      } else {
        for (let j = 0; j < nextSongList[i].singer.length - 1; j++) {
          singerName.innerHTML += `<span class="singer-name">${nextSongList[i].singer[j]}</span>, `;
        }
        singerName.innerHTML += `<span class="singer-name">${
          nextSongList[i].singer[nextSongList[i].singer.length - 1]
        }</span>`;
      }
    }
    sidebarNextList.innerHTML = temp.innerHTML;
  } else {
    sidebarNextList.innerHTML = " ";
  }
}

function playSongPrev(music) {
  var index = prevSongList.indexOf(music);
  nextSongList = [
    ...prevSongList.slice(index + 1, prevSongList.length + 1),
    ...nextSongList,
  ];
  prevSongList = prevSongList.slice(0, index + 1);
  loadFooterSong();
  loadPrevSongList();
  loadNextSongList();
  playBtn.click();
}

function playSongNext(music) {
  var index = nextSongList.indexOf(music);
  prevSongList = [...prevSongList, ...nextSongList.slice(0, index + 1)];
  nextSongList = nextSongList.slice(index + 1, nextSongList.length + 1);
  loadFooterSong();
  loadPrevSongList();
  loadNextSongList();
  playBtn.click();
}

loadFooterSong();
loadPrevSongList();
loadNextSongList();

nextBtn.addEventListener("click", function () {
  prevSongList.push(nextSongList[0]);
  nextSongList.shift();
  loadFooterSong();
  loadPrevSongList();
  loadNextSongList();
  playBtn.click();
});

prevBtn.addEventListener("click", function () {
  nextSongList.unshift(prevSongList[prevSongList.length - 1]);
  prevSongList.pop();
  loadFooterSong();
  loadPrevSongList();
  loadNextSongList();
  playBtn.click();
});

/* Footer play song */
var playBtn = document.querySelector(".footer-center__list-icon .play-btn"),
  pauseBtn = document.querySelector(".footer-center__list-icon .pause-btn"),
  randomBtn = document.querySelector(".footer-center__list-icon .random-btn"),
  repeatBtn = document.querySelector(".footer-center__list-icon .repeat-btn");
var progress = document.querySelector(".progress");
var isPlaying = false,
  progressCount;

playBtn.addEventListener("click", function () {
  isPlaying = true;
  playBtn.style.display = "none";
  pauseBtn.style.display = "flex";
  document.querySelector(
    ".sidebar-right__song-item.active .play-icon"
  ).style.display = "none";
  document.querySelector(
    ".sidebar-right__song-item.active .playing-song-icon"
  ).style.display = "block";
  song.play();
});

pauseBtn.addEventListener("click", function () {
  isPlaying = false;
  playBtn.style.display = "flex";
  pauseBtn.style.display = "none";
  document.querySelector(
    ".sidebar-right__song-item.active .play-icon"
  ).style.display = "block";
  document.querySelector(
    ".sidebar-right__song-item.active .playing-song-icon"
  ).style.display = "none";
  song.pause();
});

song.onended = function () {
  if (repeatBtn.classList.contains("active")) {
    song.play();
  } else {
    nextBtn.click();
  }
};

song.ontimeupdate = function () {
  if (song.duration) {
    var currentMinute = document.querySelector(".current-time .minute"),
      currentSecond = document.querySelector(".current-time .second"),
      remainingMinute = document.querySelector(".remaining-time .minute"),
      remainingSecond = document.querySelector(".remaining-time .second");
    var currentTimeMinute = Math.floor(song.currentTime / 60),
      currentTimeSecond = Math.floor(song.currentTime) % 60,
      remainingTimeMinute = Math.floor((song.duration - song.currentTime) / 60),
      remainingTimeSecond = Math.floor(song.duration - song.currentTime) % 60;
    currentMinute.innerHTML =
      currentTimeMinute > 9 ? currentTimeMinute : "0" + currentTimeMinute;
    currentSecond.innerHTML =
      currentTimeSecond > 9 ? currentTimeSecond : "0" + currentTimeSecond;
    remainingMinute.innerHTML =
      remainingTimeMinute > 9 ? remainingTimeMinute : "0" + remainingTimeMinute;
    remainingSecond.innerHTML =
      remainingTimeSecond > 9 ? remainingTimeSecond : "0" + remainingTimeSecond;
    const progressPercent = Math.floor(
      (song.currentTime / song.duration) * 1000
    );
    progress.value = progressPercent;
    var val = progress.value / 1000;
    progress.style.backgroundImage =
      "-webkit-gradient(linear, left top, right top, color-stop(" +
      val +
      ", var(--element-color)), color-stop(" +
      val +
      ", #5a5560)";
  }
  var effect = document.querySelector(".album-image");
  if (song.paused) {
    if (effect.classList.contains("active")) {
      effect.classList.remove("active");
    }
  } else {
    if (!effect.classList.contains("active")) {
      effect.classList.add("active");
    }
  }
};

progress.onchange = function (e) {
  var changeTime = (song.duration / 1000) * e.target.value;
  song.currentTime = changeTime;
};

function activeOnClick() {
  this.classList.toggle("active");
}

randomBtn.addEventListener("click", function () {
  randomBtn.classList.toggle("active");
  if (randomBtn.classList.contains("active")) {
    tempPrevSongList = prevSongList;
    tempNextSongList = nextSongList;
    prevSongList = [tempPrevSongList[tempPrevSongList.length - 1]];
    nextSongList = [...tempPrevSongList.slice(0, -1), ...tempNextSongList].sort(
      () => 0.5 - Math.random()
    );
    loadPrevSongList();
    loadNextSongList();
  } else {
    var songList = [...tempPrevSongList, ...tempNextSongList];
    prevSongList = songList.slice(
      0,
      songList.indexOf(prevSongList[prevSongList.length - 1]) + 1
    );
    nextSongList = songList.slice(
      songList.indexOf(prevSongList[prevSongList.length - 1]) + 1,
      songList.length + 1
    );
    loadPrevSongList();
    loadNextSongList();
  }
});

repeatBtn.addEventListener("click", activeOnClick);

/* Footer like icon */
var isAdded = false;
var footerLikeBtn = document.querySelector(
    ".footer-left .reactive-icon .like-btn"
  ),
  footerInactiveIcon = footerLikeBtn.querySelector(".inactive-like-icon"),
  footerActiveIcon = footerLikeBtn.querySelector(".active-like-icon");
var rightLikeBtns = document.querySelectorAll(
  ".sidebar-right .reactive-icon .like-btn"
);

footerLikeBtn.addEventListener("click", function () {
  if (!isAdded) {
    footerInactiveIcon.style.display = "none";
    footerActiveIcon.style.display = "block";
    document.querySelector(
      ".sidebar-right__song-item.active .reactive-icon .like-btn .inactive-like-icon"
    ).style.display = "none";
    document.querySelector(
      ".sidebar-right__song-item.active .reactive-icon .like-btn .active-like-icon"
    ).style.display = "block";
    notificationContainer.innerHTML = `<div class="notification-add-song is-space-between">
      <span class="notified-content">Đã thêm bài hát vào thư viện</span>
      <svg
          fill="var(--element-color)" height="12" width="12"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 460.775 460.775" xml:space="preserve"
          class="cancel-icon"
      >
          <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
              c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
              c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
              c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
              l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
              c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
      </svg>
    </div>`;
    var cancelBtn = document.querySelector(
      ".notification-container .cancel-icon"
    );
    cancelBtn.addEventListener("click", function () {
      cancelBtn.parentElement.remove();
    });
    setTimeout(function () {
      notificationContainer
        .querySelector(".notification-add-song")
        .classList.add("is-on");
    }, 0);
    if (document.querySelector(".notification-add-song")) {
      setTimeout(function () {
        notificationContainer
          .querySelector(".notification-add-song")
          .classList.remove("is-on");
      }, 3000);
    }
    isAdded = true;
  } else {
    footerInactiveIcon.style.display = "block";
    footerActiveIcon.style.display = "none";
    document.querySelector(
      ".sidebar-right__song-item.active .reactive-icon .like-btn .inactive-like-icon"
    ).style.display = "block";
    document.querySelector(
      ".sidebar-right__song-item.active .reactive-icon .like-btn .active-like-icon"
    ).style.display = "none";
    notificationContainer.innerHTML = `<div class="notification-remove-song is-space-between">
      <span class="notified-content">Đã xóa bài hát khỏi thư viện</span>
      <svg
          fill="var(--element-color)" height="12" width="12"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 460.775 460.775" xml:space="preserve"
          class="cancel-icon"
      >
          <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
              c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
              c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
              c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
              l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
              c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
      </svg>
    </div>`;
    var cancelBtn = document.querySelector(
      ".notification-container .cancel-icon"
    );
    cancelBtn.addEventListener("click", function () {
      cancelBtn.parentElement.remove();
    });
    setTimeout(function () {
      notificationContainer
        .querySelector(".notification-remove-song")
        .classList.add("is-on");
    }, 0);
    if (document.querySelector(".notification-remove-song")) {
      setTimeout(function () {
        notificationContainer
          .querySelector(".notification-remove-song")
          .classList.remove("is-on");
      }, 3000);
    }
    isAdded = false;
  }
});

rightLikeBtns.forEach((rightLikeBtn) => {
  rightLikeBtn.addEventListener("click", function () {
    clearTimeout(timeOut);
    console.log("clicked");
    if (rightLikeBtn.classList.contains("inactive")) {
      if (
        rightLikeBtn ===
        document.querySelector(
          ".sidebar-right__song-item.active .reactive-icon .like-btn"
        )
      ) {
        footerInactiveIcon.style.display = "none";
        footerActiveIcon.style.display = "block";
      }
      rightLikeBtn.querySelector(".inactive-like-icon").style.display = "none";
      rightLikeBtn.querySelector(".active-like-icon").style.display = "block";
      notificationContainer.innerHTML = `<div class="notification-add-song is-space-between">
        <span class="notified-content">Đã thêm bài hát vào thư viện</span>
        <svg
            fill="var(--element-color)" height="12" width="12"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 460.775 460.775" xml:space="preserve"
            class="cancel-icon"
        >
            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
        </svg>
      </div>`;
      var cancelBtn = document.querySelector(
        ".notification-container .cancel-icon"
      );
      cancelBtn.addEventListener("click", function () {
        cancelBtn.parentElement.remove();
      });
      setTimeout(function () {
        notificationContainer
          .querySelector(".notification-add-song")
          .classList.add("is-on");
      }, 0);
      if (notificationContainer.querySelector(".notification-add-song")) {
        timeOut = setTimeout(function () {
          notificationContainer
            .querySelector(".notification-add-song")
            .classList.remove("is-on");
        }, 3000);
      }
      rightLikeBtn.classList.remove("inactive");
    } else {
      if (
        rightLikeBtn ===
        document.querySelector(
          ".sidebar-right__song-item.active .reactive-icon .like-btn"
        )
      ) {
        footerInactiveIcon.style.display = "block";
        footerActiveIcon.style.display = "none";
      }
      rightLikeBtn.querySelector(".inactive-like-icon").style.display = "block";
      rightLikeBtn.querySelector(".active-like-icon").style.display = "none";
      notificationContainer.innerHTML = `<div class="notification-remove-song is-space-between">
        <span class="notified-content">Đã xóa bài hát khỏi thư viện</span>
        <svg
            fill="var(--element-color)" height="12" width="12"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 460.775 460.775" xml:space="preserve"
            class="cancel-icon"
        >
            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
        </svg>
      </div>`;
      var cancelBtn = document.querySelector(
        ".notification-container .cancel-icon"
      );
      cancelBtn.addEventListener("click", function () {
        cancelBtn.parentElement.remove();
      });
      setTimeout(function () {
        notificationContainer
          .querySelector(".notification-remove-song")
          .classList.add("is-on");
      }, 0);
      if (notificationContainer.querySelector(".notification-remove-song")) {
        timeOut = setTimeout(function () {
          notificationContainer
            .querySelector(".notification-remove-song")
            .classList.remove("is-on");
        }, 3000);
      }
      rightLikeBtn.classList.add("inactive");
    }
  });
});

/* Volume */
var volumeBtn = document.querySelector(".footer-right__volume-btn"),
  muteBtn = document.querySelector(".footer-right__volume .mute-btn"),
  volume = document.querySelector(".footer-right__volume-level");
var currentVolume;

volumeBtn.addEventListener("click", function () {
  currentVolume = volume.value;
  volumeBtn.style.display = "none";
  muteBtn.style.display = "flex";
  volume.value = 0;
  song.volume = 0;
  volume.style.backgroundImage =
    "-webkit-gradient(linear, left top, right top, color-stop(0, var(--element-color)), color-stop(0, #5a5560)";
});

muteBtn.addEventListener("click", function () {
  volumeBtn.style.display = "flex";
  muteBtn.style.display = "none";
  volume.value = currentVolume;
  var val = volume.value / 100;
  song.volume = val;
  volume.style.backgroundImage =
    "-webkit-gradient(linear, left top, right top, color-stop(" +
    val +
    ", var(--element-color)), color-stop(" +
    val +
    ", #5a5560)";
});

volume.onchange = function (e) {
  if (e.target.value == 0) {
    volumeBtn.style.display = "none";
    muteBtn.style.display = "flex";
  } else {
    volumeBtn.style.display = "flex";
    muteBtn.style.display = "none";
  }
  var val = volume.value / 100;
  volume.style.backgroundImage =
    "-webkit-gradient(linear, left top, right top, " +
    "color-stop(" +
    val +
    ", var(--element-color)), color-stop(" +
    val +
    ", #5a5560)";
  song.volume = val;
};

var playListBtn = document.querySelector(
  ".footer-right__playlist-box .playlist-btn"
);
var sideBarRight = document.querySelector("aside.sidebar-right");
var mainBody = document.querySelector(".main-body");
var isShow = false;

playListBtn.addEventListener("click", function () {
  playListBtn.classList.toggle("active");
  if (!isShow) {
    sideBarRight.style.display = "flex";
    mainBody.style.transform = "scale(calc(45 / 56))";
    document.querySelector("header.header").style.width = "1213px";
    document.querySelector("aside.sidebar-right").style.width = "330px";
    isShow = true;
    document
      .querySelectorAll(".background")
      .forEach((item) => item.classList.replace("full", "scaled"));
  } else {
    mainBody.style.transform = "scale(1.0)";
    document.querySelector("header.header").style.width = "1560px";
    document.querySelector("aside.sidebar-right").style.width = "0";
    setTimeout(function () {
      sideBarRight.style.display = "none";
    }, 500);
    isShow = false;
    document
      .querySelectorAll(".background")
      .forEach((item) => item.classList.replace("scaled", "full"));
  }
});

/*Topic*/
var mainLBG = document.querySelector(".background-left"),
  mainCBG = document.querySelector(".background-center"),
  mainRBG = document.querySelector(".background-right");
var footer = document.querySelector(".footer");
var topic = document.querySelector(".topic");
var header = document.querySelector("header.header");
var cover = document.querySelector(".cover");

function applyBtn(url, bcolor, fcolor, tcolor, scolor, acolor, ecolor) {
  if (url) {
    var img1 = document.createElement("img"),
      img2 = document.createElement("img"),
      img3 = document.createElement("img");
    img1.src = url;
    img2.src = url;
    img3.src = url;
    mainCBG.appendChild(img1);
    mainLBG.appendChild(img2);
    mainRBG.appendChild(img3);
  } else {
    mainCBG.innerHTML = "";
    mainLBG.innerHTML = "";
    mainRBG.innerHTML = "";
  }
  if (bcolor) {
    mainLBG.style.backgroundColor = `${bcolor}`;
    mainCBG.style.backgroundColor = `${bcolor}`;
    mainRBG.style.backgroundColor = `${bcolor}`;
  } else {
    mainLBG.style.backgroundColor = "tranparent";
    mainCBG.style.backgroundColor = "tranparent";
    mainRBG.style.backgroundColor = "tranparent";
  }
  footer.style.backgroundColor = `${fcolor}`;
  topic.style.backgroundColor = `${tcolor}`;
  document.documentElement.style.setProperty("--main-board-color", tcolor);
  document.documentElement.style.setProperty("--scrollbar-color", scolor);
  document.documentElement.style.setProperty("--active-color", acolor);
  document.documentElement.style.setProperty("--element-color", ecolor);
}

document.body.onscroll = function () {
  if (document.documentElement.scrollTop === 0) {
    header.style.backgroundColor = "transparent";
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, .4)";
  }
};

var topicBtn = document.querySelector(".topic-btn");
topicBtn.addEventListener("click", function () {
  topic.style.display = "block";
  cover.style.display = "block";
});

cover.onclick = function (e) {
  if (!topic.contains(e.target)) {
    topic.style.display = "none";
    cover.style.display = "none";
  }
};

setInterval(function () {
  var firstImg = document.querySelector(".list-song-img img.first"),
    secondImg = document.querySelector(".list-song-img img.second"),
    thirdImg = document.querySelector(".list-song-img img.third"),
    fourthImg = document.querySelector(".list-song-img img.fourth"),
    fifthImg = document.querySelector(".list-song-img img.fifth"),
    sixthImg = document.querySelector(".list-song-img img.sixth"),
    seventhImg = document.querySelector(".list-song-img img.seventh");
  firstImg.classList.replace("first", "seventh");
  secondImg.classList.replace("second", "first");
  thirdImg.classList.replace("third", "second");
  fourthImg.classList.replace("fourth", "third");
  fifthImg.classList.replace("fifth", "fourth");
  sixthImg.classList.replace("sixth", "fifth");
  seventhImg.classList.replace("seventh", "sixth");
}, 4000);

/* Play Song Function */
function playSong(songlist, music, fromlink) {
  document.querySelector(".sidebar-right__note .from-link").innerHTML =
    fromlink;
  var index = songlist.indexOf(music);
  prevSongList = [];
  nextSongList = [];
  for (let i = 0; i <= index; i++) {
    prevSongList.push(songlist[i]);
  }
  for (let i = index + 1; i < songlist.length; i++) {
    nextSongList.push(songlist[i]);
  }
  loadFooterSong();
  loadPrevSongList();
  loadNextSongList();
  playBtn.click();
}
