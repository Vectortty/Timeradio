// Obtiene el elemento con el ID "reloj"
const relojElemento = document.getElementById('reloj');

// Función que actualiza el reloj
function actualizarReloj() {
const ahora = new Date();
let horas = ahora.getHours();
let minutos = ahora.getMinutes();
let segundos = ahora.getSeconds();

// Añade un cero delante si el número es menor a 10
horas = horas < 10 ? '0' + horas : horas ; 
minutos = minutos < 10 ? '0' + minutos : minutos ;
segundos = segundos < 10 ? '0' + segundos : segundos ;

const tiempo = `${horas}:${minutos}:${segundos}`;
relojElemento.textContent = tiempo;
}

// Llama a la función una vez al principio
actualizarReloj();

// Actualiza el reloj cada segundo (1000 milisegundos)
setInterval(actualizarReloj, 1000);
