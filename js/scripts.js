    $(function() {
    $( "#to-slide-2, .slide-2 .arrow-back" ).click(function() {
        $( ".slide-1" ).toggle( "slide",{ direction: "left" }); 
        $( ".slide-2" ).toggle( "slide",{ direction: "right" }); 
    });

    $( ".slide-2 .votar, .slide-3 .arrow-back" ).click(function() {
        $( ".slide-2" ).toggle( "slide",{ direction: "left" }); 
        $( ".slide-3" ).toggle( "slide",{ direction: "right" }); 
    });        

    $( ".tarjeton.crop-logo,  .slide-4 .arrow-back" ).click(function() {
        $( ".slide-2" ).toggle( "slide",{ direction: "left" }); 
        $( ".slide-4" ).toggle( "slide",{ direction: "right" });      
    });

    $( ".slide-2 .tarjeton.bkg" ).click(function() {

        $( ".slide-2" ).toggle( "slide",{ direction: "left" }); 
        $( ".slide-6" ).toggle( "slide",{ direction: "right" });    

        $( ".slide-6 .arrow-back" ).off("click").click(function() {
            $( ".slide-2" ).toggle( "slide",{ direction: "left" }); 
            $( ".slide-6" ).toggle( "slide",{ direction: "right" });                  
        });    
    });       


    $( ".tarjeton.crop-number, .slide-5 .arrow-back").click(function() {
        $( ".slide-4" ).toggle( "slide",{ direction: "left" }); 
        $( ".slide-5" ).toggle( "slide",{ direction: "right" });      
    });   

    $( ".slide-4 .tarjeton.bkg" ).click(function() {

        $( ".slide-4" ).toggle( "slide",{ direction: "left" }); 
        $( ".slide-6" ).toggle( "slide",{ direction: "right" });   

        $( ".slide-6 .arrow-back" ).off("click").click(function() {
            $( ".slide-4" ).toggle( "slide",{ direction: "left" }); 
            $( ".slide-6" ).toggle( "slide",{ direction: "right" });                  
        });               
    });   

    $( ".slide-5 .tarjeton.bkg" ).click(function() {  
        alert("Presiona votar")
    });           
    
    $( ".slide-5 .votar" ).click(function() {
        $( ".slide-5" ).toggle( "slide",{ direction: "left" }); 
        $( ".slide-7" ).toggle( "slide",{ direction: "right" }); 
        var audio = new Audio('../snd/cancion.mp3');
        audio.play();
    });           

    /* $(" .slide-1" ).hide();   */
    $( ".slide-2, .slide-3, .slide-4, .slide-5, .slide-6, .slide-7").hide(); 
     
});
