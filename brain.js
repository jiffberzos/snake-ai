function NeuralNet(){

	this.defineModel = function(){
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({units: 7, inputShape: [7]}));
    this.model.add(tf.layers.dense({units: 4, inputShape: [7]}));
    this.model.add(tf.layers.dense({units: 4, inputShape: [4]}));
    this.model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

  }

	this.getAction = function(){
		rewards = [snake.x, snake.y, snake.xspeed, snake.yspeed, food.x, food.y, snake.length]
		this.tensor = tf.tensor2d(rewards, [1,7]);
		console.log(this.tensor)
		prediction = this.model.predict(this.tensor);
    	values = prediction.dataSync();
    	arr = Array.from(values);
    	console.log(rewards)
    	action = [0,0,0,0];
    	action[arr.indexOf(Math.max(...arr))] = 1
		return action;
	}


}