const app = {}

app.clickEvents = () => {
    $('.doc').hide()
    $('.mWu').show()
    $('.doctors').on('click', function(e){
        e.preventDefault();
        if( e.target.nodeName === 'A') {
            $('.show').show();
            const chosenDoc = e.target.id;
            console.log(e.target.id);
            $('.doc').hide()
            $(chosenDoc).toggle()
        } 
        
    })
}

app.methods = () => {
    $('.doctors a').on('click',function(){
        $('figure').removeClass('open')
          $(this).next().addClass('open');
    
    
        });
    
        
        $('a').smoothScroll({
            offset:-120
    
        });

        $('.hamburger').on('click', function(){
            $('.menu').toggleClass('show');
        });
 
        $('.exit-responsive').on('click', function(){
            $('.menu').toggleClass('show');
        });
 
    //  $('.brands').flickity({
    //      wrapAround:true,
    //      draggable:true,
    //      pageDots: false,
 
    //  });
 
     $('.contactus').on('click',function(){
         $('.sub-circle').toggleClass('show');
     });
 
     $('.exit-responsive').on('click', function(){
         $('.mobile-menu').removeClass('clicked')
     })
 
     $('.fa-bars').on('click', function(){
         $('.mobile-menu').addClass('clicked')
     })
}

app.init = function() {
    app.clickEvents();
    app.methods();
    
    
}

// $(function(){
//     app.init();
// })

$(document).ready(function() {
    app.init();
});
