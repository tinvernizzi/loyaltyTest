'use strict';

const HttpStatus = require('http-status-codes');

/**
* Get status of the rider
* @param {Object} req express request
* @param {Object} res express response
*/
async function getRiderStatus(req, res) {
  const { id } = req.params;
  var status = myDatabase[id].numberOfRides;

  switch(myDatabase[id].status) {
    case 0:
    return res.status(HttpStatus.OK).send({ status: 'bronze'});
    case 1:
    return res.status(HttpStatus.OK).send({ status: 'silver'});
    case 2:
    return res.status(HttpStatus.OK).send({ status: 'gold'});
    case 3:
    return res.status(HttpStatus.OK).send({ status: 'platinum'});
    default:
    return res.status(HttpStatus.BAD_REQUEST).send({"code" : 400, "message": "Bad request."});
  }
  // Could add a case for invalid query
}

/**
* Get name of the rider
* @param {Object} req express request
* @param {Object} res express response
*/
async function getRiderName(req, res) {
  const { id } = req.params;
  return res.status(HttpStatus.OK).send({ name: myDatabase[id].name});
  // Could add a case for invalid query
}

/**
* Get loyaltyPoints of the rider
* @param {Object} req express request
* @param {Object} res express response
*/
async function getLoyaltyPoints(req, res) {
  const { id } = req.params;
  return res.status(HttpStatus.OK).send({ loyaltyPoints: myDatabase[id].loyaltyPoints});
  // Could add a case for invalid query
}

/**
* Get total number of rides of the rider
* @param {Object} req express request
* @param {Object} res express response
*/
async function getNumberOfRides(req, res) {
  const { id } = req.params;
  return res.status(HttpStatus.OK).send({ numberOfRides: myDatabase[id].numberOfRides});
  // Could add a case for invalid query
}


/**
* Add a ride to the database
* @param {Object} req express request
* @param {Object} res express response
*/
async function addRide(req, res) {
  const { id } = req.params;

  switch(myDatabase[id].status) {
    case 0:
    myDatabase[id].loyaltyPoints = myDatabase[id].loyaltyPoints + parseInt(req.body.price);
    break;
    case 1:
    myDatabase[id].loyaltyPoints = myDatabase[id].loyaltyPoints + ( 3 * parseInt(req.body.price) );
    break;
    case 2:
    myDatabase[id].loyaltyPoints = myDatabase[id].loyaltyPoints + ( 5 * parseInt(req.body.price) );
    break;
    case 3:
    myDatabase[id].loyaltyPoints = myDatabase[id].loyaltyPoints + ( 10 * parseInt(req.body.price) );
    break;
  }

  myDatabase[id].numberOfRides = myDatabase[id].numberOfRides + 1;

  myDatabase[id].updateStatus();

  return res.status(HttpStatus.OK).send({ loyaltyPoints: myDatabase[id].loyaltyPoints});
  // Add a case for invalid query
}


module.exports = {
  getRiderStatus,
  getRiderName,
  getLoyaltyPoints,
  getNumberOfRides,
  addRide
};

/**
* The rest of this file mocks a riders database.
* Ideally, we should use a proper database.
*/

function Rider(id, name, numberOfRides, loyaltyPoints) {
  this.id = id;
  this.name = name;
  this.numberOfRides = numberOfRides;
  this.loyaltyPoints = loyaltyPoints;

  this.updateStatus = function(){
    if (this.numberOfRides < 20) {
      this.status = 0; // Bronze
    }
    else if (this.numberOfRides < 50) {
      this.status = 1; // Silver
    }
    else if (this.numberOfRides < 100) {
      this.status = 2; // Gold
    }
    else {
      this.status = 3; // Platinum
    }
  };

  this.updateStatus();
}

var myDatabase = [
  new Rider(0, 'Anna', 0, 65), //bronze
  new Rider(1, 'Tanguy', 10, 15), //bronze
  new Rider(2, 'Jack', 20, 32), //silver
  new Rider(3, 'Marie', 75, 38), //gold
  new Rider(4, 'Robert', 150, 87) //platinum
];
