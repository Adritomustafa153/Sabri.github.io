const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
     
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive Break Points
    breakpoints:{
        0:{
            slidesPreView: 1
        },
        620:{
            slidesPreView: 2
        },
        1024:{
            slidesPreView: 3
        }
    }


  });