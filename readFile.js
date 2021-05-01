var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
    fs.readFile('hello.txt', function(err, data)
    {
        if(err)
        throw err
        else
        res.write(data);
        res.end();
    })

    
});



