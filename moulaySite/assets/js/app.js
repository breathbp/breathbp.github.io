const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    speed:2000, 
    // spaceBetween: 32,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    /*effect: 'coverflow',
    coverflowEffect: {
      depth: 200,
    },*/

    centeredSlides: true,
  
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });

  AOS.init({
    duration: 1200,
  });

  /*document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

  document.addEventListener("scroll", handleScroll);
  
  var scrollToTopBtn = document.querySelector(".back-to-top-button");

  function handleScroll() {
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var GOLDEN_RATIO = 0.5;
  
    if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
      //show button
      if(!scrollToTopBtn.classList.contains("showScrollBtn"))
      scrollToTopBtn.classList.add("showScrollBtn")
    } else {
      //hide button
      if(scrollToTopBtn.classList.contains("showScrollBtn"))
      scrollToTopBtn.classList.remove("showScrollBtn")
    }
  }
  
  scrollToTopBtn.addEventListener("click", scrollToTop);
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }*/

$(document).on('click', '.feature-tourisme', function(e) {
  const $this = $(this);
  const feature_id = $this.attr('data-feature-id');

  $("#ft").fadeTo(300, 0.10, function() {
      $("#ft").css('background-image', "url('images/sc" + feature_id + ".jpg')");
  }).fadeTo(300,1);

  $("#ft-responsive").fadeTo(300, 0.10, function() {
      $("#ft-responsive").attr('src', "images/sc" + feature_id + ".jpg");
  }).fadeTo(300,1);

});


$(document).on('click', '.feature-tourisme-1n', function(e) {
  const $this = $(this);
  const feature_id = $this.attr('data-feature-id');

  $("#ft2").fadeTo(300, 0.10, function() {
      $("#ft2").css('background-image', "url('images/place" + feature_id + ".jpg')");
  }).fadeTo(300,1);

  $("#ft2-responsive").fadeTo(300, 0.10, function() {
    $("#ft2-responsive").attr('src', "images/place" + feature_id + ".jpg");
  }).fadeTo(300,1);
});

document.addEventListener("scroll", handleScroll);
  
  var scrollToTopBtn = document.querySelector(".back-to-top-button");

  function handleScroll() {
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var GOLDEN_RATIO = 0.2;
  
    if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
      //show button
      if(!scrollToTopBtn.classList.contains("showScrollBtn"))
      scrollToTopBtn.classList.add("showScrollBtn")
    } else {
      //hide button
      if(scrollToTopBtn.classList.contains("showScrollBtn"))
      scrollToTopBtn.classList.remove("showScrollBtn")
    }
  }
  
  scrollToTopBtn.addEventListener("click", scrollToTop);
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }