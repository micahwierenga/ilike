let db = require( '../models' );
let Joke = db.models.Joke;

function index( req, res ) {
	Joke.findAll( {order: '"order" ASC'} ).then( function( jokes ) {
		res.json( jokes );
	});
}

function show( req, res ) {
	Joke.findById( req.params.id )
	.then( function( joke ) {
		if( !joke ) return error( res, 'not found by show function' )
		res.json( joke );
	})
}

function create( req, res ) {
	Joke.create( req.body )
	.then( function( joke ) {
		if( !joke ) return error( res, 'not saved by create function')
		res.json( joke );
	})
	.catch( function( err ) {
		console.log( err, req.body );
	})
}

function update( req, res ) {
	Joke.findById( req.params.id )
	.then( function( joke ) {
		if( !joke ) return error( res, 'not found by update function' );
		return joke.updateAttributes( req.body );
	})
	.then( function( joke ) {
		res.json( joke );
	});
}

function destroy( req, res ) {
  Joke.findById( req.params.id )
  .then( function( joke ){
    if( !joke ) return error( res, 'not found by destroy function');
    return joke.destroy();
  })
  .then( function(){
    res.redirect( '/jokes' );
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;