
function Snake(){
	this.x = width/2;
	this.y = height/2;
	this.xspeed = 0;
	this.yspeed = 0;
	this.length = 0;
	this.tail = [];

	this.updateSpeed = function(){
		action = neuralnet.getAction();
		if(action[0]===1&& snake.yspeed != 1){
			this.direction(0,-1);
		}
		if(action[1]===1&& snake.yspeed != -1){
			this.direction(0,1);	
		}
		if(action[2]===1&& snake.xspeed != 1){
			this.direction(-1,0);
		}
		if(action[3]===1&& snake.xspeed != -1){
			this.direction(1,0);
		}	
	}



	this.updatePosition = function(){
		if(this.length == this.tail.length){
			for(var i = 0; i < this.length-1; i++){
				this.tail[i] = this.tail[i+1]
			}	
		}
		this.tail[this.length-1] = createVector(this.x,this.y)
		this.x += this.xspeed*scl;
		this.y += this.yspeed*scl;
	}

	this.direction = function(x,y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.show = function(){
		fill(255);
		rect(this.x,this.y,scl,scl);
		for(var i = 0; i < this.tail.length; i++){
			rect(this.tail[i].x,this.tail[i].y,scl,scl);
		}

	}

	this.death = function(){
		if(this.x < 0 || this.y < 0 || this.x > width-scl || this.y > height-scl){
			this.length = 0;
			this.tail = [];
			this.x = 100;
			this.y= 100;
		}
		for(var i = 0; i < this.tail.length; i++){
			if(this.x == this.tail[i].x && this.y == this.tail[i].y){
				this.length = 0;
				this.tail = [];
				this.x = 100;
				this.y= 100;
			}
		}
	}
}