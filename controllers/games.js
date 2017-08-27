let db = require( '../models' );
let Game = db.models.Game;

function index( req, res ) {
	Game.findAll( {order: '"order" ASC'} ).then( function( games ) {
		res.json( games );
	});
}

function show( req, res ) {
	Game.findById( req.params.id )
	.then( function( game ) {
		if( !game ) return error( res, 'not found by show function' )
		res.json( game );
	})
}

function create( req, res ) {
	Game.create( req.body )
	.then( function( game ) {
		if( !game ) return error( res, 'not saved by create function')
		res.json( game );
	})
	.catch( function( err ) {
		console.log( err, req.body );
	})
}

function update( req, res ) {
	Game.findById( req.params.id )
	.then( function( game ) {
		if( !game ) return error( res, 'not found by update function' );
		return game.updateAttributes( req.body );
	})
	.then( function( game ) {
		res.json( game );
	});
}

function destroy( req, res ) {
  Game.findById( req.params.id )
  .then( function( game ){
    if( !game ) return error( res, 'not found by destroy function');
    return game.destroy();
  })
  .then( function(){
    res.redirect( '/games' );
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;