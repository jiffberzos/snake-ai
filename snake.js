
function Snake(){
	this.x = width/2;
	this.y = height/2;
	this.xspeed = 0;
	this.yspeed = 0;
	this.length = 0;
	this.tail = [];

	this.update = function(){
		if(this.length == this.tail.length){
			for(var i = 0; i < this.length-1; i++){
				console.log(i)
				this.tail[i] = this.tail[i+1]
			}	
		}
		console.log(this.length)
		this.tail[this.length-1] = createVector(this.x,this.y)
		this.x += this.xspeed*scl;
		this.y += this.yspeed*scl;
		//this.x = constrain(this.x, 0, width-scl)
		//this.y = constrain(this.y, 0, height-scl)
	}

	this.direction = function(x,y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.show = function(){
		fill(255);
		rect(this.x,this.y,scl,scl);
		for(var i = 0; i < this.tail.length; i++){
			console.log(i, this.tail)
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