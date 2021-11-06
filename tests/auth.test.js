const request = require('supertest');

const app = require('../src/app');

describe('auth endpoints', () => {
  /**
   * login ok
   */
  const user = {
    email: 'admin@admin.com',
    password: '123456'
  };
  const loginFailPass = {
    email: 'admin@admin.com',
    password: 'sdsaqw46546'
  };
  const loginFailEmail = {
    email: 'admin4578@admin.com',
    password: '123'
  };

  //login ok, return jwt
  it('login ok, expect json web token', (done) => {
    request(app)
      .post('/api/users/auth/login')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(202, done);
  });

  //login fail, password
  it('login fail, password incorrect', (done) => {
    request(app)
      .post('/api/users/auth/login')
      .send(loginFailPass)
      .expect('Content-Type', /json/)
      .expect(401, done);
  });

  //login fail, user not exist
  it('login fail, user incorrect', (done) => {
    request(app)
      .post('/api/users/auth/login')
      .send(loginFailEmail)
      .expect('Content-Type', /json/)
      .expect(401, done);
  });
});
