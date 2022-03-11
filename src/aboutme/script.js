//const $ = require( "jquery" )( window );

document.querySelector(".card-btn").addEventListener('click', () => {
    console.log("Botão funciona")
    document.querySelector(".container").classList.toggle("change");
})