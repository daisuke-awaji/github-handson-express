var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.send('Hello World!')
});

app.get('/user/:userId', function (request, response) {
    userId = request.params
    user = {
        id: userId,
        name: 'Smith'
    }
    response.send(user)
});

app.get('/users', function (request, response) {
    users = [
        {
            name: 'Bob',
            email: 'bob@email.com'
        },
        {
            name: 'Smith',
            email: 'smithemail.com'
        }
    ]
    response.send(users)
});

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
});

module.exports = app
