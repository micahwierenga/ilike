let db = require( '../models' );
let Snack = db.models.Snack;

function index( req, res ) {
	Snack.findAll( {order: '"order" ASC'} ).then( function( snacks ) {
		res.json( snacks );
	});
}

function show( req, res ) {
	Snack.findById( req.params.id )
	.then( function( snack ) {
		if( !snack ) return error( res, 'not found by show function' )
		res.json( snack );
	})
}

function create( req, res ) {
	Snack.create( req.body )
	.then( function( snack ) {
		if( !snack ) return error( res, 'not saved by create function')
		res.json( snack );
	})
	.catch( function( err ) {
		console.log( err, req.body );
	})
}

function update( req, res ) {
	Snack.findById( req.params.id )
	.then( function( snack ) {
		if( !snack ) return error( res, 'not found by update function' );
		return snack.updateAttributes( req.body );
	})
	.then( function( snack ) {
		res.json( snack );
	});
}

function destroy( req, res ) {
  Snack.findById( req.params.id )
  .then( function( snack ){
    if( !snack ) return error( res, 'not found by destroy function');
    return snack.destroy();
  })
  .then( function(){
    res.redirect( '/snacks' );
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;