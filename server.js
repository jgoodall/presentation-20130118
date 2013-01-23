var static = require('node-static');

var dir = './'
  , port = 8080;

var file = new(static.Server)(dir);

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response)
  })
}).listen(port)

console.log('Listening on port ' + port)