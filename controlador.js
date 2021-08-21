//queryselector
let etiqueta=document.getElementById("boton");
let etiqueta2=document.getElementById("boton2");

let cambioImg=document.getElementById("imgMarc");
let cambioTitulo=document.getElementById("TituloMarc");
let cambioAudio=document.getElementById("audioMarc");

let titulo2=document.getElementById("titulo2");
let img2=document.getElementById("imgTony");
let audio2=document.getElementById("audioTony");

let titulo3=document.getElementById("titulo3");
let img3=document.getElementById("imgAmaro");
let audio3=document.getElementById("audioAmaro");

etiqueta.addEventListener("click",perroGuardian);
etiqueta2.addEventListener("click",perroGuardian2);

function perroGuardian(){
    cambioImg.src="./img/imgCodpley.jpg";
    cambioAudio.src="./audio/Coldplay.mp4";
    cambioTitulo.textContent="Codpley";

    audio2.src="./audio/marlonygaby.mp4";
    img2.src="./img/clandes.jpg";
    titulo2.textContent="Clandes";

    audio3.src="./audio/niche.mp4";
    img3.src="./img/imgniche.jpeg";
    titulo3.textContent="Grupo Niche";

    cambioTitulo.classList.add("text-danger");
    titulo2.classList.add("text-danger");
    titulo3.classList.add("text-danger");
    
}

function perroGuardian2(){
    cambioImg.src="./img/imgmarc.jpg";
    cambioAudio.src="./audio/marcantony.mp4";
    cambioTitulo.textContent="Marc Anthony";

    audio2.src="./audio/Tony.mp4";
    img2.src="img/tonyVegaimg.jpg";
    titulo2.textContent="Tony Vega";

    audio3.src="./audio/amorDeAntes.mp4";
    img3.src="./img/imgamaro.jpg";
    titulo3.textContent="Amaro";

    cambioTitulo.classList.remove("text-danger");
    titulo2.classList.remove("text-danger");
    titulo3.classList.remove("text-danger");
}

