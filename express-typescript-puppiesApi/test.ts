import request from 'supertest';
import app from './app';
import { puppiesDb } from './db/db';

describe('Testing api endpoint', () => {
  
  test('sanity check for /test', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      test: 'is working as it should',
    });
  });

  test('Getting all puppises', async () => {
    const res = await request(app).get('/api/puppies');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(puppiesDb);
  });

  test('Getting a puppy with ID', async () => {
    const res = await request(app).get('/api/puppies/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(puppiesDb[1]);
  });
  
  test('Post new puppy', async () => {
    const res = await request(app)
    .post('/api/puppies')
    .set('Content-type', 'application/json')
    .send({
      name : 'Fifi',
      breed : 'Bulldog',
      birthDate : '2015-07-15'
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({
      id: puppiesDb.length + 1,
      name : 'Fifi',
      breed : 'Bulldog',
      birthDate : '2015-07-15'
    });
  });

  test('Put puppy in the existing DB', async () => {
    const res = await request(app)
    .put('/api/puppies/2')
    .set('Content-type', 'application/json')
    .send({
      name : 'Fifi',
      breed : 'Bulldog',
      birthDate : '2015-07-15'
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body[3].name).toEqual('Fifi');
  });

  test.only('Put puppy in the existing DB', async () => {
    const res = await request(app)
    .delete('/api/puppies/3')
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(puppiesDb.length - 1);
  });

});
