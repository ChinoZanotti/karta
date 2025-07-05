let deck = []; //se crea una variable "deck" vacía
let palos = ["a", "b", "c", "d"]; //se definen los palos o grupos que hay dentro del deck
let drawBtn = document.getElementById("drawBtn");
let shuffleResetBtn = document.getElementById("shuffleResetBtn");

function reset() {
	deck = []; //se eliminan todos los elementos de la variable deck
	for (let palo of palos) {
		for (i = 1 ; i <= 14 ; i++) {
			let numero = i.toString().padStart(2,"0");
			deck.push("images/card-" + palo + "-" + numero + ".jpg");
		}
	}
}

function draw() {
	const card = document.getElementById("cardOnTable");
	if (deck.length > 0) {
		card.src = deck.pop(); // suponiendo que el deck guarda solo las rutas
	  	} else {
	    card.src = "images/card-empty.jpg";
	    card.classList.add("empty");
	}
}

function shuffle() {
	deck.sort(function(){return 0.5 - Math.random()});
	const card = document.getElementById("cardOnTable");
	card.src = "images/card-0.jpg";
}

drawBtn.addEventListener("click", draw);
shuffleResetBtn.addEventListener("click", function() {
	reset();
	shuffle();
})

reset();
shuffle();