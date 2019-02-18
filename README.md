# snake-ai

A reinforcement-learning and genetic algorithm based AI to play the snake game. Reward is based on number of food eaten and the time alive. 

The model needs to have an understanding of where it is in relation to the walls, the food, how fast it is travelling and an idea of how long it is.

Given that the play area will be of constant size, determining distance to the walls is simple via x,y coordinates of the snake head. The same is true of the food, and of the snake's speed.

However, the snake's body is harder, since it is of variable length.

For the first generation, we'll see if ignoring this will give good enough results.


### TO-DO ###
* Create reward variable
* Add genetic algorithm to store weights ranked by reward
* Method to store results so that the user can eventually choose to train the model further, or compete against its current state
