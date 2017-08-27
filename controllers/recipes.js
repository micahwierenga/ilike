let db = require( '../models' );
let Recipe = db.models.Recipe;

function index( req, res ) {
	Recipe.findAll( {order: '"order" ASC'} ).then( function( recipes ) {
		res.json( recipes );
	});
}

function show( req, res ) {
	Recipe.findById( req.params.id )
	.then( function( recipe ) {
		if( !recipe ) return error( res, 'not found by show function' )
		res.json( recipe );
	})
}

function create( req, res ) {
	Recipe.create( req.body )
	.then( function( recipe ) {
		if( !recipe ) return error( res, 'not saved by create function')
		res.json( recipe );
	})
	.catch( function( err ) {
		console.log( err, req.body );
	})
}

function update( req, res ) {
	Recipe.findById( req.params.id )
	.then( function( recipe ) {
		if( !recipe ) return error( res, 'not found by update function' );
		return recipe.updateAttributes( req.body );
	})
	.then( function( recipe ) {
		res.json( recipe );
	});
}

function destroy( req, res ) {
  Recipe.findById( req.params.id )
  .then( function( recipe ){
    if( !recipe ) return error( res, 'not found by destroy function');
    return recipe.destroy();
  })
  .then( function(){
    res.redirect( '/recipes' );
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;