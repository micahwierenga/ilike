let db = require( '../models' );
let Equipment = db.models.Equipment;

function index( req, res ) {
	Equipment.findAll( {
		where: {
			owned: 0
		},
		order: '"order" ASC'} ).then( function( equipments ) {
		res.json( equipments );
	});
}

function show( req, res ) {
	Equipment.findById( req.params.id )
	.then( function( equipment ) {
		if( !equipment ) return error( res, 'not found by show function' )
		res.json( equipment );
	})
}

function create( req, res ) {
	Equipment.create( req.body )
	.then( function( equipment ) {
		if( !equipment ) return error( res, 'not saved by create function')
		res.json( equipment );
	})
	.catch( function( err ) {
		console.log( err, req.body );
	})
}

function update( req, res ) {
	Equipment.findById( req.params.id )
	.then( function( equipment ) {
		if( !equipment ) return error( res, 'not found by update function' );
		return equipment.updateAttributes( req.body );
	})
	.then( function( equipment ) {
		res.json( equipment );
	});
}

function destroy( req, res ) {
  Equipment.findById( req.params.id )
  .then( function( equipment ){
    if( !equipment ) return error( res, 'not found by destroy function');
    return equipment.destroy();
  })
  .then( function(){
    res.redirect( '/equipments' );
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;