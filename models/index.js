let Sequelize = require( 'sequelize' );

let sequelize = new Sequelize( process.env.DATABASE_URL || 'postgres://micahwierenga@localhost:5432/i_like' );

let Toy = sequelize.import( './toy' );
let Game = sequelize.import( './game' );
let Snack = sequelize.import( './snack' );
let Recipe = sequelize.import( './recipe' );
let Lunch = sequelize.import( './lunch' );
let Joke = sequelize.import( './joke' );

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
module.exports.models = {
	Toy: Toy,
	Game: Game,
	Snack: Snack,
	Recipe: Recipe,
	Lunch: Lunch,
	Joke: Joke
}