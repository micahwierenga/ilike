angular.module( 'iLikeApp' )
	.controller( 'ToyIndexController', ToyIndexController )
	.controller( 'ToyNewController', ToyNewController )

ToyIndexController.$inject = ['$http'];
function ToyIndexController( $http ) {
	let vm = this;
	vm.deleteToy = deleteToy;
	vm.moveToyUp = moveToyUp;
	vm.moveToyDown = moveToyDown;

	function getAllToys() {
		$http.get( '/api/toys' )
		.then( function( response ) {
			vm.allToys = response.data;
		});
	}

	function deleteToy( toy ) {
		$http.delete( '/api/toys/' + toy.id )
		.then( function( response ) {
			let toyIndex = vm.allToys.indexOf( toy );
			vm.allToys.splice( toyIndex, 1 );
		})
	}

	getAllToys();

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

ToyNewController.$inject = ['$http'];
function ToyNewController( $http ) {
	
}
