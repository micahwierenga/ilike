let express = require( 'express' );
let router = express.Router();
let toysController = require( '../controllers/toys.js' );
let gamesController = require( '../controllers/games.js' );
let snacksController = require( '../controllers/snacks.js' );
let recipesController = require( '../controllers/recipes.js' );
let jokesController = require( '../controllers/jokes.js' );

// Toy routes

router.get( '/api/toys/:id', toysController.show );

router.get( '/api/toys', toysController.index );

router.post( '/api/toys', toysController.create );

router.put( '/api/toys/:id', toysController.update );

router.delete( '/api/toys/:id', toysController.destroy );

// Game routes

router.get( '/api/games/:id', gamesController.show );

router.get( '/api/games', gamesController.index );

router.post( '/api/games', gamesController.create );

router.put( '/api/games/:id', gamesController.update );

router.delete( '/api/games/:id', gamesController.destroy );

// Snack routes

router.get( '/api/snacks/:id', snacksController.show );

router.get( '/api/snacks', snacksController.index );

router.post( '/api/snacks', snacksController.create );

router.put( '/api/snacks/:id', snacksController.update );

router.delete( '/api/snacks/:id', snacksController.destroy );

// Recipe routes

router.get( '/api/recipes/:id', recipesController.show );

router.get( '/api/recipes', recipesController.index );

router.post( '/api/recipes', recipesController.create );

router.put( '/api/recipes/:id', recipesController.update );

router.delete( '/api/recipes/:id', recipesController.destroy );

// Joke routes

router.get( '/api/jokes/:id', jokesController.show );

router.get( '/api/jokes', jokesController.index );

router.post( '/api/jokes', jokesController.create );

router.put( '/api/jokes/:id', jokesController.update );

router.delete( '/api/jokes/:id', jokesController.destroy );

module.exports = router;