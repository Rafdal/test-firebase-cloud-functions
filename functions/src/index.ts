import * as functions from 'firebase-functions';

// http request 1 (HTTP FUNCTION - REQUEST)
export const randomNumber = functions.https.onRequest((request, response) => {
    const number:number = Math.round(Math.random() * 100);
    response.send(number.toString());
});



// http callable function
export const sayHello = functions.https.onCall((data, context) => {

    const name:string = data.name;

    return `Que onda ${name}`;
});