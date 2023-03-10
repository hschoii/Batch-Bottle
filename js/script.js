$(document).ready(function(){

    
    $('.toggle').on('click', function() {
        $(this).toggleClass('close');
        $('.toggle-menu').toggleClass('open');

        if($('.toggle').hasClass('close')) {
            anime({
                targets: '.toggle.close span',
                duration: 1500,
                rotate: [0, 45],
                delay: 500
              });
        } else {
            anime({
                targets: '.toggle span',
                duration: 1500,
                rotate: [45, 0],
                delay: 500
              });
        }

        if($('.toggle-menu').hasClass('open')) {
            anime({
                targets: '.toggle-menu li a',
                duration: 1500,
                translateX: [-250, 0],
                opacity: [0, 1],
                delay: anime.stagger(150, {strat: 100})
              });
        }
    });



    $('.slider').slick({
        dots : true,
        infinite: true,
        slidesToShow: 1,
        fade : true,
        autoplay: true,
        autoplaySpeed: 9000
    }).on('beforeChange', function(){
        anime({
            targets: '.slider .img img',
            duration: 1500,
            translateX: [0, 250],
            rotate: [0, 45],
            opacity: [1, 0]
          });
          anime({
            targets: '.slider .text > *',
            opacity: [1, 0],
            delay: anime.stagger(50)
          });
    }).on('afterChange', function(){
        anime({
            targets: '.slider .img img',
            duration: 1500,
            translateX: [250, 0],
            rotate: [45, 0],
            opacity: [0, 1]
          });
          anime({
            targets: '.slider .text > *',
            opacity: [0, 1],
            delay: anime.stagger(50)
          });
    });

    // intro animation
    anime({
        targets: '.left-sidebar',
        duration: 1500,
        scaleY: [0, 1],
        easing: 'linear'
      });

      anime({
        targets: '.logo img',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: 500,
        easing: 'easeInOutExpo'
      });
      anime({
        targets: '.menu li',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(150, {start: 700}),
        easing: 'easeInOutExpo'
      });
      anime({
        targets: '.slider .text > *',
        translateY: [250, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {start: 1700}),
        easing: 'easeInOutSine'
      });
      anime({
        targets: '.slick-dots li',
        translateY: [250, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {start: 2000}),
        easing: 'easeInOutSine'
      });
      anime({
        targets: '.slider .img img',
        duration: 1500,
        translateX: [250, 0],
        rotate: [45, 0],
        opacity: [0, 1],
        delay: 3400
      });
      anime({
        targets: '.shape',
        duration: 1500,
        scale: [0, 1],
        opacity: [0, 1],
        delay: 4000
      });
      // anime({
      //   targets: '.social a',
      //   duration: 2500,
      //   translateY: [-50, 0],
      //   opacity: [0, 1],
      //   delay: anime.stagger(150, {start: 5000})
      // });
      // anime({
      //   targets: '.toggle span',
      //   duration: 2500,
      //   translateX: [-50, 0],
      //   opacity: [0, 1],
      //   delay: anime.stagger(150, {start: 5500})
      // });





});