html {
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: inherit;
}

html,
body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}

body {
	background: #ffffff;
	font-family: 'Permanent Marker', cursive;
	font-size: 16px;
}

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

h1 {
	font-family: 'Gloria Hallelujah', cursive;
}


/*
 * Styles for the deck of cards
 */


.deck {
	width: 85%;
	background: #716F71;
	padding: 1rem;
	border-radius: 4px;
	box-shadow: 8px 9px 26px 0 rgba(46, 61, 73, 0.5);
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	margin: 0 0 3em;
}

.deck .card {
	height: 3.7rem;
	width: 3.7rem;
	margin: 0.2rem 0.2rem;
	background: #141214;;
	font-size: 0;
	color: #ffffff;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
}

.deck .card.open {
	transform: rotateY(0);
	background: #02b3e4;
	cursor: default;
	animation-name: flipInY;
	-webkit-backface-visibility: visible !important;
	backface-visibility: visible !important;
	animation-duration: .75s;
}

.deck .card.show {
	font-size: 33px;
}

.deck .card.match {
	cursor: default;
	background: #E5F720;
	font-size: 33px;
	animation-name: rubberBand;
	-webkit-backface-visibility: visible !important;
	backface-visibility: visible !important;
	animation-duration: .75s;
}

.deck .card.unmatched {
	animation-name: pulse;
	-webkit-backface-visibility: visible !important;
	backface-visibility: visible !important;
	animation-duration: .75s;
	background: #e2043b;
}

.deck .card.disabled {
	pointer-events: none;
	opacity: 0.9;
}


/*
 * Styles for the Score Panel
 */


.score-panel {
	text-align: left;
	margin-bottom: 10px;
}

.score-panel .stars {
	margin: 0;
	padding: 0;
	display: inline-block;
	margin: 0 5px 0 0;
}

.score-panel .stars li {
	list-style: none;
	display: inline-block;
}

.score-panel .restart {
	float: right;
	cursor: pointer;
}

.fa-star {
	color: #FFD700;
}

.timer {
	display: inline-block;
	margin: 0 1rem;
}


/*
 * Styles for congratulations modal
 */


.overlay {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.7);
	transition: opacity 500ms;
	visibility: hidden;
	opacity: 0;
}

.overlay:target {
	visibility: visible;
	opacity: 1;
}
  
.popup {
	margin: 70px auto;
	padding: 20px;
	background: #ffffff;
	border-radius: 5px;
	width: 85%;
	position: relative;
	transition: all 5s ease-in-out;
	font-family: 'Gloria Hallelujah', cursive;
}
  
.popup h2 {
	margin-top: 0;
	color: #333;
	font-family: Tahoma, Arial, sans-serif;
}

.popup .close {
	position: absolute;
	top: 20px;
	right: 30px;
	transition: all 200ms;
	font-size: 30px;
	font-weight: bold;
	text-decoration: none;
	color: #333;
}

.popup .close:hover {
	color: #E5F720;
}

.popup .content-1,
.content-2 {
	max-height: 30%;
	overflow: auto;
	text-align: center;
}

.show {
	visibility: visible !important;
	opacity: 100 !important;
}

#starRating li {
	display: inline-block;
}

#play-again {
	background-color: #141214;
	padding: 0.7rem 1rem;
	font-size: 1.1rem;
	display: block;
	margin: 0 auto;
	width: 50%;
	font-family: 'Gloria Hallelujah', cursive;
	color: #ffffff;
	border-radius: 5px;
}

/* animations */
@keyframes flipInY {
	from {
		transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
		animation-timing-function: ease-in;
		opacity: 0;
	}

	40% {
		transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
		animation-timing-function: ease-in;
	}

	60% {
		transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
		opacity: 1;
	}

	80% {
		transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
	}

	to {
		transform: perspective(400px);
	}
}

@keyframes rubberBand {
	from {
		transform: scale3d(1, 1, 1);
	}

	30% {
		transform: scale3d(1.25, 0.75, 1);
	}

	40% {
		transform: scale3d(0.75, 1.25, 1);
	}

	50% {
		transform: scale3d(1.15, 0.85, 1);
	}

	65% {
		transform: scale3d(.95, 1.05, 1);
	}

	75% {
		transform: scale3d(1.05, .95, 1);
	}

	to {
		transform: scale3d(1, 1, 1);
	}
}

@keyframes pulse {
	from {
		transform: scale3d(1, 1, 1);
	}

	50% {
		transform: scale3d(1.2, 1.2, 1.2);
	}

	to {
		transform: scale3d(1, 1, 1);
	}
}


/****** Media queries
***************************/


@media (max-width: 320px) {
	.deck {
		width: 85%;
	}

	.deck .card {
		height: 4.7rem;
		width: 4.7rem;
	}
}


/* For Tablets and larger screens
****************/

@media (min-width: 768px) {
	.container {
		font-size: 22px;
	}

	.deck {
		width: 660px;
		height: 680px;
	}

	.deck .card {
		height: 125px;
		width: 125px;
	}

	.popup {
		width: 60%;
	}
}
 
