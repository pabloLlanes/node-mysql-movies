const request = require('supertest');

const app = require('../src/app');

describe('tests public routes movies endpoints', () => {
  /**
   * test get all movies
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
  it('expect json containing list of all actors', (done) => {
    request(app)
      .get('/api/actors')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

/**
 *
 */
describe('tests protected routes movies endpoints', () => {
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
   * test create user endpoint
   */
  it('create user, require token', (done) => {
    let newMovie = {
      title: 'jurasicc park',
      year: 2000,
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
