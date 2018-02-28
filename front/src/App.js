import React, { Component } from 'react';
import './App.css';
import { Container, Divider, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import Status from './Status.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Menu fixed='top' inverted>
      <Container>
      <Menu.Item as='a' header>
      <Image
      size='mini'
      src='https://i.imgur.com/AmzDaGl.png'
      style={{ marginRight: '1.5em' }}
      />
      Chauffeur Privé
      </Menu.Item>
      <Menu.Item as='a' href="https://www.chauffeur-prive.com">Site officiel</Menu.Item>
      </Container>
      </Menu>

      <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Loyalty program</Header>
      <Status/>
      </Container>

      <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '1em 0em' }}
      >
      <Container textAlign='center'>

      <Divider inverted section />
      <Image
      centered
      size='mini'
      src='https://i.imgur.com/AmzDaGl.png'
      />
      <List horizontal inverted divided link>
      <List.Item as='a' href='#'>Site Map</List.Item>
      <List.Item as='a' href='#'>Contact Us</List.Item>
      <List.Item as='a' href='#'>Terms and Conditions</List.Item>
      <List.Item as='a' href='#'>Privacy Policy</List.Item>
      </List>
      </Container>
      </Segment>
      </div>
    );
  }
}

export default App;
