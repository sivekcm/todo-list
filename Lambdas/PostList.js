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
    
    console.log(JSON.stringify(event, null, 2));
    var json = JSON.parse(event.body)
    console.log(json.Date)
    var res
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      con.query(`INSERT INTO list (Title,\`Date\`) VALUES ('${json.Title}','${json.Date}');`, function (err, result) {
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