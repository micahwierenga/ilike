angular.module( 'mLikeApp' )
	.controller( 'EquipmentIndexController', EquipmentIndexController )
	.controller( 'EquipmentNewController', EquipmentNewController )
	.controller( 'EquipmentUpdateController', EquipmentUpdateController )

EquipmentIndexController.$inject = ['$http'];
function EquipmentIndexController( $http ) {
	let vm = this;
	vm.deleteEquipment = deleteEquipment;
	vm.moveEquipmentUp = moveEquipmentUp;
	vm.moveEquipmentDown = moveEquipmentDown;

	function getAllEquipments() {
		$http.get( '/api/equipments' )
		.then( function( response ) {
			vm.allEquipments = response.data;
		});
	}

	function deleteEquipment( deletedEquipment ) {
		moveAllEquipmentsUp( deletedEquipment );
		$http.delete( '/api/equipments/' + deletedEquipment.id )
		.then( function( response ) {
			let equipmentIndex = vm.allEquipments.indexOf( deletedEquipment );
			vm.allEquipments.splice( equipmentIndex, 1 );
			getAllEquipments();
		})
	}

	getAllEquipments();

	function moveAllEquipmentsUp ( deletedEquipment ) {
		for( let i = 0; i < vm.allEquipments.length; i++ ) {
			if( vm.allEquipments[i].order > deletedEquipment.order ) {
				vm.allEquipments[i].order -= 1;
				$http.put( '/api/equipments/' + vm.allEquipments[i].id, vm.allEquipments[i] )
				.then( function( response ) {

				})
			}
		}
	}

	function moveEquipmentUp( equipment ) {
		if( equipment.order != 1 ) {
			let id = equipment.id
			let ascendingEquipment = {
				order: equipment.order - 1
			}
			let orderAbove = equipment.order - 1;
			for( let i = 0; i < vm.allEquipments.length; i++ ) {
				if( vm.allEquipments[i].order == orderAbove && equipment.order != 1 ) {
					vm.equipmentAbove = vm.allEquipments[i];
				}
			}
			moveUpperEquipmentDown();
			$http.put( '/api/equipments/' + id, ascendingEquipment )
			.then( function( response ) {
				getAllEquipments();
			})
		}
	}

	function moveUpperEquipmentDown() {
		let id = vm.equipmentAbove.id;
		let descendingUpperEquipment = {
			order: vm.equipmentAbove.order + 1
		}
		$http.put( '/api/equipments/' + id, descendingUpperEquipment )
		.then( function( response ) {
		})
	}

	function moveEquipmentDown( equipment ) {
		if( equipment.order != vm.allEquipments.length ) {
			let id = equipment.id;
			let descendingEquipment = {
				order: equipment.order + 1
			}
			let orderBelow = equipment.order + 1;
			for( let i = 0; i < vm.allEquipments.length; i++ ) {
				if( vm.allEquipments[i].order == orderBelow ) {
					vm.equipmentBelow = vm.allEquipments[i];
				}
			}
			moveLowerEquipmentUp();
			$http.put( '/api/equipments/' + id, descendingEquipment )
			.then( function( response ) {
				getAllEquipments();
			})
		}
	}

	function moveLowerEquipmentUp() {
		let id = vm.equipmentBelow.id;
		let ascendingLowerEquipment = {
			order: vm.equipmentBelow.order - 1
		}
		$http.put( '/api/equipments/' + id, ascendingLowerEquipment )
		.then( function( response ) {
		})
	}

}

EquipmentNewController.$inject = ['$http', '$state'];
function EquipmentNewController( $http, $state ) {
	let vm = this;
	vm.create = create;

	function getAllEquipments() {
		$http.get( '/api/equipments' )
		.then( function( response ) {
			vm.allEquipments = response.data;
		});
	}

	getAllEquipments();

	function create() {
		vm.newEquipment['order'] = vm.allEquipments.length + 1;
		$http.post( '/api/equipments', vm.newEquipment )
		.then( function( response ) {
			$state.go( 'equipments' );
		})
	}
}

EquipmentUpdateController.$inject = ['$http', '$state', '$stateParams'];
function EquipmentUpdateController( $http, $state, $stateParams ) {
	let vm = this;
	vm.updateEquipment = updateEquipment;

	function getEquipment() {
		$http.get( '/api/equipments/' + $stateParams.id )
		.then( function( response ) {
			vm.selectedEquipment = response.data;
		});
	}

	getEquipment();

	function updateEquipment() {
		$http.put( '/api/equipments/' + $stateParams.id, vm.selectedEquipment )
		.then( function( response ) {
			$state.go( 'equipments' );
		})
	}
}
