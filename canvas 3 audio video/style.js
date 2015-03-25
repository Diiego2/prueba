function inicio() {
        var element = document.getElementById('lienzo');
        lienzo = element.getContext('2d');
        //comenzamos a realizar los trazos 
        var imagen = new Image();
        imagen.src = 'images.jpg';
        imagen.addEventListener("load",function() {                    
        lienzo.drawImage(imagen,0,0);
        lienzo.drawImage(imagen,385,0,190,147 );
        lienzo.drawImage(imagen,140,85,90,90,410,190,150,107);
            
        }, false);
}

window.addEventListener("load", inicio, false);
