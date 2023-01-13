var btn=document.getElementById('btn_on_off') 
var video=document.getElementById('header_video')
var contador=0

function cambio()

{ if (contador==0)
    {
        video.classList.add('fuera');
       //btn.classList.add('fuera'); 
        
        contador=1;
    }
    else{video.classList.remove('fuera');
     //btn.classList.remove('fuera');
    contador=0;
}
}

btn.addEventListener('click',cambio,true);



