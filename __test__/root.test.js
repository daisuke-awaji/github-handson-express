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

describe('Test the user path', () => {
    test('It should responce the GET method', (done) => {
        request(app).get('/user/1').then((response) => {
            expect(response.text).toBe('{"id":1,"name":"Bob","email":"hi@azat.co"}')
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the user path (not exist)', () => {
    test('It should responce the GET method', (done) => {
        request(app).get('/user/4').then((response) => {
            expect(response.statusCode).toBe(404);
            done();
        });
    });
});

describe('Test the users path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/users').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

