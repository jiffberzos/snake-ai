function Food(){
	this.x = 0;
	this.y = 0;

	this.newFood = function(){
		this.x = scl*floor(random(width/scl));
		this.y = scl*floor(random(height/scl));
	}

	this.update = function(){
		if(snake.x == this.x && snake.y==this.y){
			this.newFood();
			snake.length ++;
		}
	}

	this.show = function(){
		fill(255,0,100)
		rect(this.x,this.y,scl,scl)
	}

}