

let audio = new Audio('musica.mp3');
var musica=false;


    $('#play').click(function () {
    
        if(musica==false){
            musica=true;
            audio.play();
            $('.volumen').attr("src","img/no-sound.png");

        }
        else{
            musica=false;
            audio.pause();
            $('.volumen').attr("src","img/volume-level.png");

        }
     
    });
    
  

