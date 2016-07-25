var http = require('http');
var url = require('url');


const PORT=8080;
function handleRequest(request, response){
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (queryData.result) {
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    response.write('A ' + queryData.a + '\n');
    response.write('B ' + queryData.b + '\n');
    response.write('Action ' + queryData.action + '\n');
    if (queryData.action == "add"){
       queryData.result = queryData.a + queryData.b;
     }
    if (queryData.action == "mul"){
      queryData.result = queryData.a * queryData.b;
    }
      if (queryData.action == "div"){
        queryData.result = queryData.a / queryData.b;
      }
      if (queryData.action == "sub"){
        queryData.result = queryData.a - queryData.b;
      }
      if (queryData.action == "mod"){
        queryData.result = queryData.a % queryData.b;
      }
    response.end('Result ' + queryData.result + '\n');
  } else {
    response.end("Hello World\n");
  }
      response.end();

}
//Create a server
var server = http.createServer(handleRequest);
//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
