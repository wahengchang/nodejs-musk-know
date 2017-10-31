// Require spawn from the child process module
var spawn = require('child_process').spawn;
// Run node with the child.js file as an argument
var url1 = 'https://tw.yahoo.com'
var child = spawn('node', ['child.js', url1]);

// Send data to the child process via its stdin stream
child.stdin.write("Hello there!");
// Listen for any response from the child:
child.stdout.on('data', function (data) {
    console.log('Parent: We received a reply: ' + data);
    process.exit();
});
// Listen for any errors:
child.stderr.on('data', function (data) {
    console.log('Parent: There was an error: ' + data);
});