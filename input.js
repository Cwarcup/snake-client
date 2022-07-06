const { C, UP, DOWN, LEFT, RIGHT } = require("./constants");

// Stores the active TCP connection object.
let connection;

// interface to handle user input from stdin
const handleUserInput = function(key) {
  if (key === C) {
    process.exit();
  }
  if (key === UP) {
    connection.write('Move: up');

  }
  if (key === LEFT) {
    connection.write('Move: left');
  }
  if (key === DOWN) {
    connection.write('Move: down');
  }
  if (key === RIGHT) {
    connection.write('Move: right');
  }

  if (key === '1') {
    connection.write('Say: Feed me plz');
  }

  if (key === '2') {
    connection.write('Say: LOL');
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