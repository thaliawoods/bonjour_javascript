const username = prompt("Veuillez saisir votre prénom :");

// Étape 1 : organisation de dossiers

// Étape 2 : premier code

let message = "Bonjour !";

console.log(message)

let firstname = "Love";

message = "Bonjour " + firstname + " !";

console.log(message)

// Étape 3 : dans une fonction

// const sayHello = () => {
//     let message = "Bonjour !";
//     console.log(message);

//     let firstname = "Love";
//     message = "Bonjour " + firstname + " !";
//     console.log(message);
// };

// sayHello()

// const sayHello = (firstname) => {
//     let message = "Bonjour !";
//     console.log(message);

//     message = "Bonjour " + firstname + " !";
//     console.log(message);
// };

// sayHello("Love")

// (optionnel) Étape 4 : un second paramètre

const sayHello = (firstname, hour) => {
    if (hour < 0 || hour > 23) {
        return("Entre 00h et 23h");
    }
    if (hour < 18) {
        message = "Bonjour " + firstname + " !";
    }
    else {
        message = "Bonsoir " + firstname + " !";
    }

    // console.log(message);
    document.querySelector('h1').innerText = message;

};

sayHello("Love",22);
sayHello("Loli",12);
sayHello("Lowlow",2);

// (bonus) Étape 5 : HTML, liaison avec JavaScript

// (bonus) Étape 6 : Première manipulation du DOM 😱

sayHello(username, 22);
