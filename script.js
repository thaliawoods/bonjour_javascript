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

const sayHello = (firstname) => {
    let message = "Bonjour !";
    console.log(message);

    message = "Bonjour " + firstname + " !";
    console.log(message);
};

sayHello("Love")