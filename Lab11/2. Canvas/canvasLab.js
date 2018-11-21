var $ = function (id) { return document.getElementById(id); }

function drawRectFunct(){
	var canvas = $("myCanvas");
	var context = canvas.getContext("2d");
	context.strokeStyle = "red";
	context.fillStyle="blue";
	context.fillRect(10,10,100,100);
	//context.strokeRect(10,10,100,100);
}
function drawLineFunct(){
	var canvas = $("myCanvas");
	var context = canvas.getContext("2d");
	context.strokeStyle = "red";
	context.lineWidth = 15;
	context.beginPath();  //start
	context.moveTo(40, 40); //set origin
	context.lineTo(340, 40); //set destination
	context.closePath();//close path
	context.stroke(); //outline path
}

function eraseCanvas(){
	var canvas = $("myCanvas");
	var context = canvas.getContext("2d");
	context.clearRect(0,0,500,500);
	//context.clearRect(0,0,canvas.width(), canvas.height());
}

function prepareButton(){
	$("b1").onclick=function(){
		return drawRectFunct();
	}
	$("b2").onclick=function(){
		return drawLineFunct();
	}
	$("b3").onclick=function(){
		return eraseCanvas();
	}
}

// JavaScript Document
window.onload=prepareButton;