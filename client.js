const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });
// interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', ()=>{
    console.log("Connected with this message:");
    conn.write("Name: BAM");
  });
  // conn.on('connect', ()=>{
  //   let moves = ["Move: up", "Move: up", "Move: left", "Move: left", "Move: down" , "Move: down" , "Move: right", "Move: right"]
  //   conn.write("Move: up");
  //   for (let i = 0; i < 10000; i++){
  //     let move = moves[Number(i%8)];
  //     setTimeout(() => conn.write(move), 100 * i);
  //   }
  // });
  return conn;
};

console.log("Connecting ...");

module.exports = connect;