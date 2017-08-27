let db = require( '../models' );
let Toy = db.models.Toy;

function index( req, res ) {
	Toy.findAll( {order: '"order" ASC'} ).then( function( toys ) {
		res.json( toys );
	});
}

function show( req, res ) {
	Toy.findById( req.params.id )
	.then( function( toy ) {
		if( !toy ) return error( res, 'not found by show function' )
		res.json( toy );
	})
}

function create( req, res ) {
	Toy.create( req.body )
	.then( function( toy ) {
		if( !toy ) return error( res, 'not saved by create function')
		res.json( toy );
	})
	.catch( function( err ) {
		console.log( err, req.body );
	})
}

function update( req, res ) {
	Toy.findById( req.params.id )
	.then( function( toy ) {
		if( !toy ) return error( res, 'not found by update function' );
		return toy.updateAttributes( req.body );
	})
	.then( function( toy ) {
		res.json( toy );
	});
}

function destroy( req, res ) {
  Toy.findById( req.params.id )
  .then( function( toy ){
    if( !toy ) return error( res, 'not found by destroy function');
    return toy.destroy();
  })
  .then( function(){
    res.redirect( '/toys' );
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;