
$(function(){

    $(window).on('load', function () {
        $('.page-loader').delay('500').fadeOut(1000);
    });

    $(document).ready(function() {

        $(document).on('click', '.icon-menu', function() {
            $('.responsive-sidebar-menu').addClass('active');
        });
        $(document).on('click', '.responsive-sidebar-menu .overlay', function() {
            $('.responsive-sidebar-menu').removeClass('active');
        });

        $(document).on('click', '.menu li .scroll-to', function() {
            $('.responsive-sidebar-menu').removeClass('active');
        })


        $(document).on('click', ".color-boxed a", function() {
            $(".color-boxed a").removeClass("clr-active");
            $(this).addClass("clr-active");
        });
        
        $(document).on('click', ".global-color .setting-toggle", function() {
            $(".global-color").addClass("active");
        });

        $(document).on('click', ".global-color .inner .overlay, .global-color .inner .global-color-option .close-settings", function() {
            $(".global-color").removeClass("active");
        });

    });

    $(window).scroll(function() {
            
        var windscroll = $(window).scrollTop();
        if (windscroll >= 0) {
            $('.page-section').each(function(i) {
                if ($(this).position().top <= windscroll - -1) {
                    $('.scroll-nav .scroll-to.active').removeClass('active');
                    $('.scroll-nav .scroll-to').eq(i).addClass('active');
                    $('.scroll-nav-responsive a.active').removeClass('active');
                    $('.scroll-nav-responsive a').eq(i).addClass('active');
                }
            });

        } else {

            $('.scroll-nav .scroll-to.active').removeClass('active');
            $('.scroll-nav .scroll-to:first').addClass('active');
            $('.scroll-nav-responsive a.active').removeClass('active');
            $('.scroll-nav-responsive a:first').addClass('active');
        }

        if (windscroll >= 0) {
            $('.scroll-to-page').each(function(i) {

                var wscrolldecress = windscroll + 1;
                console.log(wscrolldecress);
                if ($(this).position().top <= wscrolldecress - 0) {
                    $('.scroll-nav .scroll-to.active').removeClass('active');
                    $('.scroll-nav .scroll-to').eq(i).addClass('active');
                    $('.scroll-nav-responsive a.active').removeClass('active');
                    $('.scroll-nav-responsive a').eq(i).addClass('active');
                }
            });

        } else {
            $('.scroll-nav .scroll-to.active').removeClass('active');
            $('.scroll-nav .scroll-to:first').addClass('active');
            $('.scroll-nav-responsive a.active').removeClass('active');
            $('.scroll-nav-responsive a:first').addClass('active');
        }

    }).scroll();







    if ($('.testimonial-slider').length) {
        var testimonial = $('.testimonial-slider').owlCarousel({
            items: 1,
            margin: 30,
            stagePadding: 0,
            smartSpeed: 450,
            autoHeight: true,
            loop: false,
            nav: false,
            dots: false,
            onInitialized  : counter, //When the plugin has initialized.
            onTranslated : counter //When the translation of the stage has finished.
        });

        $('.testimonial-nav .next').on('click', function() {
            testimonial.trigger('next.owl.carousel');
        })
        $('.testimonial-nav .prev').on('click', function() {
            testimonial.trigger('prev.owl.carousel', [300]);
        })


        function counter(event) {
            var element   = event.target;         // DOM element, in this example .owl-carousel
            var items     = event.item.count;     // Number of items
            var item      = event.item.index + 1;     // Position of the current item
        
        // it loop is true then reset counter from 1
        if(item > items) {
                item = item - items
        }
        $('#testimonial-slide-count').html("<span class='left'>"+item+"</span> / "+items)
        }
    }

 
    window.addEventListener('scroll', {
        scroll_animations,
    });

});



function scroll_animations() {

    var defaults = {
        duration: 1.2,
        ease: "power4.out",
        animation: "fade_from_bottom",
        once: !1,
    };
    gsap.utils.toArray(".scroll-animation").forEach(function (box) {
        var gsap_obj = {};
        var settings = {
            duration: box.dataset.animationDuration || defaults.duration,
        };
        var animations = {
            fade_from_bottom: {
                y: 180,
                opacity: 0,
            },
            fade_from_top: {
                y: -180,
                opacity: 0,
            },
            fade_from_left: {
                x: -180,
                opacity: 0,
            },
            fade_from_right: {
                x: 180,
                opacity: 0,
            },
            fade_in: {
                opacity: 0,
            },
            rotate_up: {
                y: 180,
                rotation: 10,
                opacity: 0,
            },
        };
        var scroll_trigger = {
            scrollTrigger: {
                trigger: box,
                once: defaults.once,
                start: "top bottom+=20%",
                toggleActions: "play none none reverse",
                markers: !1,
            },
        };
        jQuery.extend(gsap_obj, settings);
        jQuery.extend(gsap_obj, animations[box.dataset.animation || defaults.animation]);
        jQuery.extend(gsap_obj, scroll_trigger);
        gsap.from(box, gsap_obj);
    });
}
scroll_animations();














document.addEventListener('DOMContentLoaded', function() {
  
    // Page loader
    window.addEventListener('load', function() {
      setTimeout(function() {
        var loader = document.querySelector('.page-loader');
        loader.style.display = 'none';
      }, 500);
    });
    
    // Responsive Sidebar Menu
    var iconMenu = document.querySelector('.icon-menu');
    var sidebarMenu = document.querySelector('.responsive-sidebar-menu');
    var sidebarOverlay = document.querySelector('.responsive-sidebar-menu .overlay');
    var menuItems = document.querySelectorAll('.menu li .scroll-to');
  
    iconMenu.addEventListener('click', function() {
      sidebarMenu.classList.add('active');
    });
    
    sidebarOverlay.addEventListener('click', function() {
      sidebarMenu.classList.remove('active');
    });
    
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        sidebarMenu.classList.remove('active');
      });
    });
    
    // Color Options
    var colorBoxed = document.querySelectorAll('.color-boxed a');
    var globalColor = document.querySelector('.global-color');
    var globalColorOverlay = document.querySelector('.global-color .inner .overlay');
    var globalColorCloseBtn = document.querySelector('.global-color .inner .global-color-option .close-settings');
    var globalColorToggleBtn = document.querySelector('.global-color .setting-toggle');
  
    colorBoxed.forEach(function(box) {
      box.addEventListener('click', function() {
        colorBoxed.forEach(function(box) {
          box.classList.remove('clr-active');
        });
        box.classList.add('clr-active');
      });
    });
    
    globalColorToggleBtn.addEventListener('click', function() {
      globalColor.classList.add('active');
    });
    
    globalColorOverlay.addEventListener('click', function() {
      globalColor.classList.remove('active');
    });
    
    globalColorCloseBtn.addEventListener('click', function() {
      globalColor.classList.remove('active');
    });
  
    // Scroll Navigation
    var scrollNavItems = document.querySelectorAll('.scroll-nav .scroll-to');
    var scrollNavRespItems = document.querySelectorAll('.scroll-nav-responsive a');
    var scrollSections = document.querySelectorAll('.page-section');
  
    function updateActiveNavItems() {
      var scrollTop = window.scrollY;
  
      var activeNavItem = document.querySelector('.scroll-nav .scroll-to.active');
      var activeNavRespItem = document.querySelector('.scroll-nav-responsive a.active');
  
      if (scrollTop < 0) {
        activeNavItem.classList.remove('active');
        activeNavRespItem.classList.remove('active');
        scrollNavItems[0].classList.add('active');
        scrollNavRespItems[0].classList.add('active');
        return;
      }
  
      var i = 0;
      for (; i < scrollSections.length; i++) {
        var sectionTop = scrollSections[i].offsetTop;
        if (sectionTop <= scrollTop + 1) {
          activeNavItem.classList.remove('active');
          activeNavRespItem.classList.remove('active');
          scrollNavItems[i].classList.add('active');
          scrollNavRespItems[i].classList.add('active');
        }
      }
    }
  
    window.addEventListener('scroll', function() {
      updateActiveNavItems();
    });
    updateActiveNavItems();
  
    // Testimonial Slider
    var testimonialSlider = document.querySelector('.testimonial-slider');
})