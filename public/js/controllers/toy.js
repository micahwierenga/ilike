angular.module( 'mLikeApp' )
	.controller( 'ToyIndexController', ToyIndexController )
	.controller( 'ToyNewController', ToyNewController )
	.controller( 'ToyUpdateController', ToyUpdateController )

ToyIndexController.$inject = ['$http'];
function ToyIndexController( $http ) {
	let vm = this;
	vm.deleteToy = deleteToy;
	vm.getOneToy = getOneToy;
	vm.moveToyUp = moveToyUp;
	vm.moveToyDown = moveToyDown;

	function getAllToys() {
		$http.get( '/api/toys' )
		.then( function( response ) {
			vm.allToys = response.data;
		});
	}

	function deleteToy( deletedToy ) {
		moveAllToysUp( deletedToy );
		$http.delete( '/api/toys/' + deletedToy.id )
		.then( function( response ) {
			let toyIndex = vm.allToys.indexOf( deletedToy );
			vm.allToys.splice( toyIndex, 1 );
			getAllToys();
		})
	}

	getAllToys();

	function getOneToy() {
		$http.get( '/api/toys/' + $stateParams.id )
		.then( function( response ) {
			vm.selectedToy = response.data;
		})
	}

	function moveAllToysUp ( deletedToy ) {
		for( let i = 0; i < vm.allToys.length; i++ ) {
			if( vm.allToys[i].order > deletedToy.order ) {
				vm.allToys[i].order -= 1;
				$http.put( '/api/toys/' + vm.allToys[i].id, vm.allToys[i] )
				.then( function( response ) {

				})
			}
		}
	}

	function moveToyUp( toy ) {
		if( toy.order != 1 ) {
			let id = toy.id
			let ascendingToy = {
				order: toy.order - 1
			}
			let orderAbove = toy.order - 1;
			for( let i = 0; i < vm.allToys.length; i++ ) {
				if( vm.allToys[i].order == orderAbove && toy.order != 1 ) {
					vm.toyAbove = vm.allToys[i];
				}
			}
			moveUpperToyDown();
			$http.put( '/api/toys/' + id, ascendingToy )
			.then( function( response ) {
				getAllToys();
			})
		}
	}

	function moveUpperToyDown() {
		let id = vm.toyAbove.id;
		let descendingUpperToy = {
			order: vm.toyAbove.order + 1
		}
		$http.put( '/api/toys/' + id, descendingUpperToy )
		.then( function( response ) {
		})
	}

	function moveToyDown( toy ) {
		if( toy.order != vm.allToys.length ) {
			let id = toy.id;
			let descendingToy = {
				order: toy.order + 1
			}
			let orderBelow = toy.order + 1;
			for( let i = 0; i < vm.allToys.length; i++ ) {
				if( vm.allToys[i].order == orderBelow ) {
					vm.toyBelow = vm.allToys[i];
				}
			}
			moveLowerToyUp();
			$http.put( '/api/toys/' + id, descendingToy )
			.then( function( response ) {
				getAllToys();
			})
		}
	}

	function moveLowerToyUp() {
		let id = vm.toyBelow.id;
		let ascendingLowerToy = {
			order: vm.toyBelow.order - 1
		}
		$http.put( '/api/toys/' + id, ascendingLowerToy )
		.then( function( response ) {
		})
	}

}

ToyNewController.$inject = ['$http', '$state'];
function ToyNewController( $http, $state ) {
	let vm = this;
	vm.create = create;

	function getAllToys() {
		$http.get( '/api/toys' )
		.then( function( response ) {
			vm.allToys = response.data;
		});
	}

	getAllToys();

	function create() {
		vm.newToy['order'] = vm.allToys.length + 1;
		$http.post( '/api/toys', vm.newToy )
		.then( function( response ) {
			$state.go( 'toys' );
		})
	}
}

ToyUpdateController.$inject = ['$http', '$state', '$stateParams'];
function ToyUpdateController( $http, $state, $stateParams ) {
	let vm = this;
	vm.updateToy = updateToy;

	function getToy() {
		$http.get( '/api/toys/' + $stateParams.id )
		.then( function( response ) {
			vm.selectedToy = response.data;
		});
	}

	getToy();

	function updateToy() {
		$http.put( '/api/toys/' + $stateParams.id, vm.selectedToy )
		.then( function( response ) {
			$state.go( 'toys' );
		})
	}
}
