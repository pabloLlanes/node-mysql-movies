const request = require('supertest');

const app = require('../src/app');

describe('tests public endpoints', () => {
  /**
   * test get all characters
   */
  it('expect json containing list of all movies', (done) => {
    request(app)
      .get('/api/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  /**
   * test get all movies endpoint
   */
  it('expect json containing list of all characters', (done) => {
    request(app)
      .get('/api/characters')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

/**
 *
 */
describe('tests protected endpoints', () => {
  let token = null;
  const loginUser = {
    email: 'admin@admin.com',
    password: '123456'
  };
  /**
   * login with user admin, received token
   */
  before((done) => {
    request(app)
      .post('/api/users/auth/login')
      .send(loginUser)
      .end(function (err, res) {
        token = res.body.accessToken;

        done();
      });
  });
  /**
   * test get all users endpoint
   */

  /**
   * test create user endpoint
   */
  it('create user, require token', (done) => {
    let newMovie = {
      title: 'jurassic park',
      rank: 56,
      description: 'big dinosaurs'
    };
    request(app)
      .post('/api/movies')
      .set('x-access-token', token)
      .send(newMovie)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
