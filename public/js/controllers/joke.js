angular.module( 'iLikeApp' )
	.controller( 'JokeIndexController', JokeIndexController )
	.controller( 'JokeNewController', JokeNewController )

JokeIndexController.$inject = ['$http'];
function JokeIndexController( $http ) {
	let vm = this;
	vm.deleteJoke = deleteJoke;
	vm.moveJokeUp = moveJokeUp;
	vm.moveJokeDown = moveJokeDown;

	function getAllJokes() {
		$http.get( '/api/jokes' )
		.then( function( response ) {
			vm.allJokes = response.data;
		});
	}

	function deleteJoke( deletedJoke ) {
		moveAllJokesUp( deletedJoke );
		$http.delete( '/api/jokes/' + deletedJoke.id )
		.then( function( response ) {
			let jokeIndex = vm.allJokes.indexOf( deletedJoke );
			vm.allJokes.splice( jokeIndex, 1 );
			getAllJokes();
		})
	}

	getAllJokes();

	function moveAllJokesUp ( deletedJoke ) {
		for( let i = 0; i < vm.allJokes.length; i++ ) {
			if( vm.allJokes[i].order > deletedJoke.order ) {
				vm.allJokes[i].order -= 1;
				$http.put( '/api/jokes/' + vm.allJokes[i].id, vm.allJokes[i] )
				.then( function( response ) {

				})
			}
		}
	}

	function moveJokeUp( joke ) {
		if( joke.order != 1 ) {
			let id = joke.id
			let ascendingJoke = {
				order: joke.order - 1
			}
			let orderAbove = joke.order - 1;
			for( let i = 0; i < vm.allJokes.length; i++ ) {
				if( vm.allJokes[i].order == orderAbove && joke.order != 1 ) {
					vm.jokeAbove = vm.allJokes[i];
				}
			}
			moveUpperJokeDown();
			$http.put( '/api/jokes/' + id, ascendingJoke )
			.then( function( response ) {
				getAllJokes();
			})
		}
	}

	function moveUpperJokeDown() {
		let id = vm.jokeAbove.id;
		let descendingUpperJoke = {
			order: vm.jokeAbove.order + 1
		}
		$http.put( '/api/jokes/' + id, descendingUpperJoke )
		.then( function( response ) {
		})
	}

	function moveJokeDown( joke ) {
		if( joke.order != vm.allJokes.length ) {
			let id = joke.id;
			let descendingJoke = {
				order: joke.order + 1
			}
			let orderBelow = joke.order + 1;
			for( let i = 0; i < vm.allJokes.length; i++ ) {
				if( vm.allJokes[i].order == orderBelow ) {
					vm.jokeBelow = vm.allJokes[i];
				}
			}
			moveLowerJokeUp();
			$http.put( '/api/jokes/' + id, descendingJoke )
			.then( function( response ) {
				getAllJokes();
			})
		}
	}

	function moveLowerJokeUp() {
		let id = vm.jokeBelow.id;
		let ascendingLowerJoke = {
			order: vm.jokeBelow.order - 1
		}
		$http.put( '/api/jokes/' + id, ascendingLowerJoke )
		.then( function( response ) {
		})
	}

}

JokeNewController.$inject = ['$http', '$state'];
function JokeNewController( $http, $state ) {
	let vm = this;
	vm.create = create;

	function getAllJokes() {
		$http.get( '/api/jokes' )
		.then( function( response ) {
			vm.allJokes = response.data;
		});
	}

	getAllJokes();

	function create() {
		vm.newJoke['order'] = vm.allJokes.length + 1;
		$http.post( '/api/jokes', vm.newJoke )
		.then( function( response ) {
			$state.go( 'jokes' );
		})
	}
}
