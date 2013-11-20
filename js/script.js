/*===========================================================*/
/*  Waypoints Interaction
/*===========================================================*/
$(document).ready(function(){

  $('#portfolio').waypoint(function(event, direction) {
     if (direction === 'down') {
     }
     else {
        
     }
  });

  $('.filter-off').waypoint(function(event, direction) {
     if (direction === 'down') {
     }
     else {
     }
  });
});
/*===========================================================*/
/*  Stick Navigation & Separators
/*===========================================================*/

$(document).ready(function(){

    var containerW = $('.container').width();
    $('.carousel_testimonials li').css('width',containerW);

    $("#navigation").sticky({topSpacing:0});
    
    $("ul#menu").click(function(){
      if( $("ul#menu li").css('display') != 'inline' ){
        if($("ul#menu").hasClass('showmenu')) {
              $("ul#menu").removeClass('showmenu');
          $("ul#menu li").css('display','none');
          } else {
          $("ul#menu").addClass('showmenu');
              $("ul#menu li").css('display','block');
          }
      }
    });
    
    $(window).resize(function() {
      if( $(window).width() >= 960 ){
        if( $("ul#menu li").css('display' ) == 'none' )
          $("ul#menu li").css('display','inline');
      }
      else{
        $("ul#menu li").css('display','none');
      }
    });
    
  });
  
  
$(document).ready(function(){
    
    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('.separator1-bg').parallax("50%", 0.2);
    $('.separator2-bg').parallax("50%", 0.2);
    $('.separator3-bg').parallax("50%", 0.2);
    $('.separator4-bg').parallax("100%", 0.1);
    
    
    $('#navigation ul').localScroll(1000);
  });
  
  


/*===========================================================*/
/*  Full screen slider
/*===========================================================*/ 
  
 $(function(){
            $('#maximage').maximage({
                cycleOptions: {
                    fx: 'fade',
                    speed: 1000, 
                    timeout: 4000,
                    prev: '#arrow_left',
                    next: '#arrow_right',
                    pause: 1,
     
                },
                onFirstImageLoaded: function(){
                    jQuery('#cycle-loader').hide();
                    jQuery('#maximage').slideDown('slow');
                }
        
            });
    
            // Helper function to Fill and Center the HTML5 Video
            jQuery('video,object').maximage('maxcover');
    
            // To show it is dynamic html text
            jQuery('.in-slide-content').delay(1200).slideDown(2000);
        }); 
  
  
  
/*===========================================================*/
/*  Colorbox
/*===========================================================*/ 
  
$(document).ready(function(){
  //Examples of how to assign the ColorBox event to elements
  $(".group1").colorbox({rel:'group1',
    transition:"fade",
    speed: 1700, 
    onComplete:function(){
      $('.flexslider').flexslider({
      animation: "slide",
      controlNav: false,
      directionNav: true,

      });
    }
  });   
});
      
      
      
/*===========================================================*/
/*  Portfolio Isotope
/*===========================================================*/       
$(window).load(function(){

        var $container = $('.portfolio');
        $container.isotope({
            filter: '*',
      animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
        
            }
        });
    
        $('nav.primary a').click(function(){
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
          return false;
        });
    
        var $optionSets = $('nav.primary'),
               $optionLinks = $optionSets.find('a');
         
               $optionLinks.click(function(){
                  var $this = $(this);
              // don't proceed if already selected
              if ( $this.hasClass('selected') ) {
                  return false;
              }
           var $optionSet = $this.parents('nav.primary');
           $optionSet.find('.selected').removeClass('selected');
           $this.addClass('selected'); 
        });
    
    });
  
  

/*===========================================================*/
/*  Automatically Highlights Navigation Item
/*===========================================================*/

function calculateScroll() {

  var topRange = 200;
  var contentTop    = [];
  var contentBottom = [];
  var winTop    = $(window).scrollTop();

    //rangeTop is used for changing the class a little sooner that reaching the top of the page
    //rangeBottom is similar but used for when scrolling bottom to top
    var rangeTop  = 200;
    var rangeBottom = 500;

    $('#navigation').find('a').each(function(){
      contentTop.push( $( $(this).attr('href') ).offset().top );
      contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
    })

    $.each( contentTop, function(i){

      if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
        $('#navigation li')
        .removeClass('current')
        .eq(i).addClass('current');
      }

    })
  }

  $(document).ready(function() {

    calculateScroll()

    $(window).scroll(function(event) {

      calculateScroll();

    });

  });
  

  $('#slider-code').tinycarousel({ interval: true });


  $('.language').on('click', function() {
    $('.language').removeClass('active');
    $(this).addClass('active');
  });
           



