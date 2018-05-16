var colors = randomcolor();
var pickedColor = colors[pickcolor()];

var squares = document.querySelectorAll(".square");
 var head = document.querySelector("#heading");
 head.innerHTML = "Color Guessing Game " + pickedColor;
 var ans = "";
 var message = document.querySelector("#message");
 var newgame = document.querySelector(".newgame");


for(var i=0;i<squares.length;i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",clicksq);
}

newgame.addEventListener("click",generategame);

function clicksq(){
	var clickedcolor = this.style.background;
	console.log(clickedcolor);
	if(clickedcolor == pickedColor)
	{
		for(i=0;i<squares.length;i++)
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

function randomcolor(){
	var colors=[];
	for(var i=0;i<6;i++)
	{
		colors[i] = 'rgb(' + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ')';
	}
	return colors;
}

function pickcolor(){
	var e = Math.floor(Math.random()*6);
	return e;
}

function generategame(){
	colors = randomcolor();
	pickedColor = colors[pickcolor()];
	head.innerHTML = "Color Guessing Game " + pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
	}
}