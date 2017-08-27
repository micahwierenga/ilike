let db = require( '../models' );

db.sequelize.sync( {force: true} ).then( function() {
	process.exit();
});