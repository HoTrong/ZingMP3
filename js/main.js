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

var radioItems = document.querySelectorAll(".special-radio__list-item");
var radioImages = document.querySelectorAll(".special-radio__main-img");
var popularSingers = document.querySelectorAll(".popular-singer__list-item");
var newSongs = document.querySelectorAll(".new-song__list-item");
var notitleSongs = document.querySelectorAll(
  "section.notitle .song-list__item"
);
var partnerItems = document.querySelectorAll(".partners-item");
var chartData = document.querySelector(".exploration-page .chart-data");

function resizeExploration() {
  radioItems.forEach((radioItem) => {
    radioItem.style.width =
      (200 / 1550) *
        document.querySelector(".special-radio__list").offsetWidth +
      "px";
  });

  radioImages.forEach((radioImage) => {
    radioImage.style.height = radioImage.offsetWidth - 8 + "px";
  });

  for (let i = radioImages.length - 3; i < radioImages.length; i++) {
    radioImages[i].style.width = radioImages[i].style.height =
      radioImages[0].offsetWidth + "px";
  }

  popularSingers.forEach((popularSinger) => {
    popularSinger.style.width =
      (200 / 1550) *
        document.querySelector(".popular-singer__container").offsetWidth +
      "px";
  });

  newSongs.forEach((newSong) => {
    newSong.style.width =
      (500 / 1550) *
        document.querySelector(".new-song__container").offsetWidth -
      30 +
      "px";
  });

  notitleSongs.forEach((notitleSong) => {
    notitleSong.style.width =
      (290 / 1550) *
        document.querySelector(".notitle__song-container").offsetWidth +
      "px";
  });
  partnerItems.forEach((partnerItem) => {
    partnerItem.style.height = (95 / 169) * partnerItem.offsetWidth + "px";
  });

  chartData.style.transform =
    "scale(" + document.querySelector(".right-chart").offsetWidth / 1000 + ")";
  if (window.innerWidth > 1200) {
    document.querySelector(".sidebar-left").innerHTML = `
    <div class="sidebar-left__logo">
      <img src="./assets/Images/Logo/logo-dark.svg">
    </div>
    <div class="sidebar-left__wrapper">
        <ul class="sidebar-left__menu">
            <li class="sidebar-left__menu-item is-space-between cursor-pointer" onclick="changePage(1)">
                <a href="#personal-page" class="page-link is-space-between">
                    <div class="selection is-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.41666 2.29166C5.07148 2.29166 4.79166 2.57148 4.79166 2.91666C4.79166 3.26183 5.07148 3.54166 5.41666 3.54166H14.5833C14.9285 3.54166 15.2083 3.26183 15.2083 2.91666C15.2083 2.57148 14.9285 2.29166 14.5833 2.29166H5.41666ZM2.5 8.33333C2.5 6.60744 3.89911 5.20833 5.625 5.20833H14.375C16.1009 5.20833 17.5 6.60744 17.5 8.33333V14.1667C17.5 15.8925 16.1009 17.2917 14.375 17.2917H5.625C3.89911 17.2917 2.5 15.8925 2.5 14.1667V8.33333ZM5.625 6.45833C4.58947 6.45833 3.75 7.29779 3.75 8.33333V14.1667C3.75 15.2022 4.58946 16.0417 5.625 16.0417H14.375C15.4105 16.0417 16.25 15.2022 16.25 14.1667V8.33333C16.25 7.29779 15.4105 6.45833 14.375 6.45833H5.625ZM12.5 7.3C11.3494 7.3 10.4166 8.23274 10.4166 9.38333V10.8832C10.1041 10.7235 9.75006 10.6333 9.37496 10.6333C8.10931 10.6333 7.0833 11.6594 7.0833 12.925C7.0833 14.1907 8.10931 15.2167 9.37496 15.2167C10.5759 15.2167 11.561 14.293 11.6587 13.1173C11.6639 13.0847 11.6666 13.0513 11.6666 13.0173V9.38333C11.6666 8.92309 12.0397 8.55 12.5 8.55H13.2291C13.5743 8.55 13.8541 8.27018 13.8541 7.925C13.8541 7.57982 13.5743 7.3 13.2291 7.3H12.5ZM8.3333 12.925C8.3333 12.3497 8.79967 11.8833 9.37496 11.8833C9.95026 11.8833 10.4166 12.3497 10.4166 12.925C10.4166 13.5003 9.95026 13.9667 9.37496 13.9667C8.79967 13.9667 8.3333 13.5003 8.3333 12.925Z">
                            </path>
                        </svg>
                        <span class="content">Cá nhân</span>
                    </div>
                    <span class="play-icon is-center">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000"
                            enable-background="new 0 0 1000 1000" xml:space="preserve" class="play-icon"
                            fill="var(--element-color)">
                            <path
                                d="M417.5,283c-11.6-11.8-39.6-19.6-39.6,3v427.9c0,23,28,14.6,39.6,3l268.2-195.7c11.6-11.8,11.6-30.7,0-42.5L417.5,283z" />
                            <path
                                d="M500,10C229.8,10,10,229.8,10,500s219.8,490,490,490s490-219.8,490-490S770.2,10,500,10z M500,968C242,968,32.1,758.1,32.1,500C32.1,242,242,32,500,32s467.9,210,467.9,468S758,968,500,968z" />
                        </svg>
                    </span>
                </a>
            </li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer active" onclick="changePage(2)">
                <a href="#exploration-page" class="page-link is-space-between">
                    <div class="selection is-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.70831 9.99998C2.70831 5.9729 5.9729 2.70831 9.99997 2.70831C14.027 2.70831 17.2916 5.9729 17.2916 9.99998C17.2916 14.0271 14.027 17.2916 9.99997 17.2916C5.9729 17.2916 2.70831 14.0271 2.70831 9.99998ZM9.99997 1.45832C5.28254 1.45832 1.45831 5.28255 1.45831 9.99998C1.45831 14.7174 5.28254 18.5416 9.99997 18.5416C14.7174 18.5416 18.5416 14.7174 18.5416 9.99998C18.5416 5.28255 14.7174 1.45832 9.99997 1.45832ZM7.70832 9.99999C7.70832 8.73433 8.73433 7.70832 9.99998 7.70832C11.2656 7.70832 12.2916 8.73433 12.2916 9.99999C12.2916 11.2656 11.2656 12.2917 9.99998 12.2917C8.73433 12.2917 7.70832 11.2656 7.70832 9.99999ZM9.99998 6.45832C8.04397 6.45832 6.45832 8.04398 6.45832 9.99999C6.45832 11.956 8.04397 13.5417 9.99998 13.5417C11.956 13.5417 13.5416 11.956 13.5416 9.99999C13.5416 8.04398 11.956 6.45832 9.99998 6.45832Z">
                            </path>
                        </svg>
                        <span class="content">Khám phá</span>
                    </div>
                    <span class="play-icon is-center">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000"
                            enable-background="new 0 0 1000 1000" xml:space="preserve" class="play-icon"
                            fill="var(--element-color)">
                            <path
                                d="M417.5,283c-11.6-11.8-39.6-19.6-39.6,3v427.9c0,23,28,14.6,39.6,3l268.2-195.7c11.6-11.8,11.6-30.7,0-42.5L417.5,283z" />
                            <path
                                d="M500,10C229.8,10,10,229.8,10,500s219.8,490,490,490s490-219.8,490-490S770.2,10,500,10z M500,968C242,968,32.1,758.1,32.1,500C32.1,242,242,32,500,32s467.9,210,467.9,468S758,968,500,968z" />
                        </svg>
                    </span>
                </a>
            </li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer" onclick="changePage(3)">
                <a href="#zing-chart-page" class="page-link is-space-between">
                    <div class="selection is-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.46731 9.60671C1.67382 5.07145 5.41552 1.45831 10.0015 1.45831C11.7132 1.45831 13.3091 1.96239 14.6466 2.83038C14.9361 3.01829 15.0185 3.40535 14.8306 3.6949C14.6427 3.98444 14.2556 4.06683 13.9661 3.87892C12.8251 3.13843 11.4645 2.70831 10.0015 2.70831C6.08683 2.70831 2.89227 5.79279 2.71601 9.66357C2.70031 10.0084 2.40805 10.2752 2.06323 10.2595C1.71841 10.2438 1.45161 9.95153 1.46731 9.60671ZM17.9396 9.73926C18.2844 9.75478 18.5513 10.0469 18.5358 10.3917C18.3316 14.9291 14.5889 18.5446 10.0015 18.5446C8.24744 18.5446 6.61514 18.0154 5.2579 17.1077C4.97097 16.9158 4.89392 16.5277 5.08581 16.2407C5.27769 15.9538 5.66585 15.8768 5.95278 16.0687C7.11078 16.8431 8.50244 17.2946 10.0015 17.2946C13.9174 17.2946 17.1128 14.2081 17.2871 10.3355C17.3026 9.9907 17.5947 9.72374 17.9396 9.73926ZM17.2946 6.71652C17.2946 6.16877 16.8505 5.72474 16.3028 5.72474C15.755 5.72474 15.311 6.16877 15.311 6.71652C15.311 7.26427 15.755 7.7083 16.3028 7.7083C16.8505 7.7083 17.2946 7.26427 17.2946 6.71652ZM16.3028 4.47474C17.5409 4.47474 18.5446 5.47842 18.5446 6.71652C18.5446 7.95462 17.5409 8.9583 16.3028 8.9583C15.9339 8.9583 15.5859 8.86923 15.279 8.71142L12.9236 12.0926C12.8178 12.2444 12.6502 12.3415 12.466 12.3579C12.2817 12.3742 12.0996 12.3081 11.9688 12.1773L11.1364 11.3449L10.188 12.7668C10.0755 12.9355 9.88811 13.0392 9.6854 13.0448C9.48268 13.0504 9.28984 12.9573 9.16814 12.7951L7.54354 10.6298L5.65318 12.5201C5.62653 12.5468 5.59807 12.5705 5.5682 12.5913C5.66913 12.8394 5.72474 13.1107 5.72474 13.3949C5.72474 14.5731 4.76967 15.5281 3.59153 15.5281C2.41339 15.5281 1.45831 14.5731 1.45831 13.3949C1.45831 12.2168 2.41339 11.2617 3.59153 11.2617C4.03211 11.2617 4.44149 11.3953 4.7814 11.6241L7.16913 9.2364C7.29723 9.1083 7.47462 9.04208 7.65533 9.05491C7.83603 9.06774 8.00229 9.15834 8.11101 9.30326L9.63808 11.3386L10.5194 10.0172C10.6233 9.86145 10.7916 9.76047 10.9779 9.74204C11.1642 9.72361 11.349 9.78968 11.4813 9.92206L12.3247 10.7654L14.3625 7.84021C14.1708 7.50984 14.061 7.126 14.061 6.71652C14.061 5.47842 15.0647 4.47474 16.3028 4.47474ZM3.59153 12.5117C4.07931 12.5117 4.47474 12.9071 4.47474 13.3949C4.47474 13.8827 4.07931 14.2781 3.59153 14.2781C3.10374 14.2781 2.70831 13.8827 2.70831 13.3949C2.70831 12.9071 3.10374 12.5117 3.59153 12.5117Z">
                            </path>
                        </svg>
                        <span class="content">#zingchart</span>
                    </div>
                    <span class="play-icon is-center">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000"
                            enable-background="new 0 0 1000 1000" xml:space="preserve" class="play-icon"
                            fill="var(--element-color)">
                            <path
                                d="M417.5,283c-11.6-11.8-39.6-19.6-39.6,3v427.9c0,23,28,14.6,39.6,3l268.2-195.7c11.6-11.8,11.6-30.7,0-42.5L417.5,283z" />
                            <path
                                d="M500,10C229.8,10,10,229.8,10,500s219.8,490,490,490s490-219.8,490-490S770.2,10,500,10z M500,968C242,968,32.1,758.1,32.1,500C32.1,242,242,32,500,32s467.9,210,467.9,468S758,968,500,968z" />
                        </svg>
                    </span>
                </a>
            </li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer">
                <div class="selection is-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.89354 2.23314C9.92588 2.5768 9.67351 2.88161 9.32985 2.91395C5.73344 3.25241 2.91669 6.28764 2.91669 9.98335C2.91669 13.9063 6.08978 17.0842 10.0012 17.0842C13.9126 17.0842 17.0857 13.9063 17.0857 9.98335C17.0857 8.64722 16.7181 7.39911 16.0792 6.33293C15.9018 6.03684 15.998 5.65298 16.2941 5.47555C16.5902 5.29813 16.974 5.39432 17.1515 5.69041C17.9035 6.94541 18.3357 8.41479 18.3357 9.98335C18.3357 14.5941 14.6055 18.3342 10.0012 18.3342C5.39694 18.3342 1.66669 14.5941 1.66669 9.98335C1.66669 5.63873 4.9781 2.06798 9.21272 1.66945C9.55638 1.63711 9.86119 1.88948 9.89354 2.23314ZM9.888 5.16111C9.94053 5.50227 9.70655 5.82142 9.3654 5.87395C7.37765 6.18003 5.8535 7.90296 5.8535 9.98317C5.8535 11.1398 6.3238 12.1849 7.08437 12.9391C7.32947 13.1821 7.33114 13.5779 7.08809 13.823C6.84504 14.0681 6.44932 14.0697 6.20422 13.8267C5.21637 12.8472 4.6035 11.4862 4.6035 9.98317C4.6035 7.27863 6.58507 5.03735 9.17516 4.63851C9.51631 4.58598 9.83546 4.81996 9.888 5.16111ZM13.9577 7.23583C14.2645 7.07768 14.6415 7.19821 14.7996 7.50503C15.1826 8.24813 15.3986 9.09131 15.3986 9.98317C15.3986 12.9685 12.9833 15.3908 10.0011 15.3908C9.65588 15.3908 9.37606 15.111 9.37606 14.7658C9.37606 14.4206 9.65588 14.1408 10.0011 14.1408C12.2904 14.1408 14.1486 12.2806 14.1486 9.98317C14.1486 9.29509 13.9824 8.64781 13.6885 8.07772C13.5304 7.7709 13.6509 7.39397 13.9577 7.23583ZM11.9823 1.86989C11.647 1.78796 11.3087 1.99337 11.2268 2.32868C11.2095 2.39926 11.205 2.46996 11.2118 2.53838V7.83719C10.8544 7.63452 10.4414 7.51878 10.0011 7.51878C8.64088 7.51878 7.54048 8.62341 7.54048 9.98326C7.54048 11.3431 8.64088 12.4477 10.0011 12.4477C11.3613 12.4477 12.4617 11.3431 12.4617 9.98326C12.4617 9.95673 12.4613 9.9303 12.4604 9.90398C12.4613 9.8904 12.4618 9.8767 12.4618 9.8629V3.32221C13.1239 3.56802 13.7396 3.91035 14.292 4.33243C14.5663 4.54201 14.9585 4.48956 15.1681 4.21528C15.3777 3.94101 15.3252 3.54877 15.051 3.3392C14.1541 2.65392 13.1137 2.14635 11.9823 1.86989ZM10.0011 8.76878C9.33373 8.76878 8.79048 9.31128 8.79048 9.98326C8.79048 10.6552 9.33373 11.1977 10.0011 11.1977C10.6684 11.1977 11.2117 10.6552 11.2117 9.98326C11.2117 9.31128 10.6684 8.76878 10.0011 8.76878Z">
                        </path>
                    </svg>
                    <span class="content">Radio</span>
                    <span class="live">LIVE</span>
                </div>
                <span class="play-icon is-center">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000"
                        enable-background="new 0 0 1000 1000" xml:space="preserve" class="play-icon"
                        fill="var(--element-color)">
                        <path
                            d="M417.5,283c-11.6-11.8-39.6-19.6-39.6,3v427.9c0,23,28,14.6,39.6,3l268.2-195.7c11.6-11.8,11.6-30.7,0-42.5L417.5,283z" />
                        <path
                            d="M500,10C229.8,10,10,229.8,10,500s219.8,490,490,490s490-219.8,490-490S770.2,10,500,10z M500,968C242,968,32.1,758.1,32.1,500C32.1,242,242,32,500,32s467.9,210,467.9,468S758,968,500,968z" />
                    </svg>
                </span>
            </li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer">
                <div class="selection is-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.62494 2.5C3.89905 2.5 2.49994 3.89911 2.49994 5.625V14.372C2.49994 16.0979 3.89905 17.497 5.62494 17.497H14.3719C16.0978 17.497 17.4969 16.0979 17.4969 14.372V5.625C17.4969 3.89911 16.0978 2.5 14.3719 2.5H5.62494ZM3.74994 5.625C3.74994 4.58946 4.5894 3.75 5.62494 3.75H14.3719C15.4075 3.75 16.2469 4.58946 16.2469 5.625V14.372C16.2469 15.4075 15.4075 16.247 14.3719 16.247H5.62494C4.5894 16.247 3.74994 15.4075 3.74994 14.372V5.625ZM5.83334 4.99998C5.48816 4.99998 5.20834 5.2798 5.20834 5.62498C5.20834 5.97016 5.48816 6.24998 5.83334 6.24998H10C10.3452 6.24998 10.625 5.97016 10.625 5.62498C10.625 5.2798 10.3452 4.99998 10 4.99998H5.83334ZM5.20834 8.12497C5.20834 7.77979 5.48816 7.49997 5.83334 7.49997H14.1667C14.5118 7.49997 14.7917 7.77979 14.7917 8.12497C14.7917 8.47015 14.5118 8.74997 14.1667 8.74997H5.83334C5.48816 8.74997 5.20834 8.47015 5.20834 8.12497ZM6.66667 10.2083C5.86125 10.2083 5.20834 10.8612 5.20834 11.6667V13.3333C5.20834 14.1387 5.86125 14.7917 6.66667 14.7917H13.3333C14.1387 14.7917 14.7917 14.1387 14.7917 13.3333V11.6667C14.7917 10.8612 14.1387 10.2083 13.3333 10.2083H6.66667ZM6.45834 11.6667C6.45834 11.5516 6.55161 11.4583 6.66667 11.4583H13.3333C13.4484 11.4583 13.5417 11.5516 13.5417 11.6667V13.3333C13.5417 13.4484 13.4484 13.5417 13.3333 13.5417H6.66667C6.55161 13.5417 6.45834 13.4484 6.45834 13.3333V11.6667Z">
                        </path>
                    </svg>
                    <span class="content">Theo dõi</span>
                </div>
            </li>
        </ul>
        <div class="divider"></div>
        <ul class="sidebar-left__menu">
            <li class="sidebar-left__menu-item is-space-between cursor-pointer">
                <div class="selection is-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M17.7081 2.91666C17.7081 2.73624 17.6302 2.56463 17.4943 2.44594C17.3584 2.32725 17.1779 2.27308 16.9991 2.29734L10.0928 3.23457L10.0766 3.23699C8.54161 3.48647 7.29148 4.91079 7.29148 6.45832V12.0831C6.7692 11.6908 6.12 11.4583 5.4165 11.4583C3.69061 11.4583 2.2915 12.8574 2.2915 14.5833C2.2915 16.3092 3.69061 17.7083 5.4165 17.7083C7.14239 17.7083 8.5415 16.3092 8.5415 14.5833C8.5415 14.486 8.53705 14.3898 8.52835 14.2947C8.53696 14.2534 8.54148 14.2105 8.54148 14.1667V6.45832C8.54148 5.54773 9.32148 4.63027 10.2696 4.47203L16.4581 3.63221V10.4165C15.9359 10.0241 15.2866 9.79166 14.5831 9.79166C12.8572 9.79166 11.4581 11.1908 11.4581 12.9167C11.4581 14.6425 12.8572 16.0417 14.5831 16.0417C16.3066 16.0417 17.7042 14.6465 17.7081 12.924C17.7081 12.9215 17.7081 12.9191 17.7081 12.9167V2.91666ZM14.5831 11.0417C13.5476 11.0417 12.7081 11.8811 12.7081 12.9167C12.7081 13.9522 13.5476 14.7917 14.5831 14.7917C15.6186 14.7917 16.4581 13.9522 16.4581 12.9167C16.4581 11.8811 15.6186 11.0417 14.5831 11.0417ZM5.4165 12.7083C4.38097 12.7083 3.5415 13.5478 3.5415 14.5833C3.5415 15.6189 4.38097 16.4583 5.4165 16.4583C6.45204 16.4583 7.2915 15.6189 7.2915 14.5833C7.2915 13.5478 6.45204 12.7083 5.4165 12.7083Z">
                        </path>
                    </svg>
                    <span class="content">Nhạc mới</span>
                </div>
                <span class="play-icon is-center">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000"
                        enable-background="new 0 0 1000 1000" xml:space="preserve" class="play-icon"
                        fill="var(--element-color)">
                        <path
                            d="M417.5,283c-11.6-11.8-39.6-19.6-39.6,3v427.9c0,23,28,14.6,39.6,3l268.2-195.7c11.6-11.8,11.6-30.7,0-42.5L417.5,283z" />
                        <path
                            d="M500,10C229.8,10,10,229.8,10,500s219.8,490,490,490s490-219.8,490-490S770.2,10,500,10z M500,968C242,968,32.1,758.1,32.1,500C32.1,242,242,32,500,32s467.9,210,467.9,468S758,968,500,968z" />
                    </svg>
                </span>
            </li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer">
                <div class="selection is-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                        <rect x="2.49994" y="2.5" width="6.31579" height="6.31579" rx="1.57895"
                            stroke="var(--element-color)" stroke-width="1.25"></rect>
                        <rect x="11.1841" y="2.5" width="6.31579" height="6.31579" rx="3.15789"
                            stroke="var(--element-color)" stroke-width="1.25"></rect>
                        <path
                            d="M5.85362 17.2727C5.74625 17.3126 5.56941 17.3126 5.46204 17.2727C4.54625 16.9434 2.49994 15.5695 2.49994 13.241C2.49994 12.2132 3.28625 11.3816 4.25573 11.3816C4.83046 11.3816 5.33888 11.6743 5.65783 12.1267C5.97678 11.6743 6.48836 11.3816 7.05994 11.3816C8.02941 11.3816 8.81572 12.2132 8.81572 13.241C8.81572 15.5695 6.76941 16.9434 5.85362 17.2727Z"
                            stroke="var(--element-color)" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path
                            d="M11.9736 11.4563L11.9736 17.2279C11.9736 17.3491 12.1045 17.4251 12.2098 17.365L17.26 14.4792C17.3661 14.4186 17.3661 14.2656 17.26 14.205L12.2098 11.3192C12.1045 11.259 11.9736 11.335 11.9736 11.4563Z"
                            stroke="var(--element-color)" stroke-width="1.25"></path>
                    </svg>
                    <span class="content">Thể loại</span>
                </div>
            </li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer">
                <div class="selection is-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.99995 14.1666L5.84903 16.3489C5.54335 16.5096 5.18609 16.2501 5.24446 15.9097L6.03722 11.2876L2.67905 8.01415C2.43175 7.77309 2.56821 7.3531 2.90997 7.30344L7.55085 6.62908L9.62631 2.42373C9.77915 2.11405 10.2208 2.11405 10.3736 2.42373L12.4491 6.62908L17.0899 7.30344C17.4317 7.3531 17.5682 7.77309 17.3209 8.01415L13.9627 11.2876L14.7554 15.9097C14.8138 16.2501 14.4566 16.5096 14.1509 16.3489L9.99995 14.1666Z"
                            stroke="var(--element-color)" stroke-width="1.25"></path>
                    </svg>
                    <span class="content">Top 100</span>
                </div>
            </li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer">
                <div class="selection is-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.99991 4.375C8.4965 4.375 6.99079 4.42069 5.75263 4.47353C4.73349 4.51703 4.39788 4.54283 4.067 4.707C3.79604 4.84144 3.4637 5.14441 3.30483 5.40181C3.10952 5.71825 3.05877 6.01406 2.93416 6.9311C2.80727 7.86492 2.70825 8.93595 2.70825 10C2.70825 11.064 2.80727 12.1351 2.93416 13.0689C3.05877 13.9859 3.10952 14.2817 3.30483 14.5982C3.4637 14.8556 3.79604 15.1585 4.067 15.293C4.39788 15.4572 4.73349 15.483 5.75263 15.5265C6.99079 15.5793 8.4965 15.625 9.99991 15.625C11.5033 15.625 13.009 15.5793 14.2472 15.5265C15.2663 15.483 15.6019 15.4572 15.9328 15.293C16.2038 15.1585 16.5361 14.8556 16.695 14.5982C16.8903 14.2817 16.9411 13.9859 17.0657 13.0689C17.1926 12.1351 17.2916 11.064 17.2916 10C17.2916 8.93595 17.1926 7.86492 17.0657 6.9311C16.9411 6.01406 16.8903 5.71825 16.695 5.40181C16.5361 5.14441 16.2038 4.84144 15.9328 4.707C15.6019 4.54283 15.2663 4.51703 14.2472 4.47353C13.009 4.42069 11.5033 4.375 9.99991 4.375ZM5.69933 3.22467C6.94847 3.17136 8.47304 3.125 9.99991 3.125C11.5268 3.125 13.0514 3.17136 14.3005 3.22467C14.3361 3.22619 14.3712 3.22767 14.4059 3.22914C15.2793 3.266 15.8931 3.2919 16.4884 3.58726C16.9687 3.82557 17.4771 4.28901 17.7587 4.74528C18.1076 5.31051 18.1841 5.8756 18.2923 6.67449C18.2963 6.70361 18.3002 6.73303 18.3043 6.76279C18.4361 7.7331 18.5416 8.86306 18.5416 10C18.5416 11.1369 18.4361 12.2669 18.3043 13.2372C18.3002 13.267 18.2963 13.2964 18.2923 13.3255C18.1841 14.1244 18.1076 14.6895 17.7587 15.2547C17.4771 15.711 16.9687 16.1744 16.4884 16.4127C15.8931 16.7081 15.2793 16.734 14.4059 16.7709C14.3712 16.7723 14.3361 16.7738 14.3005 16.7753C13.0514 16.8286 11.5268 16.875 9.99991 16.875C8.47304 16.875 6.94847 16.8286 5.69933 16.7753C5.66377 16.7738 5.62864 16.7723 5.59392 16.7709C4.72048 16.734 4.10668 16.7081 3.51142 16.4127C3.03112 16.1744 2.52274 15.711 2.24113 15.2547C1.89226 14.6895 1.81572 14.1244 1.70752 13.3255C1.70358 13.2964 1.69959 13.267 1.69555 13.2372C1.56369 12.2669 1.45825 11.1369 1.45825 10C1.45825 8.86306 1.56369 7.7331 1.69555 6.76279C1.69959 6.73303 1.70358 6.7036 1.70752 6.67447C1.81572 5.8756 1.89226 5.3105 2.24113 4.74528C2.52274 4.28901 3.03112 3.82557 3.51142 3.58726C4.10668 3.2919 4.72048 3.266 5.59392 3.22914C5.62864 3.22767 5.66377 3.22619 5.69933 3.22467Z">
                        </path>
                        <path
                            d="M5.00418 7.7425C5.07418 7.7425 5.14668 7.7625 5.22168 7.8025C5.30168 7.8375 5.36168 7.885 5.40168 7.945L7.22417 10.75L6.84917 10.735L8.71667 7.945C8.81167 7.81 8.93417 7.7425 9.08417 7.7425C9.20417 7.7425 9.31167 7.785 9.40667 7.87C9.50167 7.955 9.54917 8.065 9.54917 8.2V12.5425C9.54917 12.6725 9.50667 12.7825 9.42167 12.8725C9.33667 12.9575 9.22417 13 9.08417 13C8.94417 13 8.82917 12.9575 8.73917 12.8725C8.65417 12.7825 8.61167 12.6725 8.61167 12.5425V9.01L8.90417 9.0775L7.37417 11.41C7.32917 11.465 7.27167 11.5125 7.20167 11.5525C7.13667 11.5925 7.06917 11.61 6.99917 11.605C6.93417 11.61 6.86667 11.5925 6.79667 11.5525C6.73167 11.5125 6.67667 11.465 6.63167 11.41L5.19918 9.145L5.39418 8.7475V12.5425C5.39418 12.6725 5.35418 12.7825 5.27418 12.8725C5.19418 12.9575 5.08918 13 4.95918 13C4.83418 13 4.73168 12.9575 4.65168 12.8725C4.57168 12.7825 4.53168 12.6725 4.53168 12.5425V8.2C4.53168 8.075 4.57668 7.9675 4.66668 7.8775C4.76168 7.7875 4.87418 7.7425 5.00418 7.7425ZM15.3425 7.735C15.4675 7.735 15.575 7.7775 15.665 7.8625C15.76 7.9425 15.8075 8.045 15.8075 8.17C15.8075 8.235 15.7925 8.3025 15.7625 8.3725L13.91 12.7075C13.865 12.8075 13.8 12.8825 13.715 12.9325C13.635 12.9775 13.5525 13 13.4675 13C13.3875 12.995 13.31 12.97 13.235 12.925C13.16 12.875 13.1025 12.805 13.0625 12.715L11.21 8.365C11.195 8.335 11.185 8.305 11.18 8.275C11.175 8.24 11.1725 8.2075 11.1725 8.1775C11.1725 8.0325 11.225 7.9225 11.33 7.8475C11.435 7.7675 11.535 7.7275 11.63 7.7275C11.82 7.7275 11.9575 7.825 12.0425 8.02L13.685 11.8825L13.4225 11.89L14.93 8.02C15.015 7.83 15.1525 7.735 15.3425 7.735Z">
                        </path>
                        <path
                            d="M5.22168 7.8025L5.14301 7.95L5.15487 7.9552L5.22168 7.8025ZM5.40168 7.945L5.54144 7.85419L5.54035 7.85255L5.40168 7.945ZM7.22417 10.75L7.21751 10.9165L7.5395 10.9294L7.36393 10.6592L7.22417 10.75ZM6.84917 10.735L6.71067 10.6423L6.54511 10.8896L6.84251 10.9015L6.84917 10.735ZM8.71667 7.945L8.58034 7.84906L8.57817 7.8523L8.71667 7.945ZM9.40667 7.87L9.29554 7.99421L9.29554 7.99421L9.40667 7.87ZM9.42167 12.8725L9.53957 12.9904L9.54284 12.9869L9.42167 12.8725ZM8.73917 12.8725L8.61781 12.9871L8.62474 12.9937L8.73917 12.8725ZM8.61167 9.01L8.64915 8.8476L8.44501 8.80049V9.01H8.61167ZM8.90417 9.0775L9.04353 9.16892L9.17474 8.96889L8.94165 8.9151L8.90417 9.0775ZM7.37417 11.41L7.50317 11.5155L7.50872 11.5087L7.51354 11.5014L7.37417 11.41ZM7.20167 11.5525L7.11894 11.4077L7.11433 11.4106L7.20167 11.5525ZM6.99917 11.605L7.01105 11.4388L6.99872 11.4379L6.98639 11.4388L6.99917 11.605ZM6.79667 11.5525L6.70928 11.6945L6.71398 11.6972L6.79667 11.5525ZM6.63168 11.41L6.49082 11.4991L6.49625 11.5077L6.50268 11.5155L6.63168 11.41ZM5.19918 9.145L5.04954 9.0716L5.00848 9.1553L5.05832 9.23409L5.19918 9.145ZM5.39418 8.7475H5.56084L5.24454 8.6741L5.39418 8.7475ZM5.27418 12.8725L5.39559 12.9868L5.39874 12.9832L5.27418 12.8725ZM4.65168 12.8725L4.52706 12.9833L4.53031 12.9867L4.65168 12.8725ZM4.66668 7.8775L4.55201 7.75647L4.54882 7.75965L4.66668 7.8775ZM5.00418 7.90917C5.04155 7.90917 5.08726 7.9197 5.14324 7.94956L5.30011 7.65544C5.20609 7.6053 5.1068 7.57584 5.00418 7.57584V7.90917ZM5.15487 7.9552C5.21186 7.98013 5.24412 8.00913 5.263 8.03745L5.54035 7.85255C5.47923 7.76088 5.39149 7.69488 5.28848 7.64981L5.15487 7.9552ZM5.26192 8.03581L7.08442 10.8408L7.36393 10.6592L5.54143 7.8542L5.26192 8.03581ZM7.23084 10.5835L6.85584 10.5685L6.84251 10.9015L7.21751 10.9165L7.23084 10.5835ZM6.98768 10.8277L8.85518 8.03771L8.57817 7.8523L6.71067 10.6423L6.98768 10.8277ZM8.85297 8.04092C8.92042 7.94507 8.99448 7.90917 9.08417 7.90917V7.57584C8.87387 7.57584 8.70292 7.67494 8.58037 7.84909L8.85297 8.04092ZM9.08417 7.90917C9.16046 7.90917 9.22902 7.93469 9.29554 7.99421L9.51781 7.7458C9.39432 7.63531 9.24788 7.57584 9.08417 7.57584V7.90917ZM9.29554 7.99421C9.35291 8.04554 9.38251 8.10925 9.38251 8.2H9.71584C9.71584 8.02075 9.65043 7.86446 9.51781 7.7458L9.29554 7.99421ZM9.38251 8.2V12.5425H9.71584V8.2H9.38251ZM9.38251 12.5425C9.38251 12.6323 9.35471 12.7007 9.3005 12.7581L9.54284 12.9869C9.65864 12.8643 9.71584 12.7127 9.71584 12.5425H9.38251ZM9.30382 12.7546C9.25523 12.8032 9.18783 12.8333 9.08417 12.8333V13.1667C9.26051 13.1667 9.41812 13.1118 9.53952 12.9904L9.30382 12.7546ZM9.08417 12.8333C8.98071 12.8333 8.90856 12.8032 8.85361 12.7513L8.62474 12.9937C8.74979 13.1118 8.90764 13.1667 9.08417 13.1667V12.8333ZM8.86034 12.7581C8.80614 12.7007 8.77834 12.6323 8.77834 12.5425H8.44501C8.44501 12.7127 8.50221 12.8643 8.61801 12.9869L8.86034 12.7581ZM8.77834 12.5425V9.01H8.44501V12.5425H8.77834ZM8.5742 9.1724L8.8667 9.2399L8.94165 8.9151L8.64915 8.8476L8.5742 9.1724ZM8.76481 8.98609L7.23481 11.3186L7.51354 11.5014L9.04353 9.16892L8.76481 8.98609ZM7.24518 11.3045C7.21471 11.3417 7.17364 11.3766 7.11898 11.4078L7.28436 11.6972C7.3697 11.6484 7.44364 11.5883 7.50317 11.5155L7.24518 11.3045ZM7.11433 11.4106C7.0763 11.434 7.04317 11.4411 7.01105 11.4388L6.9873 11.7712C7.09518 11.7789 7.19705 11.751 7.28902 11.6944L7.11433 11.4106ZM6.98639 11.4388C6.96178 11.4407 6.92731 11.4352 6.87936 11.4078L6.71398 11.6972C6.80604 11.7498 6.90657 11.7793 7.01196 11.7712L6.98639 11.4388ZM6.88402 11.4106C6.83366 11.3796 6.79307 11.3441 6.76067 11.3045L6.50268 11.5155C6.56028 11.5859 6.62969 11.6454 6.70933 11.6944L6.88402 11.4106ZM6.77253 11.3209L5.34003 9.05592L5.05832 9.23409L6.49082 11.4991L6.77253 11.3209ZM5.34881 9.21841L5.54381 8.82091L5.24454 8.6741L5.04954 9.0716L5.34881 9.21841ZM5.22751 8.7475V12.5425H5.56084V8.7475H5.22751ZM5.22751 12.5425C5.22751 12.6352 5.20023 12.7048 5.14961 12.7618L5.39874 12.9832C5.50812 12.8602 5.56084 12.7098 5.56084 12.5425H5.22751ZM5.15281 12.7583C5.10806 12.8058 5.049 12.8333 4.95918 12.8333V13.1667C5.12935 13.1667 5.28029 13.1092 5.39554 12.9867L5.15281 12.7583ZM4.95918 12.8333C4.87649 12.8333 4.81914 12.8072 4.77304 12.7583L4.53031 12.9867C4.64422 13.1078 4.79186 13.1667 4.95918 13.1667V12.8333ZM4.77624 12.7618C4.72562 12.7048 4.69834 12.6352 4.69834 12.5425H4.36501C4.36501 12.7098 4.41774 12.8602 4.52711 12.9832L4.77624 12.7618ZM4.69834 12.5425V8.2H4.36501V12.5425H4.69834ZM4.69834 8.2C4.69834 8.1201 4.72514 8.05474 4.78453 7.99535L4.54882 7.75965C4.42821 7.88027 4.36501 8.0299 4.36501 8.2H4.69834ZM4.7813 7.99849C4.84557 7.93761 4.91713 7.90917 5.00418 7.90917V7.57584C4.83122 7.57584 4.67778 7.6374 4.55205 7.75651L4.7813 7.99849ZM15.665 7.8625L15.5504 7.98387L15.5577 7.98999L15.665 7.8625ZM15.7625 8.3725L15.6093 8.30685L15.6093 8.30701L15.7625 8.3725ZM13.91 12.7075L14.062 12.7759L14.0633 12.773L13.91 12.7075ZM13.715 12.9325L13.7967 13.0778L13.7995 13.0762L13.715 12.9325ZM13.4675 13L13.4571 13.1667H13.4675V13ZM13.235 12.925L13.1425 13.0638L13.1493 13.0679L13.235 12.925ZM13.0625 12.715L12.9092 12.7803L12.9102 12.7827L13.0625 12.715ZM11.21 8.365L11.3637 8.29958L11.3591 8.29047L11.21 8.365ZM11.18 8.275L11.015 8.29858L11.0156 8.3024L11.18 8.275ZM11.33 7.8475L11.4269 7.98319L11.431 7.98007L11.33 7.8475ZM12.0425 8.02L12.1959 7.95478L12.1953 7.9534L12.0425 8.02ZM13.685 11.8825L13.6898 12.0491L13.934 12.0421L13.8384 11.8173L13.685 11.8825ZM13.4225 11.89L13.2672 11.8295L13.176 12.0638L13.4273 12.0566L13.4225 11.89ZM14.93 8.02L14.7777 7.95186L14.7747 7.95951L14.93 8.02ZM15.3425 7.90167C15.4254 7.90167 15.4919 7.92821 15.5506 7.98367L15.7795 7.74133C15.6582 7.6268 15.5096 7.56834 15.3425 7.56834V7.90167ZM15.5577 7.98999C15.6148 8.03808 15.6409 8.0938 15.6409 8.17H15.9742C15.9742 7.99621 15.9053 7.84692 15.7724 7.73502L15.5577 7.98999ZM15.6409 8.17C15.6409 8.2089 15.6319 8.25408 15.6093 8.30685L15.9157 8.43816C15.9531 8.35093 15.9742 8.26111 15.9742 8.17H15.6409ZM15.6093 8.30701L13.7568 12.642L14.0633 12.773L15.9158 8.438L15.6093 8.30701ZM13.758 12.6391C13.7255 12.7113 13.6825 12.7583 13.6305 12.7888L13.7995 13.0762C13.9176 13.0067 14.0045 12.9037 14.062 12.7759L13.758 12.6391ZM13.6333 12.7872C13.5762 12.8194 13.5216 12.8333 13.4675 12.8333V13.1667C13.5834 13.1667 13.6938 13.1356 13.7967 13.0778L13.6333 12.7872ZM13.4779 12.8337C13.4269 12.8305 13.375 12.8146 13.3208 12.7821L13.1493 13.0679C13.245 13.1254 13.3481 13.1595 13.4571 13.1663L13.4779 12.8337ZM13.3275 12.7863C13.2812 12.7555 13.2432 12.7112 13.2148 12.6473L12.9102 12.7827C12.9618 12.8988 13.0389 12.9945 13.1426 13.0637L13.3275 12.7863ZM13.2159 12.6497L11.3634 8.2997L11.0567 8.4303L12.9092 12.7803L13.2159 12.6497ZM11.3591 8.29047C11.3508 8.27381 11.3464 8.25962 11.3444 8.2476L11.0156 8.3024C11.0236 8.35038 11.0393 8.39619 11.061 8.43954L11.3591 8.29047ZM11.345 8.25143C11.3409 8.2229 11.3392 8.19837 11.3392 8.1775H11.0059C11.0059 8.21663 11.0091 8.2571 11.015 8.29857L11.345 8.25143ZM11.3392 8.1775C11.3392 8.07862 11.3716 8.02261 11.4269 7.98312L11.2332 7.71188C11.0784 7.82239 11.0059 7.98639 11.0059 8.1775H11.3392ZM11.431 7.98007C11.5181 7.91375 11.5834 7.89417 11.63 7.89417V7.56084C11.4867 7.56084 11.352 7.62126 11.229 7.71493L11.431 7.98007ZM11.63 7.89417C11.6951 7.89417 11.7422 7.91031 11.7792 7.93658C11.8175 7.96373 11.8562 8.00971 11.8897 8.0866L12.1953 7.9534C12.1438 7.83529 12.0713 7.73503 11.9721 7.66467C11.8716 7.59345 11.755 7.56084 11.63 7.56084V7.89417ZM11.8891 8.08522L13.5316 11.9477L13.8384 11.8173L12.1959 7.95478L11.8891 8.08522ZM13.6803 11.7159L13.4178 11.7234L13.4273 12.0566L13.6898 12.0491L13.6803 11.7159ZM13.5778 11.9505L15.0853 8.0805L14.7747 7.95951L13.2672 11.8295L13.5778 11.9505ZM15.0822 8.08806C15.1152 8.01411 15.1535 7.96975 15.1916 7.94337C15.2288 7.91767 15.2766 7.90167 15.3425 7.90167V7.56834C15.2185 7.56834 15.1025 7.59983 15.0022 7.66913C14.9028 7.73776 14.8298 7.83589 14.7779 7.95194L15.0822 8.08806Z">
                        </path>
                    </svg>
                    <span class="content">MV</span>
                </div>
            </li>
        </ul>
        <div class="login_banner">
            <span class="text">Đăng nhập để khám phá playlist dành riêng cho bạn</span>
            <span class="func-btn login-btn is-center cursor-pointer">ĐĂNG NHẬP</span>
        </div>
        <div class="vip_banner">
            <span class="text">Nghe nhạc không quảng cáo cùng kho nhạc VIP</span>
            <span class="func-btn vip_upgrade is-center cursor-pointer">NÂNG CẤP VIP</span>
        </div>
        <ul class="sidebar-left__menu-library">
            <h5 class="title">
                THƯ VIỆN
                <div class="btn_container">
                    <svg width="12" height="12" fill="var(--element-color)" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 306.637 306.637"
                        style="enable-background:new 0 0 306.637 306.637;" xml:space="preserve" class="edit-icon">
                        <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
                            l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z" />
                        <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
                            L265.13,75.602L231.035,41.507z" />
                    </svg>
                </div>
            </h5>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer">
                <div class="selection is-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.430334 5.95266C1.10691 2.67954 3.18858 0.856514 6.43569 0.305758C8.83604 -0.101252 11.2373 -0.106392 13.6335 0.31721C16.9769 0.908197 18.9867 2.83753 19.627 6.16013C20.1217 8.72802 20.1295 11.3232 19.6193 13.8886C18.9348 17.1391 16.7994 19.1455 13.5643 19.6942C11.164 20.1013 8.76274 20.1064 6.36648 19.6828C3.0231 19.0918 1.00434 17.0661 0.364051 13.7436C-0.155819 11.1588 -0.105778 8.54713 0.430334 5.95266Z"
                            fill="url(#paint0_linear_2129_5112)"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.20436 7.02377C3 7.42485 3 7.9499 3 9V13C3 14.0501 3 14.5751 3.20436 14.9762C3.38413 15.329 3.67096 15.6159 4.02377 15.7956C4.42485 16 4.9499 16 6 16H14C15.0501 16 15.5751 16 15.9762 15.7956C16.329 15.6159 16.6159 15.329 16.7956 14.9762C17 14.5751 17 14.0501 17 13V9C17 7.9499 17 7.42485 16.7956 7.02377C16.6159 6.67096 16.329 6.38413 15.9762 6.20436C15.5751 6 15.0501 6 14 6H6C4.9499 6 4.42485 6 4.02377 6.20436C3.67096 6.38413 3.38413 6.67096 3.20436 7.02377ZM10.652 7.37915L10.72 7.38363L10.7975 7.40033L10.8617 7.42339L10.8814 7.43245C11.5144 7.73961 12.0967 8.14198 12.6076 8.62357C12.6925 8.70332 12.7757 8.78572 12.8574 8.87091C13.0533 9.07514 13.0465 9.39948 12.8423 9.59534C12.6381 9.79121 12.3137 9.78443 12.1179 9.58021C12.0484 9.50781 11.9779 9.43797 11.9054 9.36987C11.6745 9.15219 11.4267 8.95363 11.1646 8.77614L11.1643 12.6949L11.1643 12.6966C11.1634 13.8631 10.2175 14.8084 9.05082 14.8084C7.88356 14.8084 6.93732 13.8622 6.93732 12.6949C6.93732 11.5277 7.88356 10.5814 9.05082 10.5814C9.44907 10.5814 9.8216 10.6916 10.1396 10.8831V7.89151C10.1396 7.60854 10.369 7.37915 10.652 7.37915Z"
                            fill="url(#paint1_linear_2129_5112)"></path>
                        <path d="M5 5C5 4.44772 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5H5Z" fill="white"
                            fill-opacity="0.9"></path>
                        <defs>
                            <linearGradient x1="0" y1="0" x2="0" y2="20" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3CA2FF"></stop>
                                <stop offset="1" stop-color="#008FFF"></stop>
                            </linearGradient>
                            <linearGradient x1="6.12791" y1="10.6969" x2="6.12791" y2="15.625"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"></stop>
                                <stop offset="1" stop-color="white" stop-opacity="0.9"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span class="content">Bài hát</span>
                </div>
                <span class="play-icon is-center">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000"
                        enable-background="new 0 0 1000 1000" xml:space="preserve" class="play-icon"
                        fill="var(--element-color)">
                        <path
                            d="M417.5,283c-11.6-11.8-39.6-19.6-39.6,3v427.9c0,23,28,14.6,39.6,3l268.2-195.7c11.6-11.8,11.6-30.7,0-42.5L417.5,283z" />
                        <path
                            d="M500,10C229.8,10,10,229.8,10,500s219.8,490,490,490s490-219.8,490-490S770.2,10,500,10z M500,968C242,968,32.1,758.1,32.1,500C32.1,242,242,32,500,32s467.9,210,467.9,468S758,968,500,968z" />
                    </svg>
                </span>
            </li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer">
                <div class="selection is-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                        <g clip-path="url(#clip0_2130_5116)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.430017 5.95247C1.10668 2.67914 3.18835 0.856636 6.43585 0.305803C8.83585 -0.101697 11.2375 -0.106697 13.6334 0.317469C16.9767 0.908302 18.9867 2.83747 19.6267 6.15997C20.1217 8.7283 20.1292 11.3233 19.6192 13.8883C18.935 17.1383 16.7992 19.1458 13.5642 19.6941C11.1642 20.1016 8.76252 20.1066 6.36668 19.6825C3.02335 19.0916 1.00418 17.0658 0.364184 13.7433C-0.155816 11.1583 -0.105816 8.54747 0.43085 5.95247H0.430017Z"
                                fill="url(#paint0_linear_2130_5116)"></path>
                            <path d="M11.25 8.61506H15.4167M11.25 11.6476H15.4167M5 14.5833H15.4167" stroke="white"
                                stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.98835 3.35412C8.94419 3.34078 8.89669 3.33328 8.84919 3.33328C8.58585 3.33328 8.37252 3.55162 8.37252 3.82078V7.80578C7.92919 7.43912 7.36419 7.21912 6.74919 7.21912C5.32252 7.21912 4.16669 8.40162 4.16669 9.85912C4.16669 11.3174 5.32252 12.4999 6.74919 12.4999C8.17502 12.4999 9.33169 11.3174 9.33169 9.85912C9.33169 9.79745 9.32919 9.73662 9.32585 9.67578L9.32669 4.64245C9.77169 4.92245 10.1875 5.24912 10.5684 5.61662C10.6634 5.70745 10.7559 5.79995 10.8467 5.89745C11.0284 6.09162 11.33 6.09745 11.52 5.91162C11.71 5.72578 11.7159 5.41745 11.5342 5.22328C11.4317 5.11412 11.3284 5.00912 11.2217 4.90662C10.5834 4.29162 9.85502 3.77745 9.06419 3.38495L8.98835 3.35412Z"
                                fill="white"></path>
                        </g>
                        <defs>
                            <linearGradient x1="9.99993" y1="-0.000244141" x2="9.99993" y2="20.0002"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9FD465"></stop>
                                <stop offset="1" stop-color="#70B129"></stop>
                            </linearGradient>
                            <clipPath>
                                <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <span class="content">Playlist</span>
                </div>
            </li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer">
                <div class="selection is-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                        <g clip-path="url(#clip0_2131_5195)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.429773 5.95247C1.10644 2.67914 3.18811 0.856636 6.43561 0.305803C8.83561 -0.101697 11.2373 -0.106697 13.6331 0.317469C16.9764 0.908302 18.9864 2.83747 19.6264 6.15997C20.1214 8.7283 20.1289 11.3233 19.6189 13.8883C18.9348 17.1383 16.7989 19.1458 13.5639 19.6941C11.1639 20.1016 8.76227 20.1066 6.36644 19.6825C3.02311 19.0916 1.00394 17.0658 0.363939 13.7433C-0.156061 11.1583 -0.106061 8.54747 0.430606 5.95247H0.429773Z"
                                fill="url(#paint0_linear_2131_5195)"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M16.9998 10C16.9998 13.866 13.8657 17 9.99976 17C6.13376 17 2.99976 13.866 2.99976 10C2.99976 6.13401 6.13376 3 9.99976 3C13.8657 3 16.9998 6.13401 16.9998 10ZM9.99975 5.25C10.414 5.25 10.7498 5.58579 10.7498 6V9.567L14.2718 11.6005C14.6306 11.8076 14.7535 12.2663 14.5464 12.625C14.3393 12.9837 13.8806 13.1066 13.5218 12.8995L9.63675 10.6565C9.61258 10.6431 9.58924 10.6284 9.5668 10.6125C9.47324 10.5465 9.39882 10.4621 9.34564 10.3672C9.29764 10.2819 9.26585 10.1862 9.25445 10.0844C9.25068 10.0514 9.2491 10.018 9.24975 9.98457V6C9.24975 5.58579 9.58554 5.25 9.99975 5.25Z"
                                fill="white"></path>
                        </g>
                        <defs>
                            <linearGradient x1="9.99969" y1="-0.000244141" x2="9.99969" y2="20.0002"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFD677"></stop>
                                <stop offset="1" stop-color="#F7AA45"></stop>
                            </linearGradient>
                            <clipPath>
                                <rect width="20" height="20" fill="white" transform="translate(-0.000244141)">
                                </rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <span class="content">Gần đây</span>
                </div>
            </li>
        </ul>
        <ul class="personal-playlist">
            <li class="sidebar-left__menu-item is-space-between cursor-pointer"></li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer"></li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer"></li>
        </ul>
        <div class="new-playlist cursor-pointer">
            <div class="new-playlist__container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 60.249 62.184"
                    class="icon">
                    <g transform="translate(2.5 2.5)">
                        <line data-name="Line 1" y2="57.184" transform="translate(27.624)" fill="none"
                            stroke="white" stroke-linecap="round" stroke-width="5" class="stroke" />
                        <line data-name="Line 2" y2="55.249" transform="translate(55.249 28.592) rotate(90)"
                            fill="none" stroke="white" stroke-linecap="round" stroke-width="5" class="stroke" />
                    </g>
                </svg>
                <span class="text">Tạo playlist mới</span>
            </div>
        </div>
    </div>`;
  } else {
    document.querySelector(".sidebar-left").innerHTML = `
    <div class="sidebar-left__logo">
        <img src="./assets/Images/Logo/mino-logo.png">
    </div>
    <div class="sidebar-left__wrapper">
        <ul class="sidebar-left__menu">
            <li class="sidebar-left__menu-item cursor-pointer" onclick="changePage(1)">
                <a href="#personal-page" class="page-link">
                    <div class="selection">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.41666 2.29166C5.07148 2.29166 4.79166 2.57148 4.79166 2.91666C4.79166 3.26183 5.07148 3.54166 5.41666 3.54166H14.5833C14.9285 3.54166 15.2083 3.26183 15.2083 2.91666C15.2083 2.57148 14.9285 2.29166 14.5833 2.29166H5.41666ZM2.5 8.33333C2.5 6.60744 3.89911 5.20833 5.625 5.20833H14.375C16.1009 5.20833 17.5 6.60744 17.5 8.33333V14.1667C17.5 15.8925 16.1009 17.2917 14.375 17.2917H5.625C3.89911 17.2917 2.5 15.8925 2.5 14.1667V8.33333ZM5.625 6.45833C4.58947 6.45833 3.75 7.29779 3.75 8.33333V14.1667C3.75 15.2022 4.58946 16.0417 5.625 16.0417H14.375C15.4105 16.0417 16.25 15.2022 16.25 14.1667V8.33333C16.25 7.29779 15.4105 6.45833 14.375 6.45833H5.625ZM12.5 7.3C11.3494 7.3 10.4166 8.23274 10.4166 9.38333V10.8832C10.1041 10.7235 9.75006 10.6333 9.37496 10.6333C8.10931 10.6333 7.0833 11.6594 7.0833 12.925C7.0833 14.1907 8.10931 15.2167 9.37496 15.2167C10.5759 15.2167 11.561 14.293 11.6587 13.1173C11.6639 13.0847 11.6666 13.0513 11.6666 13.0173V9.38333C11.6666 8.92309 12.0397 8.55 12.5 8.55H13.2291C13.5743 8.55 13.8541 8.27018 13.8541 7.925C13.8541 7.57982 13.5743 7.3 13.2291 7.3H12.5ZM8.3333 12.925C8.3333 12.3497 8.79967 11.8833 9.37496 11.8833C9.95026 11.8833 10.4166 12.3497 10.4166 12.925C10.4166 13.5003 9.95026 13.9667 9.37496 13.9667C8.79967 13.9667 8.3333 13.5003 8.3333 12.925Z">
                            </path>
                        </svg>
                        <div class="content">Cá nhân</div>
                    </div>
                </a>
            </li>
            <li class="sidebar-left__menu-item cursor-pointer active" onclick="changePage(2)">
                <a href="#exploration-page" class="page-link">
                    <div class="selection">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.70831 9.99998C2.70831 5.9729 5.9729 2.70831 9.99997 2.70831C14.027 2.70831 17.2916 5.9729 17.2916 9.99998C17.2916 14.0271 14.027 17.2916 9.99997 17.2916C5.9729 17.2916 2.70831 14.0271 2.70831 9.99998ZM9.99997 1.45832C5.28254 1.45832 1.45831 5.28255 1.45831 9.99998C1.45831 14.7174 5.28254 18.5416 9.99997 18.5416C14.7174 18.5416 18.5416 14.7174 18.5416 9.99998C18.5416 5.28255 14.7174 1.45832 9.99997 1.45832ZM7.70832 9.99999C7.70832 8.73433 8.73433 7.70832 9.99998 7.70832C11.2656 7.70832 12.2916 8.73433 12.2916 9.99999C12.2916 11.2656 11.2656 12.2917 9.99998 12.2917C8.73433 12.2917 7.70832 11.2656 7.70832 9.99999ZM9.99998 6.45832C8.04397 6.45832 6.45832 8.04398 6.45832 9.99999C6.45832 11.956 8.04397 13.5417 9.99998 13.5417C11.956 13.5417 13.5416 11.956 13.5416 9.99999C13.5416 8.04398 11.956 6.45832 9.99998 6.45832Z">
                            </path>
                        </svg>
                        <div class="content">Khám phá</div>
                    </div>
                </a>
            </li>
            <li class="sidebar-left__menu-item cursor-pointer" onclick="changePage(3)">
                <a href="#zing-chart-page" class="page-link">
                    <div class="selection">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.46731 9.60671C1.67382 5.07145 5.41552 1.45831 10.0015 1.45831C11.7132 1.45831 13.3091 1.96239 14.6466 2.83038C14.9361 3.01829 15.0185 3.40535 14.8306 3.6949C14.6427 3.98444 14.2556 4.06683 13.9661 3.87892C12.8251 3.13843 11.4645 2.70831 10.0015 2.70831C6.08683 2.70831 2.89227 5.79279 2.71601 9.66357C2.70031 10.0084 2.40805 10.2752 2.06323 10.2595C1.71841 10.2438 1.45161 9.95153 1.46731 9.60671ZM17.9396 9.73926C18.2844 9.75478 18.5513 10.0469 18.5358 10.3917C18.3316 14.9291 14.5889 18.5446 10.0015 18.5446C8.24744 18.5446 6.61514 18.0154 5.2579 17.1077C4.97097 16.9158 4.89392 16.5277 5.08581 16.2407C5.27769 15.9538 5.66585 15.8768 5.95278 16.0687C7.11078 16.8431 8.50244 17.2946 10.0015 17.2946C13.9174 17.2946 17.1128 14.2081 17.2871 10.3355C17.3026 9.9907 17.5947 9.72374 17.9396 9.73926ZM17.2946 6.71652C17.2946 6.16877 16.8505 5.72474 16.3028 5.72474C15.755 5.72474 15.311 6.16877 15.311 6.71652C15.311 7.26427 15.755 7.7083 16.3028 7.7083C16.8505 7.7083 17.2946 7.26427 17.2946 6.71652ZM16.3028 4.47474C17.5409 4.47474 18.5446 5.47842 18.5446 6.71652C18.5446 7.95462 17.5409 8.9583 16.3028 8.9583C15.9339 8.9583 15.5859 8.86923 15.279 8.71142L12.9236 12.0926C12.8178 12.2444 12.6502 12.3415 12.466 12.3579C12.2817 12.3742 12.0996 12.3081 11.9688 12.1773L11.1364 11.3449L10.188 12.7668C10.0755 12.9355 9.88811 13.0392 9.6854 13.0448C9.48268 13.0504 9.28984 12.9573 9.16814 12.7951L7.54354 10.6298L5.65318 12.5201C5.62653 12.5468 5.59807 12.5705 5.5682 12.5913C5.66913 12.8394 5.72474 13.1107 5.72474 13.3949C5.72474 14.5731 4.76967 15.5281 3.59153 15.5281C2.41339 15.5281 1.45831 14.5731 1.45831 13.3949C1.45831 12.2168 2.41339 11.2617 3.59153 11.2617C4.03211 11.2617 4.44149 11.3953 4.7814 11.6241L7.16913 9.2364C7.29723 9.1083 7.47462 9.04208 7.65533 9.05491C7.83603 9.06774 8.00229 9.15834 8.11101 9.30326L9.63808 11.3386L10.5194 10.0172C10.6233 9.86145 10.7916 9.76047 10.9779 9.74204C11.1642 9.72361 11.349 9.78968 11.4813 9.92206L12.3247 10.7654L14.3625 7.84021C14.1708 7.50984 14.061 7.126 14.061 6.71652C14.061 5.47842 15.0647 4.47474 16.3028 4.47474ZM3.59153 12.5117C4.07931 12.5117 4.47474 12.9071 4.47474 13.3949C4.47474 13.8827 4.07931 14.2781 3.59153 14.2781C3.10374 14.2781 2.70831 13.8827 2.70831 13.3949C2.70831 12.9071 3.10374 12.5117 3.59153 12.5117Z">
                            </path>
                        </svg>
                        <div class="content">#zingchart</div>
                    </div>
                </a>
            </li>
            <li class="sidebar-left__menu-item cursor-pointer">
                <div class="selection">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.89354 2.23314C9.92588 2.5768 9.67351 2.88161 9.32985 2.91395C5.73344 3.25241 2.91669 6.28764 2.91669 9.98335C2.91669 13.9063 6.08978 17.0842 10.0012 17.0842C13.9126 17.0842 17.0857 13.9063 17.0857 9.98335C17.0857 8.64722 16.7181 7.39911 16.0792 6.33293C15.9018 6.03684 15.998 5.65298 16.2941 5.47555C16.5902 5.29813 16.974 5.39432 17.1515 5.69041C17.9035 6.94541 18.3357 8.41479 18.3357 9.98335C18.3357 14.5941 14.6055 18.3342 10.0012 18.3342C5.39694 18.3342 1.66669 14.5941 1.66669 9.98335C1.66669 5.63873 4.9781 2.06798 9.21272 1.66945C9.55638 1.63711 9.86119 1.88948 9.89354 2.23314ZM9.888 5.16111C9.94053 5.50227 9.70655 5.82142 9.3654 5.87395C7.37765 6.18003 5.8535 7.90296 5.8535 9.98317C5.8535 11.1398 6.3238 12.1849 7.08437 12.9391C7.32947 13.1821 7.33114 13.5779 7.08809 13.823C6.84504 14.0681 6.44932 14.0697 6.20422 13.8267C5.21637 12.8472 4.6035 11.4862 4.6035 9.98317C4.6035 7.27863 6.58507 5.03735 9.17516 4.63851C9.51631 4.58598 9.83546 4.81996 9.888 5.16111ZM13.9577 7.23583C14.2645 7.07768 14.6415 7.19821 14.7996 7.50503C15.1826 8.24813 15.3986 9.09131 15.3986 9.98317C15.3986 12.9685 12.9833 15.3908 10.0011 15.3908C9.65588 15.3908 9.37606 15.111 9.37606 14.7658C9.37606 14.4206 9.65588 14.1408 10.0011 14.1408C12.2904 14.1408 14.1486 12.2806 14.1486 9.98317C14.1486 9.29509 13.9824 8.64781 13.6885 8.07772C13.5304 7.7709 13.6509 7.39397 13.9577 7.23583ZM11.9823 1.86989C11.647 1.78796 11.3087 1.99337 11.2268 2.32868C11.2095 2.39926 11.205 2.46996 11.2118 2.53838V7.83719C10.8544 7.63452 10.4414 7.51878 10.0011 7.51878C8.64088 7.51878 7.54048 8.62341 7.54048 9.98326C7.54048 11.3431 8.64088 12.4477 10.0011 12.4477C11.3613 12.4477 12.4617 11.3431 12.4617 9.98326C12.4617 9.95673 12.4613 9.9303 12.4604 9.90398C12.4613 9.8904 12.4618 9.8767 12.4618 9.8629V3.32221C13.1239 3.56802 13.7396 3.91035 14.292 4.33243C14.5663 4.54201 14.9585 4.48956 15.1681 4.21528C15.3777 3.94101 15.3252 3.54877 15.051 3.3392C14.1541 2.65392 13.1137 2.14635 11.9823 1.86989ZM10.0011 8.76878C9.33373 8.76878 8.79048 9.31128 8.79048 9.98326C8.79048 10.6552 9.33373 11.1977 10.0011 11.1977C10.6684 11.1977 11.2117 10.6552 11.2117 9.98326C11.2117 9.31128 10.6684 8.76878 10.0011 8.76878Z">
                        </path>
                    </svg>
                    <div class="content">Radio</div>
                </div>
            </li>
            <li class="sidebar-left__menu-item cursor-pointer">
                <div class="selection">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.62494 2.5C3.89905 2.5 2.49994 3.89911 2.49994 5.625V14.372C2.49994 16.0979 3.89905 17.497 5.62494 17.497H14.3719C16.0978 17.497 17.4969 16.0979 17.4969 14.372V5.625C17.4969 3.89911 16.0978 2.5 14.3719 2.5H5.62494ZM3.74994 5.625C3.74994 4.58946 4.5894 3.75 5.62494 3.75H14.3719C15.4075 3.75 16.2469 4.58946 16.2469 5.625V14.372C16.2469 15.4075 15.4075 16.247 14.3719 16.247H5.62494C4.5894 16.247 3.74994 15.4075 3.74994 14.372V5.625ZM5.83334 4.99998C5.48816 4.99998 5.20834 5.2798 5.20834 5.62498C5.20834 5.97016 5.48816 6.24998 5.83334 6.24998H10C10.3452 6.24998 10.625 5.97016 10.625 5.62498C10.625 5.2798 10.3452 4.99998 10 4.99998H5.83334ZM5.20834 8.12497C5.20834 7.77979 5.48816 7.49997 5.83334 7.49997H14.1667C14.5118 7.49997 14.7917 7.77979 14.7917 8.12497C14.7917 8.47015 14.5118 8.74997 14.1667 8.74997H5.83334C5.48816 8.74997 5.20834 8.47015 5.20834 8.12497ZM6.66667 10.2083C5.86125 10.2083 5.20834 10.8612 5.20834 11.6667V13.3333C5.20834 14.1387 5.86125 14.7917 6.66667 14.7917H13.3333C14.1387 14.7917 14.7917 14.1387 14.7917 13.3333V11.6667C14.7917 10.8612 14.1387 10.2083 13.3333 10.2083H6.66667ZM6.45834 11.6667C6.45834 11.5516 6.55161 11.4583 6.66667 11.4583H13.3333C13.4484 11.4583 13.5417 11.5516 13.5417 11.6667V13.3333C13.5417 13.4484 13.4484 13.5417 13.3333 13.5417H6.66667C6.55161 13.5417 6.45834 13.4484 6.45834 13.3333V11.6667Z">
                        </path>
                    </svg>
                    <div class="content">Theo dõi</div>
                </div>
            </li>
        </ul>
        <div class="divider"></div>
        <ul class="sidebar-left__menu">
            <li class="sidebar-left__menu-item cursor-pointer">
                <div class="selection">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M17.7081 2.91666C17.7081 2.73624 17.6302 2.56463 17.4943 2.44594C17.3584 2.32725 17.1779 2.27308 16.9991 2.29734L10.0928 3.23457L10.0766 3.23699C8.54161 3.48647 7.29148 4.91079 7.29148 6.45832V12.0831C6.7692 11.6908 6.12 11.4583 5.4165 11.4583C3.69061 11.4583 2.2915 12.8574 2.2915 14.5833C2.2915 16.3092 3.69061 17.7083 5.4165 17.7083C7.14239 17.7083 8.5415 16.3092 8.5415 14.5833C8.5415 14.486 8.53705 14.3898 8.52835 14.2947C8.53696 14.2534 8.54148 14.2105 8.54148 14.1667V6.45832C8.54148 5.54773 9.32148 4.63027 10.2696 4.47203L16.4581 3.63221V10.4165C15.9359 10.0241 15.2866 9.79166 14.5831 9.79166C12.8572 9.79166 11.4581 11.1908 11.4581 12.9167C11.4581 14.6425 12.8572 16.0417 14.5831 16.0417C16.3066 16.0417 17.7042 14.6465 17.7081 12.924C17.7081 12.9215 17.7081 12.9191 17.7081 12.9167V2.91666ZM14.5831 11.0417C13.5476 11.0417 12.7081 11.8811 12.7081 12.9167C12.7081 13.9522 13.5476 14.7917 14.5831 14.7917C15.6186 14.7917 16.4581 13.9522 16.4581 12.9167C16.4581 11.8811 15.6186 11.0417 14.5831 11.0417ZM5.4165 12.7083C4.38097 12.7083 3.5415 13.5478 3.5415 14.5833C3.5415 15.6189 4.38097 16.4583 5.4165 16.4583C6.45204 16.4583 7.2915 15.6189 7.2915 14.5833C7.2915 13.5478 6.45204 12.7083 5.4165 12.7083Z">
                        </path>
                    </svg>
                    <div class="content">Nhạc mới</div>
                </div>
            </li>
            <li class="sidebar-left__menu-item cursor-pointer">
                <div class="selection">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                        <rect x="2.49994" y="2.5" width="6.31579" height="6.31579" rx="1.57895"
                            stroke="var(--element-color)" stroke-width="1.25"></rect>
                        <rect x="11.1841" y="2.5" width="6.31579" height="6.31579" rx="3.15789"
                            stroke="var(--element-color)" stroke-width="1.25"></rect>
                        <path
                            d="M5.85362 17.2727C5.74625 17.3126 5.56941 17.3126 5.46204 17.2727C4.54625 16.9434 2.49994 15.5695 2.49994 13.241C2.49994 12.2132 3.28625 11.3816 4.25573 11.3816C4.83046 11.3816 5.33888 11.6743 5.65783 12.1267C5.97678 11.6743 6.48836 11.3816 7.05994 11.3816C8.02941 11.3816 8.81572 12.2132 8.81572 13.241C8.81572 15.5695 6.76941 16.9434 5.85362 17.2727Z"
                            stroke="var(--element-color)" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path
                            d="M11.9736 11.4563L11.9736 17.2279C11.9736 17.3491 12.1045 17.4251 12.2098 17.365L17.26 14.4792C17.3661 14.4186 17.3661 14.2656 17.26 14.205L12.2098 11.3192C12.1045 11.259 11.9736 11.335 11.9736 11.4563Z"
                            stroke="var(--element-color)" stroke-width="1.25"></path>
                    </svg>
                    <div class="content">Thể loại</div>
                </div>
            </li>
            <li class="sidebar-left__menu-item cursor-pointer">
                <div class="selection">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.99995 14.1666L5.84903 16.3489C5.54335 16.5096 5.18609 16.2501 5.24446 15.9097L6.03722 11.2876L2.67905 8.01415C2.43175 7.77309 2.56821 7.3531 2.90997 7.30344L7.55085 6.62908L9.62631 2.42373C9.77915 2.11405 10.2208 2.11405 10.3736 2.42373L12.4491 6.62908L17.0899 7.30344C17.4317 7.3531 17.5682 7.77309 17.3209 8.01415L13.9627 11.2876L14.7554 15.9097C14.8138 16.2501 14.4566 16.5096 14.1509 16.3489L9.99995 14.1666Z"
                            stroke="var(--element-color)" stroke-width="1.25"></path>
                    </svg>
                    <div class="content">Top 100</div>
                </div>
            </li>
            <li class="sidebar-left__menu-item cursor-pointer">
                <div class="selection">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="var(--element-color)" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.99991 4.375C8.4965 4.375 6.99079 4.42069 5.75263 4.47353C4.73349 4.51703 4.39788 4.54283 4.067 4.707C3.79604 4.84144 3.4637 5.14441 3.30483 5.40181C3.10952 5.71825 3.05877 6.01406 2.93416 6.9311C2.80727 7.86492 2.70825 8.93595 2.70825 10C2.70825 11.064 2.80727 12.1351 2.93416 13.0689C3.05877 13.9859 3.10952 14.2817 3.30483 14.5982C3.4637 14.8556 3.79604 15.1585 4.067 15.293C4.39788 15.4572 4.73349 15.483 5.75263 15.5265C6.99079 15.5793 8.4965 15.625 9.99991 15.625C11.5033 15.625 13.009 15.5793 14.2472 15.5265C15.2663 15.483 15.6019 15.4572 15.9328 15.293C16.2038 15.1585 16.5361 14.8556 16.695 14.5982C16.8903 14.2817 16.9411 13.9859 17.0657 13.0689C17.1926 12.1351 17.2916 11.064 17.2916 10C17.2916 8.93595 17.1926 7.86492 17.0657 6.9311C16.9411 6.01406 16.8903 5.71825 16.695 5.40181C16.5361 5.14441 16.2038 4.84144 15.9328 4.707C15.6019 4.54283 15.2663 4.51703 14.2472 4.47353C13.009 4.42069 11.5033 4.375 9.99991 4.375ZM5.69933 3.22467C6.94847 3.17136 8.47304 3.125 9.99991 3.125C11.5268 3.125 13.0514 3.17136 14.3005 3.22467C14.3361 3.22619 14.3712 3.22767 14.4059 3.22914C15.2793 3.266 15.8931 3.2919 16.4884 3.58726C16.9687 3.82557 17.4771 4.28901 17.7587 4.74528C18.1076 5.31051 18.1841 5.8756 18.2923 6.67449C18.2963 6.70361 18.3002 6.73303 18.3043 6.76279C18.4361 7.7331 18.5416 8.86306 18.5416 10C18.5416 11.1369 18.4361 12.2669 18.3043 13.2372C18.3002 13.267 18.2963 13.2964 18.2923 13.3255C18.1841 14.1244 18.1076 14.6895 17.7587 15.2547C17.4771 15.711 16.9687 16.1744 16.4884 16.4127C15.8931 16.7081 15.2793 16.734 14.4059 16.7709C14.3712 16.7723 14.3361 16.7738 14.3005 16.7753C13.0514 16.8286 11.5268 16.875 9.99991 16.875C8.47304 16.875 6.94847 16.8286 5.69933 16.7753C5.66377 16.7738 5.62864 16.7723 5.59392 16.7709C4.72048 16.734 4.10668 16.7081 3.51142 16.4127C3.03112 16.1744 2.52274 15.711 2.24113 15.2547C1.89226 14.6895 1.81572 14.1244 1.70752 13.3255C1.70358 13.2964 1.69959 13.267 1.69555 13.2372C1.56369 12.2669 1.45825 11.1369 1.45825 10C1.45825 8.86306 1.56369 7.7331 1.69555 6.76279C1.69959 6.73303 1.70358 6.7036 1.70752 6.67447C1.81572 5.8756 1.89226 5.3105 2.24113 4.74528C2.52274 4.28901 3.03112 3.82557 3.51142 3.58726C4.10668 3.2919 4.72048 3.266 5.59392 3.22914C5.62864 3.22767 5.66377 3.22619 5.69933 3.22467Z">
                        </path>
                        <path
                            d="M5.00418 7.7425C5.07418 7.7425 5.14668 7.7625 5.22168 7.8025C5.30168 7.8375 5.36168 7.885 5.40168 7.945L7.22417 10.75L6.84917 10.735L8.71667 7.945C8.81167 7.81 8.93417 7.7425 9.08417 7.7425C9.20417 7.7425 9.31167 7.785 9.40667 7.87C9.50167 7.955 9.54917 8.065 9.54917 8.2V12.5425C9.54917 12.6725 9.50667 12.7825 9.42167 12.8725C9.33667 12.9575 9.22417 13 9.08417 13C8.94417 13 8.82917 12.9575 8.73917 12.8725C8.65417 12.7825 8.61167 12.6725 8.61167 12.5425V9.01L8.90417 9.0775L7.37417 11.41C7.32917 11.465 7.27167 11.5125 7.20167 11.5525C7.13667 11.5925 7.06917 11.61 6.99917 11.605C6.93417 11.61 6.86667 11.5925 6.79667 11.5525C6.73167 11.5125 6.67667 11.465 6.63167 11.41L5.19918 9.145L5.39418 8.7475V12.5425C5.39418 12.6725 5.35418 12.7825 5.27418 12.8725C5.19418 12.9575 5.08918 13 4.95918 13C4.83418 13 4.73168 12.9575 4.65168 12.8725C4.57168 12.7825 4.53168 12.6725 4.53168 12.5425V8.2C4.53168 8.075 4.57668 7.9675 4.66668 7.8775C4.76168 7.7875 4.87418 7.7425 5.00418 7.7425ZM15.3425 7.735C15.4675 7.735 15.575 7.7775 15.665 7.8625C15.76 7.9425 15.8075 8.045 15.8075 8.17C15.8075 8.235 15.7925 8.3025 15.7625 8.3725L13.91 12.7075C13.865 12.8075 13.8 12.8825 13.715 12.9325C13.635 12.9775 13.5525 13 13.4675 13C13.3875 12.995 13.31 12.97 13.235 12.925C13.16 12.875 13.1025 12.805 13.0625 12.715L11.21 8.365C11.195 8.335 11.185 8.305 11.18 8.275C11.175 8.24 11.1725 8.2075 11.1725 8.1775C11.1725 8.0325 11.225 7.9225 11.33 7.8475C11.435 7.7675 11.535 7.7275 11.63 7.7275C11.82 7.7275 11.9575 7.825 12.0425 8.02L13.685 11.8825L13.4225 11.89L14.93 8.02C15.015 7.83 15.1525 7.735 15.3425 7.735Z">
                        </path>
                        <path
                            d="M5.22168 7.8025L5.14301 7.95L5.15487 7.9552L5.22168 7.8025ZM5.40168 7.945L5.54144 7.85419L5.54035 7.85255L5.40168 7.945ZM7.22417 10.75L7.21751 10.9165L7.5395 10.9294L7.36393 10.6592L7.22417 10.75ZM6.84917 10.735L6.71067 10.6423L6.54511 10.8896L6.84251 10.9015L6.84917 10.735ZM8.71667 7.945L8.58034 7.84906L8.57817 7.8523L8.71667 7.945ZM9.40667 7.87L9.29554 7.99421L9.29554 7.99421L9.40667 7.87ZM9.42167 12.8725L9.53957 12.9904L9.54284 12.9869L9.42167 12.8725ZM8.73917 12.8725L8.61781 12.9871L8.62474 12.9937L8.73917 12.8725ZM8.61167 9.01L8.64915 8.8476L8.44501 8.80049V9.01H8.61167ZM8.90417 9.0775L9.04353 9.16892L9.17474 8.96889L8.94165 8.9151L8.90417 9.0775ZM7.37417 11.41L7.50317 11.5155L7.50872 11.5087L7.51354 11.5014L7.37417 11.41ZM7.20167 11.5525L7.11894 11.4077L7.11433 11.4106L7.20167 11.5525ZM6.99917 11.605L7.01105 11.4388L6.99872 11.4379L6.98639 11.4388L6.99917 11.605ZM6.79667 11.5525L6.70928 11.6945L6.71398 11.6972L6.79667 11.5525ZM6.63168 11.41L6.49082 11.4991L6.49625 11.5077L6.50268 11.5155L6.63168 11.41ZM5.19918 9.145L5.04954 9.0716L5.00848 9.1553L5.05832 9.23409L5.19918 9.145ZM5.39418 8.7475H5.56084L5.24454 8.6741L5.39418 8.7475ZM5.27418 12.8725L5.39559 12.9868L5.39874 12.9832L5.27418 12.8725ZM4.65168 12.8725L4.52706 12.9833L4.53031 12.9867L4.65168 12.8725ZM4.66668 7.8775L4.55201 7.75647L4.54882 7.75965L4.66668 7.8775ZM5.00418 7.90917C5.04155 7.90917 5.08726 7.9197 5.14324 7.94956L5.30011 7.65544C5.20609 7.6053 5.1068 7.57584 5.00418 7.57584V7.90917ZM5.15487 7.9552C5.21186 7.98013 5.24412 8.00913 5.263 8.03745L5.54035 7.85255C5.47923 7.76088 5.39149 7.69488 5.28848 7.64981L5.15487 7.9552ZM5.26192 8.03581L7.08442 10.8408L7.36393 10.6592L5.54143 7.8542L5.26192 8.03581ZM7.23084 10.5835L6.85584 10.5685L6.84251 10.9015L7.21751 10.9165L7.23084 10.5835ZM6.98768 10.8277L8.85518 8.03771L8.57817 7.8523L6.71067 10.6423L6.98768 10.8277ZM8.85297 8.04092C8.92042 7.94507 8.99448 7.90917 9.08417 7.90917V7.57584C8.87387 7.57584 8.70292 7.67494 8.58037 7.84909L8.85297 8.04092ZM9.08417 7.90917C9.16046 7.90917 9.22902 7.93469 9.29554 7.99421L9.51781 7.7458C9.39432 7.63531 9.24788 7.57584 9.08417 7.57584V7.90917ZM9.29554 7.99421C9.35291 8.04554 9.38251 8.10925 9.38251 8.2H9.71584C9.71584 8.02075 9.65043 7.86446 9.51781 7.7458L9.29554 7.99421ZM9.38251 8.2V12.5425H9.71584V8.2H9.38251ZM9.38251 12.5425C9.38251 12.6323 9.35471 12.7007 9.3005 12.7581L9.54284 12.9869C9.65864 12.8643 9.71584 12.7127 9.71584 12.5425H9.38251ZM9.30382 12.7546C9.25523 12.8032 9.18783 12.8333 9.08417 12.8333V13.1667C9.26051 13.1667 9.41812 13.1118 9.53952 12.9904L9.30382 12.7546ZM9.08417 12.8333C8.98071 12.8333 8.90856 12.8032 8.85361 12.7513L8.62474 12.9937C8.74979 13.1118 8.90764 13.1667 9.08417 13.1667V12.8333ZM8.86034 12.7581C8.80614 12.7007 8.77834 12.6323 8.77834 12.5425H8.44501C8.44501 12.7127 8.50221 12.8643 8.61801 12.9869L8.86034 12.7581ZM8.77834 12.5425V9.01H8.44501V12.5425H8.77834ZM8.5742 9.1724L8.8667 9.2399L8.94165 8.9151L8.64915 8.8476L8.5742 9.1724ZM8.76481 8.98609L7.23481 11.3186L7.51354 11.5014L9.04353 9.16892L8.76481 8.98609ZM7.24518 11.3045C7.21471 11.3417 7.17364 11.3766 7.11898 11.4078L7.28436 11.6972C7.3697 11.6484 7.44364 11.5883 7.50317 11.5155L7.24518 11.3045ZM7.11433 11.4106C7.0763 11.434 7.04317 11.4411 7.01105 11.4388L6.9873 11.7712C7.09518 11.7789 7.19705 11.751 7.28902 11.6944L7.11433 11.4106ZM6.98639 11.4388C6.96178 11.4407 6.92731 11.4352 6.87936 11.4078L6.71398 11.6972C6.80604 11.7498 6.90657 11.7793 7.01196 11.7712L6.98639 11.4388ZM6.88402 11.4106C6.83366 11.3796 6.79307 11.3441 6.76067 11.3045L6.50268 11.5155C6.56028 11.5859 6.62969 11.6454 6.70933 11.6944L6.88402 11.4106ZM6.77253 11.3209L5.34003 9.05592L5.05832 9.23409L6.49082 11.4991L6.77253 11.3209ZM5.34881 9.21841L5.54381 8.82091L5.24454 8.6741L5.04954 9.0716L5.34881 9.21841ZM5.22751 8.7475V12.5425H5.56084V8.7475H5.22751ZM5.22751 12.5425C5.22751 12.6352 5.20023 12.7048 5.14961 12.7618L5.39874 12.9832C5.50812 12.8602 5.56084 12.7098 5.56084 12.5425H5.22751ZM5.15281 12.7583C5.10806 12.8058 5.049 12.8333 4.95918 12.8333V13.1667C5.12935 13.1667 5.28029 13.1092 5.39554 12.9867L5.15281 12.7583ZM4.95918 12.8333C4.87649 12.8333 4.81914 12.8072 4.77304 12.7583L4.53031 12.9867C4.64422 13.1078 4.79186 13.1667 4.95918 13.1667V12.8333ZM4.77624 12.7618C4.72562 12.7048 4.69834 12.6352 4.69834 12.5425H4.36501C4.36501 12.7098 4.41774 12.8602 4.52711 12.9832L4.77624 12.7618ZM4.69834 12.5425V8.2H4.36501V12.5425H4.69834ZM4.69834 8.2C4.69834 8.1201 4.72514 8.05474 4.78453 7.99535L4.54882 7.75965C4.42821 7.88027 4.36501 8.0299 4.36501 8.2H4.69834ZM4.7813 7.99849C4.84557 7.93761 4.91713 7.90917 5.00418 7.90917V7.57584C4.83122 7.57584 4.67778 7.6374 4.55205 7.75651L4.7813 7.99849ZM15.665 7.8625L15.5504 7.98387L15.5577 7.98999L15.665 7.8625ZM15.7625 8.3725L15.6093 8.30685L15.6093 8.30701L15.7625 8.3725ZM13.91 12.7075L14.062 12.7759L14.0633 12.773L13.91 12.7075ZM13.715 12.9325L13.7967 13.0778L13.7995 13.0762L13.715 12.9325ZM13.4675 13L13.4571 13.1667H13.4675V13ZM13.235 12.925L13.1425 13.0638L13.1493 13.0679L13.235 12.925ZM13.0625 12.715L12.9092 12.7803L12.9102 12.7827L13.0625 12.715ZM11.21 8.365L11.3637 8.29958L11.3591 8.29047L11.21 8.365ZM11.18 8.275L11.015 8.29858L11.0156 8.3024L11.18 8.275ZM11.33 7.8475L11.4269 7.98319L11.431 7.98007L11.33 7.8475ZM12.0425 8.02L12.1959 7.95478L12.1953 7.9534L12.0425 8.02ZM13.685 11.8825L13.6898 12.0491L13.934 12.0421L13.8384 11.8173L13.685 11.8825ZM13.4225 11.89L13.2672 11.8295L13.176 12.0638L13.4273 12.0566L13.4225 11.89ZM14.93 8.02L14.7777 7.95186L14.7747 7.95951L14.93 8.02ZM15.3425 7.90167C15.4254 7.90167 15.4919 7.92821 15.5506 7.98367L15.7795 7.74133C15.6582 7.6268 15.5096 7.56834 15.3425 7.56834V7.90167ZM15.5577 7.98999C15.6148 8.03808 15.6409 8.0938 15.6409 8.17H15.9742C15.9742 7.99621 15.9053 7.84692 15.7724 7.73502L15.5577 7.98999ZM15.6409 8.17C15.6409 8.2089 15.6319 8.25408 15.6093 8.30685L15.9157 8.43816C15.9531 8.35093 15.9742 8.26111 15.9742 8.17H15.6409ZM15.6093 8.30701L13.7568 12.642L14.0633 12.773L15.9158 8.438L15.6093 8.30701ZM13.758 12.6391C13.7255 12.7113 13.6825 12.7583 13.6305 12.7888L13.7995 13.0762C13.9176 13.0067 14.0045 12.9037 14.062 12.7759L13.758 12.6391ZM13.6333 12.7872C13.5762 12.8194 13.5216 12.8333 13.4675 12.8333V13.1667C13.5834 13.1667 13.6938 13.1356 13.7967 13.0778L13.6333 12.7872ZM13.4779 12.8337C13.4269 12.8305 13.375 12.8146 13.3208 12.7821L13.1493 13.0679C13.245 13.1254 13.3481 13.1595 13.4571 13.1663L13.4779 12.8337ZM13.3275 12.7863C13.2812 12.7555 13.2432 12.7112 13.2148 12.6473L12.9102 12.7827C12.9618 12.8988 13.0389 12.9945 13.1426 13.0637L13.3275 12.7863ZM13.2159 12.6497L11.3634 8.2997L11.0567 8.4303L12.9092 12.7803L13.2159 12.6497ZM11.3591 8.29047C11.3508 8.27381 11.3464 8.25962 11.3444 8.2476L11.0156 8.3024C11.0236 8.35038 11.0393 8.39619 11.061 8.43954L11.3591 8.29047ZM11.345 8.25143C11.3409 8.2229 11.3392 8.19837 11.3392 8.1775H11.0059C11.0059 8.21663 11.0091 8.2571 11.015 8.29857L11.345 8.25143ZM11.3392 8.1775C11.3392 8.07862 11.3716 8.02261 11.4269 7.98312L11.2332 7.71188C11.0784 7.82239 11.0059 7.98639 11.0059 8.1775H11.3392ZM11.431 7.98007C11.5181 7.91375 11.5834 7.89417 11.63 7.89417V7.56084C11.4867 7.56084 11.352 7.62126 11.229 7.71493L11.431 7.98007ZM11.63 7.89417C11.6951 7.89417 11.7422 7.91031 11.7792 7.93658C11.8175 7.96373 11.8562 8.00971 11.8897 8.0866L12.1953 7.9534C12.1438 7.83529 12.0713 7.73503 11.9721 7.66467C11.8716 7.59345 11.755 7.56084 11.63 7.56084V7.89417ZM11.8891 8.08522L13.5316 11.9477L13.8384 11.8173L12.1959 7.95478L11.8891 8.08522ZM13.6803 11.7159L13.4178 11.7234L13.4273 12.0566L13.6898 12.0491L13.6803 11.7159ZM13.5778 11.9505L15.0853 8.0805L14.7747 7.95951L13.2672 11.8295L13.5778 11.9505ZM15.0822 8.08806C15.1152 8.01411 15.1535 7.96975 15.1916 7.94337C15.2288 7.91767 15.2766 7.90167 15.3425 7.90167V7.56834C15.2185 7.56834 15.1025 7.59983 15.0022 7.66913C14.9028 7.73776 14.8298 7.83589 14.7779 7.95194L15.0822 8.08806Z">
                        </path>
                    </svg>
                    <div class="content">MV</div>
                </div>
            </li>
        </ul>
        <ul class="sidebar-left__menu-library">
            <h5 class="title">
                THƯ VIỆN
                <div class="btn_container">
                    <svg width="12" height="12" fill="var(--element-color)" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 306.637 306.637"
                        style="enable-background:new 0 0 306.637 306.637;" xml:space="preserve" class="edit-icon">
                        <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
                            l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z" />
                        <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
                            L265.13,75.602L231.035,41.507z" />
                    </svg>
                </div>
            </h5>
            <li class="sidebar-left__menu-item cursor-pointer">
                <div class="selection">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.430334 5.95266C1.10691 2.67954 3.18858 0.856514 6.43569 0.305758C8.83604 -0.101252 11.2373 -0.106392 13.6335 0.31721C16.9769 0.908197 18.9867 2.83753 19.627 6.16013C20.1217 8.72802 20.1295 11.3232 19.6193 13.8886C18.9348 17.1391 16.7994 19.1455 13.5643 19.6942C11.164 20.1013 8.76274 20.1064 6.36648 19.6828C3.0231 19.0918 1.00434 17.0661 0.364051 13.7436C-0.155819 11.1588 -0.105778 8.54713 0.430334 5.95266Z"
                            fill="url(#paint0_linear_2129_5112)"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.20436 7.02377C3 7.42485 3 7.9499 3 9V13C3 14.0501 3 14.5751 3.20436 14.9762C3.38413 15.329 3.67096 15.6159 4.02377 15.7956C4.42485 16 4.9499 16 6 16H14C15.0501 16 15.5751 16 15.9762 15.7956C16.329 15.6159 16.6159 15.329 16.7956 14.9762C17 14.5751 17 14.0501 17 13V9C17 7.9499 17 7.42485 16.7956 7.02377C16.6159 6.67096 16.329 6.38413 15.9762 6.20436C15.5751 6 15.0501 6 14 6H6C4.9499 6 4.42485 6 4.02377 6.20436C3.67096 6.38413 3.38413 6.67096 3.20436 7.02377ZM10.652 7.37915L10.72 7.38363L10.7975 7.40033L10.8617 7.42339L10.8814 7.43245C11.5144 7.73961 12.0967 8.14198 12.6076 8.62357C12.6925 8.70332 12.7757 8.78572 12.8574 8.87091C13.0533 9.07514 13.0465 9.39948 12.8423 9.59534C12.6381 9.79121 12.3137 9.78443 12.1179 9.58021C12.0484 9.50781 11.9779 9.43797 11.9054 9.36987C11.6745 9.15219 11.4267 8.95363 11.1646 8.77614L11.1643 12.6949L11.1643 12.6966C11.1634 13.8631 10.2175 14.8084 9.05082 14.8084C7.88356 14.8084 6.93732 13.8622 6.93732 12.6949C6.93732 11.5277 7.88356 10.5814 9.05082 10.5814C9.44907 10.5814 9.8216 10.6916 10.1396 10.8831V7.89151C10.1396 7.60854 10.369 7.37915 10.652 7.37915Z"
                            fill="url(#paint1_linear_2129_5112)"></path>
                        <path d="M5 5C5 4.44772 5.44772 4 6 4H14C14.5523 4 15 4.44772 15 5H5Z" fill="white"
                            fill-opacity="0.9"></path>
                        <defs>
                            <linearGradient x1="0" y1="0" x2="0" y2="20" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3CA2FF"></stop>
                                <stop offset="1" stop-color="#008FFF"></stop>
                            </linearGradient>
                            <linearGradient x1="6.12791" y1="10.6969" x2="6.12791" y2="15.625"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"></stop>
                                <stop offset="1" stop-color="white" stop-opacity="0.9"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div class="content">Bài hát</div>
                </div>
                <span class="play-icon is-center">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000"
                        enable-background="new 0 0 1000 1000" xml:space="preserve" class="play-icon"
                        fill="var(--element-color)">
                        <path
                            d="M417.5,283c-11.6-11.8-39.6-19.6-39.6,3v427.9c0,23,28,14.6,39.6,3l268.2-195.7c11.6-11.8,11.6-30.7,0-42.5L417.5,283z" />
                        <path
                            d="M500,10C229.8,10,10,229.8,10,500s219.8,490,490,490s490-219.8,490-490S770.2,10,500,10z M500,968C242,968,32.1,758.1,32.1,500C32.1,242,242,32,500,32s467.9,210,467.9,468S758,968,500,968z" />
                    </svg>
                </span>
            </li>
            <li class="sidebar-left__menu-item cursor-pointer">
                <div class="selection">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                        <g clip-path="url(#clip0_2130_5116)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.430017 5.95247C1.10668 2.67914 3.18835 0.856636 6.43585 0.305803C8.83585 -0.101697 11.2375 -0.106697 13.6334 0.317469C16.9767 0.908302 18.9867 2.83747 19.6267 6.15997C20.1217 8.7283 20.1292 11.3233 19.6192 13.8883C18.935 17.1383 16.7992 19.1458 13.5642 19.6941C11.1642 20.1016 8.76252 20.1066 6.36668 19.6825C3.02335 19.0916 1.00418 17.0658 0.364184 13.7433C-0.155816 11.1583 -0.105816 8.54747 0.43085 5.95247H0.430017Z"
                                fill="url(#paint0_linear_2130_5116)"></path>
                            <path d="M11.25 8.61506H15.4167M11.25 11.6476H15.4167M5 14.5833H15.4167" stroke="white"
                                stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.98835 3.35412C8.94419 3.34078 8.89669 3.33328 8.84919 3.33328C8.58585 3.33328 8.37252 3.55162 8.37252 3.82078V7.80578C7.92919 7.43912 7.36419 7.21912 6.74919 7.21912C5.32252 7.21912 4.16669 8.40162 4.16669 9.85912C4.16669 11.3174 5.32252 12.4999 6.74919 12.4999C8.17502 12.4999 9.33169 11.3174 9.33169 9.85912C9.33169 9.79745 9.32919 9.73662 9.32585 9.67578L9.32669 4.64245C9.77169 4.92245 10.1875 5.24912 10.5684 5.61662C10.6634 5.70745 10.7559 5.79995 10.8467 5.89745C11.0284 6.09162 11.33 6.09745 11.52 5.91162C11.71 5.72578 11.7159 5.41745 11.5342 5.22328C11.4317 5.11412 11.3284 5.00912 11.2217 4.90662C10.5834 4.29162 9.85502 3.77745 9.06419 3.38495L8.98835 3.35412Z"
                                fill="white"></path>
                        </g>
                        <defs>
                            <linearGradient x1="9.99993" y1="-0.000244141" x2="9.99993" y2="20.0002"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9FD465"></stop>
                                <stop offset="1" stop-color="#70B129"></stop>
                            </linearGradient>
                            <clipPath>
                                <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <div class="content">Playlist</div>
                </div>
            </li>
            <li class="sidebar-left__menu-item cursor-pointer">
                <div class="selection">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="icon">
                        <g clip-path="url(#clip0_2131_5195)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.429773 5.95247C1.10644 2.67914 3.18811 0.856636 6.43561 0.305803C8.83561 -0.101697 11.2373 -0.106697 13.6331 0.317469C16.9764 0.908302 18.9864 2.83747 19.6264 6.15997C20.1214 8.7283 20.1289 11.3233 19.6189 13.8883C18.9348 17.1383 16.7989 19.1458 13.5639 19.6941C11.1639 20.1016 8.76227 20.1066 6.36644 19.6825C3.02311 19.0916 1.00394 17.0658 0.363939 13.7433C-0.156061 11.1583 -0.106061 8.54747 0.430606 5.95247H0.429773Z"
                                fill="url(#paint0_linear_2131_5195)"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M16.9998 10C16.9998 13.866 13.8657 17 9.99976 17C6.13376 17 2.99976 13.866 2.99976 10C2.99976 6.13401 6.13376 3 9.99976 3C13.8657 3 16.9998 6.13401 16.9998 10ZM9.99975 5.25C10.414 5.25 10.7498 5.58579 10.7498 6V9.567L14.2718 11.6005C14.6306 11.8076 14.7535 12.2663 14.5464 12.625C14.3393 12.9837 13.8806 13.1066 13.5218 12.8995L9.63675 10.6565C9.61258 10.6431 9.58924 10.6284 9.5668 10.6125C9.47324 10.5465 9.39882 10.4621 9.34564 10.3672C9.29764 10.2819 9.26585 10.1862 9.25445 10.0844C9.25068 10.0514 9.2491 10.018 9.24975 9.98457V6C9.24975 5.58579 9.58554 5.25 9.99975 5.25Z"
                                fill="white"></path>
                        </g>
                        <defs>
                            <linearGradient x1="9.99969" y1="-0.000244141" x2="9.99969" y2="20.0002"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFD677"></stop>
                                <stop offset="1" stop-color="#F7AA45"></stop>
                            </linearGradient>
                            <clipPath>
                                <rect width="20" height="20" fill="white" transform="translate(-0.000244141)">
                                </rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <div class="content">Gần đây</div>
                </div>
            </li>
        </ul>
        <ul class="personal-playlist">
            <li class="sidebar-left__menu-item is-space-between cursor-pointer"></li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer"></li>
            <li class="sidebar-left__menu-item is-space-between cursor-pointer"></li>
        </ul>
        <div class="new-playlist cursor-pointer">
            <div class="new-playlist__container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 60.249 62.184"
                    class="icon">
                    <g transform="translate(2.5 2.5)">
                        <line data-name="Line 1" y2="57.184" transform="translate(27.624)" fill="none"
                            stroke="white" stroke-linecap="round" stroke-width="5" class="stroke" />
                        <line data-name="Line 2" y2="55.249" transform="translate(55.249 28.592) rotate(90)"
                            fill="none" stroke="white" stroke-linecap="round" stroke-width="5" class="stroke" />
                    </g>
                </svg>
            </div>
        </div>
    </div>`;
  }

  var zingChartData = document.querySelector(".zing-chart-page .chart-data");
  zingChartData.style.transform =
    "scale(" +
    document.querySelector(".chart-page__top").offsetWidth / 1680 +
    ")";
  zingChartData.style.height = (zingChartData.offsetWidth * 44) / 168 + "px";
}

window.onresize = function () {
  resizeExploration();
};

resizeExploration();

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
    document.querySelector("header.header").style.width =
      "calc(1211 / 1903 * 100%)";
    document.querySelector("aside.sidebar-right").style.width =
      "calc(332 / 1903 * 100%)";
    isShow = true;
    document
      .querySelectorAll(".background")
      .forEach((item) => item.classList.replace("full", "scaled"));
  } else {
    mainBody.style.transform = "scale(1.0)";
    document.querySelector("header.header").style.width =
      "calc(1575 / 1903 * 100%)";
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
