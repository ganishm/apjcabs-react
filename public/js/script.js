document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const carItems = document.querySelectorAll(".car-item");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      // Add active class to the clicked tab
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      // Show/Hide cars based on the selected filter
      carItems.forEach((car) => {
        if (filter === "all") {
          car.style.display = "block"; // Show all cars
        } else {
          if (car.classList.contains(filter)) {
            car.style.display = "block"; // Show matching car
          } else {
            car.style.display = "none"; // Hide non-matching car
          }
        }
      });
    });
  });
});

$(".adventure .owl-carousel").owlCarousel({
  stagePadding: 200,
  loop: true,
  autoplay: false,
  autoplayTimeout: 5000,
  margin: 10,
  nav: false,
  items: 1,
  lazyLoad: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 60,
    },
    600: {
      items: 1,
      stagePadding: 100,
    },
    1000: {
      items: 1,
      stagePadding: 100,
    },
    1200: {
      items: 1,
      stagePadding: 200,
    },
    1400: {
      items: 1,
      stagePadding: 200,
    },
    1600: {
      items: 1,
      stagePadding: 200,
    },
    1800: {
      items: 1,
      stagePadding: 200,
    },
  },
});

$(".customer_say .owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  mouseDrag: true,
  autoplay: false,
  autoplayTimeout: 2000,
  dots: false,
  nav: false,
  navText: [
    "<span class='lnr ti-angle-left'></span>",
    "<span class='lnr ti-angle-right'></span>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

window.onscroll = function () {
  const scrollTopBtn = document.getElementById("scroll-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
};

// Scroll to top when the button is clicked
document.getElementById("scroll-top").onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
