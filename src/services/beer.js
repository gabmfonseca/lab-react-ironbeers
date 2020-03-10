import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
});

const listBeers = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/')
      .then(result => {
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  });

const displayBeer = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/${id}`)
      .then(result => {
        const beer = result.data;
        resolve(beer);
      })
      .catch(reject);
  });

const randomBeer = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/random')
      .then(result => {
        const beer = result.data;
        resolve(beer);
      })
      .catch(reject);
  });

const saveBeer = newBeer =>
  new Promise((resolve, reject) => {
    instance
      .post('/new', newBeer)
      .then(result => {
        const beer = result.data;
        resolve(beer);
      })
      .catch(reject);
  });

export { listBeers, displayBeer, randomBeer, saveBeer };
