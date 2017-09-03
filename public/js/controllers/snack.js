angular.module( 'iLikeApp' )
	.controller( 'SnackIndexController', SnackIndexController )
	.controller( 'SnackNewController', SnackNewController )
	.controller( 'SnackUpdateController', SnackUpdateController )

SnackIndexController.$inject = ['$http'];
function SnackIndexController( $http ) {
	let vm = this;
	vm.deleteSnack = deleteSnack;
	vm.moveSnackUp = moveSnackUp;
	vm.moveSnackDown = moveSnackDown;

	function getAllSnacks() {
		$http.get( '/api/snacks' )
		.then( function( response ) {
			vm.allSnacks = response.data;
		});
	}

	function deleteSnack( deletedSnack ) {
		moveAllSnacksUp( deletedSnack );
		$http.delete( '/api/snacks/' + deletedSnack.id )
		.then( function( response ) {
			let snackIndex = vm.allSnacks.indexOf( deletedSnack );
			vm.allSnacks.splice( snackIndex, 1 );
			getAllSnacks();
		})
	}

	getAllSnacks();

	function moveAllSnacksUp ( deletedSnack ) {
		for( let i = 0; i < vm.allSnacks.length; i++ ) {
			if( vm.allSnacks[i].order > deletedSnack.order ) {
				vm.allSnacks[i].order -= 1;
				$http.put( '/api/snacks/' + vm.allSnacks[i].id, vm.allSnacks[i] )
				.then( function( response ) {

				})
			}
		}
	}

	function moveSnackUp( snack ) {
		if( snack.order != 1 ) {
			let id = snack.id
			let ascendingSnack = {
				order: snack.order - 1
			}
			let orderAbove = snack.order - 1;
			for( let i = 0; i < vm.allSnacks.length; i++ ) {
				if( vm.allSnacks[i].order == orderAbove && snack.order != 1 ) {
					vm.snackAbove = vm.allSnacks[i];
				}
			}
			moveUpperSnackDown();
			$http.put( '/api/snacks/' + id, ascendingSnack )
			.then( function( response ) {
				getAllSnacks();
			})
		}
	}

	function moveUpperSnackDown() {
		let id = vm.snackAbove.id;
		let descendingUpperSnack = {
			order: vm.snackAbove.order + 1
		}
		$http.put( '/api/snacks/' + id, descendingUpperSnack )
		.then( function( response ) {
		})
	}

	function moveSnackDown( snack ) {
		if( snack.order != vm.allSnacks.length ) {
			let id = snack.id;
			let descendingSnack = {
				order: snack.order + 1
			}
			let orderBelow = snack.order + 1;
			for( let i = 0; i < vm.allSnacks.length; i++ ) {
				if( vm.allSnacks[i].order == orderBelow ) {
					vm.snackBelow = vm.allSnacks[i];
				}
			}
			moveLowerSnackUp();
			$http.put( '/api/snacks/' + id, descendingSnack )
			.then( function( response ) {
				getAllSnacks();
			})
		}
	}

	function moveLowerSnackUp() {
		let id = vm.snackBelow.id;
		let ascendingLowerSnack = {
			order: vm.snackBelow.order - 1
		}
		$http.put( '/api/snacks/' + id, ascendingLowerSnack )
		.then( function( response ) {
		})
	}

}

SnackNewController.$inject = ['$http', '$state'];
function SnackNewController( $http, $state ) {
	let vm = this;
	vm.create = create;

	function getAllSnacks() {
		$http.get( '/api/snacks' )
		.then( function( response ) {
			vm.allSnacks = response.data;
		});
	}

	getAllSnacks();

	function create() {
		vm.newSnack['order'] = vm.allSnacks.length + 1;
		$http.post( '/api/snacks', vm.newSnack )
		.then( function( response ) {
			$state.go( 'snacks' );
		})
	}
}

SnackUpdateController.$inject = ['$http', '$state', '$stateParams'];
function SnackUpdateController( $http, $state, $stateParams ) {
	let vm = this;
	vm.updateSnack = updateSnack;

	function getSnack() {
		$http.get( '/api/snacks/' + $stateParams.id )
		.then( function( response ) {
			vm.selectedSnack = response.data;
		});
	}

	getSnack();

	function updateSnack() {
		$http.put( '/api/snacks/' + $stateParams.id, vm.selectedSnack )
		.then( function( response ) {
			$state.go( 'snacks' );
		})
	}
}
