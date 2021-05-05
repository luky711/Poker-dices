var tiro_1;
var tiro_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var turno = 1, punto = 0;

window.onload = init;

function init(){
 boton_tirar = document.getElementById("boton_tirar");
 boton_tirar.addEventListener("click",lanzar);

 dado1 = document.getElementById("dado1");
 dado2 = document.getElementById("dado2");
 cerrar.addEventListener("click",cerrarVentana)
}

function tirardado(){
 return Math.floor(Math.random() * 6) + 1 ;
}

function reroll(ref,cara){
 ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function lanzar(){
   tiro_1 = tirardado();//Retorna un numero entre 1 y 6
   tiro_2 = tirardado();
   reroll(dado1,tiro_1);
   reroll(dado2,tiro_2);

   totaltiro = tiro_1 + tiro_2

 	if((totaltiro == 7 || totaltiro == 11) && (turno == 1)){
 	  console.log("se reinicio el turno");
 	  mostrarMensaje("😃!GANASTE!😃");
    }
    else{
    	if((totaltiro == 2 || totaltiro == 3 || totaltiro == 12) && (turno == 1)){
 	       mostrarMensaje("☹️Perdiste☹️")
 	       turno=1;
        }
        else{
    	  if(turno == 1){
    		punto = totaltiro;
    		alert("punto es "+ punto);
    		}
    		if (totaltiro == punto && turno>1) {
    		mostrarMensaje("😃!GANASTE!😃");
    		turno=1;
    		punto=0;
    	    }
    	    else{
				if(totaltiro == 7 && turno>1){
				mostrarMensaje("☹️Perdiste☹️")
				turno=1
				punto=0
            	}
		   	 	else{
            	turno = turno+1
            	}
     		}
        }
    }    
}

function mostrarMensaje(mensaje){
   mensaje_texto.innerHTML = mensaje;
   abrirVentana();
}

function abrirVentana(){
   ventana.className = "ligthbox animate__animated animate__fadeIn";
}

function cerrarVentana(){
   ventana.className = "ligthbox hidden";
}
