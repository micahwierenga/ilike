angular.module( 'mLikeApp' )
	.controller( 'RecipeIndexController', RecipeIndexController )
	.controller( 'RecipeNewController', RecipeNewController )
	.controller( 'RecipeUpdateController', RecipeUpdateController )

RecipeIndexController.$inject = ['$http'];
function RecipeIndexController( $http ) {
	let vm = this;
	vm.deleteRecipe = deleteRecipe;
	vm.moveRecipeUp = moveRecipeUp;
	vm.moveRecipeDown = moveRecipeDown;

	function getAllRecipes() {
		$http.get( '/api/recipes' )
		.then( function( response ) {
			vm.allRecipes = response.data;
		});
	}

	function deleteRecipe( deletedRecipe ) {
		moveAllRecipesUp( deletedRecipe );
		$http.delete( '/api/recipes/' + deletedRecipe.id )
		.then( function( response ) {
			let recipeIndex = vm.allRecipes.indexOf( deletedRecipe );
			vm.allRecipes.splice( recipeIndex, 1 );
			getAllRecipes();
		})
	}

	getAllRecipes();

	function moveAllRecipesUp ( deletedRecipe ) {
		for( let i = 0; i < vm.allRecipes.length; i++ ) {
			if( vm.allRecipes[i].order > deletedRecipe.order ) {
				vm.allRecipes[i].order -= 1;
				$http.put( '/api/recipes/' + vm.allRecipes[i].id, vm.allRecipes[i] )
				.then( function( response ) {

				})
			}
		}
	}

	function moveRecipeUp( recipe ) {
		if( recipe.order != 1 ) {
			let id = recipe.id
			let ascendingRecipe = {
				order: recipe.order - 1
			}
			let orderAbove = recipe.order - 1;
			for( let i = 0; i < vm.allRecipes.length; i++ ) {
				if( vm.allRecipes[i].order == orderAbove && recipe.order != 1 ) {
					vm.recipeAbove = vm.allRecipes[i];
				}
			}
			moveUpperRecipeDown();
			$http.put( '/api/recipes/' + id, ascendingRecipe )
			.then( function( response ) {
				getAllRecipes();
			})
		}
	}

	function moveUpperRecipeDown() {
		let id = vm.recipeAbove.id;
		let descendingUpperRecipe = {
			order: vm.recipeAbove.order + 1
		}
		$http.put( '/api/recipes/' + id, descendingUpperRecipe )
		.then( function( response ) {
		})
	}

	function moveRecipeDown( recipe ) {
		if( recipe.order != vm.allRecipes.length ) {
			let id = recipe.id;
			let descendingRecipe = {
				order: recipe.order + 1
			}
			let orderBelow = recipe.order + 1;
			for( let i = 0; i < vm.allRecipes.length; i++ ) {
				if( vm.allRecipes[i].order == orderBelow ) {
					vm.recipeBelow = vm.allRecipes[i];
				}
			}
			moveLowerRecipeUp();
			$http.put( '/api/recipes/' + id, descendingRecipe )
			.then( function( response ) {
				getAllRecipes();
			})
		}
	}

	function moveLowerRecipeUp() {
		let id = vm.recipeBelow.id;
		let ascendingLowerRecipe = {
			order: vm.recipeBelow.order - 1
		}
		$http.put( '/api/recipes/' + id, ascendingLowerRecipe )
		.then( function( response ) {
		})
	}

}

RecipeNewController.$inject = ['$http', '$state'];
function RecipeNewController( $http, $state ) {
	let vm = this;
	vm.create = create;

	function getAllRecipes() {
		$http.get( '/api/recipes' )
		.then( function( response ) {
			vm.allRecipes = response.data;
		});
	}

	getAllRecipes();

	function create() {
		vm.newRecipe['order'] = vm.allRecipes.length + 1;
		$http.post( '/api/recipes', vm.newRecipe )
		.then( function( response ) {
			$state.go( 'recipes' );
		})
	}
}

RecipeUpdateController.$inject = ['$http', '$state', '$stateParams'];
function RecipeUpdateController( $http, $state, $stateParams ) {
	let vm = this;
	vm.updateRecipe = updateRecipe;

	function getRecipe() {
		$http.get( '/api/recipes/' + $stateParams.id )
		.then( function( response ) {
			vm.selectedRecipe = response.data;
		});
	}

	getRecipe();

	function updateRecipe() {
		$http.put( '/api/recipes/' + $stateParams.id, vm.selectedRecipe )
		.then( function( response ) {
			$state.go( 'recipes' );
		})
	}
}
