/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Variables para los scores
var scores, roundScores, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; // 0 will be player 1 and 1 will be player 2

//Math.floor() sirve para quitar el decimal
// Math.random() sirve para sacar un numero aleatorio entre 0 y 1, al multiplicarlo por 6 ya sale entre 0 y 5, le sumamos uno y ya sale entre 1 y 6
//document.querySelector('#current-' + activePlayer).textContent = dice;

//Si Necesitamos modificar el HTML, lo hacemos con innerHTML
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// querySelector tambien nos sirve para leer datos del HTML
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

// Y para cambiar elementos del CSS, por ejemplo ocultar el dado al comienzo del juego
document.querySelector('.dice').style.display = 'none';

// vamos a programar el evento cuando clickeamos el botton de roll dice

//funtion btn(){
//Do something
//}
//document.querySelector('.btn-roll').addEventListener('click', btn);

//la funcion se pone sin () porque  no la llamamos nosotros sino el eventListener, se llama callback
// anonimous funtion: No tiene nombre, no se puede reutilizar y se puede poner donde el btn == funtion (){} y ponemos el codigo dentro

// Ponemos a cero los marcadores de otra manera
//en este caso no hace falta poner #
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. Display de result
    // Block --> to display de image
    var diceDome = document.querySelector('.dice');
    diceDome.style.display = 'block';
    diceDome.src = 'dice-' + dice + '.png';

    //3. Update the round score IF the rolled number is NOT a 1
});