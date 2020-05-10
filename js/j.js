/*global $, alert, console*/
$( function () {
    
    'use strict';
    
    
   $('html').niceScroll();
   
    //headerhight
    var myHeader = $('.header'),
        slider=$('.slider');
    
    myHeader.height($(window).height());
    
    $(window).resize( function () {
         myHeader.height($(window).height());
       
            slider.each( function(){
         $(this).css('paddingTop',( $(window).height() - $('.slider li').height() ) / 2 );
     })
    
    });
    
    $('.items li a').on('click',
        function(){
            $(this).parent().addClass('active').siblings().removeClass('active');
        
    });

   //bxslider
     $(document).ready(function(){
      $('.slider').bxSlider();
    });
   
    slider.bxSlider({
        pager:false
    })
    
    ///midlle of bxslider 
     slider.each( function(){
         $(this).css('paddingTop',( $(window).height() - $('.slider li').height() ) / 2 );
     })
    
    
    ///smooth scroll down 
    $('.items li a ').on('click', function() {
        $('html,body').animate({
        
            scrollTop:$('#'+$(this).data('value')).offset().top
            
        },1000)
    })
    
    
    
    /////T-slider
   
    $(function outoslider(){
        $('.t-slide .t-active').each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000, function() {
                    $(this).removeClass('t-active').next().addClass('t-active').fadeIn();
                    outoslider();
                   
                    
                });
            }
            else{
                 $(this).delay(3000).fadeOut(500, function() {
                    $(this).removeClass('t-active');
                     $('.t-slide div').eq(0).addClass('t-active').fadeIn();
                    outoslider();
                      });
            }
            
        });
        
    }());
    
    
    ////tigger Mixitup
    

      //  $('#Container').mixItUp();
    
        jQuery(function(){
            $('#Container').mixItUp();
        });
    
    ///edit items
    $('.shuffle li ').on('click',
        function(){
            $(this).addClass('selected').siblings().removeClass('selected');
        
    });
    
    
    
    //tigger nicescroll
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
    
    
    