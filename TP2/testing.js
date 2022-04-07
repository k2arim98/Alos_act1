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

//// False Data
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
          .expect('"State not added"')
          .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});
//// GET Route
describe('GET /Countries', () {
    it('respond with json containing a list of all States', (done) {
        request(app)
            .get('/Countries')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
 
/**
 * Testing get route with an existing id
 */
describe('GET /Countries/:id', () {
    it('respond with json containing a single state', (done) {
        const id = 2;
	request(app)
            .get('/Countries/' + id)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

/**
 * a non-existing id
 */
describe('GET /Countries/:id', () {
    it('respond with json State not found', (done) {
	const id = 679
        request(app)
            .get('/Countries/' + id)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404) //expecting HTTP status code
            .expect('"State not found"') // expecting content value
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});
///DELETE route
/**
 * an existing id
 */
describe("DELETE /Countries/:id", () => {
        it("DELETE an existing state", (done) => {
            const Id = 1;
            request(app)
                .delete("/Countries/" + Id)
                .set('Accept', 'application/json')
            	.expect('Content-Type', /json/)
            	.expect(200, done);
	});
        });
/**
 * a non-existing id
 */
describe('DELETE /Countries/:id', () {
    it('respond with json State not found', (done) {
	const id = 679
        request(app)
            .delete('/Countries/' + id)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404) //expecting HTTP status code
            .expect('"State not found"') // expecting content value
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});
