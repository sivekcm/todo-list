var AWS = require('aws-sdk')
var mysql = require('mysql');
exports.handler =  (event,context,callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
    var con = mysql.createConnection({
      host: "todolist-db.cnk2lsktvjkn.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "password",
      database: 'todo'
    });
    
    var json = JSON.parse(event.body)
    console.log(event.body)
    var res
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query(`UPDATE item SET Message='${json.Message}',IsHighPriority=${json.IsHighPriority.data[0]},IsCompleted=${json.IsCompleted.data[0]} WHERE ItemID=${json.ItemID};`, function (err, result) {
        if (err) callback(JSON.stringify(err));
        res = result
        callback(null,{
          "isBase64Encoded": false, // Set to `true` for binary support.
          "statusCode": 200,
          "headers": {
              "Access-Control-Allow-Origin": "*",
          },
          "body": JSON.stringify(result)
        });
      });
    });
    
};