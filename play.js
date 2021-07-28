const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });
// interpret incoming data as text
  conn.setEncoding("utf8");
  conn.write("Hello!")
  conn.on('connect', ()=>{
    console.log("Connected!")
  });
  return conn;
};

console.log("Connecting ...");
connect();