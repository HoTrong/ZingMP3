/* Gallery */
var leftBtn = document.querySelector(".gallery-container .chevron-left"),
  rightBtn = document.querySelector(".gallery-container .chevron-right");

var index = 3;
var gallery_IsRunning = false,
  specialRadio_IsRunning = false,
  popularSinger_IsRunning = false;

leftBtn.addEventListener("click", function (event) {
  if (!gallery_IsRunning) {
    gallery_IsRunning = true;
    var galleryItem = document.querySelectorAll(".gallery-list__item");
    galleryItem[0].classList.add("first-1");
    galleryItem[1].classList.add("selected-1");
    galleryItem[2].classList.add("last-1");
    galleryItem[3].style.display = "block";
    setTimeout(function () {
      var galleryListItem = document.querySelector(".gallery-list");
      [...galleryListItem.children].forEach((child) => child.remove());
      galleryItem[3].classList.replace("next", "position-1");
      galleryItem[0].classList.remove("first-1");
      galleryItem[0].classList.replace("position-1", "position-2");
      galleryItem[1].classList.remove("selected-1");
      galleryItem[1].classList.replace("position-2", "position-3");
      galleryItem[2].classList.replace("last-1", "previous");
      galleryItem[2].classList.remove("position-3");
      galleryItem[4].classList.replace("add", "next");
      galleryItem[5].classList.replace("previous", "add");
      galleryItem[2].style.display = "none";
      galleryItem[4].style.display = "none";
      galleryItem[5].style.display = "none";
      galleryListItem.appendChild(galleryItem[3]);
      galleryListItem.appendChild(galleryItem[0]);
      galleryListItem.appendChild(galleryItem[1]);
      galleryListItem.appendChild(galleryItem[4]);
      galleryListItem.appendChild(galleryItem[5]);
      galleryListItem.appendChild(galleryItem[2]);
      gallery_IsRunning = false;
    }, 1000);
  }
});

rightBtn.addEventListener("click", function (event) {
  if (!gallery_IsRunning) {
    gallery_IsRunning = true;
    var galleryItem = document.querySelectorAll(".gallery-list__item");
    galleryItem[0].classList.add("first-2");
    galleryItem[1].classList.add("selected-2");
    galleryItem[2].classList.add("last-2");
    galleryItem[5].style.display = "block";
    setTimeout(function () {
      var galleryListItem = document.querySelector(".gallery-list");
      [...galleryListItem.children].forEach((child) => child.remove());
      galleryItem[1].classList.replace("position-2", "position-1");
      galleryItem[1].classList.remove("selected-2");
      galleryItem[2].classList.replace("position-3", "position-2");
      galleryItem[2].classList.remove("last-2");
      galleryItem[5].classList.replace("previous", "position-3");
      galleryItem[0].classList.replace("position-1", "next");
      galleryItem[0].classList.remove("first-2");
      galleryItem[3].classList.replace("next", "add");
      galleryItem[4].classList.replace("add", "previous");
      galleryItem[0].style.display = "none";
      galleryItem[3].style.display = "none";
      galleryItem[4].style.display = "none";
      galleryListItem.appendChild(galleryItem[1]);
      galleryListItem.appendChild(galleryItem[2]);
      galleryListItem.appendChild(galleryItem[5]);
      galleryListItem.appendChild(galleryItem[0]);
      galleryListItem.appendChild(galleryItem[3]);
      galleryListItem.appendChild(galleryItem[4]);
      gallery_IsRunning = false;
    }, 1000);
  }
});

setInterval(function () {
  if (!gallery_IsRunning) {
    gallery_IsRunning = true;
    var galleryItem = document.querySelectorAll(".gallery-list__item");
    galleryItem[0].classList.add("first-2");
    galleryItem[1].classList.add("selected-2");
    galleryItem[2].classList.add("last-2");
    galleryItem[5].style.display = "block";
    setTimeout(function () {
      var galleryListItem = document.querySelector(".gallery-list");
      [...galleryListItem.children].forEach((child) => child.remove());
      galleryItem[1].classList.replace("position-2", "position-1");
      galleryItem[1].classList.remove("selected-2");
      galleryItem[2].classList.replace("position-3", "position-2");
      galleryItem[2].classList.remove("last-2");
      galleryItem[5].classList.replace("previous", "position-3");
      galleryItem[0].classList.replace("position-1", "next");
      galleryItem[0].classList.remove("first-2");
      galleryItem[3].classList.replace("next", "add");
      galleryItem[4].classList.replace("add", "previous");
      galleryItem[0].style.display = "none";
      galleryItem[3].style.display = "none";
      galleryItem[4].style.display = "none";
      galleryListItem.appendChild(galleryItem[1]);
      galleryListItem.appendChild(galleryItem[2]);
      galleryListItem.appendChild(galleryItem[5]);
      galleryListItem.appendChild(galleryItem[0]);
      galleryListItem.appendChild(galleryItem[3]);
      galleryListItem.appendChild(galleryItem[4]);
      gallery_IsRunning = false;
    }, 1000);
  }
}, 5000);

/* Radio */
var rleftBtn = document.querySelector(".special-radio__list .chevron-left"),
  rrightBtn = document.querySelector(".special-radio__list .chevron-right");

rleftBtn.addEventListener("click", function () {
  if (!rleftBtn.classList.contains("disabled") && !specialRadio_IsRunning) {
    specialRadio_IsRunning = true;
    var radioList = document.querySelector(".special-radio__list");
    var galleryItems = document.querySelectorAll(
        ".special-radio__list-item:not(.hidden-right):not(.hidden-left)"
      ),
      hiddenItems = document.querySelectorAll(
        ".special-radio__list-item.hidden-left"
      );
    radioList.style.width = "2225px";
    galleryItems.forEach((galleryItem) => {
      galleryItem.classList.add("move-right");
    });
    hiddenItems.forEach((hiddenItem) => {
      hiddenItem.classList.add("appear-left");
      hiddenItem.classList.remove("hidden-left");
    });
    setTimeout(function () {
      for (let i = 0; i < hiddenItems.length; i++) {
        galleryItems[galleryItems.length - 1 - i].classList.add("hidden-right");
      }
      radioList.style.width = "1550px";
      galleryItems.forEach((galleryItem) => {
        galleryItem.classList.remove("move-right");
      });
      hiddenItems.forEach((hiddenItem) => {
        hiddenItem.classList.remove("appear-left");
      });
      specialRadio_IsRunning = false;
    }, 500);
    rrightBtn.classList.remove("disabled");
    rleftBtn.classList.add("disabled");
  }
});

rrightBtn.addEventListener("click", function () {
  if (!rrightBtn.classList.contains("disabled") && !specialRadio_IsRunning) {
    specialRadio_IsRunning = true;
    var radioList = document.querySelector(".special-radio__list");
    var galleryItems = document.querySelectorAll(
        ".special-radio__list-item:not(.hidden-right):not(.hidden-left)"
      ),
      hiddenItems = document.querySelectorAll(
        ".special-radio__list-item.hidden-right"
      );
    radioList.style.width = "2225px";
    galleryItems.forEach((galleryItem) => {
      galleryItem.classList.add("move-left");
    });
    hiddenItems.forEach((hiddenItem) => {
      hiddenItem.classList.add("appear-right");
      hiddenItem.classList.remove("hidden-right");
    });
    setTimeout(function () {
      for (let i = 0; i < hiddenItems.length; i++) {
        galleryItems[i].classList.add("hidden-left");
      }
      radioList.style.width = "1550px";
      galleryItems.forEach((galleryItem) => {
        galleryItem.classList.remove("move-left");
      });
      hiddenItems.forEach((hiddenItem) => {
        hiddenItem.classList.remove("appear-right");
      });
      specialRadio_IsRunning = false;
    }, 500);
    rleftBtn.classList.remove("disabled");
    rrightBtn.classList.add("disabled");
  }
});

/* Chart */
var chartLines1 = document.querySelectorAll(
    ".exploration-page .line-chart.top_1 .line-segment"
  ),
  chartLines2 = document.querySelectorAll(
    ".exploration-page .line-chart.top_2 .line-segment"
  ),
  chartLines3 = document.querySelectorAll(
    ".exploration-page .line-chart.top_3 .line-segment"
  );

chartLines1.forEach((chartLine) => {
  chartLine.addEventListener("mouseover", function () {
    document
      .querySelector(".exploration-page .line-chart.top_1")
      .classList.remove("only");
    document
      .querySelector(".exploration-page .line-chart.top_2")
      .classList.add("only");
    document
      .querySelector(".exploration-page .line-chart.top_3")
      .classList.add("only");
  });
});

chartLines2.forEach((chartLine) => {
  chartLine.addEventListener("mouseover", function () {
    document
      .querySelector(".exploration-page .line-chart.top_2")
      .classList.remove("only");
    document
      .querySelector(".exploration-page .line-chart.top_1")
      .classList.add("only");
    document
      .querySelector(".exploration-page .line-chart.top_3")
      .classList.add("only");
  });
});

chartLines3.forEach((chartLine) => {
  chartLine.addEventListener("mouseover", function () {
    document
      .querySelector(".exploration-page .line-chart.top_3")
      .classList.remove("only");
    document
      .querySelector(".exploration-page .line-chart.top_1")
      .classList.add("only");
    document
      .querySelector(".exploration-page .line-chart.top_2")
      .classList.add("only");
  });
});

/* Popular Singer */
var pleftBtn = document.querySelector(
    ".exploration-page .popular-singer__list .chevron-left"
  ),
  prightBtn = document.querySelector(
    ".exploration-page .popular-singer__list .chevron-right"
  );

pleftBtn.addEventListener("click", function () {
  if (!pleftBtn.classList.contains("disabled") && !popularSinger_IsRunning) {
    popularSinger_IsRunning = true;
    var pList = document.querySelector(
      ".exploration-page .popular-singer__list"
    );
    var pItems = document.querySelectorAll(
        ".exploration-page .popular-singer__list-item:not(.hidden-left):not(.hidden-right)"
      ),
      phiddenItems = document.querySelectorAll(
        ".exploration-page .popular-singer__list-item.hidden-left"
      );
    pList.style.width = "3800px";
    pItems.forEach((pItem) => {
      pItem.classList.add("move-right");
    });
    phiddenItems.forEach((phiddenItem) => {
      phiddenItem.classList.add("appear-left");
      phiddenItem.classList.remove("hidden-left");
    });
    setTimeout(function () {
      pItems.forEach((pItem) => {
        pItem.classList.add("hidden-right");
        pItem.classList.remove("move-right");
      });
      for (let i = 0; i < phiddenItems.length - pItems.length; i++) {
        phiddenItems[phiddenItems.length - 1 - i].classList.add("hidden-right");
      }
      pList.style.width = "1550px";
      phiddenItems.forEach((phiddenItem) => {
        phiddenItem.classList.remove("appear-left");
      });
      popularSinger_IsRunning = false;
    }, 1000);
    pleftBtn.classList.add("disabled");
    prightBtn.classList.remove("disabled");
  }
});

prightBtn.addEventListener("click", function () {
  if (!prightBtn.classList.contains("disabled") && !popularSinger_IsRunning) {
    popularSinger_IsRunning = true;
    var pList = document.querySelector(
      ".exploration-page .popular-singer__list"
    );
    var pItems = document.querySelectorAll(
        ".exploration-page .popular-singer__list-item:not(.hidden-left):not(.hidden-right)"
      ),
      phiddenItems = document.querySelectorAll(
        ".exploration-page .popular-singer__list-item.hidden-right"
      );
    pList.style.width = "3800px";
    pItems.forEach((pItem) => {
      pItem.classList.add("move-left");
    });
    phiddenItems.forEach((phiddenItem) => {
      phiddenItem.classList.add("appear-right");
      phiddenItem.classList.remove("hidden-right");
    });
    setTimeout(function () {
      pItems.forEach((pItem) => {
        pItem.classList.add("hidden-left");
        pItem.classList.remove("move-left");
      });
      for (let i = 0; i < phiddenItems.length - pItems.length; i++) {
        phiddenItems[i].classList.add("hidden-left");
      }
      pList.style.width = "1550px";
      phiddenItems.forEach((phiddenItem) => {
        phiddenItem.classList.remove("appear-right");
      });
      popularSinger_IsRunning = false;
    }, 1000);
    pleftBtn.classList.remove("disabled");
    prightBtn.classList.add("disabled");
  }
});

/* Section */
var sectionLikeBtns = document.querySelectorAll(".hover-btn .like-btn");
var notificationAddAlbum = document.querySelector(
    ".footer .notification-add-album"
  ),
  notificationRemoveAlbum = document.querySelector(
    ".footer .notification-remove-album"
  );
var notificationContainer = document.querySelector(
  ".footer .notification-container"
);
var timeOut;

sectionLikeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", function () {
    clearTimeout(timeOut);
    likeBtn.querySelector(".like-icon").classList.toggle("hidden");
    likeBtn.querySelector(".on-like-icon").classList.toggle("hidden");
    if (likeBtn.querySelector(".on-like-icon").classList.contains("hidden")) {
      notificationContainer.innerHTML = `<div class="notification-remove-album is-space-between">
        <span class="notified-content">Đã xóa album khỏi thư viện</span>
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
          .querySelector(".notification-remove-album")
          .classList.add("is-on");
      }, 0);
      timeOut = setTimeout(function () {
        notificationContainer
          .querySelector(".notification-remove-album")
          .classList.remove("is-on");
      }, 3000);
    } else {
      notificationContainer.innerHTML = `<div class="notification-add-album is-space-between">
        <span class="notified-content">Đã thêm album vào thư viện</span>
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
          .querySelector(".notification-add-album")
          .classList.add("is-on");
      }, 0);
      timeOut = setTimeout(function () {
        notificationContainer
          .querySelector(".notification-add-album")
          .classList.remove("is-on");
      }, 3000);
    }
  });
});

setInterval(function () {
  var hiddenRight = document.querySelectorAll(".new-song__list .hidden-right");
  var nList = document.querySelector(".new-song__list");
  var items = document.querySelectorAll(
    ".new-song__list .new-song__list-item:not(.hidden-right):not(.hidden-left)"
  );
  nList.style.width = "3125px";
  items.forEach((item) => {
    item.classList.add("move-left");
  });
  for (let i = 0; i < 3; i++) {
    hiddenRight[i].classList.add("move-left");
    hiddenRight[i].classList.remove("hidden-right");
  }
  setTimeout(function () {
    items.forEach((item) => {
      item.classList.add("hidden-left");
      item.classList.remove("move-left");
    });
    for (let i = 0; i < 3; i++) {
      hiddenRight[i].classList.remove("move-left");
    }
    if (hiddenRight.length === 3) {
      var hiddenLeft = document.querySelectorAll(
        ".new-song__list .hidden-left"
      );
      hiddenLeft.forEach((hidden) => {
        hidden.classList.replace("hidden-left", "hidden-right");
      });
      items = document.querySelectorAll(
        ".new-song__list .new-song__list-item:not(.hidden-right):not(.hidden-left)"
      );
      items.forEach((item) => item.classList.add("hidden-right"));
      for (let i = 0; i < 3; i++) {
        hiddenLeft[i].classList.remove("hidden-right");
      }
    }
    nList.style.width = "1550px";
  }, 500);
}, 7000);

setInterval(function () {
  var hiddenRight = document.querySelectorAll(
    ".section.notitle .notitle__song-list .hidden-right"
  );
  var sList = document.querySelector(".section.notitle .notitle__song-list");
  var items = document.querySelectorAll(
    ".section.notitle .song-list__item:not(.hidden-right):not(.hidden-left)"
  );
  sList.style.width = "3125px";
  items.forEach((item) => {
    item.classList.add("move-left");
  });
  for (let i = 0; i < 5; i++) {
    hiddenRight[i].classList.add("move-left");
    hiddenRight[i].classList.remove("hidden-right");
  }
  setTimeout(function () {
    sList.style.width = "1550px";
    items.forEach((item) => {
      item.classList.add("hidden-left");
      item.classList.remove("move-left");
    });
    for (let i = 0; i < 5; i++) {
      hiddenRight[i].classList.remove("move-left");
    }
    if (hiddenRight.length === 5) {
      var hiddenLeft = document.querySelectorAll(
        ".section.notitle .notitle__song-list .hidden-left"
      );
      hiddenLeft.forEach((hidden) => {
        hidden.classList.replace("hidden-left", "hidden-right");
      });
      items = document.querySelectorAll(
        ".section.notitle .song-list__item:not(.hidden-right):not(.hidden-left)"
      );
      items.forEach((item) => item.classList.add("hidden-right"));
      for (let i = 0; i < 5; i++) {
        hiddenLeft[i].classList.remove("hidden-right");
      }
    }
  }, 500);
}, 3000);

var moreBtns = document.querySelectorAll(
    ".song-list__item .hover-btn .more-btn"
  ),
  moreSelection,
  tempBtn;

moreBtns.forEach((moreBtn) => {
  moreBtn.addEventListener("click", function () {
    if (moreSelection) {
      moreSelection.remove();
    }
    tempBtn = moreBtn;
    moreSelection = document.createElement("div");
    moreSelection.classList.add("more-selection", "cursor-pointer");
    moreSelection.innerHTML = `
      <div class="more-selection__item">
        <span class="playlist-add-icon is-center">
          <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" fill="var(--element-color)"
          >
              <path d="M85.333333 682.666667h341.333334v-85.333334H85.333333m682.666667 0v-170.666666h-85.333333v170.666666h-170.666667v85.333334h170.666667v170.666666h85.333333v-170.666666h170.666667v-85.333334m-341.333334-341.333333H85.333333v85.333333h512m0 85.333334H85.333333v85.333333h512v-85.333333z"/>
          </svg>    
        </span>
        Thêm vào danh sách phát
      </div>
      <div class="more-selection__item">
        <span class="chat-bubble-icon is-center">
          <svg
              height="16" width="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512.064 512.064"
              xml:space="preserve"
          >
              <path
                  fill="var(--element-color)"
                  d="M256.032,433.232c10.912,0,22.08-0.896,33.328-2.656l102.032,81.488V385.632
                  c51.968-41.408,81.6-102.56,81.6-169.008C472.992,97.184,375.664,0,256.032,0S39.072,97.168,39.072,216.608
                  C39.072,336.064,136.4,433.232,256.032,433.232z M256.032,32c101.984,0,184.96,82.816,184.96,184.624
                  c0,58.928-27.376,112.976-75.104,148.288l-6.48,4.8v75.872l-61.44-49.072l-7.232,1.376c-11.744,2.24-23.424,3.376-34.688,3.376
                  c-101.984,0-184.96-82.832-184.96-184.624S154.048,32,256.032,32z"
              />
          </svg>
        </span>
        Bình luận
      </div>
      <div class="more-selection__item">
        <span class="download-icon is-center">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              viewBox="0 0 20 20" fill="var(--element-color)"
          >
              <path d="M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z"/>
              <path d="M10 15l5-6h-4V1H9v8H5l5 6z"/>
          </svg>                                  
        </span>
        Tải xuống
      </div>
      <div class="more-selection__item">
        <span class="copy-link-icon is-center">
          <svg
              fill="var(--element-color)"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="16" height="16"
              viewBox="0 0 442.246 442.246"
              xml:space="preserve"
          >
              <path
              d="M409.657,32.474c-43.146-43.146-113.832-43.146-156.978,0l-84.763,84.762c29.07-8.262,60.589-6.12,88.129,6.732
                  l44.063-44.064c17.136-17.136,44.982-17.136,62.118,0c17.136,17.136,17.136,44.982,0,62.118l-55.386,55.386l-36.414,36.414
                  c-17.136,17.136-44.982,17.136-62.119,0l-47.43,47.43c11.016,11.017,23.868,19.278,37.332,24.48
                  c36.415,14.382,78.643,8.874,110.467-16.219c3.06-2.447,6.426-5.201,9.18-8.262l57.222-57.222l34.578-34.578
                  C453.109,146.306,453.109,75.926,409.657,32.474z"
              />
              <path
              d="M184.135,320.114l-42.228,42.228c-17.136,17.137-44.982,17.137-62.118,0c-17.136-17.136-17.136-44.981,0-62.118
                  l91.8-91.799c17.136-17.136,44.982-17.136,62.119,0l47.43-47.43c-11.016-11.016-23.868-19.278-37.332-24.48
                  c-38.25-15.3-83.232-8.262-115.362,20.502c-1.53,1.224-3.06,2.754-4.284,3.978l-91.8,91.799
                  c-43.146,43.146-43.146,113.832,0,156.979c43.146,43.146,113.832,43.146,156.978,0l82.927-83.845
                  C230.035,335.719,220.243,334.496,184.135,320.114z"
              />
          </svg>
        </span>
        Sao chép link
      </div>
      <div class="more-selection__item more-share">
        <span class="share-icon is-center">
            <svg
                style="enable-background:new 0 0 24 24;"
                viewBox="0 0 24 24" xml:space="preserve"
                width="20" height="20" fill="var(--element-color)"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <path
                    d="M21.7,10.2l-6.6-6C14.6,3.7,14,4.2,14,5v3c-4.7,0-8.7,2.9-10.6,6.8c-0.7,1.3-1.1,2.7-1.4,4.1   c-0.2,1,1.3,1.5,1.9,0.6C6.1,16,9.8,13.7,14,13.7V17c0,0.8,0.6,1.3,1.1,0.8l6.6-6C22.1,11.4,22.1,10.6,21.7,10.2z"
                />
            </svg>
        </span>
        Chia sẻ
        <span class="detail-icon is-center">
          <svg
              width="14" height="14"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1000 1000"
              enable-background="new 0 0 1000 1000"
              xml:space="preserve" fill="var(--element-color)"
          >
              <path
                  d="M217.6,915.1c0-19.2,7.2-38.4,21.9-53L601.5,500L239.5,137.9c-29.3-29.3-29.3-76.7,0-106c29.3-29.3,76.7-29.3,106,0L760.5,447c29.3,29.3,29.3,76.7,0,106L345.5,968c-29.3,29.3-76.7,29.3-106,0C224.8,953.4,217.6,934.2,217.6,915.1L217.6,915.1z"
              />
          </svg>                                    
        </span>
        <div class="more-share-selection">
          <div class="more-share-selection__item">
            <span class="facebook-icon">
              <svg
                  width="20" height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 40 40"
                  style="enable-background:new 0 0 40 40;"
                  xml:space="preserve"
              >
                  <style type="text/css">
                      .st0{fill:url(#SVGID_1_);}
                      .st1{fill:#FFFFFF;}
                  </style>
                  <linearGradient
                      id="SVGID_1_"
                      gradientUnits="userSpaceOnUse"
                      x1="-277.375"
                      y1="406.6018"
                      x2="-277.375"
                      y2="407.5726"
                      gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
                  >
                      <stop offset="0" style="stop-color:#0062E0" />
                      <stop offset="1" style="stop-color:#19AFFF" />
                  </linearGradient>
                  <path
                      class="st0"
                      d="M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"
                  />
                  <path
                      class="st1"
                      d="M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20
                      h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z"
                  />
                </svg>
            </span>
            Facebook
          </div>
          <div class="more-share-selection__item">
            <span class="zalo-icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="20" height="20"
                  viewBox="0 0 400 400"
              >
                  <path
                      d="M243.101 144.369 C 239.477 145.105,236.389 148.419,235.244 152.800 C 234.686 154.936,234.815 243.810,235.379 245.800 C 237.111 251.907,243.611 255.052,250.109 252.926 C 252.475 252.153,255.422 249.478,255.841 247.724 C 255.989 247.106,256.310 246.347,256.555 246.039 C 256.876 245.634,257.000 232.462,257.000 198.839 L 257.000 152.200 256.115 150.337 C 253.941 145.758,248.514 143.270,243.101 144.369 M75.800 144.800 C 75.360 144.989,74.584 145.156,74.075 145.172 C 63.930 145.480,61.483 161.048,71.000 164.737 C 75.319 166.412,76.400 166.493,95.800 166.597 C 113.948 166.695,114.604 166.725,114.716 167.461 C 114.927 168.846,113.654 171.094,110.294 175.274 C 108.469 177.543,105.961 180.750,104.719 182.400 C 101.960 186.068,96.204 193.506,95.278 194.601 C 94.905 195.042,93.971 196.212,93.203 197.201 C 92.435 198.191,91.670 199.060,91.503 199.133 C 91.336 199.207,91.200 199.444,91.200 199.662 C 91.200 199.879,90.435 200.983,89.500 202.115 C 88.565 203.247,87.658 204.359,87.484 204.586 C 87.310 204.814,86.083 206.440,84.756 208.200 C 83.430 209.960,82.042 211.764,81.672 212.208 C 81.303 212.652,80.197 214.092,79.216 215.408 C 76.862 218.566,76.992 218.396,75.701 220.000 C 75.082 220.770,73.778 222.480,72.804 223.800 C 71.830 225.120,70.888 226.380,70.712 226.600 C 59.425 240.654,60.654 251.564,73.800 254.000 C 80.096 255.167,141.690 255.176,145.400 254.010 C 148.554 253.019,152.000 249.506,152.000 247.282 C 152.000 246.823,152.180 246.336,152.400 246.200 C 154.134 245.128,151.183 236.381,148.425 234.418 C 145.319 232.206,145.662 232.235,120.500 232.089 C 103.892 231.992,97.200 231.827,97.200 231.513 C 97.200 231.090,102.325 223.821,103.963 221.921 C 104.399 221.414,105.441 220.080,106.278 218.955 C 109.629 214.452,113.773 208.973,114.175 208.514 C 114.964 207.611,115.430 207.007,117.190 204.600 C 118.155 203.280,119.059 202.110,119.200 202.000 C 119.341 201.890,120.245 200.720,121.210 199.400 C 123.108 196.804,123.127 196.779,124.543 195.000 C 125.937 193.247,141.763 172.376,143.800 169.603 C 153.101 156.940,151.916 148.378,140.372 144.838 C 138.635 144.306,77.035 144.269,75.800 144.800 M180.000 176.154 C 178.570 176.399,177.220 176.710,177.000 176.845 C 176.780 176.979,176.098 177.209,175.485 177.356 C 166.346 179.542,156.629 190.014,152.990 201.600 C 152.610 202.810,152.154 204.187,151.977 204.660 C 150.676 208.125,150.678 222.753,151.979 226.129 C 152.164 226.608,152.643 228.080,153.043 229.400 C 159.586 250.956,183.126 261.422,200.960 250.704 C 205.501 247.975,207.324 247.989,209.300 250.769 C 211.179 253.411,217.138 254.455,220.970 252.813 C 223.092 251.903,226.800 248.604,226.800 247.625 C 226.800 247.259,227.025 246.735,227.300 246.460 C 228.244 245.516,228.002 185.909,227.044 183.496 C 225.508 179.626,221.329 177.092,216.400 177.040 C 213.039 177.005,212.055 177.443,208.304 180.645 C 205.825 182.761,205.735 182.767,202.955 180.989 C 195.633 176.305,188.222 174.744,180.000 176.154 M296.200 176.197 C 261.916 180.964,251.521 227.395,280.021 248.469 C 291.495 256.954,310.970 257.190,323.774 248.999 C 328.360 246.066,336.800 236.486,336.800 234.215 C 336.800 234.109,337.228 233.072,337.750 231.911 C 338.273 230.750,338.979 228.720,339.320 227.400 C 339.661 226.080,340.153 224.192,340.415 223.204 C 341.052 220.794,341.058 210.373,340.424 207.600 C 338.223 197.982,335.202 192.017,329.793 186.607 C 327.098 183.912,321.677 180.173,318.800 179.023 C 317.810 178.628,316.640 178.155,316.200 177.972 C 311.420 175.988,303.045 175.245,296.200 176.197 M196.000 197.769 C 207.835 203.771,208.531 225.481,197.103 232.158 C 182.229 240.847,167.663 221.943,176.034 204.814 C 179.616 197.485,188.947 194.192,196.000 197.769 M308.800 197.778 C 317.776 202.385,320.855 214.977,315.683 225.930 C 310.534 236.832,293.649 236.712,288.780 225.739 C 288.307 224.672,287.713 223.368,287.460 222.839 C 286.863 221.593,286.837 209.285,287.429 207.961 C 290.274 201.590,293.768 197.943,298.249 196.664 C 300.527 196.014,306.615 196.657,308.800 197.778 "
                      fill="#f7fbfb"
                      fill-rule="evenodd"
                  />
                  <path
                      d="M93.900 143.900 C 100.555 143.961,111.445 143.961,118.100 143.900 C 124.755 143.838,119.310 143.788,106.000 143.788 C 92.690 143.788,87.245 143.838,93.900 143.900 M244.505 143.887 C 245.114 143.979,246.014 143.977,246.505 143.882 C 246.997 143.787,246.500 143.711,245.400 143.714 C 244.300 143.717,243.897 143.795,244.505 143.887 M237.775 146.900 L 236.600 148.200 237.900 147.025 C 238.615 146.379,239.200 145.794,239.200 145.725 C 239.200 145.416,238.870 145.688,237.775 146.900 M234.546 158.200 C 234.547 160.400,234.614 161.249,234.695 160.087 C 234.776 158.924,234.776 157.124,234.693 156.087 C 234.611 155.049,234.545 156.000,234.546 158.200 M81.100 167.095 C 82.255 167.176,84.145 167.176,85.300 167.095 C 86.455 167.014,85.510 166.948,83.200 166.948 C 80.890 166.948,79.945 167.014,81.100 167.095 M109.911 167.093 C 110.851 167.178,112.291 167.177,113.111 167.091 C 113.930 167.005,113.160 166.936,111.400 166.937 C 109.640 166.939,108.970 167.009,109.911 167.093 M300.691 175.489 C 301.401 175.577,302.661 175.579,303.491 175.492 C 304.321 175.405,303.740 175.333,302.200 175.331 C 300.660 175.329,299.981 175.400,300.691 175.489 M215.305 176.687 C 215.914 176.779,216.814 176.777,217.305 176.682 C 217.797 176.587,217.300 176.511,216.200 176.514 C 215.100 176.517,214.697 176.595,215.305 176.687 M162.187 185.300 L 159.800 187.800 162.300 185.413 C 164.622 183.195,164.983 182.800,164.687 182.800 C 164.626 182.800,163.501 183.925,162.187 185.300 M274.378 186.300 L 273.000 187.800 274.500 186.422 C 275.896 185.138,276.184 184.800,275.878 184.800 C 275.812 184.800,275.137 185.475,274.378 186.300 M188.505 196.687 C 189.114 196.779,190.014 196.777,190.505 196.682 C 190.997 196.587,190.500 196.511,189.400 196.514 C 188.300 196.517,187.897 196.595,188.505 196.687 M301.300 196.687 C 301.905 196.778,302.895 196.778,303.500 196.687 C 304.105 196.595,303.610 196.520,302.400 196.520 C 301.190 196.520,300.695 196.595,301.300 196.687 M312.400 201.000 C 313.146 201.770,313.847 202.400,313.957 202.400 C 314.067 202.400,313.546 201.770,312.800 201.000 C 312.054 200.230,311.353 199.600,311.243 199.600 C 311.133 199.600,311.654 200.230,312.400 201.000 M150.501 212.600 C 150.505 213.480,150.587 213.793,150.683 213.295 C 150.779 212.798,150.775 212.078,150.675 211.695 C 150.575 211.313,150.496 211.720,150.501 212.600 M263.328 215.200 C 263.328 216.630,263.401 217.215,263.489 216.500 C 263.578 215.785,263.578 214.615,263.489 213.900 C 263.401 213.185,263.328 213.770,263.328 215.200 M341.331 215.400 C 341.333 216.940,341.405 217.521,341.492 216.691 C 341.579 215.861,341.577 214.601,341.489 213.891 C 341.400 213.181,341.329 213.860,341.331 215.400 M150.501 218.200 C 150.505 219.080,150.587 219.393,150.683 218.895 C 150.779 218.398,150.775 217.678,150.675 217.295 C 150.575 216.913,150.496 217.320,150.501 218.200 M174.093 218.000 C 174.093 218.770,174.175 219.085,174.276 218.700 C 174.376 218.315,174.376 217.685,174.276 217.300 C 174.175 216.915,174.093 217.230,174.093 218.000 M301.700 233.876 C 302.085 233.976,302.715 233.976,303.100 233.876 C 303.485 233.775,303.170 233.693,302.400 233.693 C 301.630 233.693,301.315 233.775,301.700 233.876 M234.540 240.000 C 234.540 241.870,234.609 242.635,234.693 241.700 C 234.777 240.765,234.777 239.235,234.693 238.300 C 234.609 237.365,234.540 238.130,234.540 240.000 M62.509 242.800 C 62.509 243.790,62.587 244.195,62.682 243.700 C 62.778 243.205,62.778 242.395,62.682 241.900 C 62.587 241.405,62.509 241.810,62.509 242.800 M329.578 244.700 L 328.200 246.200 329.700 244.822 C 331.096 243.538,331.384 243.200,331.078 243.200 C 331.012 243.200,330.337 243.875,329.578 244.700 M207.600 249.725 C 207.600 249.794,208.185 250.379,208.900 251.025 L 210.200 252.200 209.025 250.900 C 207.930 249.688,207.600 249.416,207.600 249.725 M149.775 251.700 L 148.600 253.000 149.900 251.825 C 151.112 250.730,151.384 250.400,151.075 250.400 C 151.006 250.400,150.421 250.985,149.775 251.700 M244.707 253.890 C 245.426 253.979,246.506 253.977,247.107 253.886 C 247.708 253.795,247.120 253.722,245.800 253.724 C 244.480 253.726,243.988 253.801,244.707 253.890 M215.505 254.283 C 216.002 254.379,216.722 254.375,217.105 254.275 C 217.487 254.175,217.080 254.096,216.200 254.101 C 215.320 254.105,215.007 254.187,215.505 254.283 M75.300 254.676 C 75.685 254.776,76.315 254.776,76.700 254.676 C 77.085 254.575,76.770 254.493,76.000 254.493 C 75.230 254.493,74.915 254.575,75.300 254.676 M82.300 255.089 C 83.015 255.178,84.185 255.178,84.900 255.089 C 85.615 255.001,85.030 254.928,83.600 254.928 C 82.170 254.928,81.585 255.001,82.300 255.089 M136.500 255.094 C 137.545 255.176,139.255 255.176,140.300 255.094 C 141.345 255.012,140.490 254.944,138.400 254.944 C 136.310 254.944,135.455 255.012,136.500 255.094 M94.518 255.498 C 96.233 255.573,98.933 255.572,100.518 255.497 C 102.103 255.421,100.700 255.359,97.400 255.360 C 94.100 255.361,92.803 255.422,94.518 255.498 M116.500 255.498 C 118.425 255.571,121.575 255.571,123.500 255.498 C 125.425 255.425,123.850 255.365,120.000 255.365 C 116.150 255.365,114.575 255.425,116.500 255.498 M298.500 255.476 C 298.885 255.576,299.515 255.576,299.900 255.476 C 300.285 255.375,299.970 255.293,299.200 255.293 C 298.430 255.293,298.115 255.375,298.500 255.476 M304.500 255.476 C 304.885 255.576,305.515 255.576,305.900 255.476 C 306.285 255.375,305.970 255.293,305.200 255.293 C 304.430 255.293,304.115 255.375,304.500 255.476 "
                      fill="#6cbdf0"
                      fill-rule="evenodd"
                  />
                  <path
                      d="M194.800 1.937 C 194.800 2.122,191.065 2.393,186.500 2.540 C 181.624 2.697,178.145 2.971,178.067 3.204 C 177.993 3.422,176.778 3.600,175.367 3.600 C 173.955 3.600,172.800 3.761,172.800 3.957 C 172.800 4.153,171.000 4.443,168.800 4.600 C 166.600 4.757,164.800 5.022,164.800 5.187 C 164.800 5.353,163.855 5.595,162.700 5.726 C 161.545 5.857,160.150 6.082,159.600 6.227 C 159.050 6.371,157.970 6.583,157.200 6.696 C 156.430 6.810,155.710 7.027,155.600 7.177 C 155.416 7.428,152.480 8.122,149.300 8.665 C 148.585 8.788,148.000 9.035,148.000 9.215 C 148.000 9.395,147.010 9.666,145.800 9.817 C 144.590 9.968,143.600 10.231,143.600 10.401 C 143.600 10.570,142.794 10.830,141.809 10.978 C 140.824 11.125,139.914 11.416,139.786 11.623 C 139.658 11.830,139.113 12.000,138.576 12.000 C 138.039 12.000,137.600 12.180,137.600 12.400 C 137.600 12.620,137.244 12.800,136.808 12.800 C 135.932 12.800,132.715 13.985,132.400 14.423 C 132.290 14.577,131.390 14.836,130.400 15.000 C 129.410 15.164,128.510 15.411,128.400 15.549 C 127.981 16.073,125.503 17.200,124.768 17.200 C 124.345 17.200,124.000 17.366,124.000 17.568 C 124.000 17.771,123.462 18.055,122.805 18.199 C 122.147 18.343,121.506 18.628,121.381 18.831 C 121.255 19.034,120.803 19.200,120.376 19.200 C 119.949 19.200,119.600 19.360,119.600 19.555 C 119.600 19.751,118.970 20.029,118.200 20.174 C 117.430 20.318,116.800 20.608,116.800 20.818 C 116.800 21.028,116.530 21.200,116.200 21.200 C 115.870 21.200,115.600 21.388,115.600 21.618 C 115.600 21.847,115.375 22.008,115.100 21.974 C 114.348 21.883,112.800 22.448,112.800 22.815 C 112.800 22.992,112.260 23.255,111.600 23.400 C 110.940 23.545,110.400 23.829,110.400 24.032 C 110.400 24.234,110.040 24.400,109.600 24.400 C 109.160 24.400,108.800 24.541,108.800 24.712 C 108.800 24.884,108.305 25.231,107.700 25.483 C 106.427 26.014,103.494 27.685,103.200 28.046 C 103.090 28.181,102.595 28.419,102.100 28.573 C 101.605 28.728,101.200 29.022,101.200 29.227 C 101.200 29.432,100.930 29.600,100.600 29.600 C 100.270 29.600,100.000 29.780,100.000 30.000 C 100.000 30.220,99.649 30.400,99.220 30.400 C 98.791 30.400,98.296 30.625,98.120 30.900 C 97.745 31.485,96.496 32.324,95.500 32.658 C 95.115 32.788,94.800 33.052,94.800 33.247 C 94.800 33.441,94.434 33.600,93.987 33.600 C 93.541 33.600,93.071 33.870,92.945 34.200 C 92.818 34.530,92.464 34.800,92.157 34.800 C 91.851 34.800,91.600 34.968,91.600 35.173 C 91.600 35.378,91.210 35.670,90.734 35.821 C 90.258 35.972,89.439 36.524,88.916 37.048 C 88.392 37.572,87.792 38.000,87.582 38.000 C 87.372 38.000,86.885 38.275,86.500 38.610 C 84.264 40.559,83.457 41.200,83.242 41.200 C 83.109 41.201,82.477 41.651,81.838 42.200 C 81.199 42.750,80.520 43.200,80.331 43.200 C 80.141 43.200,79.374 43.830,78.626 44.600 C 77.879 45.370,77.142 46.000,76.989 46.000 C 76.837 46.000,75.913 46.810,74.937 47.800 C 73.961 48.790,72.994 49.600,72.788 49.600 C 72.396 49.600,70.614 51.242,62.504 59.073 C 59.812 61.673,57.607 63.923,57.604 64.073 C 57.602 64.224,56.250 65.750,54.600 67.466 C 52.950 69.181,51.600 70.702,51.600 70.845 C 51.600 70.989,50.880 71.826,50.000 72.706 C 49.120 73.586,48.400 74.477,48.400 74.687 C 48.400 74.896,47.860 75.549,47.200 76.137 C 46.540 76.725,46.000 77.432,46.000 77.708 C 46.000 77.984,45.550 78.548,45.000 78.961 C 44.450 79.374,44.000 79.914,44.000 80.160 C 44.000 80.407,43.550 81.093,43.000 81.687 C 42.450 82.280,42.000 82.887,42.000 83.037 C 42.000 83.186,41.595 83.701,41.100 84.180 C 40.045 85.202,39.270 86.321,38.942 87.300 C 38.812 87.685,38.589 88.000,38.444 88.000 C 38.300 88.000,37.843 88.630,37.428 89.400 C 37.013 90.170,36.542 90.800,36.380 90.800 C 36.219 90.800,35.974 91.250,35.836 91.800 C 35.698 92.350,35.408 92.800,35.192 92.800 C 34.977 92.800,34.800 93.070,34.800 93.400 C 34.800 93.730,34.623 94.000,34.408 94.000 C 34.192 94.000,33.902 94.450,33.764 95.000 C 33.626 95.550,33.374 96.000,33.203 96.000 C 33.033 96.000,32.788 96.315,32.658 96.700 C 32.403 97.460,31.549 98.879,31.154 99.200 C 31.019 99.310,30.776 99.824,30.614 100.341 C 30.452 100.859,29.888 101.919,29.360 102.697 C 28.832 103.475,28.400 104.342,28.400 104.622 C 28.400 104.903,28.253 105.193,28.073 105.267 C 27.673 105.430,25.200 110.479,25.200 111.132 C 25.200 111.389,25.020 111.600,24.800 111.600 C 24.580 111.600,24.400 111.870,24.400 112.200 C 24.400 112.530,24.234 112.800,24.032 112.800 C 23.829 112.800,23.537 113.385,23.382 114.100 C 23.226 114.815,22.987 115.490,22.850 115.600 C 22.397 115.963,21.200 118.454,21.200 119.032 C 21.200 119.345,21.036 119.600,20.835 119.600 C 20.634 119.600,20.349 120.320,20.200 121.200 C 20.051 122.080,19.766 122.800,19.565 122.800 C 19.364 122.800,19.200 123.070,19.200 123.400 C 19.200 123.730,19.043 124.000,18.851 124.000 C 18.659 124.000,18.387 124.720,18.246 125.600 C 18.106 126.480,17.813 127.200,17.595 127.200 C 17.378 127.200,17.200 127.650,17.200 128.200 C 17.200 128.750,17.058 129.200,16.885 129.200 C 16.712 129.200,16.543 129.565,16.509 130.010 C 16.476 130.456,16.164 131.391,15.817 132.087 C 15.469 132.783,15.075 134.039,14.941 134.877 C 14.807 135.714,14.541 136.400,14.349 136.400 C 14.157 136.400,14.000 136.850,14.000 137.400 C 14.000 137.950,13.833 138.400,13.629 138.400 C 13.425 138.400,13.134 139.390,12.983 140.600 C 12.832 141.810,12.549 142.800,12.354 142.800 C 12.159 142.800,12.000 143.239,12.000 143.776 C 12.000 144.313,11.837 144.854,11.637 144.977 C 11.438 145.100,11.151 146.101,11.000 147.200 C 10.849 148.300,10.577 149.200,10.397 149.200 C 10.216 149.200,9.942 150.550,9.787 152.200 C 9.633 153.850,9.347 155.200,9.153 155.200 C 8.959 155.200,8.800 155.729,8.800 156.376 C 8.800 157.023,8.632 157.657,8.427 157.783 C 8.222 157.910,7.928 159.451,7.775 161.207 C 7.622 162.963,7.357 164.400,7.185 164.400 C 6.900 164.400,6.638 166.192,6.261 170.708 C 6.182 171.647,6.002 172.532,5.859 172.674 C 5.717 172.817,5.600 174.148,5.600 175.633 C 5.600 177.438,5.434 178.389,5.100 178.500 C 4.420 178.727,4.364 220.278,5.044 220.715 C 5.402 220.945,6.000 226.084,6.042 229.292 C 6.047 229.673,6.219 230.088,6.425 230.216 C 6.631 230.343,6.800 231.517,6.800 232.824 C 6.800 234.131,6.959 235.200,7.153 235.200 C 7.347 235.200,7.632 236.549,7.787 238.197 C 7.941 239.846,8.233 241.296,8.434 241.421 C 8.635 241.545,8.800 242.267,8.800 243.024 C 8.800 243.781,8.954 244.400,9.143 244.400 C 9.332 244.400,9.602 245.507,9.743 246.859 C 9.884 248.212,10.160 249.517,10.355 249.759 C 10.638 250.111,11.257 252.721,11.376 254.067 C 11.389 254.213,11.535 254.468,11.700 254.633 C 11.865 254.798,12.000 255.263,12.000 255.667 C 12.000 256.070,12.157 256.400,12.348 256.400 C 12.540 256.400,12.819 257.480,12.968 258.800 C 13.118 260.120,13.411 261.200,13.620 261.200 C 13.829 261.200,14.000 261.549,14.000 261.976 C 14.000 262.403,14.159 262.851,14.354 262.971 C 14.548 263.092,14.829 264.002,14.978 264.995 C 15.127 265.988,15.418 266.800,15.625 266.800 C 15.831 266.800,16.000 267.130,16.000 267.533 C 16.000 267.937,16.135 268.402,16.300 268.567 C 16.465 268.732,16.615 268.987,16.633 269.133 C 16.725 269.888,17.354 271.826,17.563 272.000 C 17.695 272.110,18.147 273.235,18.567 274.500 C 18.986 275.765,19.473 276.800,19.647 276.800 C 19.821 276.800,20.088 277.475,20.240 278.300 C 20.391 279.125,20.634 279.890,20.779 280.000 C 21.148 280.281,22.400 283.030,22.400 283.560 C 22.400 283.802,22.566 284.000,22.768 284.000 C 22.971 284.000,23.255 284.540,23.400 285.200 C 23.545 285.860,23.787 286.400,23.937 286.400 C 24.235 286.400,25.600 289.357,25.600 290.003 C 25.600 290.221,25.738 290.400,25.906 290.400 C 26.227 290.400,27.600 293.320,27.600 294.003 C 27.600 294.221,27.760 294.400,27.957 294.400 C 28.153 294.400,28.435 294.884,28.583 295.476 C 28.732 296.068,29.189 296.844,29.600 297.200 C 30.011 297.556,30.468 298.332,30.617 298.924 C 30.765 299.516,31.047 300.000,31.243 300.000 C 31.440 300.000,31.600 300.360,31.600 300.800 C 31.600 301.240,31.784 301.600,32.010 301.600 C 32.235 301.600,32.595 302.005,32.809 302.500 C 33.209 303.426,34.046 304.846,34.400 305.200 C 34.804 305.604,35.630 307.020,35.858 307.700 C 35.988 308.085,36.224 308.400,36.384 308.400 C 36.543 308.400,37.013 309.030,37.428 309.800 C 37.843 310.570,38.301 311.200,38.448 311.200 C 38.594 311.200,38.826 311.650,38.964 312.200 C 39.102 312.750,39.392 313.200,39.608 313.200 C 39.823 313.200,40.000 313.404,40.000 313.654 C 40.000 313.904,40.450 314.525,41.000 315.035 C 41.550 315.545,42.000 316.159,42.000 316.400 C 42.000 316.641,42.425 317.235,42.944 317.719 C 43.464 318.204,44.013 318.996,44.165 319.480 C 44.317 319.963,44.792 320.470,45.220 320.606 C 45.649 320.743,46.000 321.137,46.000 321.484 C 46.000 321.830,46.540 322.629,47.200 323.260 C 47.860 323.891,48.400 324.593,48.400 324.820 C 48.400 325.046,49.120 325.917,50.000 326.754 C 50.880 327.591,51.600 328.439,51.601 328.638 C 51.601 328.837,52.321 329.677,53.201 330.505 C 54.080 331.333,54.800 332.175,54.800 332.378 C 54.800 332.580,55.151 332.857,55.580 332.994 C 56.008 333.130,56.467 333.583,56.600 334.000 C 56.733 334.417,57.192 334.870,57.620 335.006 C 58.049 335.143,58.400 335.497,58.400 335.794 C 58.400 336.512,64.901 343.051,65.943 343.382 C 66.392 343.524,66.870 343.992,67.006 344.420 C 67.143 344.849,67.406 345.200,67.592 345.200 C 67.779 345.200,68.913 346.190,70.113 347.400 C 71.314 348.610,72.416 349.600,72.563 349.600 C 72.711 349.600,73.580 350.320,74.496 351.200 C 75.412 352.080,76.308 352.800,76.488 352.800 C 76.667 352.800,77.426 353.430,78.174 354.200 C 78.921 354.970,79.688 355.600,79.878 355.600 C 80.067 355.600,80.520 355.915,80.883 356.300 C 81.925 357.404,82.731 358.000,83.183 358.000 C 83.412 358.000,83.600 358.168,83.600 358.373 C 83.600 358.578,83.998 358.872,84.485 359.027 C 84.971 359.181,85.705 359.734,86.114 360.254 C 86.523 360.774,87.115 361.200,87.429 361.200 C 87.743 361.200,88.000 361.352,88.000 361.537 C 88.000 361.722,88.630 362.213,89.400 362.628 C 90.170 363.043,90.800 363.501,90.800 363.648 C 90.800 363.794,91.250 364.026,91.800 364.164 C 92.350 364.302,92.800 364.592,92.800 364.808 C 92.800 365.023,93.070 365.200,93.400 365.200 C 93.730 365.200,94.000 365.368,94.000 365.573 C 94.000 365.778,94.405 366.074,94.900 366.230 C 95.395 366.387,96.070 366.823,96.400 367.200 C 96.730 367.577,97.405 368.013,97.900 368.170 C 98.395 368.326,98.800 368.602,98.800 368.784 C 98.800 368.965,99.284 369.235,99.876 369.383 C 100.468 369.532,101.233 369.976,101.576 370.370 C 101.919 370.763,102.650 371.226,103.200 371.397 C 103.750 371.568,104.290 371.819,104.400 371.954 C 104.510 372.089,105.275 372.512,106.100 372.894 C 106.925 373.275,107.600 373.762,107.600 373.975 C 107.600 374.189,108.230 374.482,109.000 374.626 C 109.770 374.771,110.400 375.049,110.400 375.245 C 110.400 375.440,110.670 375.600,111.000 375.600 C 111.330 375.600,111.600 375.766,111.600 375.968 C 111.600 376.171,112.140 376.455,112.800 376.600 C 113.460 376.745,114.000 377.029,114.000 377.232 C 114.000 377.434,114.360 377.600,114.800 377.600 C 115.240 377.600,115.600 377.766,115.600 377.968 C 115.600 378.171,116.140 378.455,116.800 378.600 C 117.460 378.745,118.000 379.006,118.000 379.181 C 118.000 379.355,118.720 379.613,119.600 379.754 C 120.480 379.894,121.200 380.187,121.200 380.405 C 121.200 380.622,121.560 380.800,122.000 380.800 C 122.440 380.800,122.800 380.978,122.800 381.195 C 122.800 381.413,123.520 381.706,124.400 381.846 C 125.280 381.987,126.000 382.230,126.000 382.386 C 126.000 382.542,126.990 383.007,128.200 383.418 C 129.410 383.829,130.400 384.292,130.400 384.445 C 130.400 384.599,131.300 384.849,132.400 385.000 C 133.500 385.151,134.400 385.394,134.400 385.540 C 134.400 385.936,136.547 386.809,138.170 387.073 C 138.957 387.200,139.600 387.461,139.600 387.652 C 139.600 387.844,140.039 388.000,140.576 388.000 C 141.113 388.000,141.654 388.163,141.777 388.363 C 141.900 388.562,142.901 388.849,144.000 389.000 C 145.100 389.151,146.000 389.429,146.000 389.618 C 146.000 389.806,147.080 390.082,148.400 390.232 C 149.720 390.381,150.800 390.660,150.800 390.852 C 150.800 391.043,151.340 391.200,152.000 391.200 C 152.660 391.200,153.200 391.366,153.200 391.568 C 153.200 391.771,154.370 392.062,155.800 392.215 C 157.230 392.368,158.400 392.652,158.400 392.847 C 158.400 393.041,159.109 393.200,159.976 393.200 C 160.843 393.200,161.652 393.361,161.774 393.558 C 161.896 393.755,163.482 394.047,165.298 394.206 C 167.114 394.365,168.693 394.642,168.807 394.820 C 168.920 394.999,171.035 395.273,173.507 395.430 C 175.978 395.586,178.000 395.868,178.000 396.057 C 178.000 396.246,179.425 396.400,181.167 396.400 C 183.235 396.400,184.388 396.563,184.490 396.870 C 184.607 397.220,189.071 397.339,202.000 397.339 C 214.929 397.339,219.393 397.220,219.510 396.870 C 219.612 396.563,220.765 396.400,222.833 396.400 C 224.575 396.400,226.000 396.246,226.000 396.057 C 226.000 395.868,228.022 395.586,230.493 395.430 C 232.965 395.273,235.080 394.999,235.193 394.820 C 235.307 394.642,236.886 394.365,238.702 394.206 C 240.518 394.047,242.104 393.755,242.226 393.558 C 242.348 393.361,243.157 393.200,244.024 393.200 C 244.891 393.200,245.600 393.034,245.600 392.832 C 245.600 392.629,246.770 392.338,248.200 392.185 C 249.630 392.032,250.800 391.748,250.800 391.553 C 250.800 391.359,251.340 391.200,252.000 391.200 C 252.660 391.200,253.200 391.043,253.200 390.852 C 253.200 390.660,254.280 390.381,255.600 390.232 C 256.920 390.082,258.000 389.806,258.000 389.618 C 258.000 389.429,258.900 389.151,260.000 389.000 C 261.099 388.849,262.100 388.562,262.223 388.363 C 262.346 388.163,262.887 388.000,263.424 388.000 C 263.961 388.000,264.400 387.844,264.400 387.652 C 264.400 387.461,265.043 387.200,265.830 387.073 C 267.453 386.809,269.600 385.936,269.600 385.540 C 269.600 385.394,270.500 385.151,271.600 385.000 C 272.700 384.849,273.600 384.581,273.600 384.406 C 273.600 384.230,274.095 383.967,274.700 383.821 C 276.204 383.458,278.000 382.659,278.000 382.353 C 278.000 382.215,278.720 381.987,279.600 381.846 C 280.480 381.706,281.200 381.455,281.200 381.290 C 281.200 380.982,284.116 379.600,284.766 379.600 C 285.205 379.600,289.320 377.523,289.600 377.160 C 289.710 377.017,290.385 376.774,291.100 376.618 C 291.815 376.463,292.400 376.171,292.400 375.968 C 292.400 375.766,292.670 375.600,293.000 375.600 C 293.330 375.600,293.600 375.440,293.600 375.243 C 293.600 375.047,294.095 374.763,294.700 374.612 C 295.305 374.461,296.070 374.108,296.400 373.827 C 296.730 373.546,297.585 373.066,298.300 372.761 C 299.015 372.455,299.600 372.088,299.600 371.946 C 299.600 371.803,300.084 371.565,300.676 371.417 C 301.268 371.268,302.044 370.811,302.400 370.400 C 302.756 369.989,303.532 369.532,304.124 369.383 C 304.716 369.235,305.200 368.965,305.200 368.784 C 305.200 368.602,305.605 368.326,306.100 368.170 C 306.595 368.013,307.270 367.577,307.600 367.200 C 307.930 366.823,308.605 366.387,309.100 366.230 C 309.595 366.074,310.000 365.778,310.000 365.573 C 310.000 365.368,310.270 365.200,310.600 365.200 C 310.930 365.200,311.200 365.020,311.200 364.800 C 311.200 364.580,311.433 364.400,311.719 364.400 C 312.280 364.400,313.550 363.530,315.076 362.100 C 315.604 361.605,316.304 361.200,316.631 361.200 C 316.958 361.200,317.329 360.930,317.455 360.600 C 317.582 360.270,317.893 360.000,318.147 360.000 C 318.401 360.000,319.093 359.550,319.687 359.000 C 320.280 358.450,320.877 358.000,321.013 358.000 C 321.150 358.000,321.802 357.460,322.462 356.800 C 323.122 356.140,323.800 355.600,323.969 355.600 C 324.139 355.600,324.926 354.970,325.719 354.200 C 326.512 353.430,327.267 352.800,327.397 352.800 C 327.672 352.800,328.370 352.234,329.982 350.700 C 330.618 350.095,331.260 349.600,331.408 349.600 C 331.556 349.600,333.010 348.250,334.638 346.600 C 336.267 344.950,337.753 343.600,337.941 343.600 C 338.381 343.600,346.400 335.629,346.400 335.192 C 346.400 335.010,347.660 333.586,349.200 332.028 C 350.740 330.469,352.000 328.938,352.000 328.624 C 352.000 328.310,352.360 327.940,352.800 327.800 C 353.240 327.660,353.600 327.405,353.600 327.232 C 353.600 327.060,354.144 326.307,354.808 325.559 C 355.473 324.812,356.463 323.698,357.008 323.084 C 357.554 322.470,358.000 321.786,358.000 321.565 C 358.000 321.343,358.450 320.745,359.000 320.235 C 359.550 319.725,360.000 319.186,360.000 319.037 C 360.000 318.887,360.450 318.280,361.000 317.687 C 361.550 317.093,362.000 316.463,362.000 316.285 C 362.000 316.107,362.425 315.565,362.944 315.081 C 363.464 314.596,364.016 313.795,364.171 313.300 C 364.327 312.805,364.622 312.400,364.827 312.400 C 365.032 312.400,365.200 312.130,365.200 311.800 C 365.200 311.470,365.377 311.200,365.592 311.200 C 365.808 311.200,366.094 310.763,366.228 310.229 C 366.363 309.695,366.729 309.159,367.042 309.039 C 367.356 308.919,367.797 308.411,368.023 307.910 C 368.676 306.464,369.497 305.113,369.885 304.846 C 370.081 304.711,370.552 303.970,370.932 303.200 C 371.751 301.538,372.506 300.277,372.846 300.000 C 372.981 299.890,373.230 299.358,373.399 298.819 C 373.568 298.279,373.952 297.591,374.253 297.290 C 374.554 296.989,374.800 296.486,374.800 296.171 C 374.800 295.857,374.980 295.600,375.200 295.600 C 375.420 295.600,375.600 295.330,375.600 295.000 C 375.600 294.670,375.772 294.400,375.982 294.400 C 376.192 294.400,376.482 293.770,376.626 293.000 C 376.771 292.230,377.049 291.600,377.245 291.600 C 377.440 291.600,377.600 291.330,377.600 291.000 C 377.600 290.670,377.766 290.400,377.968 290.400 C 378.171 290.400,378.455 289.860,378.600 289.200 C 378.745 288.540,379.009 288.000,379.187 288.000 C 379.365 288.000,379.629 287.370,379.774 286.600 C 379.918 285.830,380.208 285.200,380.418 285.200 C 380.628 285.200,380.800 284.930,380.800 284.600 C 380.800 284.270,380.972 284.000,381.182 284.000 C 381.392 284.000,381.682 283.370,381.826 282.600 C 381.971 281.830,382.220 281.200,382.380 281.200 C 382.539 281.200,383.007 280.210,383.418 279.000 C 383.829 277.790,384.306 276.800,384.478 276.800 C 384.650 276.800,384.906 276.080,385.046 275.200 C 385.187 274.320,385.459 273.600,385.651 273.600 C 385.843 273.600,386.000 273.240,386.000 272.800 C 386.000 272.360,386.169 272.000,386.375 272.000 C 386.582 272.000,386.872 271.190,387.021 270.200 C 387.169 269.210,387.450 268.400,387.645 268.400 C 387.840 268.400,388.000 268.151,388.000 267.846 C 388.000 267.541,388.269 266.776,388.598 266.146 C 388.926 265.516,389.196 264.595,389.198 264.100 C 389.199 263.605,389.363 263.200,389.562 263.200 C 389.762 263.200,390.049 262.300,390.200 261.200 C 390.351 260.100,390.638 259.200,390.838 259.200 C 391.037 259.200,391.200 258.585,391.200 257.833 C 391.200 257.082,391.383 256.406,391.607 256.331 C 391.831 256.256,392.126 255.251,392.263 254.098 C 392.400 252.944,392.666 252.000,392.856 252.000 C 393.045 252.000,393.200 251.586,393.200 251.080 C 393.200 250.574,393.379 249.981,393.598 249.762 C 393.816 249.544,394.112 248.248,394.254 246.882 C 394.397 245.517,394.653 244.400,394.823 244.400 C 394.993 244.400,395.258 243.050,395.413 241.400 C 395.567 239.750,395.853 238.400,396.047 238.400 C 396.241 238.400,396.400 237.691,396.400 236.824 C 396.400 235.957,396.566 235.145,396.768 235.020 C 396.971 234.894,397.264 232.994,397.420 230.796 C 397.576 228.598,397.860 226.800,398.052 226.800 C 398.243 226.800,398.400 225.465,398.400 223.833 C 398.400 221.816,398.560 220.813,398.900 220.700 C 399.629 220.457,399.629 179.469,398.900 178.740 C 398.598 178.438,398.400 177.163,398.400 175.520 C 398.400 174.024,398.246 172.800,398.057 172.800 C 397.869 172.800,397.588 170.955,397.434 168.700 C 397.280 166.445,396.985 164.540,396.777 164.467 C 396.570 164.393,396.400 163.538,396.400 162.567 C 396.400 161.595,396.235 160.800,396.034 160.800 C 395.833 160.800,395.539 159.405,395.382 157.700 C 395.224 155.995,394.972 154.510,394.822 154.400 C 394.672 154.290,394.328 153.120,394.057 151.800 C 393.787 150.480,393.463 148.905,393.337 148.300 C 393.212 147.695,392.970 147.200,392.801 147.200 C 392.631 147.200,392.368 146.210,392.217 145.000 C 392.066 143.790,391.775 142.800,391.571 142.800 C 391.367 142.800,391.200 142.170,391.200 141.400 C 391.200 140.630,391.031 140.000,390.825 140.000 C 390.618 140.000,390.328 139.190,390.179 138.200 C 390.031 137.210,389.750 136.400,389.555 136.400 C 389.360 136.400,389.200 136.044,389.200 135.608 C 389.200 134.718,388.011 131.508,387.567 131.200 C 387.408 131.090,387.150 130.145,386.994 129.100 C 386.837 128.055,386.550 127.200,386.355 127.200 C 386.160 127.200,386.000 126.930,386.000 126.600 C 386.000 126.270,385.843 126.000,385.651 126.000 C 385.459 126.000,385.187 125.280,385.046 124.400 C 384.906 123.520,384.635 122.800,384.445 122.800 C 384.255 122.800,383.983 122.216,383.841 121.503 C 383.522 119.912,382.700 118.000,382.334 118.000 C 382.185 118.000,381.945 117.460,381.800 116.800 C 381.655 116.140,381.371 115.600,381.168 115.600 C 380.966 115.600,380.800 115.240,380.800 114.800 C 380.800 114.360,380.620 114.000,380.400 114.000 C 380.180 114.000,380.000 113.699,380.000 113.332 C 380.000 112.451,377.629 107.600,377.198 107.600 C 377.014 107.600,376.745 107.060,376.600 106.400 C 376.455 105.740,376.171 105.200,375.968 105.200 C 375.766 105.200,375.600 104.840,375.600 104.400 C 375.600 103.960,375.434 103.600,375.232 103.600 C 375.029 103.600,374.745 103.060,374.600 102.400 C 374.455 101.740,374.212 101.200,374.059 101.200 C 373.907 101.200,373.426 100.525,372.992 99.700 C 372.557 98.875,371.976 97.962,371.701 97.671 C 371.425 97.381,371.200 96.886,371.200 96.571 C 371.200 96.257,371.020 96.000,370.800 96.000 C 370.580 96.000,370.400 95.730,370.400 95.400 C 370.400 95.070,370.223 94.800,370.008 94.800 C 369.792 94.800,369.502 94.350,369.364 93.800 C 369.226 93.250,368.994 92.800,368.848 92.800 C 368.701 92.800,368.243 92.170,367.828 91.400 C 367.413 90.630,366.942 90.000,366.780 90.000 C 366.619 90.000,366.374 89.550,366.236 89.000 C 366.098 88.450,365.808 88.000,365.592 88.000 C 365.377 88.000,365.200 87.749,365.200 87.443 C 365.200 87.136,364.930 86.782,364.600 86.655 C 364.270 86.529,364.000 86.193,364.000 85.908 C 364.000 85.624,363.550 84.907,363.000 84.313 C 362.450 83.720,362.000 83.124,362.000 82.989 C 362.000 82.854,361.775 82.492,361.500 82.185 C 360.422 80.983,360.000 80.424,360.000 80.198 C 360.000 80.068,359.550 79.545,359.000 79.035 C 358.450 78.525,358.000 77.904,358.000 77.654 C 358.000 77.404,357.832 77.200,357.627 77.200 C 357.422 77.200,357.139 76.837,356.998 76.394 C 356.857 75.951,356.588 75.684,356.400 75.800 C 356.212 75.916,355.930 75.609,355.773 75.116 C 355.617 74.624,354.704 73.458,353.745 72.525 C 352.785 71.593,352.000 70.648,352.000 70.426 C 352.000 70.204,350.830 68.875,349.400 67.473 C 347.970 66.071,346.800 64.782,346.800 64.609 C 346.800 64.234,337.373 54.800,336.998 54.800 C 336.856 54.800,335.469 53.540,333.917 52.000 C 332.365 50.460,330.931 49.200,330.731 49.200 C 330.531 49.200,329.683 48.480,328.846 47.600 C 328.009 46.720,327.026 46.000,326.662 46.000 C 326.298 46.000,326.000 45.827,326.000 45.616 C 326.000 45.100,323.924 43.200,323.360 43.200 C 323.114 43.200,322.574 42.750,322.161 42.200 C 321.748 41.650,321.191 41.200,320.923 41.200 C 320.655 41.200,319.986 40.750,319.436 40.200 C 318.886 39.650,318.243 39.200,318.006 39.200 C 317.769 39.200,317.471 38.930,317.345 38.600 C 317.218 38.270,316.768 38.000,316.345 38.000 C 315.921 38.000,315.480 37.753,315.364 37.450 C 315.248 37.148,314.534 36.567,313.777 36.159 C 313.019 35.752,312.400 35.279,312.400 35.109 C 312.400 34.939,312.130 34.800,311.800 34.800 C 311.470 34.800,311.200 34.623,311.200 34.408 C 311.200 34.192,310.750 33.902,310.200 33.764 C 309.650 33.626,309.200 33.372,309.200 33.200 C 309.200 33.028,308.750 32.774,308.200 32.636 C 307.650 32.498,307.200 32.208,307.200 31.992 C 307.200 31.777,306.930 31.600,306.600 31.600 C 306.270 31.600,306.000 31.423,306.000 31.208 C 306.000 30.992,305.550 30.702,305.000 30.564 C 304.450 30.426,304.000 30.153,304.000 29.957 C 304.000 29.760,303.730 29.600,303.400 29.600 C 303.070 29.600,302.800 29.423,302.800 29.208 C 302.800 28.992,302.350 28.702,301.800 28.564 C 301.250 28.426,300.800 28.172,300.800 28.000 C 300.800 27.828,300.316 27.565,299.724 27.417 C 299.132 27.268,298.346 26.799,297.977 26.374 C 297.609 25.949,296.743 25.489,296.054 25.351 C 295.364 25.213,294.800 24.983,294.800 24.840 C 294.800 24.696,293.992 24.224,293.004 23.790 C 292.016 23.355,291.206 22.865,291.204 22.700 C 291.202 22.535,290.913 22.400,290.562 22.400 C 289.866 22.400,287.479 21.176,287.271 20.713 C 287.200 20.555,286.525 20.310,285.771 20.168 C 285.017 20.027,284.400 19.751,284.400 19.555 C 284.400 19.360,284.051 19.200,283.624 19.200 C 283.197 19.200,282.745 19.034,282.619 18.831 C 282.494 18.628,281.853 18.343,281.195 18.199 C 280.538 18.055,280.000 17.771,280.000 17.568 C 280.000 17.366,279.550 17.200,279.000 17.200 C 278.450 17.200,278.000 17.020,278.000 16.800 C 278.000 16.580,277.775 16.399,277.500 16.398 C 277.225 16.396,276.497 16.133,275.883 15.812 C 275.269 15.492,274.099 15.107,273.283 14.957 C 272.467 14.807,271.710 14.563,271.600 14.415 C 271.278 13.980,268.056 12.800,267.192 12.800 C 266.756 12.800,266.400 12.620,266.400 12.400 C 266.400 12.180,265.961 12.000,265.424 12.000 C 264.887 12.000,264.328 11.808,264.183 11.573 C 264.038 11.338,263.673 11.240,263.372 11.355 C 263.072 11.471,262.719 11.393,262.589 11.183 C 262.459 10.972,261.913 10.800,261.376 10.800 C 260.839 10.800,260.400 10.641,260.400 10.446 C 260.400 10.251,259.410 9.968,258.200 9.817 C 256.990 9.666,256.000 9.375,256.000 9.171 C 256.000 8.967,255.370 8.800,254.600 8.800 C 253.830 8.800,253.200 8.634,253.200 8.432 C 253.200 8.229,252.030 7.938,250.600 7.785 C 249.170 7.632,248.000 7.348,248.000 7.153 C 248.000 6.959,247.471 6.800,246.824 6.800 C 246.177 6.800,245.545 6.635,245.421 6.434 C 245.296 6.233,243.843 5.941,242.192 5.786 C 240.540 5.632,239.101 5.363,238.994 5.190 C 238.887 5.016,237.089 4.746,234.999 4.590 C 232.910 4.433,231.200 4.162,231.200 3.988 C 231.200 3.814,230.165 3.571,228.900 3.448 C 227.635 3.325,224.890 3.056,222.800 2.850 C 220.710 2.644,216.795 2.458,214.100 2.438 C 211.125 2.415,209.200 2.243,209.200 2.000 C 209.200 1.748,206.533 1.600,202.000 1.600 C 198.040 1.600,194.800 1.751,194.800 1.937 M140.265 144.193 C 149.079 146.272,153.174 154.566,149.250 162.391 C 148.221 164.443,141.406 174.319,140.412 175.200 C 140.287 175.310,138.662 177.470,136.800 180.000 C 134.938 182.530,133.305 184.690,133.172 184.800 C 133.039 184.910,131.878 186.440,130.591 188.200 C 129.304 189.960,128.134 191.490,127.991 191.600 C 127.848 191.710,126.678 193.240,125.391 195.000 C 124.104 196.760,122.938 198.290,122.800 198.400 C 122.662 198.510,121.496 200.040,120.209 201.800 C 118.922 203.560,117.748 205.090,117.600 205.200 C 117.452 205.310,116.278 206.840,114.991 208.600 C 113.704 210.360,112.541 211.890,112.405 212.000 C 112.270 212.110,111.094 213.640,109.791 215.400 C 108.488 217.160,107.319 218.690,107.193 218.800 C 107.067 218.910,105.570 220.890,103.866 223.200 C 102.162 225.510,100.281 228.009,99.684 228.754 C 99.088 229.499,98.456 230.354,98.280 230.654 C 98.012 231.112,101.391 231.200,119.360 231.200 C 144.585 231.200,146.305 231.400,149.612 234.726 C 150.955 236.077,151.427 236.889,152.744 240.119 C 154.732 244.996,151.192 253.254,146.701 254.214 C 145.985 254.367,145.211 254.644,144.980 254.828 C 143.554 255.971,77.233 255.928,74.481 254.782 C 73.976 254.572,73.071 254.400,72.470 254.400 C 69.789 254.400,65.078 251.075,63.553 248.107 C 62.488 246.034,62.169 239.456,63.041 237.560 C 63.284 237.032,63.849 235.790,64.296 234.800 C 64.743 233.810,66.524 231.094,68.254 228.765 C 73.503 221.699,77.359 216.611,77.625 216.400 C 77.764 216.290,78.760 215.011,79.839 213.557 C 82.462 210.021,90.889 199.052,91.175 198.800 C 91.300 198.690,92.211 197.520,93.200 196.200 C 94.189 194.880,95.096 193.710,95.215 193.600 C 95.334 193.490,97.219 191.060,99.404 188.200 C 101.588 185.340,103.517 182.820,103.691 182.600 C 103.864 182.380,104.860 181.100,105.903 179.755 C 109.163 175.553,109.989 174.521,111.200 173.140 C 111.846 172.403,112.677 171.170,113.046 170.400 C 113.415 169.630,113.871 168.687,114.059 168.305 C 114.246 167.923,114.400 167.531,114.400 167.432 C 114.400 167.334,105.535 167.187,94.700 167.104 C 79.837 166.992,74.656 166.827,73.600 166.435 C 59.884 161.344,60.774 147.230,75.000 144.251 C 79.146 143.383,136.614 143.332,140.265 144.193 M250.286 144.280 C 254.286 145.541,256.600 148.349,257.569 153.120 C 258.161 156.032,258.169 240.504,257.578 243.827 C 256.759 248.428,254.619 251.630,251.295 253.227 C 249.110 254.278,242.825 254.585,241.926 253.686 C 241.659 253.419,241.141 253.200,240.776 253.200 C 239.820 253.200,236.441 250.104,236.155 248.965 C 236.022 248.434,235.782 248.000,235.622 248.000 C 234.078 248.000,232.959 159.599,234.423 153.248 C 236.236 145.387,242.523 141.833,250.286 144.280 M192.000 175.578 C 193.430 175.861,194.771 176.252,194.980 176.447 C 195.189 176.641,195.639 176.804,195.980 176.809 C 196.784 176.821,200.522 178.685,202.720 180.171 C 205.239 181.873,206.322 181.717,209.004 179.266 C 210.248 178.129,211.746 177.095,212.333 176.968 C 212.920 176.841,213.787 176.551,214.259 176.323 C 217.414 174.801,224.367 177.895,227.037 182.009 L 228.200 183.800 228.313 214.600 C 228.438 248.954,228.562 247.277,225.666 250.373 C 220.965 255.396,213.670 255.676,208.609 251.028 C 206.224 248.839,205.484 248.777,202.708 250.535 C 200.133 252.166,196.586 253.851,194.987 254.202 C 194.334 254.345,193.440 254.606,193.000 254.782 C 189.402 256.219,181.164 256.222,177.800 254.788 C 177.360 254.600,176.422 254.333,175.716 254.195 C 173.339 253.729,167.704 250.636,165.200 248.422 C 164.004 247.365,161.805 245.233,160.336 243.706 C 158.882 242.196,156.000 237.982,156.000 237.367 C 156.000 237.092,155.863 236.807,155.696 236.733 C 155.201 236.516,153.305 232.593,152.995 231.142 C 152.837 230.404,152.570 229.620,152.403 229.400 C 152.030 228.910,150.983 224.385,150.367 220.600 C 149.519 215.390,150.669 204.630,152.449 201.105 C 152.642 200.723,152.800 200.183,152.801 199.905 C 152.801 199.627,153.567 197.870,154.502 196.000 C 160.223 184.563,169.163 177.295,179.553 175.635 C 180.957 175.411,182.214 175.120,182.346 174.988 C 182.719 174.614,189.111 175.005,192.000 175.578 M305.694 175.182 C 306.632 175.393,308.660 175.734,310.200 175.941 C 313.209 176.346,316.008 176.999,317.114 177.555 C 317.491 177.745,319.375 178.676,321.300 179.624 C 323.225 180.572,324.800 181.495,324.800 181.674 C 324.800 181.853,324.982 182.000,325.203 182.000 C 326.156 182.000,333.775 189.459,334.204 190.813 C 334.341 191.246,334.585 191.600,334.744 191.600 C 335.364 191.600,339.600 200.618,339.600 201.937 C 339.600 202.386,339.760 202.852,339.956 202.973 C 340.151 203.094,340.414 203.779,340.539 204.496 C 340.664 205.213,340.941 206.790,341.154 208.000 C 341.367 209.210,341.542 212.450,341.542 215.200 C 341.542 217.950,341.367 221.190,341.154 222.400 C 340.941 223.610,340.663 225.230,340.536 226.000 C 340.409 226.770,340.167 227.580,339.999 227.800 C 339.830 228.020,339.569 228.778,339.418 229.484 C 339.267 230.189,338.706 231.674,338.172 232.782 C 337.637 233.890,337.200 234.977,337.200 235.198 C 337.200 235.419,337.020 235.600,336.800 235.600 C 336.580 235.600,336.400 235.842,336.400 236.137 C 336.400 238.000,329.097 246.263,325.331 248.661 C 324.709 249.057,324.110 249.476,324.000 249.591 C 323.336 250.285,317.397 253.200,316.646 253.200 C 316.317 253.200,315.946 253.364,315.822 253.565 C 315.697 253.766,314.832 254.046,313.898 254.188 C 312.964 254.329,311.840 254.601,311.400 254.791 C 308.567 256.015,294.389 255.978,293.020 254.743 C 292.811 254.554,292.252 254.400,291.779 254.400 C 291.305 254.400,289.676 253.935,288.159 253.367 C 286.641 252.799,285.085 252.238,284.700 252.120 C 284.315 252.003,284.000 251.748,284.000 251.553 C 284.000 251.359,283.775 251.196,283.500 251.192 C 279.384 251.122,266.000 235.837,266.000 231.205 C 266.000 230.850,265.857 230.389,265.682 230.180 C 263.748 227.872,262.677 212.980,263.944 206.006 C 264.624 202.257,267.682 194.147,268.772 193.200 C 268.899 193.090,269.654 192.010,270.450 190.800 C 272.941 187.014,281.937 179.200,283.805 179.200 C 283.940 179.200,285.057 178.740,286.286 178.178 C 287.514 177.616,289.078 177.051,289.760 176.922 C 290.442 176.793,291.190 176.540,291.422 176.360 C 291.654 176.179,293.364 175.911,295.222 175.763 C 297.080 175.615,298.870 175.343,299.200 175.159 C 300.017 174.703,303.613 174.716,305.694 175.182 M183.298 198.341 C 177.508 201.259,174.400 207.263,174.400 215.533 C 174.400 217.996,174.558 220.323,174.752 220.705 C 174.945 221.087,175.422 222.390,175.812 223.600 C 177.871 229.991,182.156 232.991,189.230 232.997 C 197.059 233.002,201.978 229.304,203.614 222.183 C 203.865 221.092,204.234 219.647,204.435 218.972 C 204.636 218.296,204.800 216.689,204.800 215.400 C 204.800 214.111,204.636 212.504,204.435 211.828 C 204.234 211.153,203.863 209.700,203.611 208.600 C 202.655 204.429,199.531 200.257,196.165 198.656 C 195.304 198.246,194.287 197.751,193.905 197.556 C 192.276 196.721,185.520 197.221,183.298 198.341 M296.200 198.275 C 290.315 201.191,287.452 206.784,287.433 215.400 C 287.422 220.570,287.646 221.795,289.262 225.400 C 293.681 235.259,309.848 235.933,314.659 226.459 C 315.067 225.656,315.505 224.910,315.634 224.800 C 316.070 224.428,316.878 221.014,317.196 218.200 C 318.190 209.414,314.774 201.419,308.800 198.554 C 308.030 198.185,307.087 197.729,306.705 197.541 C 305.105 196.755,298.310 197.230,296.200 198.275 "
                      fill="#048ce4"
                      fill-rule="evenodd"
                  />
                  <path
                      d="M93.300 144.300 C 101.385 144.360,114.615 144.360,122.700 144.300 C 130.785 144.239,124.170 144.190,108.000 144.190 C 91.830 144.190,85.215 144.239,93.300 144.300 M74.400 144.800 C 73.596 145.057,73.557 145.123,74.200 145.132 C 74.640 145.138,75.360 144.989,75.800 144.800 C 76.819 144.362,75.768 144.362,74.400 144.800 M140.000 144.800 C 140.330 145.013,140.960 145.178,141.400 145.166 L 142.200 145.144 141.400 144.800 C 140.204 144.286,139.205 144.286,140.000 144.800 M239.660 145.603 C 238.747 146.264,238.000 146.922,238.000 147.065 C 238.000 147.207,238.315 147.046,238.700 146.706 C 239.085 146.365,240.030 145.708,240.800 145.245 C 241.570 144.782,242.002 144.402,241.760 144.401 C 241.518 144.401,240.573 144.941,239.660 145.603 M146.975 148.532 C 147.591 149.339,148.176 150.000,148.275 150.000 C 148.553 150.000,146.821 147.660,146.309 147.344 C 146.059 147.189,146.359 147.724,146.975 148.532 M64.652 153.300 C 64.340 154.464,64.381 156.810,64.728 157.683 C 64.878 158.059,65.007 157.024,65.016 155.383 C 65.034 152.120,65.008 151.971,64.652 153.300 M257.000 198.400 C 257.000 223.785,257.114 244.025,257.253 243.377 C 257.392 242.730,257.505 222.490,257.505 198.400 C 257.505 174.310,257.392 154.070,257.253 153.423 C 257.114 152.775,257.000 173.015,257.000 198.400 M150.128 156.400 C 150.128 157.830,150.201 158.415,150.289 157.700 C 150.378 156.985,150.378 155.815,150.289 155.100 C 150.201 154.385,150.128 154.970,150.128 156.400 M234.592 199.400 C 234.592 220.080,234.641 228.481,234.700 218.070 C 234.759 207.658,234.759 190.738,234.700 180.470 C 234.640 170.201,234.592 178.720,234.592 199.400 M147.585 164.115 C 146.498 165.747,146.360 166.000,146.553 166.000 C 146.853 166.000,148.507 163.574,148.328 163.395 C 148.241 163.308,147.907 163.632,147.585 164.115 M74.000 166.000 C 75.368 166.438,76.419 166.438,75.400 166.000 C 74.960 165.811,74.240 165.662,73.800 165.668 C 73.157 165.677,73.196 165.743,74.000 166.000 M84.200 166.921 C 87.940 167.098,96.286 167.159,102.747 167.056 L 114.493 166.869 114.264 168.335 C 114.089 169.452,114.132 169.631,114.444 169.088 C 115.865 166.615,116.482 166.697,96.000 166.646 C 81.776 166.611,79.000 166.676,84.200 166.921 M144.723 168.300 C 144.018 169.121,143.490 170.000,143.701 170.000 C 143.783 170.000,144.249 169.460,144.737 168.800 C 145.701 167.496,145.692 167.172,144.723 168.300 M141.559 172.500 C 139.543 175.122,139.489 175.200,139.703 175.200 C 139.813 175.200,140.651 174.210,141.565 173.000 C 142.478 171.790,143.145 170.800,143.047 170.800 C 142.948 170.800,142.279 171.565,141.559 172.500 M184.700 175.482 C 185.195 175.578,186.005 175.578,186.500 175.482 C 186.995 175.387,186.590 175.309,185.600 175.309 C 184.610 175.309,184.205 175.387,184.700 175.482 M108.155 177.481 C 107.307 178.516,106.822 179.234,107.077 179.076 C 107.621 178.740,110.155 175.600,109.882 175.600 C 109.780 175.600,109.003 176.447,108.155 177.481 M179.200 176.020 C 178.526 176.249,178.851 176.284,180.200 176.128 C 181.300 176.001,182.275 175.831,182.367 175.749 C 182.682 175.468,180.199 175.680,179.200 176.020 M190.200 176.000 C 191.892 176.431,193.344 176.431,192.000 176.000 C 191.450 175.824,190.550 175.683,190.000 175.687 C 189.102 175.694,189.122 175.726,190.200 176.000 M295.400 176.015 C 294.644 176.218,295.162 176.254,296.800 176.115 C 298.230 175.993,299.475 175.828,299.567 175.747 C 299.870 175.480,296.622 175.689,295.400 176.015 M304.833 175.744 C 304.925 175.823,306.170 175.986,307.600 176.106 C 309.160 176.237,309.800 176.195,309.200 176.002 C 308.212 175.684,304.511 175.465,304.833 175.744 M175.700 176.848 C 174.985 177.054,174.400 177.311,174.400 177.419 C 174.400 177.709,176.538 177.153,176.980 176.748 C 177.416 176.349,177.430 176.348,175.700 176.848 M194.000 176.741 C 194.330 176.934,195.140 177.209,195.800 177.352 C 196.568 177.518,196.784 177.484,196.400 177.259 C 196.070 177.066,195.260 176.791,194.600 176.648 C 193.832 176.482,193.616 176.516,194.000 176.741 M290.000 177.218 C 289.562 177.515,289.724 177.552,290.600 177.356 C 292.071 177.027,292.390 176.798,291.367 176.806 C 290.945 176.809,290.330 176.995,290.000 177.218 M210.293 178.614 C 209.472 179.172,208.800 179.715,208.800 179.820 C 208.800 179.925,209.520 179.535,210.400 178.953 C 211.797 178.028,212.270 177.600,211.893 177.600 C 211.834 177.600,211.114 178.056,210.293 178.614 M223.000 178.652 C 223.220 178.845,224.120 179.632,224.999 180.401 L 226.598 181.800 225.399 180.466 C 224.740 179.732,223.840 178.945,223.400 178.717 C 222.960 178.489,222.780 178.460,223.000 178.652 M134.400 182.000 C 133.703 182.880,133.223 183.600,133.333 183.600 C 133.443 183.600,134.103 182.880,134.800 182.000 C 135.497 181.120,135.977 180.400,135.867 180.400 C 135.757 180.400,135.097 181.120,134.400 182.000 M166.136 181.934 C 165.071 182.777,163.930 183.812,163.600 184.234 C 163.270 184.655,163.720 184.370,164.600 183.599 C 165.480 182.829,166.740 181.800,167.400 181.312 C 168.060 180.824,168.481 180.420,168.336 180.413 C 168.191 180.406,167.201 181.090,166.136 181.934 M103.380 183.700 C 102.315 185.075,101.808 185.884,102.255 185.498 C 103.094 184.773,105.778 181.200,105.484 181.200 C 105.393 181.200,104.446 182.325,103.380 183.700 M204.662 182.100 C 204.764 182.265,205.186 182.400,205.600 182.400 C 206.014 182.400,206.436 182.265,206.538 182.100 C 206.640 181.935,206.218 181.800,205.600 181.800 C 204.982 181.800,204.560 181.935,204.662 182.100 M324.200 181.880 C 324.420 182.088,325.410 182.846,326.400 183.565 L 328.200 184.872 326.800 183.608 C 325.574 182.501,323.156 180.894,324.200 181.880 M275.578 185.500 L 274.200 187.000 275.700 185.622 C 277.096 184.338,277.384 184.000,277.078 184.000 C 277.012 184.000,276.337 184.675,275.578 185.500 M227.902 208.114 C 227.958 220.701,228.052 233.970,228.112 237.600 C 228.172 241.230,228.248 231.240,228.282 215.400 C 228.316 199.560,228.221 186.291,228.072 185.914 C 227.922 185.536,227.846 195.526,227.902 208.114 M128.560 189.700 C 127.517 191.075,126.962 191.955,127.326 191.656 C 128.043 191.067,130.908 187.200,130.628 187.200 C 130.534 187.200,129.604 188.325,128.560 189.700 M272.800 188.200 C 272.283 188.750,272.027 189.194,272.230 189.187 C 272.572 189.176,274.221 187.200,273.888 187.200 C 273.806 187.200,273.317 187.650,272.800 188.200 M98.800 189.600 C 98.103 190.480,97.623 191.200,97.733 191.200 C 97.843 191.200,98.503 190.480,99.200 189.600 C 99.897 188.720,100.377 188.000,100.267 188.000 C 100.157 188.000,99.497 188.720,98.800 189.600 M332.835 190.000 C 334.436 192.204,335.036 192.862,334.477 191.800 C 334.245 191.360,333.487 190.370,332.792 189.600 L 331.528 188.200 332.835 190.000 M124.929 194.500 C 124.484 194.995,123.976 195.670,123.801 196.000 C 123.463 196.637,123.555 196.550,125.176 194.700 C 125.706 194.095,126.049 193.600,125.939 193.600 C 125.829 193.600,125.375 194.005,124.929 194.500 M155.086 195.283 C 154.969 195.567,154.584 196.475,154.231 197.300 C 153.878 198.125,153.673 198.800,153.776 198.800 C 154.043 198.800,155.641 195.108,155.454 194.921 C 155.369 194.835,155.203 194.998,155.086 195.283 M298.200 196.685 C 297.760 196.791,297.235 197.034,297.034 197.225 C 296.728 197.515,298.820 197.108,300.200 196.608 C 300.785 196.396,299.138 196.460,298.200 196.685 M121.874 198.409 C 120.421 200.463,120.698 200.458,122.352 198.400 C 123.059 197.520,123.494 196.804,123.319 196.809 C 123.143 196.813,122.493 197.533,121.874 198.409 M179.800 199.823 C 179.054 200.456,178.915 200.691,179.433 200.443 C 180.176 200.087,181.525 198.797,181.149 198.802 C 181.067 198.803,180.460 199.263,179.800 199.823 M90.034 200.953 L 89.069 202.200 90.213 201.112 C 90.843 200.514,91.277 199.953,91.179 199.865 C 91.080 199.777,90.565 200.267,90.034 200.953 M152.844 200.844 C 152.598 201.551,152.466 202.200,152.552 202.285 C 152.638 202.371,152.909 201.862,153.156 201.156 C 153.402 200.449,153.534 199.800,153.448 199.715 C 153.362 199.629,153.091 200.138,152.844 200.844 M198.800 199.725 C 198.800 199.794,199.385 200.379,200.100 201.025 L 201.400 202.200 200.225 200.900 C 199.130 199.688,198.800 199.416,198.800 199.725 M177.717 202.100 C 176.850 203.047,175.438 205.600,175.779 205.600 C 175.889 205.600,176.275 205.015,176.637 204.300 C 176.998 203.585,177.664 202.595,178.117 202.100 C 178.569 201.605,178.849 201.200,178.739 201.200 C 178.629 201.200,178.169 201.605,177.717 202.100 M339.048 202.200 C 339.191 202.860,339.466 203.670,339.659 204.000 C 339.884 204.384,339.918 204.168,339.752 203.400 C 339.609 202.740,339.334 201.930,339.141 201.600 C 338.916 201.216,338.882 201.432,339.048 202.200 M117.874 203.609 C 116.415 205.671,116.765 205.665,118.400 203.600 C 119.097 202.720,119.517 202.004,119.334 202.009 C 119.150 202.013,118.493 202.733,117.874 203.609 M202.299 204.368 C 202.903 205.450,203.465 206.268,203.547 206.186 C 203.721 206.012,201.657 202.400,201.383 202.400 C 201.283 202.400,201.695 203.286,202.299 204.368 M85.999 206.100 C 85.410 206.904,85.313 207.184,85.745 206.833 C 86.401 206.300,87.393 204.800,87.089 204.800 C 87.013 204.800,86.522 205.385,85.999 206.100 M264.256 206.084 C 264.121 206.588,264.030 207.540,264.053 208.200 C 264.081 209.028,264.197 208.784,264.426 207.413 C 264.776 205.323,264.674 204.526,264.256 206.084 M340.028 206.033 C 340.044 206.565,340.219 207.360,340.419 207.800 C 340.671 208.358,340.707 208.115,340.538 207.000 C 340.255 205.143,339.987 204.636,340.028 206.033 M317.044 209.000 C 317.373 210.471,317.602 210.790,317.594 209.767 C 317.591 209.345,317.405 208.730,317.182 208.400 C 316.885 207.962,316.848 208.124,317.044 209.000 M150.909 210.000 C 150.909 210.990,150.987 211.395,151.082 210.900 C 151.178 210.405,151.178 209.595,151.082 209.100 C 150.987 208.605,150.909 209.010,150.909 210.000 M113.025 209.939 C 112.599 210.523,111.812 211.585,111.277 212.300 C 110.743 213.015,110.395 213.600,110.504 213.600 C 110.810 213.600,114.134 209.200,113.956 209.029 C 113.870 208.946,113.451 209.356,113.025 209.939 M263.709 211.200 C 263.709 212.190,263.787 212.595,263.882 212.100 C 263.978 211.605,263.978 210.795,263.882 210.300 C 263.787 209.805,263.709 210.210,263.709 211.200 M81.669 211.639 C 80.928 212.824,81.257 212.913,82.119 211.761 C 82.514 211.232,82.692 210.800,82.515 210.800 C 82.338 210.800,81.957 211.178,81.669 211.639 M340.901 212.200 C 340.905 213.080,340.987 213.393,341.083 212.895 C 341.179 212.398,341.175 211.678,341.075 211.295 C 340.975 210.913,340.896 211.320,340.901 212.200 M204.914 213.000 C 204.917 214.100,204.995 214.503,205.087 213.895 C 205.179 213.286,205.177 212.386,205.082 211.895 C 204.987 211.403,204.911 211.900,204.914 213.000 M173.701 213.400 C 173.705 214.280,173.787 214.593,173.883 214.095 C 173.979 213.598,173.975 212.878,173.875 212.495 C 173.775 212.113,173.696 212.520,173.701 213.400 M79.600 214.400 C 79.130 215.060,78.836 215.600,78.946 215.600 C 79.056 215.600,79.530 215.060,80.000 214.400 C 80.470 213.740,80.764 213.200,80.654 213.200 C 80.544 213.200,80.070 213.740,79.600 214.400 M318.109 215.200 C 318.109 216.190,318.187 216.595,318.282 216.100 C 318.378 215.605,318.378 214.795,318.282 214.300 C 318.187 213.805,318.109 214.210,318.109 215.200 M150.501 215.400 C 150.505 216.280,150.587 216.593,150.683 216.095 C 150.779 215.598,150.775 214.878,150.675 214.495 C 150.575 214.113,150.496 214.520,150.501 215.400 M108.159 216.500 C 106.407 218.521,105.887 219.200,106.090 219.200 C 106.207 219.200,106.967 218.390,107.779 217.400 C 109.281 215.566,109.579 214.863,108.159 216.500 M204.920 217.600 C 204.920 218.810,204.995 219.305,205.087 218.700 C 205.178 218.095,205.178 217.105,205.087 216.500 C 204.995 215.895,204.920 216.390,204.920 217.600 M173.701 217.400 C 173.705 218.280,173.787 218.593,173.883 218.095 C 173.979 217.598,173.975 216.878,173.875 216.495 C 173.775 216.113,173.696 216.520,173.701 217.400 M340.909 218.400 C 340.909 219.390,340.987 219.795,341.082 219.300 C 341.178 218.805,341.178 217.995,341.082 217.500 C 340.987 217.005,340.909 217.410,340.909 218.400 M263.709 219.200 C 263.709 220.190,263.787 220.595,263.882 220.100 C 263.978 219.605,263.978 218.795,263.882 218.300 C 263.787 217.805,263.709 218.210,263.709 219.200 M75.599 219.700 C 75.010 220.504,74.913 220.784,75.345 220.433 C 76.001 219.900,76.993 218.400,76.689 218.400 C 76.613 218.400,76.122 218.985,75.599 219.700 M150.914 220.600 C 150.917 221.700,150.995 222.103,151.087 221.495 C 151.179 220.886,151.177 219.986,151.082 219.495 C 150.987 219.003,150.911 219.500,150.914 220.600 M317.246 220.867 C 317.221 221.234,317.096 221.864,316.970 222.267 C 316.752 222.962,316.763 222.963,317.197 222.287 C 317.448 221.896,317.573 221.266,317.473 220.887 C 317.311 220.268,317.288 220.266,317.246 220.867 M264.028 222.433 C 264.044 223.185,264.212 224.160,264.403 224.600 C 264.626 225.115,264.667 224.687,264.518 223.400 C 264.244 221.022,263.989 220.519,264.028 222.433 M102.274 224.033 C 101.655 224.895,101.241 225.600,101.354 225.600 C 101.665 225.600,103.735 222.801,103.556 222.623 C 103.470 222.537,102.893 223.172,102.274 224.033 M340.200 223.600 C 340.048 224.291,340.007 224.941,340.109 225.042 C 340.211 225.144,340.409 224.653,340.550 223.950 C 340.691 223.247,340.731 222.598,340.641 222.508 C 340.550 222.417,340.352 222.909,340.200 223.600 M72.029 224.291 C 71.353 225.111,70.800 225.951,70.800 226.158 C 70.800 226.364,70.855 226.458,70.923 226.367 C 70.990 226.275,71.636 225.435,72.356 224.500 C 73.971 222.405,73.717 222.243,72.029 224.291 M288.800 225.862 C 288.800 227.068,293.885 232.436,294.972 232.376 C 295.207 232.364,295.057 232.139,294.638 231.876 C 292.923 230.803,290.994 228.897,289.930 227.222 C 289.308 226.244,288.800 225.632,288.800 225.862 M69.199 228.100 C 68.610 228.904,68.513 229.184,68.945 228.833 C 69.601 228.300,70.593 226.800,70.289 226.800 C 70.213 226.800,69.722 227.385,69.199 228.100 M201.263 228.000 C 200.775 228.660,200.523 229.200,200.702 229.200 C 200.881 229.200,201.346 228.660,201.736 228.000 C 202.126 227.340,202.379 226.800,202.298 226.800 C 202.217 226.800,201.751 227.340,201.263 228.000 M339.029 228.229 C 338.881 228.815,338.838 229.372,338.932 229.466 C 339.027 229.560,339.224 229.158,339.371 228.571 C 339.519 227.985,339.562 227.428,339.468 227.334 C 339.373 227.240,339.176 227.642,339.029 228.229 M178.000 228.925 C 178.000 228.994,178.585 229.579,179.300 230.225 L 180.600 231.400 179.425 230.100 C 178.330 228.888,178.000 228.616,178.000 228.925 M97.338 231.017 C 96.968 231.981,96.186 231.946,120.809 232.076 C 133.674 232.144,143.390 232.078,142.400 231.930 C 141.410 231.781,130.906 231.646,119.057 231.630 C 100.080 231.604,97.542 231.529,97.745 231.000 C 97.871 230.670,97.885 230.400,97.775 230.400 C 97.665 230.400,97.468 230.678,97.338 231.017 M195.400 232.638 C 194.300 233.172,193.850 233.494,194.400 233.354 C 195.572 233.055,197.600 232.063,197.600 231.790 C 197.600 231.553,197.765 231.489,195.400 232.638 M337.265 233.017 C 336.595 234.488,336.723 234.802,337.447 233.465 C 337.786 232.840,337.988 232.254,337.896 232.163 C 337.805 232.071,337.521 232.456,337.265 233.017 M182.800 232.631 C 182.800 232.901,184.878 233.656,185.076 233.457 C 185.167 233.367,184.692 233.101,184.020 232.867 C 183.349 232.633,182.800 232.527,182.800 232.631 M307.400 233.014 C 306.395 233.498,306.363 233.553,307.200 233.351 C 307.750 233.219,308.371 232.950,308.580 232.755 C 309.098 232.271,308.814 232.333,307.400 233.014 M148.369 234.283 C 148.901 234.671,149.846 235.792,150.469 236.773 C 151.091 237.754,151.600 238.368,151.600 238.138 C 151.600 237.400,149.256 234.456,148.313 234.009 C 147.452 233.601,147.455 233.617,148.369 234.283 M187.959 234.101 C 188.728 234.301,189.938 234.303,190.757 234.106 C 192.008 233.806,191.828 233.759,189.402 233.755 C 187.038 233.751,186.814 233.805,187.959 234.101 M300.400 234.000 C 300.950 234.176,301.850 234.317,302.400 234.313 C 303.298 234.306,303.278 234.274,302.200 234.000 C 300.508 233.569,299.056 233.569,300.400 234.000 M335.952 235.700 C 335.690 236.195,335.215 237.050,334.896 237.600 C 334.339 238.559,334.343 238.567,334.988 237.800 C 335.786 236.852,336.905 234.800,336.624 234.800 C 336.516 234.800,336.214 235.205,335.952 235.700 M63.644 237.244 C 63.398 237.951,63.266 238.600,63.352 238.685 C 63.438 238.771,63.709 238.262,63.956 237.556 C 64.202 236.849,64.334 236.200,64.248 236.115 C 64.162 236.029,63.891 236.538,63.644 237.244 M156.378 237.500 C 156.815 238.325,157.561 239.450,158.036 240.000 L 158.898 241.000 158.250 240.000 C 157.894 239.450,157.238 238.325,156.793 237.500 C 156.348 236.675,155.894 236.000,155.784 236.000 C 155.674 236.000,155.941 236.675,156.378 237.500 M152.068 240.200 C 152.062 240.640,152.211 241.360,152.400 241.800 C 152.838 242.819,152.838 241.768,152.400 240.400 C 152.143 239.596,152.077 239.557,152.068 240.200 M271.652 240.900 C 273.036 242.885,277.259 246.934,279.446 248.373 C 281.534 249.748,281.107 249.340,277.227 246.253 C 275.881 245.183,273.948 243.248,272.931 241.953 C 270.934 239.411,270.182 238.792,271.652 240.900 M329.787 244.100 L 327.400 246.600 329.900 244.213 C 331.275 242.899,332.400 241.774,332.400 241.713 C 332.400 241.417,332.005 241.778,329.787 244.100 M162.600 245.600 C 163.683 246.700,164.660 247.600,164.770 247.600 C 164.880 247.600,164.083 246.700,163.000 245.600 C 161.917 244.500,160.940 243.600,160.830 243.600 C 160.720 243.600,161.517 244.500,162.600 245.600 M152.267 246.267 C 152.120 246.413,152.011 246.908,152.025 247.367 C 152.049 248.133,152.082 248.123,152.434 247.242 C 152.826 246.263,152.744 245.789,152.267 246.267 M236.416 248.709 C 236.934 249.650,237.699 250.728,238.117 251.105 C 238.534 251.483,238.211 250.804,237.400 249.596 C 235.534 246.817,235.217 246.532,236.416 248.709 M165.567 248.145 C 166.100 248.801,167.600 249.793,167.600 249.489 C 167.600 249.413,167.015 248.922,166.300 248.399 C 165.496 247.810,165.216 247.713,165.567 248.145 M203.800 249.027 C 203.140 249.370,202.420 249.835,202.200 250.061 C 201.980 250.287,202.589 250.065,203.553 249.568 C 205.053 248.795,205.485 248.730,206.553 249.120 C 207.687 249.535,207.730 249.523,207.024 248.988 C 206.036 248.240,205.300 248.249,203.800 249.027 M64.777 249.400 C 65.420 250.432,68.296 252.628,69.705 253.164 C 71.292 253.767,71.052 253.316,69.424 252.636 C 68.667 252.320,67.200 251.282,66.163 250.331 C 65.126 249.379,64.503 248.960,64.777 249.400 M224.200 250.678 C 223.100 251.694,222.560 252.320,223.000 252.069 C 223.965 251.519,225.202 250.439,225.949 249.495 C 226.840 248.367,226.327 248.714,224.200 250.678 M148.200 252.650 C 147.481 253.262,147.334 253.505,147.833 253.257 C 148.566 252.893,149.941 251.576,149.549 251.614 C 149.467 251.622,148.860 252.088,148.200 252.650 M72.200 253.990 C 72.964 254.328,75.514 254.557,75.167 254.256 C 75.075 254.176,74.190 254.004,73.200 253.873 C 71.998 253.714,71.666 253.753,72.200 253.990 M145.200 254.000 C 144.376 254.264,144.341 254.326,145.000 254.354 C 145.440 254.373,146.070 254.213,146.400 254.000 C 147.101 253.547,146.614 253.547,145.200 254.000 M176.400 253.941 C 176.730 254.134,177.540 254.409,178.200 254.552 C 178.968 254.718,179.184 254.684,178.800 254.459 C 178.470 254.266,177.660 253.991,177.000 253.848 C 176.232 253.682,176.016 253.716,176.400 253.941 M215.300 253.887 C 215.905 253.978,216.895 253.978,217.500 253.887 C 218.105 253.795,217.610 253.720,216.400 253.720 C 215.190 253.720,214.695 253.795,215.300 253.887 M78.100 254.687 C 78.705 254.778,79.695 254.778,80.300 254.687 C 80.905 254.595,80.410 254.520,79.200 254.520 C 77.990 254.520,77.495 254.595,78.100 254.687 M96.702 255.236 C 102.699 255.375,113.769 255.370,121.302 255.225 C 133.107 254.999,131.599 254.964,110.400 254.974 C 92.119 254.982,88.600 255.049,96.702 255.236 M182.936 255.341 C 184.312 255.553,186.286 255.555,187.736 255.345 C 189.992 255.019,189.794 254.989,185.400 254.985 C 181.098 254.981,180.842 255.018,182.936 255.341 M299.381 255.284 C 300.910 255.466,303.430 255.466,304.981 255.285 C 307.471 254.995,307.147 254.957,302.200 254.956 C 297.284 254.955,296.940 254.995,299.381 255.284 "
                      fill="#9ad3f4"
                      fill-rule="evenodd"
                  />
                  <path
                      d="M76.400 144.009 C 75.594 144.183,76.444 144.223,78.400 144.101 C 80.270 143.985,81.875 143.825,81.967 143.745 C 82.264 143.487,77.842 143.696,76.400 144.009 M130.200 143.801 C 130.420 143.876,132.850 144.008,135.600 144.095 C 138.350 144.181,140.060 144.126,139.400 143.973 C 138.217 143.699,129.423 143.534,130.200 143.801 M241.800 144.000 C 241.296 144.217,241.222 144.344,241.600 144.344 C 241.930 144.344,242.560 144.189,243.000 144.000 C 243.504 143.783,243.578 143.656,243.200 143.656 C 242.870 143.656,242.240 143.811,241.800 144.000 M248.000 144.000 C 249.368 144.438,250.419 144.438,249.400 144.000 C 248.960 143.811,248.240 143.662,247.800 143.668 C 247.157 143.677,247.196 143.743,248.000 144.000 M254.399 147.001 C 255.168 147.880,255.955 148.780,256.148 149.000 C 256.340 149.220,256.311 149.040,256.083 148.600 C 255.855 148.160,255.068 147.260,254.334 146.601 L 253.000 145.402 254.399 147.001 M146.800 147.800 C 147.546 148.570,148.247 149.200,148.357 149.200 C 148.467 149.200,147.946 148.570,147.200 147.800 C 146.454 147.030,145.753 146.400,145.643 146.400 C 145.533 146.400,146.054 147.030,146.800 147.800 M66.778 148.300 L 65.400 149.800 66.900 148.422 C 68.296 147.138,68.584 146.800,68.278 146.800 C 68.212 146.800,67.537 147.475,66.778 148.300 M234.257 153.900 C 233.932 155.867,234.019 242.646,234.347 244.177 C 234.486 244.825,234.600 224.440,234.600 198.877 C 234.600 173.315,234.579 152.400,234.552 152.400 C 234.526 152.400,234.393 153.075,234.257 153.900 M64.109 155.600 C 64.109 156.590,64.187 156.995,64.282 156.500 C 64.378 156.005,64.378 155.195,64.282 154.700 C 64.187 154.205,64.109 154.610,64.109 155.600 M257.793 198.400 C 257.793 222.710,257.841 232.655,257.900 220.500 C 257.959 208.345,257.959 188.455,257.900 176.300 C 257.841 164.145,257.793 174.090,257.793 198.400 M150.509 156.400 C 150.509 157.390,150.587 157.795,150.682 157.300 C 150.778 156.805,150.778 155.995,150.682 155.500 C 150.587 155.005,150.509 155.410,150.509 156.400 M74.000 166.394 C 74.330 166.611,75.035 166.791,75.567 166.794 C 76.851 166.802,76.525 166.575,74.800 166.258 C 73.815 166.077,73.578 166.118,74.000 166.394 M141.365 173.411 C 140.773 174.187,140.359 174.887,140.444 174.967 C 140.530 175.046,141.093 174.412,141.696 173.556 C 143.065 171.614,142.818 171.506,141.365 173.411 M181.917 175.128 C 181.542 175.278,183.291 175.400,185.803 175.400 C 188.316 175.400,190.063 175.278,189.686 175.128 C 189.309 174.979,187.560 174.856,185.800 174.856 C 184.040 174.856,182.293 174.979,181.917 175.128 M299.340 175.106 C 299.087 175.268,300.476 175.400,302.426 175.400 C 304.377 175.400,305.664 175.278,305.286 175.128 C 304.352 174.758,299.910 174.742,299.340 175.106 M108.069 176.839 C 107.328 178.024,107.657 178.113,108.519 176.961 C 108.914 176.432,109.092 176.000,108.915 176.000 C 108.738 176.000,108.357 176.378,108.069 176.839 M214.263 176.300 C 214.162 176.465,215.125 176.600,216.402 176.600 C 217.680 176.600,218.517 176.468,218.263 176.306 C 217.654 175.920,214.499 175.915,214.263 176.300 M291.390 176.416 C 291.221 176.689,291.523 176.738,292.266 176.560 C 293.799 176.192,293.944 176.000,292.690 176.000 C 292.117 176.000,291.532 176.187,291.390 176.416 M311.233 176.144 C 311.325 176.223,311.940 176.408,312.600 176.556 C 313.476 176.752,313.638 176.715,313.200 176.418 C 312.660 176.053,310.832 175.798,311.233 176.144 M288.200 177.414 C 287.200 177.896,287.166 177.951,288.000 177.748 C 289.133 177.471,290.407 176.821,289.800 176.830 C 289.580 176.833,288.860 177.096,288.200 177.414 M314.800 176.934 C 314.800 177.037,315.381 177.324,316.091 177.572 C 316.801 177.819,317.206 177.857,316.991 177.656 C 316.535 177.229,314.800 176.658,314.800 176.934 M208.581 179.700 L 207.000 181.400 208.700 179.819 C 210.281 178.348,210.584 178.000,210.281 178.000 C 210.216 178.000,209.451 178.765,208.581 179.700 M223.600 178.764 C 224.150 179.214,224.780 179.583,225.000 179.585 C 225.428 179.588,224.705 179.034,223.400 178.360 C 222.869 178.085,222.936 178.221,223.600 178.764 M105.123 180.700 C 104.418 181.521,103.890 182.400,104.101 182.400 C 104.183 182.400,104.649 181.860,105.137 181.200 C 106.101 179.896,106.092 179.572,105.123 180.700 M204.969 181.687 C 205.334 181.891,205.866 181.891,206.231 181.687 C 206.701 181.424,206.540 181.333,205.600 181.333 C 204.660 181.333,204.499 181.424,204.969 181.687 M134.000 183.200 C 133.303 184.080,132.883 184.793,133.066 184.785 C 133.395 184.770,135.747 181.600,135.430 181.600 C 135.340 181.600,134.697 182.320,134.000 183.200 M162.378 184.700 L 161.000 186.200 162.500 184.822 C 163.325 184.063,164.000 183.388,164.000 183.322 C 164.000 183.016,163.662 183.304,162.378 184.700 M329.983 186.100 C 330.964 187.145,331.819 188.000,331.883 188.000 C 332.184 188.000,331.866 187.641,330.100 185.983 L 328.200 184.200 329.983 186.100 M159.123 188.300 C 158.418 189.121,157.890 190.000,158.101 190.000 C 158.183 190.000,158.649 189.460,159.137 188.800 C 160.101 187.496,160.092 187.172,159.123 188.300 M128.848 190.000 C 128.141 190.880,127.706 191.596,127.881 191.591 C 128.196 191.583,130.601 188.400,130.293 188.400 C 130.205 188.400,129.555 189.120,128.848 190.000 M187.891 197.089 C 188.601 197.177,189.861 197.179,190.691 197.092 C 191.521 197.005,190.940 196.933,189.400 196.931 C 187.860 196.929,187.181 197.000,187.891 197.089 M300.691 197.089 C 301.401 197.177,302.661 197.179,303.491 197.092 C 304.321 197.005,303.740 196.933,302.200 196.931 C 300.660 196.929,299.981 197.000,300.691 197.089 M292.181 200.900 L 290.600 202.600 292.300 201.019 C 293.881 199.548,294.184 199.200,293.881 199.200 C 293.816 199.200,293.051 199.965,292.181 200.900 M338.867 200.420 C 339.101 201.092,339.367 201.567,339.457 201.476 C 339.656 201.278,338.901 199.200,338.631 199.200 C 338.527 199.200,338.633 199.749,338.867 200.420 M178.529 201.700 C 178.084 202.195,177.576 202.870,177.401 203.200 C 177.063 203.837,177.155 203.750,178.776 201.900 C 179.306 201.295,179.649 200.800,179.539 200.800 C 179.429 200.800,178.975 201.205,178.529 201.700 M264.649 202.615 C 264.512 202.973,264.415 203.566,264.434 203.933 C 264.453 204.300,264.627 204.069,264.821 203.420 C 265.198 202.158,265.065 201.533,264.649 202.615 M86.800 204.400 C 86.103 205.280,85.623 206.000,85.733 206.000 C 85.843 206.000,86.503 205.280,87.200 204.400 C 87.897 203.520,88.377 202.800,88.267 202.800 C 88.157 202.800,87.497 203.520,86.800 204.400 M118.000 204.200 C 117.483 204.750,117.227 205.194,117.430 205.187 C 117.772 205.176,119.421 203.200,119.088 203.200 C 119.006 203.200,118.517 203.650,118.000 204.200 M151.457 203.900 C 151.348 204.285,151.155 205.230,151.028 206.000 C 150.738 207.749,151.360 206.421,151.730 204.500 C 151.993 203.134,151.795 202.699,151.457 203.900 M175.579 206.655 C 175.358 207.236,175.252 207.785,175.343 207.876 C 175.433 207.967,175.699 207.492,175.933 206.820 C 176.453 205.328,176.139 205.182,175.579 206.655 M340.682 207.221 C 340.808 208.199,340.975 209.075,341.055 209.167 C 341.381 209.542,341.160 206.555,340.821 206.021 C 340.584 205.646,340.535 206.070,340.682 207.221 M263.449 208.615 C 263.312 208.973,263.226 210.106,263.259 211.133 C 263.316 212.960,263.323 212.949,263.590 210.600 C 263.880 208.037,263.848 207.577,263.449 208.615 M82.151 210.500 C 80.970 211.848,80.280 212.800,80.484 212.800 C 80.584 212.800,81.245 212.080,81.952 211.200 C 83.325 209.492,83.464 209.001,82.151 210.500 M150.250 210.850 C 149.933 212.437,149.996 219.102,150.340 220.324 C 150.483 220.832,150.600 218.627,150.600 215.424 C 150.600 209.009,150.605 209.075,150.250 210.850 M204.006 210.433 C 204.009 210.965,204.189 211.670,204.406 212.000 C 204.682 212.422,204.723 212.185,204.542 211.200 C 204.225 209.475,203.998 209.149,204.006 210.433 M341.309 211.200 C 341.309 212.190,341.387 212.595,341.482 212.100 C 341.578 211.605,341.578 210.795,341.482 210.300 C 341.387 209.805,341.309 210.210,341.309 211.200 M112.800 211.000 C 112.283 211.550,112.027 211.994,112.230 211.987 C 112.572 211.976,114.221 210.000,113.888 210.000 C 113.806 210.000,113.317 210.450,112.800 211.000 M317.349 215.400 C 317.350 218.636,317.385 218.804,317.691 217.061 C 317.879 215.990,317.878 214.378,317.689 213.461 C 317.402 212.067,317.347 212.380,317.349 215.400 M286.934 215.600 C 286.934 217.250,287.005 217.925,287.091 217.100 C 287.178 216.275,287.178 214.925,287.091 214.100 C 287.005 213.275,286.934 213.950,286.934 215.600 M174.109 215.200 C 174.109 216.190,174.187 216.595,174.282 216.100 C 174.378 215.605,174.378 214.795,174.282 214.300 C 174.187 213.805,174.109 214.210,174.109 215.200 M263.228 219.233 C 263.244 220.205,263.406 221.360,263.590 221.800 C 263.792 222.283,263.838 221.649,263.707 220.200 C 263.445 217.310,263.189 216.793,263.228 219.233 M341.301 219.400 C 341.305 220.280,341.387 220.593,341.483 220.095 C 341.579 219.598,341.575 218.878,341.475 218.495 C 341.375 218.113,341.296 218.520,341.301 219.400 M204.249 219.015 C 204.112 219.373,204.016 220.056,204.036 220.533 C 204.062 221.147,204.185 221.008,204.459 220.056 C 204.857 218.672,204.694 217.858,204.249 219.015 M74.800 220.000 C 74.330 220.660,74.036 221.200,74.146 221.200 C 74.256 221.200,74.730 220.660,75.200 220.000 C 75.670 219.340,75.964 218.800,75.854 218.800 C 75.744 218.800,75.270 219.340,74.800 220.000 M340.901 222.600 C 340.905 223.480,340.987 223.793,341.083 223.295 C 341.179 222.798,341.175 222.078,341.075 221.695 C 340.975 221.313,340.896 221.720,340.901 222.600 M316.446 222.067 C 316.421 222.434,316.296 223.064,316.170 223.467 C 315.952 224.162,315.963 224.163,316.397 223.487 C 316.648 223.096,316.773 222.466,316.673 222.087 C 316.511 221.468,316.488 221.466,316.446 222.067 M175.418 223.700 C 175.568 224.195,175.855 224.776,176.056 224.991 C 176.257 225.206,176.219 224.801,175.972 224.091 C 175.465 222.638,174.997 222.308,175.418 223.700 M71.751 224.100 C 70.570 225.448,69.880 226.400,70.084 226.400 C 70.184 226.400,70.845 225.680,71.552 224.800 C 72.925 223.092,73.064 222.601,71.751 224.100 M150.880 223.800 C 150.880 224.240,151.024 225.050,151.200 225.600 C 151.454 226.392,151.520 226.433,151.520 225.800 C 151.520 225.360,151.376 224.550,151.200 224.000 C 150.946 223.208,150.880 223.167,150.880 223.800 M101.400 226.000 C 100.384 227.320,99.699 228.390,99.877 228.378 C 100.207 228.356,103.733 223.600,103.419 223.600 C 103.324 223.600,102.416 224.680,101.400 226.000 M264.406 226.633 C 264.409 227.055,264.595 227.670,264.818 228.000 C 265.115 228.438,265.152 228.276,264.956 227.400 C 264.627 225.929,264.398 225.610,264.406 226.633 M200.031 228.900 C 198.346 230.900,198.334 230.933,199.764 229.600 C 201.051 228.400,202.280 226.800,201.914 226.800 C 201.851 226.800,201.004 227.745,200.031 228.900 M312.378 229.500 L 311.000 231.000 312.500 229.622 C 313.896 228.338,314.184 228.000,313.878 228.000 C 313.812 228.000,313.137 228.675,312.378 229.500 M293.167 230.545 C 293.700 231.201,295.200 232.193,295.200 231.889 C 295.200 231.813,294.615 231.322,293.900 230.799 C 293.096 230.210,292.816 230.113,293.167 230.545 M97.867 230.667 C 97.720 230.813,97.600 231.083,97.600 231.267 C 97.600 231.450,107.545 231.557,119.700 231.503 L 141.800 231.407 119.879 231.300 C 105.519 231.230,98.042 231.056,98.202 230.797 C 98.480 230.347,98.269 230.265,97.867 230.667 M64.380 234.439 C 63.920 235.340,63.613 236.146,63.697 236.230 C 63.781 236.314,64.241 235.576,64.719 234.591 C 65.809 232.347,65.515 232.215,64.380 234.439 M187.900 233.493 C 188.835 233.577,190.365 233.577,191.300 233.493 C 192.235 233.409,191.470 233.340,189.600 233.340 C 187.730 233.340,186.965 233.409,187.900 233.493 M300.700 233.493 C 301.635 233.577,303.165 233.577,304.100 233.493 C 305.035 233.409,304.270 233.340,302.400 233.340 C 300.530 233.340,299.765 233.409,300.700 233.493 M269.564 238.733 C 269.780 239.136,270.271 239.721,270.655 240.033 C 271.087 240.384,270.990 240.104,270.401 239.300 C 269.351 237.865,268.957 237.598,269.564 238.733 M152.880 243.667 C 152.836 245.354,152.696 247.064,152.570 247.467 C 152.356 248.147,152.372 248.150,152.787 247.505 C 153.052 247.092,153.178 245.551,153.097 243.705 L 152.961 240.600 152.880 243.667 M274.600 244.800 C 275.906 246.120,277.065 247.200,277.175 247.200 C 277.285 247.200,276.306 246.120,275.000 244.800 C 273.694 243.480,272.535 242.400,272.425 242.400 C 272.315 242.400,273.294 243.480,274.600 244.800 M277.967 247.745 C 278.500 248.401,280.000 249.393,280.000 249.089 C 280.000 249.013,279.415 248.522,278.700 247.999 C 277.896 247.410,277.616 247.313,277.967 247.745 M63.600 248.248 C 63.600 248.458,64.153 249.253,64.829 250.015 L 66.058 251.400 64.945 249.800 C 64.333 248.920,63.780 248.125,63.716 248.033 C 63.652 247.942,63.600 248.038,63.600 248.248 M166.422 249.429 C 167.864 250.506,169.690 251.567,169.000 250.927 C 168.149 250.138,165.638 248.400,165.349 248.400 C 165.182 248.400,165.665 248.863,166.422 249.429 M236.317 249.400 C 236.545 249.840,237.332 250.740,238.066 251.399 L 239.400 252.598 238.001 250.999 C 237.232 250.120,236.445 249.220,236.252 249.000 C 236.060 248.780,236.089 248.960,236.317 249.400 M202.900 250.046 C 201.537 250.919,201.095 251.506,202.300 250.843 C 203.218 250.339,204.656 249.227,204.400 249.219 C 204.290 249.216,203.615 249.588,202.900 250.046 M148.641 252.827 C 147.783 253.472,147.250 254.000,147.456 254.000 C 147.662 254.000,148.453 253.467,149.215 252.816 C 150.987 251.302,150.661 251.308,148.641 252.827 M69.600 253.431 C 69.600 253.701,71.678 254.456,71.876 254.257 C 71.967 254.167,71.492 253.901,70.820 253.667 C 70.149 253.433,69.600 253.327,69.600 253.431 M249.000 253.600 C 247.893 253.882,247.877 253.909,248.800 253.947 C 249.350 253.969,250.070 253.813,250.400 253.600 C 251.081 253.160,250.729 253.160,249.000 253.600 M245.100 254.282 C 245.595 254.378,246.405 254.378,246.900 254.282 C 247.395 254.187,246.990 254.109,246.000 254.109 C 245.010 254.109,244.605 254.187,245.100 254.282 M74.519 254.882 C 74.783 255.050,76.440 255.166,78.200 255.139 C 81.789 255.085,81.247 254.902,76.919 254.706 C 75.334 254.635,74.254 254.714,74.519 254.882 M143.400 254.800 L 141.800 255.086 143.276 255.143 C 144.088 255.174,144.864 255.020,145.000 254.800 C 145.136 254.580,145.192 254.426,145.124 254.457 C 145.056 254.488,144.280 254.642,143.400 254.800 M292.990 254.784 C 293.132 255.013,293.717 255.200,294.290 255.200 C 295.544 255.200,295.399 255.008,293.866 254.640 C 293.123 254.462,292.821 254.511,292.990 254.784 M310.200 254.800 L 309.000 255.105 310.076 255.153 C 310.668 255.179,311.264 255.020,311.400 254.800 C 311.536 254.580,311.592 254.421,311.524 254.447 C 311.456 254.473,310.860 254.632,310.200 254.800 M87.300 255.491 C 88.125 255.578,89.475 255.578,90.300 255.491 C 91.125 255.405,90.450 255.334,88.800 255.334 C 87.150 255.334,86.475 255.405,87.300 255.491 M128.700 255.495 C 129.855 255.576,131.745 255.576,132.900 255.495 C 134.055 255.414,133.110 255.348,130.800 255.348 C 128.490 255.348,127.545 255.414,128.700 255.495 M105.100 255.897 C 106.695 255.973,109.305 255.973,110.900 255.897 C 112.495 255.821,111.190 255.759,108.000 255.759 C 104.810 255.759,103.505 255.821,105.100 255.897 M184.291 255.889 C 185.001 255.977,186.261 255.979,187.091 255.892 C 187.921 255.805,187.340 255.733,185.800 255.731 C 184.260 255.729,183.581 255.800,184.291 255.889 M301.305 255.887 C 301.914 255.979,302.814 255.977,303.305 255.882 C 303.797 255.787,303.300 255.711,302.200 255.714 C 301.100 255.717,300.697 255.795,301.305 255.887 "
                      fill="#3cacec"
                      fill-rule="evenodd"
                  />
              </svg>
            </span>
            Zalo
          </div>
          <div class="more-share-selection__item">
            <span class="embed-icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="20" height="20" fill="var(--element-color)"
                  viewBox="0 0 512 512" xml:space="preserve"
                  enable-background="new 0 0 512 512"
              >
                  <path
                      d="M73.391,261.667l107.507-107.508c10.739-10.739,10.739-28.151,0-38.891c-10.739-10.74-28.151-10.739-38.891,0
                      L15.435,241.841c-5.469,5.468-8.146,12.667-8.045,19.833c-0.097,7.162,2.581,14.354,8.045,19.819l126.572,126.571
                      c10.738,10.739,28.151,10.739,38.891,0s10.739-28.151,0-38.891L73.391,261.667z"
                  />
                  <path
                      d="M488.065,236.174L361.492,109.602c-10.739-10.739-28.151-10.74-38.891,0c-10.739,10.739-10.739,28.152,0,38.891L430.11,256
                      L322.602,363.508c-10.739,10.738-10.739,28.15,0,38.891c10.739,10.738,28.152,10.738,38.891,0l126.572-126.572
                      c5.467-5.467,8.144-12.662,8.045-19.826C496.208,248.836,493.531,241.64,488.065,236.174z"
                  />
                  <path
                      d="M255.596,416.092c-2.687,16.35-18.119,27.426-34.468,24.739l0,0c-16.349-2.687-27.425-18.118-24.738-34.468l51.015-310.456
                      c2.687-16.349,18.118-27.425,34.468-24.739l0,0c16.349,2.687,27.425,18.119,24.738,34.468L255.596,416.092z"
                  />
              </svg>
            </span>
            Mã nhúng
          </div>
        </div>
      </div>`;
    moreBtn.parentElement.parentElement.parentElement.parentElement.append(
      moreSelection
    );
  });
});

window.onclick = function (event) {
  if (moreSelection) {
    if (
      !moreSelection.contains(event.target) &&
      event.target != tempBtn &&
      !tempBtn.contains(event.target)
    ) {
      moreSelection.remove();
    }
  }
};
