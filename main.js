var squares = document.querySelectorAll(".square");
var head = document.querySelector("#heading");
var message = document.querySelector("#message");
var newgame = document.querySelector(".newgame");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");

var mode = 6;
var ans = "";
var colors;
var pickedColor;

generategame();

for(var i=0;i<mode;i++)
{
	squares[i].addEventListener("click",clicksq);
}

newgame.addEventListener("click",generategame);
easy.addEventListener("click",easyg);
hard.addEventListener("click",hardg);

function clicksq(){
	var clickedcolor = this.style.background;
	//console.log(clickedcolor);
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
	console.log(e);
	return e;
}

function generategame(){
	ans="";
	message.textContent = ans;
	head.style.background = "blue";
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
	for(i=3;i<6;i++)
		squares[i].style.display = "none";
}

function hardg(){
	mode = 6;
	colors = randomcolor(mode);
	pickedColor = colors[pickcolor()];
	head.innerHTML = "Color Guessing Game " + pickedColor;
	for(var i=0;i<mode;i++){
		squares[i].style.background = colors[i];
	}
	for(i=3;i<6;i++)
		squares[i].style.display = "inline";
}