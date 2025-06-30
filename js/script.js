var deck;

function reset () {
	deck = [
		"<img src=\"images/card-a-01.jpg\">",
		"<img src=\"images/card-a-02.jpg\">",
		"<img src=\"images/card-a-03.jpg\">",
		"<img src=\"images/card-a-04.jpg\">",
		"<img src=\"images/card-a-05.jpg\">",
		"<img src=\"images/card-a-05.jpg\">",
		"<img src=\"images/card-a-06.jpg\">",
		"<img src=\"images/card-a-07.jpg\">",
		"<img src=\"images/card-a-08.jpg\">",
		"<img src=\"images/card-a-09.jpg\">",
		"<img src=\"images/card-a-10.jpg\">",
		"<img src=\"images/card-a-11.jpg\">",
		"<img src=\"images/card-a-12.jpg\">",
		"<img src=\"images/card-a-13.jpg\">",
		"<img src=\"images/card-a-14.jpg\">",
		"<img src=\"images/card-b-01.jpg\">",
		"<img src=\"images/card-b-02.jpg\">",
		"<img src=\"images/card-b-03.jpg\">",
		"<img src=\"images/card-b-04.jpg\">",
		"<img src=\"images/card-b-05.jpg\">",
		"<img src=\"images/card-b-05.jpg\">",
		"<img src=\"images/card-b-06.jpg\">",
		"<img src=\"images/card-b-07.jpg\">",
		"<img src=\"images/card-b-08.jpg\">",
		"<img src=\"images/card-b-09.jpg\">",
		"<img src=\"images/card-b-10.jpg\">",
		"<img src=\"images/card-b-11.jpg\">",
		"<img src=\"images/card-b-12.jpg\">",
		"<img src=\"images/card-b-13.jpg\">",
		"<img src=\"images/card-b-14.jpg\">",
		"<img src=\"images/card-c-01.jpg\">",
		"<img src=\"images/card-c-02.jpg\">",
		"<img src=\"images/card-c-03.jpg\">",
		"<img src=\"images/card-c-04.jpg\">",
		"<img src=\"images/card-c-05.jpg\">",
		"<img src=\"images/card-c-05.jpg\">",
		"<img src=\"images/card-c-06.jpg\">",
		"<img src=\"images/card-c-07.jpg\">",
		"<img src=\"images/card-c-08.jpg\">",
		"<img src=\"images/card-c-09.jpg\">",
		"<img src=\"images/card-c-10.jpg\">",
		"<img src=\"images/card-c-11.jpg\">",
		"<img src=\"images/card-c-12.jpg\">",
		"<img src=\"images/card-c-13.jpg\">",
		"<img src=\"images/card-c-14.jpg\">",
		"<img src=\"images/card-d-01.jpg\">",
		"<img src=\"images/card-d-02.jpg\">",
		"<img src=\"images/card-d-03.jpg\">",
		"<img src=\"images/card-d-04.jpg\">",
		"<img src=\"images/card-d-05.jpg\">",
		"<img src=\"images/card-d-05.jpg\">",
		"<img src=\"images/card-d-06.jpg\">",
		"<img src=\"images/card-d-07.jpg\">",
		"<img src=\"images/card-d-08.jpg\">",
		"<img src=\"images/card-d-09.jpg\">",
		"<img src=\"images/card-d-10.jpg\">",
		"<img src=\"images/card-d-11.jpg\">",
		"<img src=\"images/card-d-12.jpg\">",
		"<img src=\"images/card-d-13.jpg\">",
		"<img src=\"images/card-d-14.jpg\">"
	];
};

function draw(){
	if (deck.length > 0) {
		document.getElementById("card-display").innerHTML = deck.pop();
	} else {
		document.getElementById("card-display").innerHTML = "<img class=\"empty\" src=\"images/card-empty.jpg\">";
	}
}

function shuffle() {
	reset();
	deck.sort(function(){return 0.5 - Math.random()});
	document.getElementById("card-display").innerHTML = "<img src=\"images/card-0.jpg\">";
};

reset();
shuffle();