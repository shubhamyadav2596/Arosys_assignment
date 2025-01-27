// custom slider

$(document).ready(function() {
    let currentIndex = 0;
    const $slider = $('.slider');
    const $slides = $('.slide');

    $('#prev').click(function() {
      if (currentIndex > 0) {
        currentIndex--;
        $slider.css('transform', `translateX(-${currentIndex * 100}%)`);
      }
    });

    $('#next').click(function() {
      if (currentIndex < $slides.length - 1) {
        currentIndex++;
        $slider.css('transform', `translateX(-${currentIndex * 100}%)`);
      }
    });
  });
$(document).ready(function() {
    let currentIndex = 0;
    const $slider = $('.navbtn-contents .contents');
    const $slides = $('.navbtn-contents .content');

    $('#prev').click(function() {
      if (currentIndex > 0) {
        currentIndex--;
        $slider.css('transform', `translateX(-${currentIndex * 100}%)`);
      }
    });

    $('#next').click(function() {
      if (currentIndex < $slides.length - 1) {
        currentIndex++;
        $slider.css('transform', `translateX(-${currentIndex * 100}%)`);
      }
    });
  });

  
// $(document).ready(function() {
//     $("#cards-slider").owlCarousel({
//         items : 5,
//         itemsDesktop:[1199,3],
//         itemsDesktopSmall:[980,2],
//         itemsMobile : [600,1],
//         navigation:true,
//         navigationText:["",""],
//         pagination:true,
//         autoPlay:true
//     });
// });

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
  
    nav: true,
    autoplayTimeout:1000,
    // navigation:true,
    autoplay: true,
    indigator: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
   
    responsive: {
        0: {
            items: 1
        },
        546: {
            items: 2
        },
        767: {
            items: 3
        },
        991: {
            items: 4
        },
        1100: {
            items: 6
        }
    }
})


//   res-navbar

$(document).ready(function() {
  $('#hamburger-menu').on('click', function() {
    $('.responsive-nav').addClass('show'); // Add the "highlight" class
    $('body').css({
      'overflow': 'hidden',
      'height': '100vh'
  });
  });

  $('#close-menu').on('click', function() {
    $('.responsive-nav').removeClass('show'); // Remove the "highlight" class
    $('body').css({
      'overflow': '',
      'height': ''
  });
  });
});


//   sticky key

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  scrollToTopBtn.style.display = "block";
} else {
  scrollToTopBtn.style.display = "none";
}
};

scrollToTopBtn.onclick = function() {
window.scrollTo({ top: 0, behavior: "smooth" });
};


// toggle theme 
const lightButton = document.getElementById("light");
const darkButton = document.getElementById("dark");
const body = document.body;


lightButton.addEventListener("click", () => {
lightButton.classList.add("active"); 
darkButton.classList.remove("active"); 
body.classList.remove("dark"); 

});

darkButton.addEventListener("click", () => {
darkButton.classList.add("active"); 
lightButton.classList.remove("active"); 
body.classList.add("dark"); 
});




// Brand custom slider

$(document).ready(function () {
    const $wrapper = $(".swiper-wrapper");
    const $slides = $(".swiper-slide");
    const slideWidth = $slides.outerWidth(true); // Includes margin
    const visibleSlides = 5; // Number of slides visible at a time
    let currentIndex = 0;
    let autoplayInterval;
  
    function updateSwiper() {
      const offset = -currentIndex * slideWidth;
      $wrapper.css("transform", `translateX(${offset}px)`);
    }
  
    // Move to the next slide
    function slideNext() {
      if (currentIndex < $slides.length - visibleSlides) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the first slide
      }
      updateSwiper();
    }
  
    // Autoplay functionality
    function startAutoplay() {
      autoplayInterval = setInterval(slideNext, 3000); // Slides every 3 seconds
    }
  
    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }
  
    // Swipe functionality for touch devices
    let startX = 0;
    let endX = 0;
  
    $(".swiper-container")
      .on("touchstart", function (e) {
        stopAutoplay(); // Pause autoplay on interaction
        startX = e.touches[0].clientX;
      })
      .on("touchmove", function (e) {
        endX = e.touches[0].clientX;
      })
      .on("touchend", function () {
        if (startX > endX + 50) {
          slideNext();
        } else if (startX < endX - 50) {
          if (currentIndex > 0) {
            currentIndex--;
            updateSwiper();
          }
        }
        startAutoplay(); // Restart autoplay after swipe
      });
  
    // Start autoplay on load
    startAutoplay();
  });
  

