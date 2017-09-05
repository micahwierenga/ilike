angular.module( 'mLikeApp' )
	.controller( 'LunchIndexController', LunchIndexController )
	.controller( 'LunchNewController', LunchNewController )
	.controller( 'LunchUpdateController', LunchUpdateController )

LunchIndexController.$inject = ['$http'];
function LunchIndexController( $http ) {
	let vm = this;
	vm.deleteLunch = deleteLunch;
	vm.getOneLunch = getOneLunch;
	vm.moveLunchUp = moveLunchUp;
	vm.moveLunchDown = moveLunchDown;

	function getAllLunches() {
		$http.get( '/api/lunches' )
		.then( function( response ) {
			vm.allLunches = response.data;
		});
	}

	function deleteLunch( deletedLunch ) {
		moveAllLunchesUp( deletedLunch );
		$http.delete( '/api/lunches/' + deletedLunch.id )
		.then( function( response ) {
			let lunchIndex = vm.allLunches.indexOf( deletedLunch );
			vm.allLunches.splice( lunchIndex, 1 );
			getAllLunches();
		})
	}

	getAllLunches();

	function getOneLunch() {
		$http.get( '/api/lunches/' + $stateParams.id )
		.then( function( response ) {
			vm.selectedLunch = response.data;
		})
	}

	function moveAllLunchesUp ( deletedLunch ) {
		for( let i = 0; i < vm.allLunches.length; i++ ) {
			if( vm.allLunches[i].order > deletedLunch.order ) {
				vm.allLunches[i].order -= 1;
				$http.put( '/api/lunches/' + vm.allLunches[i].id, vm.allLunches[i] )
				.then( function( response ) {

				})
			}
		}
	}

	function moveLunchUp( lunch ) {
		if( lunch.order != 1 ) {
			let id = lunch.id
			let ascendingLunch = {
				order: lunch.order - 1
			}
			let orderAbove = lunch.order - 1;
			for( let i = 0; i < vm.allLunches.length; i++ ) {
				if( vm.allLunches[i].order == orderAbove && lunch.order != 1 ) {
					vm.lunchAbove = vm.allLunches[i];
				}
			}
			moveUpperLunchDown();
			$http.put( '/api/lunches/' + id, ascendingLunch )
			.then( function( response ) {
				getAllLunches();
			})
		}
	}

	function moveUpperLunchDown() {
		let id = vm.lunchAbove.id;
		let descendingUpperLunch = {
			order: vm.lunchAbove.order + 1
		}
		$http.put( '/api/lunches/' + id, descendingUpperLunch )
		.then( function( response ) {
		})
	}

	function moveLunchDown( lunch ) {
		if( lunch.order != vm.allLunches.length ) {
			let id = lunch.id;
			let descendingLunch = {
				order: lunch.order + 1
			}
			let orderBelow = lunch.order + 1;
			for( let i = 0; i < vm.allLunches.length; i++ ) {
				if( vm.allLunches[i].order == orderBelow ) {
					vm.lunchBelow = vm.allLunches[i];
				}
			}
			moveLowerLunchUp();
			$http.put( '/api/lunches/' + id, descendingLunch )
			.then( function( response ) {
				getAllLunches();
			})
		}
	}

	function moveLowerLunchUp() {
		let id = vm.lunchBelow.id;
		let ascendingLowerLunch = {
			order: vm.lunchBelow.order - 1
		}
		$http.put( '/api/lunches/' + id, ascendingLowerLunch )
		.then( function( response ) {
		})
	}

}

LunchNewController.$inject = ['$http', '$state'];
function LunchNewController( $http, $state ) {
	let vm = this;
	vm.create = create;

	function getAllLunches() {
		$http.get( '/api/lunches' )
		.then( function( response ) {
			vm.allLunches = response.data;
		});
	}

	getAllLunches();

	function create() {
		vm.newLunch['order'] = vm.allLunches.length + 1;
		$http.post( '/api/lunches', vm.newLunch )
		.then( function( response ) {
			$state.go( 'lunches' );
		})
	}
}

LunchUpdateController.$inject = ['$http', '$state', '$stateParams'];
function LunchUpdateController( $http, $state, $stateParams ) {
	let vm = this;
	vm.updateLunch = updateLunch;

	function getLunch() {
		$http.get( '/api/lunches/' + $stateParams.id )
		.then( function( response ) {
			vm.selectedLunch = response.data;
		});
	}

	getLunch();

	function updateLunch() {
		$http.put( '/api/lunches/' + $stateParams.id, vm.selectedLunch )
		.then( function( response ) {
			$state.go( 'lunches' );
		})
	}
}
