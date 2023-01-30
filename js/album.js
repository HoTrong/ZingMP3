var albumList = document.querySelector(".album__song-list");

var albumSongList = [
  {
    song_name: "Trăm Ngàn Lời Thương",
    singer: ["Thùy Chi", "Ricky Star"],
    song_img: "./assets/Images/Album_Image/TramNganLoiThuong.webp",
    song_album: "Trăm Ngàn Lời Thương (Single)",
    src: "",
    song_duration: "02:46",
  },
  {
    song_name: "Bao Lâu Chưa Về Nhà",
    singer: ["DatKaa"],
    song_img: "./assets/Images/Album_Image/BaoLauChuaVeNha.webp",
    song_album: "Bao Lâu Chưa Về Nhà (Single)",
    src: "",
    song_duration: "04:27",
  },
  {
    song_name: "Đợi Chờ Đừng Cáu",
    singer: ["Phan Mạnh Quỳnh", "Hoàng Thùy Link"],
    song_img: "./assets/Images/Album_Image/DoiChoDungCau.webp",
    song_album: "Đợi Chờ Đừng Cáu (Single)",
    src: "",
    song_duration: "02:49",
  },
  {
    song_name: "Như Hoa Mùa Xuân",
    singer: ["Phùng Khánh Linh", "Wren Evans"],
    song_img: "./assets/Images/Album_Image/NhuHoaMuaXuan.webp",
    song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
    src: "",
    song_duration: "04:56",
  },
  {
    song_name: "Tết Bùng Nội Lực",
    singer: ["Hòa Minzy ★", "Bùi Công Nam"],
    song_img: "./assets/Images/Album_Image/TetBungNoiLuc.webp",
    song_album: "Tết Bùng Nội Lực (Single)",
    src: "",
    song_duration: "02:57",
  },
  {
    song_name: "Tự Nhiên Cái Tết",
    singer: ["Bùi Công Nam"],
    song_img: "./assets/Images/Album_Image/TuNhienCaiTet.webp",
    song_album: "",
    src: "",
    song_duration: "03:09",
  },
  {
    song_name: "Tết Yêu, Tết Ghét",
    singer: ["Ninh Dương Lan Ngọc", "HuyR"],
    song_img: "./assets/Images/Album_Image/TetYeuTetGhet.webp",
    song_album: "Tết Yêu, Tết Ghét (Single)",
    src: "",
    song_duration: "03:33",
  },
  {
    song_name: "Mang Hạnh Phúc Đến Thăm",
    singer: ["Huyền Tâm Môn"],
    song_img: "./assets/Images/Album_Image/MangHanhPhucDenTham.webp",
    song_album: "Mang Hạnh Phúc Đến Thăm (Single)",
    src: "",
    song_duration: "03:19",
  },
  {
    song_name: "Cái Tết Giàu",
    singer: ["Bùi Công Nam", "Lương Bích Hữu", "Đông Nhi", "Bé Winnie"],
    song_img: "./assets/Images/Album_Image/TramNganLoiThuong.webp",
    song_album: "Cái Tết Giàu (Single)",
    src: "",
    song_duration: "03:53",
  },
  {
    song_name: "Chơi Banh Tết",
    singer: ["QNT", "Fanny"],
    song_img: "./assets/Images/Album_Image/ChoiBanhTet.webp",
    song_album: "Chơi Banh Tết (Single)",
    src: "",
    song_duration: "03:15",
  },
  {
    song_name: "Đón Xuân",
    singer: ["Thanh Hà"],
    song_img: "./assets/Images/Album_Image/DonXuan.webp",
    song_album: "Đón Xuân (Single)",
    src: "",
    song_duration: "03:23",
  },
  {
    song_name: "Năm Qua Đã Làm Gì",
    singer: ["Hồ Ngọc Hà"],
    song_img: "./assets/Images/Album_Image/NhuHoaMuaXuan.webp",
    song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
    src: "",
    song_duration: "03:19",
  },
  {
    song_name: "Ui Dza! Là Tết",
    singer: ["Ngọc Dolil"],
    song_img: "./assets/Images/Album_Image/UiDzaLaTet.webp",
    song_album: "Ui Dza! Là Tết (Single)",
    src: "",
    song_duration: "02:56",
  },
  {
    song_name: "Tết Là Đông Mới Vui",
    singer: ["Đức Phúc ★", "GDucky", "DTAP"],
    song_img: "./assets/Images/Album_Image/TetLaDongMoiVui.webp",
    song_album: "Tết Là Đông Mới Vui (Single)",
    src: "",
    song_duration: "03:49",
  },
  {
    song_name: "Tết Đi Em Ơi",
    singer: ["Masew", "Khoi Vu", "kaybo"],
    song_img: "./assets/Images/Album_Image/TetDiEmOi.webp",
    song_album: "Tết Đi Em Ơi (Single)",
    src: "",
    song_duration: "03:17",
  },
  {
    song_name: "Đón Tết Quê Hương",
    singer: ["Ngọc Dolil"],
    song_img: "./assets/Images/Album_Image/NhuHoaMuaXuan.webp",
    song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
    src: "",
    song_duration: "04:06",
  },
  {
    song_name: "Mừng Con Về Nhà",
    singer: ["Anh Tú"],
    song_img: "./assets/Images/Album_Image/MungConVeNha.webp",
    song_album: "Mừng Con Về Nhà (Single)",
    src: "",
    song_duration: "04:33",
  },
  {
    song_name: "Định Tết Này Con Không Về",
    singer: ["Trịnh Đình Quang"],
    song_img: "./assets/Images/Album_Image/DinhTetNayConKhongVe.webp",
    song_album: "Định Tết Này Con Không Về (Single)",
    src: "",
    song_duration: "04:49",
  },
  {
    song_name: "Thèm Được Về Nhà",
    singer: ["Tăng Phúc", "Trương Thảo Nhi"],
    song_img: "./assets/Images/Album_Image/ThemDuocVeNha.webp",
    song_album: "Thèm Được Về Nhà (Single)",
    src: "",
    song_duration: "04:21",
  },
];

function loadAlbumSongList() {
  if (albumSongList.length > 0) {
    var temp = document.createElement("div");
    for (let i = 0; i < albumSongList.length; i++) {
      temp.innerHTML += `
      <div class="album__song-list__item cursor-pointer">
        <svg
            fill="var(--element-color)"
            height="14" width="14"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512" style="margin: 0 8px;"
            xml:space="preserve" class="note-icon"
        >
            <path d="M503.319,5.939c-5.506-4.705-12.783-6.767-19.958-5.635L169.555,49.852c-12.04,1.901-20.909,12.28-20.909,24.47v99.097
                    v156.903H99.097C44.455,330.323,0,371.073,0,421.161C0,471.25,44.455,512,99.097,512c54.642,0,99.097-40.75,99.097-90.839v-66.065
                    V194.588l264.258-41.725v136.169h-49.548c-54.642,0-99.097,40.75-99.097,90.839s44.455,90.839,99.097,90.839
                    S512,429.959,512,379.871v-66.065V123.871V24.774C512,17.529,508.827,10.646,503.319,5.939z"/>
        </svg>
        <input type="checkbox" style="margin: 0 8px;" class="checkbox cursor-pointer">
        <div class="song-list__item-left is-space-between">
            <div class="song-list__item-main-img">
                <img src="${albumSongList[i].song_img}"/>
                <svg fill="var(--element-color)" height="16" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 460.114 460.114" xml:space="preserve" class="play-icon">
                    <path d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173
                        c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087
                        c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"/>
                </svg>
            </div>
            <div class="song-list__item-info">
                <h5 class="item-info__song-name">${albumSongList[i].song_name}</h5>
                <h6 class="song-info__singer">
                    <span class="singer-list">
                    </span>
                </h6>
            </div>
        </div>
        <div class="song-list__item-album">${albumSongList[i].song_album}</div>
        <div class="song-list__item-right">
            <button class="like-btn is-center">
                <div class="tippy-top">Thêm vào thư viện</div>
                <svg
                    width="14" height="14"
                    fill="var(--element-color)"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 471.701 471.701"
                    style="enable-background:new 0 0 471.701 471.701;"
                    xml:space="preserve" class="like-icon hidden"
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
                    width="14" height="14" class="on-like-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="var(--active-color)"
                >
                    <path
                        d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z"
                    />
                </svg>
            </button>
            <div class="duration">${albumSongList[i].song_duration}</div>
            <button class="more-btn is-center">
                <div class="tippy-top">Khác</div>
                <svg
                    width="14" height="14"
                    fill="var(--element-color)" class="more-icon"
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
      if (albumSongList[i].singer.length === 1) {
        singerName.innerHTML = `<span class="singer-name">${albumSongList[i].singer}</span>`;
      } else {
        for (let j = 0; j < albumSongList[i].singer.length - 1; j++) {
          singerName.innerHTML += `<span class="singer-name">${albumSongList[i].singer[j]}</span>, `;
        }
        singerName.innerHTML += `<span class="singer-name">${
          albumSongList[i].singer[albumSongList[i].singer.length - 1]
        }</span>`;
      }
    }
    albumList.innerHTML = temp.innerHTML;
  } else {
    albumList.innerHTML = "";
  }
}

loadAlbumSongList();