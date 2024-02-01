$(document).ready(function () {
  const sliders = [
    {
      id: 1,
      img: "slide_1.jpg",
    },
    {
      id: 2,
      img: "slide_2.jpg",
    },
    {
      id: 3,
      img: "slide_3.jpg",
    },
  ];

  let slider = $("#slider");
  let currentPosition = 0;

  showSliderData(currentPosition);

  setInterval(() => {
    currentPosition++;
    if (currentPosition > sliders.length - 1) {
      currentPosition = 0;
    }
    showSliderData(currentPosition);
  }, 10000);

  function showSliderData(currentPosition) {
    let activeSlider = sliders[currentPosition];
    slider.attr("src", "assets/src/" + activeSlider.img);
  }

  // Toggle Navbar
  let navBarToggler = $("#navbarToggler");
  let mobileNavBar = $("#mobileNavBar");

  navBarToggler.on("click", () => {
    mobileNavBar.toggleClass("showMobileNavbar");
  });

  // Footer Date
  let currentYear = new Date().getFullYear();
  $("#year").text(currentYear);

  // Handle Profile Bar
  let profileUser = $("#desktop-auth-wrapper");
  let profileMenu = $("#desktop-profile-links");

  profileUser.on("click", () => {
    profileMenu.toggleClass("show-profile-links");
  });

  // Mobile Handle Profile Bar
  let mobileAuthWrapper = $("#mobile-auth-wrapper");
  let mobileAuthMenu = $("#mobile-auth-menu");

  mobileAuthWrapper.on("click", () => {
    mobileAuthMenu.toggleClass("show-profile-links");
  });
});
