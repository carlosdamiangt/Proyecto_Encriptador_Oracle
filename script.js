/*Reglas de la funcion 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 


const ingresoTexto = document.querySelector(".ingreso-texto");
const mensaje = document.querySelector(".mensaje");


//Boton encriptar
const botonEncriptador = document.getElementById("botonEncriptador");
botonEncriptador.addEventListener("click",botonEncriptar);
//Boton desencriptador
const botonDesencriptador = document.getElementById("botonDesencriptador");
botonDesencriptador.addEventListener("click",botonDesencriptar )
//Boton copiador 
const botonCopiador = document.getElementById("botonCopiador");
botonCopiador.addEventListener("click",botonCopiar);


function botonEncriptar() {
    const textoEncriptado = encriptar(ingresoTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.background="none"
    ingresoTexto.value="";
}

function encriptar(textoUsuario) {
    let matriz = [["e","enter"],
                  ["i","imes"],
                  ["a","ai"],
                  ["o","ober"],
                  ["u","ufat"]
                ]; 

    textoUsuario = textoUsuario.toLowerCase();
    for (let i  = 0; i < matriz.length; i ++) {
        if (textoUsuario.includes(matriz[i][0])){
             textoUsuario= textoUsuario.replaceAll(matriz[i][0],matriz[i][1])
        };  
    }
    return textoUsuario;
}
//Desencriptar

function botonDesencriptar () {
    const textoEncriptado = desencriptar(ingresoTexto.value)
    mensaje.value=textoEncriptado;
    ingresoTexto.value = "";
}

function desencriptar(textoDesencriptado) {
    let matriz = [["e","enter"],
                  ["i","imes"],
                  ["a","ai"],
                  ["o","ober"],
                  ["u","ufat"]
                ]; 
    textoDesencriptado = textoDesencriptado.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if (textoDesencriptado.includes(matriz[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(matriz[i][1],matriz[i][0])
        }
    }
    return textoDesencriptado;
}

function botonCopiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}

