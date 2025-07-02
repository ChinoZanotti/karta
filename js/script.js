let deck;

function reset () {
	deck = [
		"images/card-a-01.jpg",
		"images/card-a-02.jpg",
		"images/card-a-03.jpg",
		"images/card-a-04.jpg",
		"images/card-a-05.jpg",
		"images/card-a-05.jpg",
		"images/card-a-06.jpg",
		"images/card-a-07.jpg",
		"images/card-a-08.jpg",
		"images/card-a-09.jpg",
		"images/card-a-10.jpg",
		"images/card-a-11.jpg",
		"images/card-a-12.jpg",
		"images/card-a-13.jpg",
		"images/card-a-14.jpg",
		"images/card-b-01.jpg",
		"images/card-b-02.jpg",
		"images/card-b-03.jpg",
		"images/card-b-04.jpg",
		"images/card-b-05.jpg",
		"images/card-b-05.jpg",
		"images/card-b-06.jpg",
		"images/card-b-07.jpg",
		"images/card-b-08.jpg",
		"images/card-b-09.jpg",
		"images/card-b-10.jpg",
		"images/card-b-11.jpg",
		"images/card-b-12.jpg",
		"images/card-b-13.jpg",
		"images/card-b-14.jpg",
		"images/card-c-01.jpg",
		"images/card-c-02.jpg",
		"images/card-c-03.jpg",
		"images/card-c-04.jpg",
		"images/card-c-05.jpg",
		"images/card-c-05.jpg",
		"images/card-c-06.jpg",
		"images/card-c-07.jpg",
		"images/card-c-08.jpg",
		"images/card-c-09.jpg",
		"images/card-c-10.jpg",
		"images/card-c-11.jpg",
		"images/card-c-12.jpg",
		"images/card-c-13.jpg",
		"images/card-c-14.jpg",
		"images/card-d-01.jpg",
		"images/card-d-02.jpg",
		"images/card-d-03.jpg",
		"images/card-d-04.jpg",
		"images/card-d-05.jpg",
		"images/card-d-05.jpg",
		"images/card-d-06.jpg",
		"images/card-d-07.jpg",
		"images/card-d-08.jpg",
		"images/card-d-09.jpg",
		"images/card-d-10.jpg",
		"images/card-d-11.jpg",
		"images/card-d-12.jpg",
		"images/card-d-13.jpg",
		"images/card-d-14.jpg"
	];
};

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
	reset();
	deck.sort(function(){return 0.5 - Math.random()});
	const card = document.getElementById("cardOnTable");
	card.src = "images/card-0.jpg";
};

reset();
shuffle();