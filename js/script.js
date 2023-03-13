$('.features-block-slider').slick({
    dots: false,
    infinite: false,
    speed: 1500,
    fade: true,
    autoplay: false,
    cssEase: 'linear',
    prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
    nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
  });
$('.laboratory-inner').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
    nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

