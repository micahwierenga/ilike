angular.module( 'iLikeApp' )
	.controller( 'GameIndexController', GameIndexController )
	.controller( 'GameNewController', GameNewController )
	.controller( 'GameUpdateController', GameUpdateController )

GameIndexController.$inject = ['$http'];
function GameIndexController( $http ) {
	let vm = this;
	vm.deleteGame = deleteGame;
	vm.moveGameUp = moveGameUp;
	vm.moveGameDown = moveGameDown;

	function getAllGames() {
		$http.get( '/api/games' )
		.then( function( response ) {
			vm.allGames = response.data;
		});
	}

	function deleteGame( deletedGame ) {
		moveAllGamesUp( deletedGame );
		$http.delete( '/api/games/' + deletedGame.id )
		.then( function( response ) {
			let gameIndex = vm.allGames.indexOf( deletedGame );
			vm.allGames.splice( gameIndex, 1 );
			getAllGames();
		})
	}

	getAllGames();

	function moveAllGamesUp ( deletedGame ) {
		for( let i = 0; i < vm.allGames.length; i++ ) {
			if( vm.allGames[i].order > deletedGame.order ) {
				vm.allGames[i].order -= 1;
				$http.put( '/api/games/' + vm.allGames[i].id, vm.allGames[i] )
				.then( function( response ) {

				})
			}
		}
	}

	function moveGameUp( game ) {
		if( game.order != 1 ) {
			let id = game.id
			let ascendingGame = {
				order: game.order - 1
			}
			let orderAbove = game.order - 1;
			for( let i = 0; i < vm.allGames.length; i++ ) {
				if( vm.allGames[i].order == orderAbove && game.order != 1 ) {
					vm.gameAbove = vm.allGames[i];
				}
			}
			moveUpperGameDown();
			$http.put( '/api/games/' + id, ascendingGame )
			.then( function( response ) {
				getAllGames();
			})
		}
	}

	function moveUpperGameDown() {
		let id = vm.gameAbove.id;
		let descendingUpperGame = {
			order: vm.gameAbove.order + 1
		}
		$http.put( '/api/games/' + id, descendingUpperGame )
		.then( function( response ) {
		})
	}

	function moveGameDown( game ) {
		if( game.order != vm.allGames.length ) {
			let id = game.id;
			let descendingGame = {
				order: game.order + 1
			}
			let orderBelow = game.order + 1;
			for( let i = 0; i < vm.allGames.length; i++ ) {
				if( vm.allGames[i].order == orderBelow ) {
					vm.gameBelow = vm.allGames[i];
				}
			}
			moveLowerGameUp();
			$http.put( '/api/games/' + id, descendingGame )
			.then( function( response ) {
				getAllGames();
			})
		}
	}

	function moveLowerGameUp() {
		let id = vm.gameBelow.id;
		let ascendingLowerGame = {
			order: vm.gameBelow.order - 1
		}
		$http.put( '/api/games/' + id, ascendingLowerGame )
		.then( function( response ) {
		})
	}

}

GameNewController.$inject = ['$http', '$state'];
function GameNewController( $http, $state ) {
	let vm = this;
	vm.create = create;

	function getAllGames() {
		$http.get( '/api/games' )
		.then( function( response ) {
			vm.allGames = response.data;
		});
	}

	getAllGames();

	function create() {
		vm.newGame['order'] = vm.allGames.length + 1;
		$http.post( '/api/games', vm.newGame )
		.then( function( response ) {
			$state.go( 'games' );
		})
	}
}

GameUpdateController.$inject = ['$http', '$state', '$stateParams'];
function GameUpdateController( $http, $state, $stateParams ) {
	let vm = this;
	vm.updateGame = updateGame;

	function getGame() {
		$http.get( '/api/games/' + $stateParams.id )
		.then( function( response ) {
			vm.selectedGame = response.data;
		});
	}

	getGame();

	function updateGame() {
		$http.put( '/api/games/' + $stateParams.id, vm.selectedGame )
		.then( function( response ) {
			$state.go( 'games' );
		})
	}
}
