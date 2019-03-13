# Installation

Before using the API, please install dependencies:

`npm install`

Then, run:

`node server.js`

# Usage

## Drivers

A driver ressource is a character you can play in the game.

### Endpoints:

  * `/driver` -- Get all drivers available
  * `/driver/:id` -- Get specific driver by ID


### Example Request:

`GET http://127.0.0.1:3000/driver/1/`


### Example Response:

``


### Attributes:

  * `name` _string_ -- Driver name
  * `driverModel` _string_ -- Driver statistics by model type

**********************


## Bodies

A body ressource is a vehicle you can choose in the game.

### Endpoints:

  * `/body` -- Get all drivers available
  * `/body/:id` -- Get specific body by ID


### Example Request:

`GET http://127.0.0.1:3000/body/1/`


### Example Response:

``


### Attributes:

  * `name` _string_-- Body (Kart) name
  * `speedGnd` _number_ -- Body speed on ground
  * `speedWtr` _number_ -- Body speed underwater
  * `speedAir` _number_ -- Body speed on air
  * `speedGty` _number_ -- Body speed on gravity
  * `acceleration` _number_ -- Body acceleration
  * `weight` _number_ -- Body weight
  * `handlingGnd` _number_ -- Body handling on ground
  * `handlingWtr` _number_ -- Body handling underwater
  * `handlingAir` _number_ -- Body handling on air
  * `handlingGty` _number_ -- Body handling on gravity
  * `grip` _number_ -- Body grip
  * `miniturbo` _number_ -- Body mini turbo value

**********************


## Tires

A tire ressource is a part of vehicle you can choose in the game.

### Endpoints:

  * `/tire` -- Get all tires available
  * `/tire/:id` -- Get specific tire by ID


### Example Request:

`GET http://127.0.0.1:3000/tire/1/`


### Example Response:

``


### Attributes:

  * `name` _string_-- Tire name
  * `speedGnd` _number_ -- Tire speed on ground
  * `speedWtr` _number_ -- Tire speed underwater
  * `speedAir` _number_ -- Tire speed on air
  * `speedGty` _number_ -- Tire speed on gravity
  * `acceleration` _number_ -- Tire acceleration
  * `weight` _number_ -- Tire weight
  * `handlingGnd` _number_ -- Tire handling on ground
  * `handlingWtr` _number_ -- Tire handling underwater
  * `handlingAir` _number_ -- Tire handling on air
  * `handlingGty` _number_ -- Tire handling on gravity
  * `grip` _number_ -- Tire grip
  * `miniturbo` _number_ -- Tire mini turbo value

**********************


## Gliders

A glider ressource is a glider, attach to a vehicle you can choose in the game.

### Endpoints:

  * `/glider` -- Get all gliders available
  * `/glider/:id` -- Get specific glider by ID


### Example Request:

`GET http://127.0.0.1:3000/glider/1/`


### Example Response:

``


### Attributes:

  * `name` _string_ -- Glider name
  * `speedGnd` _number_ -- Glider speed on ground
  * `speedWtr` _number_ -- Glider speed underwater
  * `speedAir` _number_ -- Glider speed on air
  * `speedGty` _number_ -- Glider speed on gravity
  * `acceleration` _number_ -- Glider acceleration
  * `weight` _number_ -- Glider weight
  * `handlingGnd` _number_ -- Glider handling on ground
  * `handlingWtr` _number_ -- Glider handling underwater
  * `handlingAir` _number_ -- Glider handling on air
  * `handlingGty` _number_ -- Glider handling on gravity
  * `grip` _number_ -- Glider grip
  * `miniturbo` _number_ -- Glider mini turbo value

************

# Requests

This API supports CRUD requests. You can make GET, POST, PUT and DELETE requests.

### Example request

`POST http://127.0.0.1:3000/glider`

```
{
    "name" : "Diddy Kong",
    "driverModel" : "LightDriverModel"
}
```














Samy VERA
Adrien VAUCARD
Tanguy POTIER
