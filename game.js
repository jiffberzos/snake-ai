var snake;
var food;
var scl = 20;
function setup(){
	createCanvas(600,400);
	snake = new Snake();
	frameRate(5);
	food = new Food();
	food.newFood();
}

function draw(){
	background(0);
	snake.update()
	food.update()
	snake.death()
	snake.show()
	food.show()

}

function keyPressed(){
	if(keyCode == UP_ARROW && snake.yspeed != 1){
		snake.direction(0,-1);
	}
	if(keyCode == DOWN_ARROW && snake.yspeed != -1){
		snake.direction(0,1);
	}
	if(keyCode == LEFT_ARROW && snake.xspeed != 1){
		snake.direction(-1,0);
	}
	if(keyCode == RIGHT_ARROW && snake.xspeed != -1){
		snake.direction(1,0);
	}
}



