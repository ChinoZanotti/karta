//aca se definen los palos o grupos que hay dentro del deck
const palos = ["a", "b", "c", "d"];

//acá se definen los valores que tienen cada palo
const valores = Array.from({ length: 14 }, (_, i) => String(i + 1).padStart(2, "0")); 

//se crea una array "mazo" vacío
let mazo = []; 

const drawBtn = document.getElementById("drawBtn");
const shuffleResetBtn = document.getElementById("shuffleResetBtn");

//aca se crea el mazo combinando los palos y valores
const crearMazo = () => {
	return palos.flatMap(palo => 
		valores.map(valor => `images/card-${palo}-${valor}.jpg`))
};

const reset = () => {
	mazo = crearMazo();
}

const draw = () => {
	const card = document.getElementById("cardOnTable");
	if (mazo.length > 0) {
		card.src = mazo.pop();
	  	} else {
	    card.src = "images/card-empty.jpg";
	    card.classList.add("empty");
	}
};

const shuffle = () => {
	mazo.sort(() => 0.5 - Math.random());
	const card = document.getElementById("cardOnTable");
	card.src = "images/card-0.jpg";
};

drawBtn.addEventListener("click", draw); //para robar una carta del deck

shuffleResetBtn.addEventListener("click", () => {
	reset();
	shuffle();
});//para resetear y mezclar el deck

reset();
shuffle();