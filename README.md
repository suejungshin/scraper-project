# Project Name

> React App Starter

## Summary

Ready to build a really cool web app but tired of all the set-up? This repo is for you!


## How to Run! (I know you want to!)

1. ```npm install```
2. ```npm start```
3. ```npm run build```


## API endpoints

Starter ReadMe below with example data (skeleton repo doesn't actually do all this right now!)

  #### GET /cars

  Returns all cars!

  Example response:

  ```javascript
  [{
    id: 1,
    make: 'Honda',
    model: 'Civic',
    year: 2011,
    color: blue
  },
  {
    id: 2,
    make: 'Toyota',
    model: 'Camry',
    year: 2015,
    color: blue
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Fusion',
    year: 2016,
    color: red
  }]
  ```


  #### GET /cars?color=blue

  Filters for only the blue cars!

  Example response:

   ```javascript
  [{
    id: 1,
    make: 'Honda',
    model: 'Civic',
    year: 2011,
    color: blue
  },
  {
    id: 2,
    make: 'Toyota',
    model: 'Camry',
    year: 2015,
    color: blue
  }]
  ```


  #### POST /cars/:id

  Add a new car!

  Data must be in format:

   ```javascript
  {
    id: 1,
    make: 'Honda',
    model: 'Civic',
    year: 2011,
    color: blue
  }
  ```


  #### PUT /cars/:id

  Update info about your car!

  Data must be in format:

   ```javascript
  {
    id: 1,
    make: 'Honda',
    model: 'Civic',
    year: 2011,
    color: blue
  }
  ```

  #### DELETE /cars/:id

  Delete a car!



## Other Notes



