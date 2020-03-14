$(document).ready(function(){

    // MIXITUP JS
    
    var mixer = mixitup('.portfolio-gallery');
    
    
    // SMOOTH SCROLL FOR IE/ EDGE / SAFARI
    
    $("a").on('click', function(event){
        
        if(this.hash !== ""){
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 800, function(){
                window.location.hash = hash;
            });
        }
        
        
    });
    
    
    // Testimonial JS
    $('#testimonial .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
         }
      });
    
    
    // Scroll JS
    $(function(){
        $.scrollUp();
        $.scrollUp();
    });
    
    
    // ACTIVE LINK
    var spy = new Gumshoe('#scroll-active a',{
        offset: 30
    });





});