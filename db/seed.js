let db = require( '../models' ).models;

let toyList = [
	{
		name: 'Nerf Modulus Recon MKII Blaster',
		toy_url: 'https://www.amazon.com/Nerf-Modulus-Recon-MKII-Blaster/dp/B018KLHMWY/ref=sr_1_13?s=toys-and-games&ie=UTF8&qid=1503770629&sr=1-13&keywords=nerf+guns',
		image_url: 'https://images-na.ssl-images-amazon.com/images/I/71hmYVFfrIL._SL1500_.jpg',
		price: 17.95,
		notes: 'notes',
		order: 1
	},
	{
		name: 'Nerf N-Strike Elite AccuStrike RaptorStrike',
		toy_url: 'https://www.amazon.com/Nerf-N-Strike-Elite-AccuStrike-RaptorStrike/dp/B01N3AZDEY/ref=sr_1_14?s=toys-and-games&ie=UTF8&qid=1503770629&sr=1-14&keywords=nerf+guns',
		image_url: 'https://images-na.ssl-images-amazon.com/images/I/71GVJSaI4wL._SL1500_.jpg',
		price: 49.95,
		notes: 'notes',
		order: 2
	}
]

let snackList = [
	{
		name: 'Snack 1',
		image_url: 'snack url 1',
		order: 1
	},
	{
		name: 'Snack 2',
		image_url: 'snack url 2',
		order: 2
	}
]

let recipeList = [
	{
		name: 'Recipe 1',
		image_url: 'url 1',
		instructions: 'instructions 1',
		order: 1
	},
	{
		name: 'Recipe 2',
		image_url: 'url 2',
		instructions: 'instructions 2',
		order: 2
	}
]

let gameList = [
	{
		name: 'Game 1',
		game_url: 'url 1',
		image_url: 'game image 1',
		price: 17.95,
		notes: 'notes game 1',
		order: 1
	},
	{
		name: 'Game 2',
		game_url: 'url 2',
		image_url: 'game image 2',
		price: 24.95,
		notes: 'notes game 2',
		order: 2
	}
]

let jokeList = [
	{
		description: 'joke 1',
		order: 1
	},
	{
		description: 'joke 2',
		order: 2
	}
]

let toyCreate = function() {
	return db.Toy.bulkCreate( toyList );
}

let snackCreate = function() {
	return db.Snack.bulkCreate( snackList );
}

let recipeCreate = function() {
	return db.Recipe.bulkCreate( recipeList );
}

let gameCreate = function() {
	return db.Game.bulkCreate( gameList );
}

let jokeCreate = function() {
	return db.Joke.bulkCreate( jokeList );
}

toyCreate()
.then( snackCreate )
.then( recipeCreate )
.then( gameCreate )
.then( jokeCreate )
.then( function() {
	process.exit();
})