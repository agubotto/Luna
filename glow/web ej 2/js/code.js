window.onload = function () {
    $('#loader').fadeOut();
    $('body').removeClass('hidden');
}

var btnAbrir = document.getElementById('btn-abrir'),
    overlay = document.getElementById('overlay-popup'),
    popup = document.getElementById('popup'),
    btnCerrar = document.getElementById('btn-cerrar');

btnAbrir.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
})

btnCerrar.addEventListener('click', function () {
    overlay.classList.remove('active');
    popup.classList.remove('active');
})
var btnAbrir1 = document.getElementById('btn-abrir1'),
    overlay1 = document.getElementById('overlay-popup1'),
    popup1 = document.getElementById('popup1'),
    btnCerrar1 = document.getElementById('btn-cerrar1');

btnAbrir1.addEventListener('click', function () {
    overlay1.classList.add('active');
    popup1.classList.add('active');
})

btnCerrar1.addEventListener('click', function () {
    overlay1.classList.remove('active');
    popup1.classList.remove('active');
})
var btnAbrir2 = document.getElementById('btn-abrir2'),
    overlay2 = document.getElementById('overlay-popup2'),
    popup2 = document.getElementById('popup2'),
    btnCerrar2 = document.getElementById('btn-cerrar2');

btnAbrir2.addEventListener('click', function () {
    overlay2.classList.add('active');
    popup2.classList.add('active');
})

btnCerrar2.addEventListener('click', function () {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
})