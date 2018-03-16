'use strict';

const HttpStatus = require('http-status-codes');
const model = require('./riders.model');

/**
 * Get status of the rider
 * @param {Object} req express request
 * @param {Object} res express response
 */
async function getRiderStatus(req, res) {
    const { id } = req.params;

    switch (model.myDatabase[id].status) {
        case 0:
            return res.status(HttpStatus.OK).send({ status: 'bronze'});
        case 1:
            return res.status(HttpStatus.OK).send({ status: 'silver'});
        case 2:
            return res.status(HttpStatus.OK).send({ status: 'gold'});
        case 3:
            return res.status(HttpStatus.OK).send({ status: 'platinum'});
        default:
            return res.status(HttpStatus.BAD_REQUEST).send({'code' : 500, 'message': 'Error in the data structure.'});
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
    return res.status(HttpStatus.OK).send({ name: model.myDatabase[id].name});
    // Could add a case for invalid query
}

/**
 * Get loyaltyPoints of the rider
 * @param {Object} req express request
 * @param {Object} res express response
 */
async function getLoyaltyPoints(req, res) {
    const { id } = req.params;
    return res.status(HttpStatus.OK).send({ loyaltyPoints: model.myDatabase[id].loyaltyPoints});
    // Could add a case for invalid query
}

/**
 * Get total number of rides of the rider
 * @param {Object} req express request
 * @param {Object} res express response
 */
async function getNumberOfRides(req, res) {
    const { id } = req.params;
    return res.status(HttpStatus.OK).send({ numberOfRides: model.myDatabase[id].numberOfRides});
    // Could add a case for invalid query
}

/**
 * Add a ride to the database
 * @param {Object} req express request
 * @param {Object} res express response
 */
async function addRide(req, res) {
    const { id } = req.params;

    switch (model.myDatabase[id].status) {
        case 0:
            model.myDatabase[id].loyaltyPoints = model.myDatabase[id].loyaltyPoints + parseInt(req.body.price, 10);
            break;
        case 1:
            model.myDatabase[id].loyaltyPoints = model.myDatabase[id].loyaltyPoints + ( 3 * parseInt(req.body.price, 10) );
            break;
        case 2:
            model.myDatabase[id].loyaltyPoints = model.myDatabase[id].loyaltyPoints + ( 5 * parseInt(req.body.price, 10) );
            break;
        case 3:
            model.myDatabase[id].loyaltyPoints = model.myDatabase[id].loyaltyPoints + ( 10 * parseInt(req.body.price, 10) );
            break;
        default:
            return res.status(HttpStatus.BAD_REQUEST).send({'code' : 500, 'message': 'Error in the data structure.'});
    }

    model.myDatabase[id].numberOfRides = model.myDatabase[id].numberOfRides + 1;

    model.myDatabase[id].updateStatus();

    return res.status(HttpStatus.OK).send({ loyaltyPoints: model.myDatabase[id].loyaltyPoints});
    // Add a case for invalid query
}

module.exports = {
    getRiderStatus,
    getRiderName,
    getLoyaltyPoints,
    getNumberOfRides,
    addRide
};
