/*carrusel a los baners(indiex)*/
let n=0;
function carrusel(){
    $("#imgbanner").attr("src", "imagenes/inicio/imagen0"+n+".jpg");
    n++;
    if(n>=5) n=1;
    setTimeout("carrusel()", 1000);
}


$(document).ready(function(){
    carrusel();
   /* match(index)
    $("#tabla-petlove tr").mouseover(function(){
        $(this).find(".letra").attr("style", "display:block;  transition: all 1s;opacity:1 ; visibility: visible").end();
     
    });
      $("#tabla-petlove tr ").mouseout(function(){
        $(this).find(".letra").attr("style", "display:none; transition: all 1s; opacity:0 ; visibility: hidden").end();
        
    });*/
    
    
 /*   $("#tabla-petlove tr td").mouseenter(function()
      /*  $(this).find("img").attr("style", "position:relative");
        $(this).find("p").attr("style", "display:block;  transition: all 1s;opacity: 0; padding-top:15px");
       



    });
    $("#tabla-petlove tr td").mouseleave(function(){
      /*  $(this).find("img").attr("style", "position:relative");
        $(this).find("p").attr("style", "display:none; transition: all 1s;opacity: 1");
        

    });*/
    /*Estilo para los botones*/
    $(".mas").mouseenter(function(){
        $(this).attr("style", "background-color: black");
    });
    $(".mas").mouseleave(function(){
        $(this).attr("style", "background: transparent");
    });
    /* estilos a enlaces de redes sociales(footer)*/
    $(".redes a").mouseenter(function(){
        $(this).attr("style", "color: black; transition: all 1s");

    });
    $(".redes a").mouseleave(function(){
        $(this).attr("style","color:rgb(177, 177, 177); transition: all 1s");
    });
    $(".redes img").mouseenter(function(){
        $(this).attr("style", "background-color: gray");

    });
    $(".redes img").mouseleave(function(){
        $(this).attr("style","background-color:none");
    });
    /*nuestros resultado(nosotros)*/
    $(".cuadro").mouseenter(function(){
        $(this).find("img").first().css("display", "none").end();
        $(this).find("p").css("display", "block").end();
        $(this).find("h3").css("display", "block").end();
       
     
    });
      $(".cuadro ").mouseleave(function(){
        $(this).find("img").first().css("display", "block").end();
        $(this).find("p").css("display", "none").end();
        $(this).find("h3").css("display", "none").end();
        
        
    });
});
