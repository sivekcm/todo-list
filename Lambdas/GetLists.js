var mysql = require('mysql');
const AWS = require('aws-sdk');
exports.handler = function (event, context, callback) {
  
    context.callbackWaitsForEmptyEventLoop = false;
    var con = mysql.createConnection({
      host: "todolist-db.cnk2lsktvjkn.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password",
      database: "todo"
    });
    
    var res;
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query("SELECT * FROM list;", function (err, result) {
        if (err) callback(JSON.stringify(err));
        console.log(result);
        //context.succeed(JSON.stringify(result))
        res = result;
        callback(null,JSON.stringify(res))
      });
      
    });
    

};