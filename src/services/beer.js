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
      .catch(error => {
        reject(error);
      });
  });

const displayBeer = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/${id}`)
      .then(result => {
        const beer = result.data;
        resolve(beer);
      })
      .catch(error => {
        reject(error);
      });
  });

const randomBeer = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/random')
      .then(result => {
        const beer = result.data;
        resolve(beer);
      })
      .catch(error => {
        reject(error);
      });
  });

export { listBeers, displayBeer, randomBeer };
