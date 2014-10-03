var opts = { port: 3021 },
	neckServer = require( './neck-server' )( opts );

neckServer.on('connection', function ( socket ) {

	socket.on( 'message', function( data ){ 

	});
	socket.on( 'close', function(){

	});

});