let express = require( 'express' );
let app = express();
let router = require( './config/routes.js' );

let bodyParser = require( 'body-parser' );
app.use( bodyParser.json() );

app.use( router );
app.use( express.static( 'public' ) );
app.use( function( req, res ) {
	res.sendFile( __dirname + '/public/index.html' );
});

app.listen( process.env.PORT || 3000, function() {
	console.log( 'mlike listening on localhost:3000' );
})