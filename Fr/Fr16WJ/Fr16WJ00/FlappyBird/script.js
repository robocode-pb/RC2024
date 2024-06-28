'use strict'

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = 256;
canvas.height = 512;

let bird = new Image();
let back = new Image();
let road = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "img/bird.png";
back.src = "img/back.png";
road.src = "img/road.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

let fly_audio = new Audio();
let score_audio = new Audio();

fly_audio.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

let score_text = document.getElementById("score");
let best_score_text = document.getElementById("best_score");


let xPos = 10;
let yPos = 150;


let gravity = 0.2;
let velY = 0;

let gap = 110;

let pipe = [];

pipe[0] = {
	x: canvas.width,
	y: 0
}

let score = 0;
let best_score = 0;

let pause = false;

function draw() {
	if (!pause) {
		context.drawImage(back, 0, 0);
		context.drawImage(bird, xPos, yPos);

		if (yPos + bird.height >= canvas.height - road.height) {
			reload();
		}

		velY += gravity;
		yPos += velY;

		for (let i = 0; i < pipe.length; i++) {
			if (pipe[i].x < -pipeUp.width) {
				pipe.shift();
			} else {
				context.drawImage(pipeUp, pipe[i].x, pipe[i].y);
				context.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

				pipe[i].x -= 2;

				if (pipe[i].x == 80) {
					pipe.push({ 
						x : canvas.width, 
						y : Math.floor(Math.random() * pipeUp.height/2) - pipeUp.height
					});
				}
			}

			if (xPos + bird.width >= pipe[i].x && 
				xPos <= pipe[i].x + pipeUp.width && 
				(yPos <= pipe[i].y + pipeUp.height || 
					yPos + bird.height >= pipe[i].y + pipeUp.height + gap)) {
				reload();
			}

			if (pipe[i].x == 0) {
				score++;
				score_audio.play();
			}
		}


		context.drawImage(road, 0, canvas.height - road.height);

		score_text.innerHTML = "SCORE: " + score;
		best_score_text.innerHTML = "BEST SCORE: " + best_score;

	} else {
		context.drawImage(back, 0, 0);
		context.drawImage(bird, xPos, yPos);
		for (let i = 0; i < pipe.length; i++) {
			context.drawImage(pipeUp, pipe[i].x, pipe[i].y);
			context.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
		}
		context.drawImage(road, 0, canvas.height - road.height);
		context.fillStyle = 'rgba(0, 0, 0, 0.3)';
		context.fillRect(0, 0, canvas.width, canvas.height);
	}

}

function reload() {
	if (score > best_score) {
		best_score = score;
	}
	xPos = 10;
	yPos = 150;
	velY = 0;
	pipe = [];
	score = 0;
	pipe[0] = {
		x: canvas.width,
		y: 0
	}
}

document.addEventListener("keydown", function(event){
	if(event.code == 'ArrowUp'){
		moveUp();
	}
});

canvas.addEventListener('mousedown', moveUp);

function moveUp() {
	velY = -4;
	fly_audio.play();
}

function game_pause() {
	pause = !pause;
}

setInterval(draw, 20);



$(document).ready(function(){
	// jQuery код
	$('.description').click(function(){alert('Знайшли пасхалку');});

	// кнопки темного і світлого режиму
	$('.btnD').click(function(){
		$('body').css('background', 'black');
	});
	$('.btnL').click(function(){});

	$('.cm').click(function(){ $(this).hide(); });

});