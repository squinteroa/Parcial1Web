const displayValorAnterior = document.getElementById('valor-anterior');/*hace referencia al valor anterior de index.html*/ 
const displayValorAnterior = document.getElementById('valor-actual');/*hace referencial al valor actual de index.html*/
const botonesNumeros = document.querySelectorAll('.numero');/*hace referencia a la clase numero de index.html*/
const botonesOperadores = document.querySelectorAll('.operador');/*hace referencia a la clase operadores20*/


botonesNumeros.forEach(boton => {
    boton.addEventListener('click',() => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click',() => display.computar(boton.value));
});
