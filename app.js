/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Variables para los scores
var scores, roundScores, activePlayer, gamePlaying; // esta ultima es para saber si el juego se esta jugando o no

init();

//Math.floor() sirve para quitar el decimal
// Math.random() sirve para sacar un numero aleatorio entre 0 y 1, al multiplicarlo por 6 ya sale entre 0 y 5, le sumamos uno y ya sale entre 1 y 6
//document.querySelector('#current-' + activePlayer).textContent = dice;

//Si Necesitamos modificar el HTML, lo hacemos con innerHTML
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// querySelector tambien nos sirve para leer datos del HTML
//var x = document.querySelector('#score-0').textContent;
//console.log(x);


document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        //2. Display de result
        // Block --> to display de image
        var diceDome = document.querySelector('.dice');
        diceDome.style.display = 'block';
        diceDome.src = 'dice-' + dice + '.png';

        //3. Update the round score IF the rolled number is NOT a 1
        if (dice !== 1) {
            //add score
            roundScore += dice; // roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next player (usamos la funcion creada)
            nextPlayer();
        }
    }

});


// implementamos el funcionamiento del otro boton - Hold button

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {
        // Añadimos la puntuacion actual a global score
        scores[activePlayer] += roundScore; // dependiendo el jugador guardamos su score actual

        // Actualizamos el UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Comprobamos si el jugador ha ganado el juego
        if (scores[activePlayer] >= 100) {
            // el jugador activePlayer actual es el ganador
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            // añadios al panel la clase panel que esta en css
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            // Cuando el jugador gana, cambiamos la variable de estar jugando
            gamePlaying = false;
        } else {
            //Cambiamos de jugador despues del hold
            nextPlayer();
        }
    }
});

// Para no repetir codigo creamos una funcion para cambiar de jugador

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // igual que escribirlo con if (activePlayer === 0) etc...
    // reiniciamos el score total al cambiar de jugador
    roundScore = 0;
    // y ponemos el valor en pantalla a 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Cuando cambiamos de jugador tambien cambiamos el CSS, bold para el nombre, punto rojo y tambien el background
    // Este framework tiene la propiedad active
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    // Usamos mejor la propiedad toggle que la pone sino esta y la quita si esta
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // si sacamos un 1 borramos el dado para que no lo vea el otro jugador al empezar
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);


// funcion inicial que re-inicia o inicia todo

function init() {
    scores = [0, 0];
    activePlayer = 0; // siempre comienza este
    roundScore = 0;
    gamePlaying = true;

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

    // ponemos los nombres de los jugadores
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // despues de ganar quitamos la clase winner, quitamos la clase active de los dos porque no sabemos quien gana y despues la activamos en el primero
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}