// DEPENDENCIES // 

const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}	else {
	connection = mysql.createConnection({
		// port: 3306,  
		// host: 'localhost',
		// user: 'root',
		// password: 'root',
        // database:'burgers_db',
        // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
		Host:	fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com,	
		Username:	ybjjtb3lfn658phl,	
		Password:	txbmb192t7bv7h9k,	
		Port:	3306
        
	});	
}

// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});


// connection.connect();

// Export connection for our ORM to use.
module.exports = connection;