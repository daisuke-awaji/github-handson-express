const request = require('supertest');
const app = require('../src/index')

describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.text).toBe('Hello World!');
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the users path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/users').then((response) => {
            expect(response.text).toBe('[{\"name\":\"Bob\",\"email\":\"bob@email.com\"},{\"name\":\"Smith\",\"email\":\"smithemail.com\"}]');
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});