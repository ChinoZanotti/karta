const palos = ["a", "b", "c", "d"]; //se definen los palos o grupos que hay dentro del deck
let deck = []; //se crea una variable "deck" vacía

const drawBtn = document.getElementById("drawBtn");
const shuffleResetBtn = document.getElementById("shuffleResetBtn");

const reset = () => {
	deck = []; //se eliminan todos los elementos de la variable deck
	for (const palo of palos) {
		for (let i = 1 ; i <= 14 ; i++) {
			const numero = i.toString().padStart(2,"0");
			deck.push(`images/card-${palo}-${numero}.jpg`);
		}
	}
};

const draw = () => {
	const card = document.getElementById("cardOnTable");
	if (deck.length > 0) {
		card.src = deck.pop(); // suponiendo que el deck guarda solo las rutas
	  	} else {
	    card.src = "images/card-empty.jpg";
	    card.classList.add("empty");
	}
};

const shuffle = () => {
	deck.sort(() => 0.5 - Math.random());
	const card = document.getElementById("cardOnTable");
	card.src = "images/card-0.jpg";
};

drawBtn.addEventListener("click", draw);//para robar una carta del deck

shuffleResetBtn.addEventListener("click", () => {
	reset();
	shuffle();
});//para resetear y mezclar el deck

reset();
shuffle();