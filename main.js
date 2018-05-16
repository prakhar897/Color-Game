var mode = 6;
var colors = randomcolor(mode);
var pickedColor = colors[pickcolor()];
var squares = document.querySelectorAll(".square");
var head = document.querySelector("#heading");
var ans = "";
var message = document.querySelector("#message");
var newgame = document.querySelector(".newgame");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");

head.innerHTML = "Color Guessing Game " + pickedColor;

for(var i=0;i<mode;i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",clicksq);
}

newgame.addEventListener("click",generategame);
easy.addEventListener("click",easyg);
hard.addEventListener("click",hardg);

function clicksq(){
	var clickedcolor = this.style.background;
	console.log(clickedcolor);
	if(clickedcolor == pickedColor)
	{
		for(i=0;i<mode;i++)
		{
			squares[i].style.background = pickedColor;
		}
		ans = "Correct!";
		head.style.background = pickedColor;
	}
	else
	{
		ans = "Try Again!";
		this.style.background = "black";
	}
	message.textContent = ans;

}

function randomcolor(num){
	var colors=[];
	for(var i=0;i<num;i++)
	{
		colors[i] = 'rgb(' + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ')';
	}
	return colors;
}

function pickcolor(){
	var e = Math.floor(Math.random()*mode);
	return e;
}

function generategame(){
	colors = randomcolor(mode);
	pickedColor = colors[pickcolor()];
	head.innerHTML = "Color Guessing Game " + pickedColor;
	for(var i=0;i<mode;i++){
		squares[i].style.background = colors[i];
	}
}

function easyg(){
	mode = 3;
	colors = randomcolor(mode);
	pickedColor = colors[pickcolor()];
	head.innerHTML = "Color Guessing Game " + pickedColor;
	for(var i=0;i<mode;i++){
		squares[i].style.background = colors[i];
	}
	for(i=2;i<5;i++)
		squares[i].style.display = "none";
}

function hardg(){
	mode = 6;
	colors = randomcolor(mode);
	pickedColor = colors[pickcolor()];
	head.innerHTML = "Color Guessing Game " + pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
	}
}