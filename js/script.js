const palos = ["a", "b", "c", "d"]; //aca se definen los palos o grupos que hay dentro del deck
const valores = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"]//acá se definen los valores que tienen cada palo
let mazo = []; //se crea una array "mazo" vacío

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