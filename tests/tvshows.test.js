const request = require('supertest');

const app = require('../src/app');

describe('tests public routes tvshows endpoints', () => {
  /**
   * test get all tvshows
   */
  it('expect json containing list of all tvshows', (done) => {
    request(app)
      .get('/api/tvshows')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  /**
   * test get all tvshows endpoint
   */
  it('expect json containing list of all tvshows', (done) => {
    request(app)
      .get('/api/tvshows')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

/**
 *
 */
describe('tests protected routes tvshows endpoints', () => {
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
   * test create tvshow endpoint
   */
  it('create tvshow, require token', (done) => {
    let newTvshow = {
      title: 'the simpsons',
      year: 2000,
      description: 'bart and lisa'
    };
    request(app)
      .post('/api/tvshows')
      .set('x-access-token', token)
      .send(newTvshow)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
