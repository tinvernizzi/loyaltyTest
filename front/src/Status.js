import React, { Component } from 'react';
import request from 'superagent';

/**
 * This variable controls which user is displayed.
 * If we had done this properly, we would have a way to change the current user through the webpage.
 */
const userId = '1';
const urlBackEnd = (id) => `http://localhost:8000/api/riders/${id}`;

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: new String(),
      name : new String(),
      loyaltyPoints : new String(),
      numberOfRides : new String()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    request
    .get(urlBackEnd(userId) + '/status/')
    .then(res => {
      this.setState({
        status: res.body.status
      });
    }, (err) => {
      this.setState({
        errorStatus: err.toString()
      });
    });

    request
    .get(urlBackEnd(userId) + '/name/')
    .then(res => {
      this.setState({
        name: res.body.name
      });
    }, (err) => {
      this.setState({
        errorName: err.toString()
      });
    });

    request
    .get(urlBackEnd(userId) + '/numberOfRides/')
    .then(res => {
      this.setState({
        numberOfRides: res.body.numberOfRides
      });
    }, (err) => {
      this.setState({
        errorNOR: err.toString()
      });
    });

    request
    .get(urlBackEnd(userId) + '/loyaltyPoints/')
    .then(res => {
      this.setState({
        loyaltyPoints: res.body.loyaltyPoints
      });
    }, (err) => {
      this.setState({
        errorLP: err.toString()
      });
    });
  }



  render() {
    return (
      <div>
      <h1>Hello {this.state.name} !</h1>
      <h2>Your status is currently {this.state.status}.</h2>
      <h2>You have accumulated {this.state.numberOfRides} rides, and you have {this.state.loyaltyPoints} loyalty points.</h2>
      <h2> Thanks for riding with Chauffeur Privé !</h2>
      </div>
    );
  }
}

export default Status;
