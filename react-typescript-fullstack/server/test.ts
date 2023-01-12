import request from 'supertest';
import app from './src/app';
import { puppiesDb } from './db/db';


describe('Testing GET endpoint', () => {

  test('Getting all puppises', async () => {
    const res = await request(app).get('/api/puppies');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(puppiesDb);
  });
});


describe('Testing GET endpoint with ID', () => {

  test('Getting a puppy with ID', async () => {
    const res = await request(app).get('/api/puppies/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(puppiesDb[1]);
  });

  test('Error testing GET a puppy with ID, not existing ID', async () => {
    const res = await request(app).get('/api/puppies/9999');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({message: 'Puppy with ID number 9999 not does not exist'});
  });
});


describe('Testing POST endpoint ', () => {

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

  test('Error testing POST a puppy, all fields to be filled ', async () => {
    const res = await request(app)
    .post('/api/puppies')
    .set('Content-type', 'application/json')
    .send({
      name : '',
      breed : '',
      birthDate : ''
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({message: 'Bad request, Please make sure all fields are filled.'});
  });
});


describe('Testing PUT endpoint', () => {

  test('PUT a puppy in the existing DB', async () => {
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

  test('Error testing PUT a puppy in the existing DB, no data was send', async () => {
    const res = await request(app)
    .put('/api/puppies/2')
    .set('Content-type', 'application/json')
    .send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({message: 'Nothing was changed, no data provided.'});
  });
});


describe('Testing DELETE endpoint', () => {

  test('DELETE puppy from DB', async () => {
    const res = await request(app)
    .delete('/api/puppies/3')
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(puppiesDb.length - 1);
  });

  test('Error testing DELETE puppy from DB', async () => {
    const res = await request(app)
    .delete('/api/puppies/9999')
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({message: 'Puppy not found'});
  });
});