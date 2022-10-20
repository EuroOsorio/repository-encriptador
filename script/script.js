const ingresarTex = document.querySelector (".formato-ingresarTex");

const mostrarTex = document.querySelector (".formato-mostrarTex");

function incEncriptar (){

    mostrarTex.value = encriptar (ingresarTex.value);
    mostrarTex.style.backgroundImage = "none";
    ingresarTex.value = "";

}

function incDesencriptar (){

    mostrarTex.value = desencriptar (ingresarTex.value);
    mostrarTex.style.backgroundImage = "none";
    ingresarTex.value = "";
    
}

function encriptar (texIngresado){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    texIngresado = texIngresado.toLowerCase();

    for (let i=0;i < matrizCodigo.length; i++) {

        if (texIngresado.includes(matrizCodigo[i][0])){

            texIngresado = texIngresado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }

    }
    return texIngresado;
}

function desencriptar (texEncriptado){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    texEncriptado = texEncriptado.toLowerCase();

    for (let i=0;i < matrizCodigo.length; i++) {

        if (texEncriptado.includes(matrizCodigo[i][1])){

            texEncriptado = texEncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }

    }
    return texEncriptado;
}

function copiarText (){

    mostrarTex.select();
    navigator.clipboard.writeText(mostrarTex.value);
    mostrarTex.value = "";
    alert("Texto Copiado");

}