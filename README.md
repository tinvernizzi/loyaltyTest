# Technical Test / Full-stack

## Purpose

This test will ask you to develop a micro-service and a front-end application using it. Some goals
are required and some are optional. The micro-service is responsible for managing the loyalty program,
and is using an event-driven approach by listening to AMQP messages and reacting accordingly.

Stack :
- Node
- Express
- React

## Goals completed

### Goal 1 : Implement loyalty points earning

Documentation of the api is up to date

### Goal 2 : Implement a front-end for the rider


## Problems in the implementation

- Didn't refactor riders.controller.js, hence huge switch cases and questionable data structures choices
- Front-end is broken when backend is offline. Should have a place holder instead.
- Backend does not have tests.
- Backend does not have proper error handling.
- And many more.
