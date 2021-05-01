var fs = require('fs');
var http = require('http');
const {writeFile} = require('node:fs');


var server = http.createServer(function(req, res){
    fs.appendFile('hello.txt','new data added to the file', function(err, data)
    {
        if(err)
        throw err
        else
        console.log("data saved successful in the file");
    })
});

server.listen(8087);