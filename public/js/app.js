'use strict'

angular.module('iLikeApp', ['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

    $stateProvider
		.state( 'home', {
			url: '/home',
			views: {
				'': {
					templateUrl: '/templates/home.html'		
				},
				'@home': {
					templateUrl: '/templates/forms/new-toy.html',
					controller: 'ToyNewController as createToy'
				}
			}
			
		})
		
		.state( 'toys', {
			url: '/toys',
			templateUrl: '/templates/toys.html',
			controller: 'ToyIndexController as toys'
		})
		
		.state( 'games', {
			url: '/games',
			templateUrl: '/templates/games.html',
			controller: 'GameIndexController as games'
		})

		.state( 'snacks', {
			url: '/snacks',
			templateUrl: '/templates/snacks.html',
			controller: 'SnackIndexController as snacks'
		})

		.state( 'recipes', {
			url: '/recipes',
			templateUrl: '/templates/recipes.html',
			controller: 'RecipeIndexController as recipes'
		})

		.state( 'jokes', {
			url: '/jokes',
			templateUrl: '/templates/jokes.html',
			controller: 'JokeIndexController as jokes'
		})

		.state( 'update-toy', {
			url: '/toys/:id',
			templateUrl: '/templates/forms/update-toy.html',
			controller: 'ToyUpdateController as updateToy'
		})

		.state( 'update-game', {
			url: '/games/:id',
			templateUrl: '/templates/forms/update-game.html',
			controller: 'GameUpdateController as updateGame'
		})

		.state( 'update-snack', {
			url: '/snacks/:id',
			templateUrl: '/templates/forms/update-snack.html',
			controller: 'SnackUpdateController as updateSnack'
		})

		.state( 'update-recipe', {
			url: '/recipes/:id',
			templateUrl: '/templates/forms/update-recipe.html',
			controller: 'RecipeUpdateController as updateRecipe'
		})

		.state( 'update-joke', {
			url: '/jokes/:id',
			templateUrl: '/templates/forms/update-joke.html',
			controller: 'JokeUpdateController as updateJoke'
		})

		.state( 'home.new-toy', {
			url: '/new-toy',
			templateUrl: '/templates/forms/new-toy.html',
			controller: 'ToyNewController as createToy'
		})

		.state( 'home.new-game', {
			url: '/new-game',
			templateUrl: '/templates/forms/new-game.html',
			controller: 'GameNewController as createGame'
		})

		.state( 'home.new-snack', {
			url: '/new-snack',
			templateUrl: '/templates/forms/new-snack.html',
			controller: 'SnackNewController as createSnack'
		})

		.state( 'home.new-recipe', {
			url: '/new-recipe',
			templateUrl: '/templates/forms/new-recipe.html',
			controller: 'RecipeNewController as createRecipe'
		})

		.state( 'home.new-joke', {
			url: '/new-joke',
			templateUrl: '/templates/forms/new-joke.html',
			controller: 'JokeNewController as createJoke'
		})

	$urlRouterProvider.otherwise( '/toys' );

  });
