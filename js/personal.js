var personalList = document.querySelector(".personal-page__right-song-list");

function loadPlayList() {
  if (personalSongList.length > 0) {
    var temp = document.createElement("div");
    for (let i = 0; i < personalSongList.length; i++) {
      temp.innerHTML += `
      <div class="personal-page__right-song-list__item cursor-pointer is-space-between">
        <div class="song-list__item-left is-space-between">
            <svg
                fill="var(--element-color)"
                height="14" width="14"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve" class="note-icon"
            >
                <path d="M503.319,5.939c-5.506-4.705-12.783-6.767-19.958-5.635L169.555,49.852c-12.04,1.901-20.909,12.28-20.909,24.47v99.097
                        v156.903H99.097C44.455,330.323,0,371.073,0,421.161C0,471.25,44.455,512,99.097,512c54.642,0,99.097-40.75,99.097-90.839v-66.065
                        V194.588l264.258-41.725v136.169h-49.548c-54.642,0-99.097,40.75-99.097,90.839s44.455,90.839,99.097,90.839
                        S512,429.959,512,379.871v-66.065V123.871V24.774C512,17.529,508.827,10.646,503.319,5.939z"/>
            </svg>
            <input type="checkbox" class="checkbox cursor-pointer">
            <div class="song-list__item-main-img">
                <img src="${personalSongList[i].song_img}"/>
                <svg fill="var(--element-color)" height="16" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 460.114 460.114" xml:space="preserve" class="play-icon" onclick="playSong(personalSongList, personalSongList[${i}], 'Nhạc của tôi')">
                    <path d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173
                        c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087
                        c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"/>
                </svg>
            </div>
            <div class="song-list__item-info">
                <h5 class="item-info__song-name">${personalSongList[i].song_name}</h5>
                <h6 class="song-info__singer">
                    <span class="singer-list">
                    </span>
                </h6>
            </div>
        </div>
        <div class="song-list__item-album">${personalSongList[i].song_album}</div>
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
            <div class="duration">${personalSongList[i].song_duration}</div>
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
      if (personalSongList[i].singer.length === 1) {
        singerName.innerHTML = `<span class="singer-name">${personalSongList[i].singer}</span>`;
      } else {
        for (let j = 0; j < personalSongList[i].singer.length - 1; j++) {
          singerName.innerHTML += `<span class="singer-name">${personalSongList[i].singer[j]}</span>, `;
        }
        singerName.innerHTML += `<span class="singer-name">${
          personalSongList[i].singer[personalSongList[i].singer.length - 1]
        }</span>`;
      }
    }
    personalList.innerHTML = temp.innerHTML;
  } else {
    personalList.innerHTML = "";
  }
}

function changePage(value) {
  var pages = document.querySelectorAll(".main-body > div");
  if (value == 3) {
    mainBody.style.zIndex = "2";
  } else {
    mainBody.style.zIndex = "1";
  }
  pages.forEach((page) => {
    if (!page.classList.contains("hidden")) {
      page.classList.add("hidden");
    }
  });
  if (value > 0) {
    if (value === 1) {
      loadPlayList();
    }
    if (value === 3) {
      loadChartSongList();
    }
    var leftMenuItems = document.querySelectorAll(".sidebar-left__menu-item");
    pages[value - 1].classList.remove("hidden");
    leftMenuItems.forEach((leftMenuItem) => {
      if (leftMenuItem.classList.contains("active")) {
        leftMenuItem.classList.remove("active");
      }
    });
    leftMenuItems[value - 1].classList.add("active");
  } else {
    pages[pages.length - 1].classList.remove("hidden");
  }
}

function changeSubPage(value) {
  var subpages = document.querySelectorAll(".subpage");
  var subpageBarItems = document.querySelectorAll(".subpage-name");
  subpages.forEach((subpage) => {
    if (!subpage.classList.contains("hidden")) {
      subpage.classList.add("hidden");
    }
  });
  subpages[value - 1].classList.remove("hidden");
  subpageBarItems.forEach((subpageBarItem) => {
    if (subpageBarItem.classList.contains("active")) {
      subpageBarItem.classList.remove("active");
    }
  });
  subpageBarItems[value - 1].classList.add("active");
}
