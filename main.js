var colors = [
	"rgb(255,0,0)",
	"rgb(255,255,0)",
	"rgb(0,255,0)",
	"rgb(0,255,255)",
	"rgb(0,0,255)",
	"rgb(255,0,255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
 var head = document.querySelector(".heading");
 head.innerHTML = "Color Guessing Game " + pickedColor;

for(var i=0;i<squares.length;i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListeners("click",clicksq);
}

function clicksq(){
	var clickedcolor = this.style.background;
	
}