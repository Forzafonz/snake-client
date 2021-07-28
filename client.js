const net = require('net');
const {IP, PORT} = require('./constants')
console.log(IP, PORT)

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
// interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', ()=>{
    console.log("Connected!")
    conn.write("Name: BAM");
  });
  return conn;
};

module.exports = connect;