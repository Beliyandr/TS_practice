var msg = "Hello";
msg = "Hello";
var port3000 = 3000;
var port3001 = 3001;
function startServer(protocol, port) {
  if (port === port3000 || port === port3001) {
    console.log("Srver started on ".concat(protocol, "://server:").concat(port));
  }
  else {
    console.error("Invalid port");
  }
  return "Srver started";
}
console.log(startServer("https", 301))
