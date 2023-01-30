var chartLines1 = document.querySelectorAll(
    ".zing-chart-page .line-chart.top_1 .line-segment"
  ),
  chartLines2 = document.querySelectorAll(
    ".zing-chart-page .line-chart.top_2 .line-segment"
  ),
  chartLines3 = document.querySelectorAll(
    ".zing-chart-page .line-chart.top_3 .line-segment"
  );

chartLines1.forEach((chartLine) => {
  chartLine.addEventListener("mouseover", function () {
    document
      .querySelector(".zing-chart-page .line-chart.top_1")
      .classList.remove("only");
    document
      .querySelector(".zing-chart-page .line-chart.top_2")
      .classList.add("only");
    document
      .querySelector(".zing-chart-page .line-chart.top_3")
      .classList.add("only");
  });
});

chartLines2.forEach((chartLine) => {
  chartLine.addEventListener("mouseover", function () {
    document
      .querySelector(".zing-chart-page .line-chart.top_2")
      .classList.remove("only");
    document
      .querySelector(".zing-chart-page .line-chart.top_1")
      .classList.add("only");
    document
      .querySelector(".zing-chart-page .line-chart.top_3")
      .classList.add("only");
  });
});

chartLines3.forEach((chartLine) => {
  chartLine.addEventListener("mouseover", function () {
    document
      .querySelector(".zing-chart-page .line-chart.top_3")
      .classList.remove("only");
    document
      .querySelector(".zing-chart-page .line-chart.top_1")
      .classList.add("only");
    document
      .querySelector(".zing-chart-page .line-chart.top_2")
      .classList.add("only");
  });
});

var chartSongList = document.querySelector(
  ".zing-chart-page .chart__list-song"
);

function loadChartSongList() {
  if (chartSongs.length > 0) {
    var temp = document.createElement("div");
    temp.innerHTML += `
    <div class="chart__list-song__item is-space-between cursor-pointer">
      <span style="width: 100px; text-align: center; padding-left: 15px; margin-right: 15px;">Gợi ý</span>
      <div class="is-space-between" style="flex: 1; margin-right: 12px;">
          <div class="song-list__item-left is-space-between">
              <div class="song-list__item-main-img">
                  <img src="${chartSongs[0].song_img}">
                  <svg fill="var(--element-color)" height="16" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                      viewBox="0 0 460.114 460.114" xml:space="preserve" class="play-icon">
                      <path d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173
                          c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087
                          c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"/>
                  </svg>
              </div>
              <div class="song-list__item-info">
                  <h5 class="item-info__song-name">${chartSongs[0].song_name}</h5>
                  <h6 class="song-info__singer">
                      <span class="singer-list">
                          <span class="singer-name cursor-pointer">Pháo</span>,
                          <span class="singer-name cursor-pointer">Sterry</span>
                      </span>
                  </h6>
              </div>
          </div>
          <div class="song-list__item-album">${chartSongs[0].song_album}</div>
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
                      xml:space="preserve" class="like-icon"
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
                      width="14" height="14" class="on-like-icon hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20" fill="var(--active-color)"
                  >
                      <path
                          d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z"
                      />
                  </svg>
              </button>
              <div class="duration">${chartSongs[0].song_duration}</div>
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
      </div>
    </div>`;
    for (let i = 1; i < 11; i++) {
      temp.innerHTML += `
    <div class="chart__list-song__item is-space-between cursor-pointer">
      <div class="rank is-space-between">
          <div class="song-rank__container">
              <span class="song-rank top_${i}">${i}</span>
          </div>
          <div class="rank-status">
              <svg fill="var(--element-color)" height="20" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 492 492" xml:space="preserve">
                  <path d="M465.064,207.562H26.908C12.076,207.562,0,219.698,0,234.53v22.804c0,14.832,12.072,27.104,26.908,27.104h438.156
                      c14.84,0,26.936-12.272,26.936-27.104V234.53C492,219.698,479.904,207.562,465.064,207.562z"/>
              </svg>
          </div>
      </div>
      <div class="is-space-between" style="flex: 1; margin-right: 12px;">
          <div class="song-list__item-left is-space-between">
              <div class="song-list__item-main-img">
                  <img src="${chartSongs[i].song_img}">
                  <svg fill="var(--element-color)" height="16" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                      viewBox="0 0 460.114 460.114" xml:space="preserve" class="play-icon" onclick="playSong(chartSongs, chartSongs[${i}], '#zingchart')">
                      <path d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173
                          c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087
                          c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"/>
                  </svg>
              </div>
              <div class="song-list__item-info">
                  <h5 class="item-info__song-name">${chartSongs[i].song_name}</h5>
                  <h6 class="song-info__singer">
                      <span class="singer-list">
                      </span>
                  </h6>
              </div>
          </div>
          <div class="song-list__item-album">${chartSongs[i].song_album}</div>
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
                      xml:space="preserve" class="like-icon"
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
                      width="14" height="14" class="on-like-icon hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20" fill="var(--active-color)"
                  >
                      <path
                          d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z"
                      />
                  </svg>
              </button>
              <div class="duration">${chartSongs[i].song_duration}</div>
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
      </div>
    </div>`;
      var singerName = temp.querySelectorAll(".singer-list")[i];
      var rankStatus = temp.querySelectorAll(".rank-status")[i - 1];
      if (chartSongs[i].singer.length === 1) {
        singerName.innerHTML = `<span class="singer-name">${chartSongs[i].singer}</span>`;
      } else {
        for (let j = 0; j < chartSongs[i].singer.length - 1; j++) {
          singerName.innerHTML += `<span class="singer-name">${chartSongs[i].singer[j]}</span>, `;
        }
        singerName.innerHTML += `<span class="singer-name">${
          chartSongs[i].singer[chartSongs[i].singer.length - 1]
        }</span>`;
      }
      if (chartSongs[i].status) {
        if (chartSongs[i].status[0]) {
          rankStatus.innerHTML = `
        <svg
          fill="#1dc186" width="20"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          xml:space="preserve"
          >
              <path d="M18.5,15.5l-6-7l-6,7H18.5z" />
              <rect fill="none" class="st0" width="24" height="24" />
              <rect fill="none" width="24" height="24" />
          </svg>
        <div class="rank-change">${chartSongs[i].status[1]}</div>`;
        } else {
          rankStatus.innerHTML = `
        <svg
          fill="#e35050" width="20" style="transform: rotate(180deg);"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          xml:space="preserve"
          >
              <path d="M18.5,15.5l-6-7l-6,7H18.5z" />
              <rect fill="none" class="st0" width="24" height="24" />
              <rect fill="none" width="24" height="24" />
          </svg>
        <div class="rank-change">${chartSongs[i].status[1]}</div>`;
        }
      }
    }
    chartSongList.innerHTML = temp.innerHTML;
  } else {
    chartSongList.innerHTML = "";
  }
}

function loadAllChartSong() {
  if (chartSongs.length > 0) {
    var temp = document.createElement("div");
    temp.innerHTML += `
    <div class="chart__list-song__item is-space-between cursor-pointer">
      <span style="width: 100px; text-align: center; padding-left: 15px; margin-right: 15px;">Gợi ý</span>
      <div class="is-space-between" style="flex: 1; margin-right: 12px;">
          <div class="song-list__item-left is-space-between">
              <div class="song-list__item-main-img">
                  <img src="${chartSongs[0].song_img}">
                  <svg fill="var(--element-color)" height="16" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                      viewBox="0 0 460.114 460.114" xml:space="preserve" class="play-icon">
                      <path d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173
                          c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087
                          c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"/>
                  </svg>
              </div>
              <div class="song-list__item-info">
                  <h5 class="item-info__song-name">${chartSongs[0].song_name}</h5>
                  <h6 class="song-info__singer">
                      <span class="singer-list">
                          <span class="singer-name cursor-pointer">Pháo</span>,
                          <span class="singer-name cursor-pointer">Sterry</span>
                      </span>
                  </h6>
              </div>
          </div>
          <div class="song-list__item-album">${chartSongs[0].song_album}</div>
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
                      xml:space="preserve" class="like-icon"
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
                      width="14" height="14" class="on-like-icon hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20" fill="var(--active-color)"
                  >
                      <path
                          d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z"
                      />
                  </svg>
              </button>
              <div class="duration">${chartSongs[0].song_duration}</div>
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
      </div>
    </div>`;
    for (let i = 1; i < chartSongs.length; i++) {
      temp.innerHTML += `
    <div class="chart__list-song__item is-space-between cursor-pointer">
      <div class="rank is-space-between">
          <div class="song-rank__container">
              <span class="song-rank top_${i}">${i}</span>
          </div>
          <div class="rank-status">
              <svg fill="var(--element-color)" height="20" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 492 492" xml:space="preserve">
                  <path d="M465.064,207.562H26.908C12.076,207.562,0,219.698,0,234.53v22.804c0,14.832,12.072,27.104,26.908,27.104h438.156
                      c14.84,0,26.936-12.272,26.936-27.104V234.53C492,219.698,479.904,207.562,465.064,207.562z"/>
              </svg>
          </div>
      </div>
      <div class="is-space-between" style="flex: 1; margin-right: 12px;">
          <div class="song-list__item-left is-space-between">
              <div class="song-list__item-main-img">
                  <img src="${chartSongs[i].song_img}">
                  <svg fill="var(--element-color)" height="16" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                      viewBox="0 0 460.114 460.114" xml:space="preserve" class="play-icon">
                      <path d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173
                          c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087
                          c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"/>
                  </svg>
              </div>
              <div class="song-list__item-info">
                  <h5 class="item-info__song-name">${chartSongs[i].song_name}</h5>
                  <h6 class="song-info__singer">
                      <span class="singer-list">
                      </span>
                  </h6>
              </div>
          </div>
          <div class="song-list__item-album">${chartSongs[i].song_album}</div>
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
                      xml:space="preserve" class="like-icon"
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
                      width="14" height="14" class="on-like-icon hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20" fill="var(--active-color)"
                  >
                      <path
                          d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z"
                      />
                  </svg>
              </button>
              <div class="duration">${chartSongs[i].song_duration}</div>
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
      </div>
    </div>`;
      var singerName = temp.querySelectorAll(".singer-list")[i];
      var rankStatus = temp.querySelectorAll(".rank-status")[i - 1];
      if (chartSongs[i].singer.length === 1) {
        singerName.innerHTML = `<span class="singer-name">${chartSongs[i].singer}</span>`;
      } else {
        for (let j = 0; j < chartSongs[i].singer.length - 1; j++) {
          singerName.innerHTML += `<span class="singer-name">${chartSongs[i].singer[j]}</span>, `;
        }
        singerName.innerHTML += `<span class="singer-name">${
          chartSongs[i].singer[chartSongs[i].singer.length - 1]
        }</span>`;
      }
      if (chartSongs[i].status) {
        if (chartSongs[i].status[0]) {
          rankStatus.innerHTML = `
        <svg
          fill="#1dc186" width="20"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          xml:space="preserve"
          >
              <path d="M18.5,15.5l-6-7l-6,7H18.5z" />
              <rect fill="none" class="st0" width="24" height="24" />
              <rect fill="none" width="24" height="24" />
          </svg>
        <div class="rank-change">${chartSongs[i].status[1]}</div>`;
        } else {
          rankStatus.innerHTML = `
        <svg
          fill="#e35050" width="20" style="transform: rotate(180deg);"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          xml:space="preserve"
          >
              <path d="M18.5,15.5l-6-7l-6,7H18.5z" />
              <rect fill="none" class="st0" width="24" height="24" />
              <rect fill="none" width="24" height="24" />
          </svg>
        <div class="rank-change">${chartSongs[i].status[1]}</div>`;
        }
      }
    }
    chartSongList.innerHTML = temp.innerHTML;
  } else {
    chartSongList.innerHTML = "";
  }
  document.querySelector(".chart-center__bottom").style.display = "none";
}
