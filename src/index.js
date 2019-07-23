var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.send('Hello World!')
});

const users = [
    {
        id: 1,
        name: 'Bob',
        email: 'hi@azat.co'
    },
    {
        id: 2,
        name: 'Smith',
        email: 'smith@mail.com'
    },
    {
        id: 3,
        name: 'Tom',
        email: 'tomtom@gmail.com'
    }
];

var findUserByUserId = function (userId, callback) {
    for (let i in users) {
        if (users[i].id.toString() === userId) {
            return callback(null, users[i]);
        };
    };
    return callback(new Error('No user matching ' + userId));
};


app.get('/user/:userId', function (request, response) {
    findUserByUserId(request.params.userId, (error, user) => {
        if (error == null) {
            response.send(user)
        } else {
            errorMsg = {
                message: error.stack
            }
            response.status(404)
            response.send(errorMsg)
        }
    })
});

app.get('/users', function (request, response) {
    response.send(users)
});

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
});

module.exports = app
