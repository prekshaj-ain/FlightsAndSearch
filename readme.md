### welcome to flights services

#### project setup
- Clone the project on your local
- execute `npm install` on the same pathof root directory of the downloaded project
- create a `.env` file in your root directory and create the following environment variables
    - `PORT=3000`
- Inside the  `src/config` folder create a new file `config.json` and then add the following json code
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 ```
- Once you've added the config.json then go to src folder from terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

#### DB Design
- Airplane table
- Flight table
- City table
- Airport table

- A flight belong to an airplaine but an airplan belongs to multiple flights
- A city has many airports but an airport belongs to a city
- One airport can have multiple flights but a flight belong to an airport


## Tables

### City -> id, name, createdAt, updatedAt
### Airport -> id, name, address, cityId, createdAt, updatedAt
    Relationship -> City has many airports and Airport belongs to a city (one to many)
### Airplane -> id, modelNumber, capacity, createdAt, updatedAt
### flight -> id, flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime, departureTime, price, boardingGate, totalSeats

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```