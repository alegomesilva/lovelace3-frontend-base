//const $ = require( "jquery" )( window );

document.querySelector(".card-btn").addEventListener('click', () => {
    console.log("Botão funciona")
    document.querySelector(".container").classList.toggle("change");
})

//  GET request using fetch()

fetch("https://simple-market-backend.herokuapp.com/aboutme") //"https://jsonplaceholder.typicode.com/users"
    .then(response => response.json())

    .then(data => {
        $('#reminder').append(`"${data.reminder}"`);
        $('#greeting').append(`"${data.greeting}"`);
        $('#aboutMe').append(`"${data.aboutMe}"`); 
        $("#linkedin").append(`${data.linkedin}`);
        $("#email").append(`${data.email}`);
        $("#mobileNumber").append(`${data.mobileNumber}`);
    });

  