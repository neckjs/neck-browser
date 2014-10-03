module.exports = function( opts ){
	var engineIO = require( 'engine.io' );
	var http = require('http').createServer( function( req, res ) {
			res.writeHead( 200, { 'Content-Type': 'text/html' } );
			res.write( '<!DOCTYPE "html">' );
			res.write( '<html><head><title> Neck-Server</title>' );

			res.write( '<script type="text/javascript">' );
			res.write( '	window.onload = function(){ ' );
			res.write( '	}' );
			res.write( '</script>' );

			res.write( '</head><body> <h3> Neck-Server </h3>' );
			res.write( '<iframe width="300px" height="300px"></iframe>' );
			res.write( '</body></html>' );
			res.end();
		}).listen( opts.port );

	return engineIO.attach( http );
}