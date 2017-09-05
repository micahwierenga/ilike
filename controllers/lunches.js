let db = require( '../models' );
let Lunch = db.models.Lunch;

function index( req, res ) {
	Lunch.findAll( {order: '"order" ASC'} ).then( function( lunches ) {
		res.json( lunches );
	});
}

function show( req, res ) {
	Lunch.findById( req.params.id )
	.then( function( lunch ) {
		if( !lunch ) return error( res, 'not found by show function' )
		res.json( lunch );
	})
}

function create( req, res ) {
	Lunch.create( req.body )
	.then( function( lunch ) {
		if( !lunch ) return error( res, 'not saved by create function')
		res.json( lunch );
	})
	.catch( function( err ) {
		console.log( err, req.body );
	})
}

function update( req, res ) {
	Lunch.findById( req.params.id )
	.then( function( lunch ) {
		if( !lunch ) return error( res, 'not found by update function' );
		return lunch.updateAttributes( req.body );
	})
	.then( function( lunch ) {
		res.json( lunch );
	});
}

function destroy( req, res ) {
  Lunch.findById( req.params.id )
  .then( function( lunch ){
    if( !lunch ) return error( res, 'not found by destroy function');
    return lunch.destroy();
  })
  .then( function(){
    res.redirect( '/lunches' );
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;