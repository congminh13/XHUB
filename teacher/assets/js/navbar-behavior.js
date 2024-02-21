// Left side menu (isactive)
document.addEventListener("DOMContentLoaded", function () {
  var menuSelected = document.querySelectorAll(".object");

  // change element color
  menuSelected.forEach(function (item) {
    item.addEventListener("click", function () {
      menuSelected.forEach(function (otherItem) {
        otherItem.classList.remove("left-menu-selected");
      });
      item.classList.add("left-menu-selected");
      activeItem = item;
    });
  });
});

// Show dialog profile menu
document.addEventListener("DOMContentLoaded", function () {
  let dropdown = document.querySelector("#profile");
  let dialog = document.querySelector(".profile-box-hidden");

  dropdown.addEventListener("click", function () {
    dialog.classList.remove("profile-box-hidden");
  });
  dialog.addEventListener("mouseleave", function () {
    dialog.classList.add("profile-box-hidden");
  });
});

// Show notification dialog
document.addEventListener("DOMContentLoaded", function () {
  let noti_bell = document.querySelector(".notification-box");
  let noti_dialog = document.querySelector(".noti-dialog");

  noti_bell.addEventListener("click", function () {
    noti_dialog.classList.remove("noti-hidden");
  });
  noti_dialog.addEventListener("mouseleave", function () {
    noti_dialog.classList.add("noti-hidden");
  });
});

// Fixed noti and profile box
setTimeout(function() {
  document.getElementById('profileBox').style.right = 50 + 'px';
  document.getElementById('profileBox').style.top = 50 + 'px';
  document.getElementById('notiBox').style.right = 100 + 'px';
  document.getElementById('notiBox').style.top = 60 + 'px';
}, 1000);



