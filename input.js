// Stores the active TCP connection object.
let connection;

// interface to handle user input from stdin
const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');

  }
  if (key === 'a') {
    console.log("Move: left");
    connection.write('Move: left');
    
  }
  if (key === 's') {
    console.log("Move: down");
    connection.write('Move: down');
  }
  if (key === 'd') {
    console.log("Move: right");
    connection.write('Move: right');
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = { setupInput, handleUserInput };