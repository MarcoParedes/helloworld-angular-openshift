//Install express server
const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/hellowrold-angular-v7'));

app.get('*', function (req, res) {
    // Replace the '/dist/<to_your_project_name>/index.html'
    res.sendFile(path.join(__dirname + '/dist/hellowrold-angular-v7/index.html'));
});

// app.listen(process.env.PORT || 5000);
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip, function () {
    console.log("Listening on " + ip + ", port " + port)
});
