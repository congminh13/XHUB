document.addEventListener("DOMContentLoaded", function () {
  // Navbar Smoother
  const nalItems = document.querySelectorAll(".nal-item");
  const borderSlider = document.querySelector(".border-slider");
  let activeItem = document.querySelector(".nal-item.selected");

  function moveSlider() {
    const { left } = nalItems[0].getBoundingClientRect();
    const { left: selectedLeft, width } = activeItem.getBoundingClientRect();

    borderSlider.style.width = `${width}px`;
    borderSlider.style.transform = `translateX(${selectedLeft - left}px)`;
  }

  function toggleClasses(item) {
    nalItems.forEach((otherItem) =>
      otherItem.classList.remove("selected", "heavy")
    );
    item.classList.add("selected", "heavy");
    activeItem = item;
  }

  nalItems.forEach((item) =>
    item.addEventListener("click", () => {
      toggleClasses(item);
      moveSlider();
    })
  );

  window.addEventListener("scroll", function () {
    nalItems.forEach((item) => {
      const sectionId = item.getAttribute("href").substring(1);
      const targetSection = document.getElementById(sectionId);

      if (isInViewport(targetSection)) {
        toggleClasses(item);
        moveSlider();
      }
    });
  });
});

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
  




const desiredLeftPosition = -300;
const desiredNotiLeftPosition = -350;
const desiredTopPosition = 40;
const profileDivRect = profile.getBoundingClientRect();
const notiDivRect = noti.getBoundingClientRect();


function updateProfileBoxPosition() {
  var profile = document.getElementById('profile');
  var profileBox = document.getElementById('profileBox');


  // Set the position of subDiv based on mainDiv's position
  profileBox.style.left = profileDivRect.left + desiredLeftPosition + 'px';
  profileBox.style.top = profileDivRect.top + desiredTopPosition + 'px';
}
updateProfileBoxPosition();


function updateNotiBoxPostition () {
  var noti = document.getElementById('noti');
  var notiBox = document.getElementById('notiBox');

  notiBox.style.left = notiDivRect.left + desiredNotiLeftPosition + 'px';
  notiBox.style.top = notiDivRect.top + desiredTopPosition + 'px';
}

updateNotiBoxPostition();


window.addEventListener('resize', function() {
  updateProfileBoxPosition();
  updateNotiBoxPostition();
});


