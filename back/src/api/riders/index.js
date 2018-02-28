'use strict';

const express = require('express');
const wrap = require('co-express');

const controller = require('./riders.controller');

const router = express.Router();

/**
 * @api {get} /riders/:id/status get status of the rider
 * @apiGroup Riders
 *
 * @apiDescription get status of the rider
 *
 * @apiParam {String} id the id of a user
 *
 * @apiSuccess {String} status of the rider
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    status: 'Platinum'
 *  }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *       message: 'Invalid request'
 *     }
 *
 */
router.get('/:id/status', wrap(controller.getRiderStatus));

/**
 * @api {get} /riders/:id/name get the name of the rider
 * @apiGroup Riders
 *
 * @apiDescription get name of the rider
 *
 * @apiParam {String} id the id of a user
 *
 * @apiSuccess {String} name of the rider
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    name: 'Tanguy'
 *  }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *       message: 'Invalid request'
 *     }
 *
 */
router.get('/:id/name', wrap(controller.getRiderName));


/**
 * @api {get} /riders/:id/numberOfRides get the number of rides of the rider
 * @apiGroup Riders
 *
 * @apiDescription get number of rides of the rider
 *
 * @apiParam {String} id the id of a user
 *
 * @apiSuccess {String} number of rides of the rider
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    numberOfRides: '3'
 *  }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *       message: 'Invalid request'
 *     }
 *
 */
router.get('/:id/numberOfRides', wrap(controller.getNumberOfRides));


/**
 * @api {get} /riders/:id/loyaltyPoints get the loyalty Points of the rider
 * @apiGroup Riders
 *
 * @apiDescription get loyalty Points of the rider
 *
 * @apiParam {String} id the id of a user
 *
 * @apiSuccess {String} Loyalty Points of the rider
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    loyaltyPoints: '10'
 *  }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *       message: 'Invalid request'
 *     }
 *
 */
router.get('/:id/loyaltyPoints', wrap(controller.getLoyaltyPoints));


/**
 * @api {post} /riders/:id/rides add a ride to the user
 * @apiGroup Riders
 *
 * @apiDescription add a ride to the user
 *
 * @apiParam {String} id the id of a user
 *
 * @apiParam {String} price the price of the ride
 *
 * @apiSuccess {String} Loyalty points of the rider
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    loyaltyPoints: '3'
 *  }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 INTERNAL_SERVER_ERROR
 *     {
 *       message: 'Invalid request'
 *     }
 *
 */
router.post('/:id/rides', wrap(controller.addRide))

module.exports = router;
