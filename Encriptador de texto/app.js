function validar(texto) {
    let exp = /^[^A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/;

    if(exp.test(texto)) {
        return false;
    } else {
        return true;
    }
}

function encriptador() {

    let texto = document.getElementById('textoOriginal').value;

    if (!validar(texto)) {
        alert('No se permite mayúsculas, caracteres especiales ni espacios en blanco');
        document.querySelector('#textoOriginal').value = '';
    } else {

        let nuevoTexto = texto.replace(/a/g, 'ai').replace(/enter/g, 'enter').replace(/imes/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat');

        document.querySelector('#textoOriginal').value = '';
        document.querySelector('#textoEncriptado').value = nuevoTexto;
    }

    
}

function desencriptador() {
    let textoEncriptado = document.getElementById('textoEncriptado').value;

    if (!validar(textoEncriptado)) {
        alert('No se permite mayúsculas, caracteres especiales ni espacios en blanco');
        document.querySelector('#textoEncriptado').value = '';
    } else {
    let textoDesencriptado = textoEncriptado.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g,'o').replace(/ufat/g, 'u');

    document.querySelector('#textoEncriptado').value = '';
    document.querySelector('#textoOriginal').value = textoDesencriptado;
    }

    
}



encriptador();
desencriptador();
