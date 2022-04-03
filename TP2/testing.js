const app = require('../Act2'); 
const assert = require('assert');
const request = require('supertest');

describe('POST /Countries',  ()=>  {
  let data = {
      "id": 59,
      "Name": "Testing Entity",
      "Nombre de daïras": 11,
      "Nombre de communes": 11,
      "about": "Do nostrud voluptate excepteur anim sunt dolore id cupidatat in. Culpa consequat velit labore dolore non aliquip id commodo incididunt amet voluptate enim non id.",
      "location": {
      "lat": -64.076868,
      "long": 62.694022
				}

  }
  it('respond with 201 created',  (done) => {
      request(app)
          .post('/Countries')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});

////
describe('POST /Countries',  () => {
  let data = {
      //no id
      "Name": "Testing Entity 2",
	  "Nombre de daïras": 11,
      "Nombre de communes": 11,
      "about": "Do nostrud voluptate excepteur anim sunt dolore id cupidatat in. Culpa consequat velit labore dolore non aliquip id commodo incididunt amet voluptate enim non id.",
      "location": {
      "lat": -64.076868,
      "long": 62.694022
				}
          }
  it('respond with 400 not created',  (done)=>  {
      request(app)
          .post('/Countries')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400)
          .expect('"La wilaya nest pas ajoutee"')
          .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});