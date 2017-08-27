angular.module("iLikeApp", ['ngRoute'])
	.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
    	//Main Routes
		.when('/', {
			templateUrl: '/templates/home.html'
		})

			//Index Routes
			
			.when('/toys', {
				templateUrl: '/templates/toys.html',
				controller: "ToyIndexController as toys"
			})

			.when('/games', {
				templateUrl: '/templates/games.html',
				controller: "GameIndexController as games"
			})

			.when('/snacks', {
				templateUrl: '/templates/snacks.html',
				controller: "SnackIndexController as snacks"
			})

			.when('/recipes', {
				templateUrl: '/templates/recipes.html',
				controller: "RecipeIndexController as recipes"
			})

			.when('/jokes', {
				templateUrl: '/templates/jokes.html',
				controller: "JokeIndexController as jokes"
			})

			// New Forms
			.when('/forms/new-toy', {
				templateUrl: '/templates/users/new-toy.html',
				controller: "ToyNewController as newToy"
			})

			.when('/forms/new-game', {
				templateUrl: '/templates/users/new-game.html',
				controller: "GameNewController as newGame"
			})

			.when('/forms/new-snack', {
				templateUrl: '/templates/users/new-snack.html',
				controller: "SnackNewController as newSnack"
			})

			.when('/forms/new-recipe', {
				templateUrl: '/templates/users/new-recipe.html',
				controller: "RecipeNewController as newRecipe"
			})

			.when('/forms/new-joke', {
				templateUrl: '/templates/users/new-joke.html',
				controller: "JokeNewController as newJoke"
			})

			// show
			.when('/users/:id', {
				templateUrl: '/templates/users/show.html',
				controller: "UserShowController as userController"
			})

			// edit
			.when('/users/:id/edit', {
				templateUrl: '/templates/users/edit.html',
				controller: "UserEditController as userEditController"
			})

			//Post Routes
			  
			// index
			.when('/posts', {
				templateUrl: '/templates/posts/index.html',
				controller: "PostIndexController as postsController"
			})

			// new
			.when('/posts/new', {
				templateUrl: '/templates/posts/new.html',
				controller: "PostNewController as postNewController"
			})

			// show
			.when('/posts/:id', {
				templateUrl: '/templates/posts/show.html',
				controller: "PostShowController as postController"
			})

			// edit
			.when('/posts/:id/edit', {
				templateUrl: '/templates/posts/edit.html',
				controller: "PostEditController as postEditController"
			})	

			//Comment Routes
			  
			// index
			.when('/comments', {
				templateUrl: '/templates/comments/index.html',
				controller: "CommentIndexController as commentsController"
			})

			// new
			.when('/comments/new', {
				templateUrl: '/templates/comments/new.html',
				controller: "CommentNewController as commentNewController"
			})

			// show
			.when('/comments/:id', {
				templateUrl: '/templates/comments/show.html',
				controller: "CommentShowController as commentController"
			})

			// edit
			.when('/comments/:id/edit', {
				templateUrl: '/templates/comments/edit.html',
				controller: "CommentEditController as commentEditController"
			});					
  });
