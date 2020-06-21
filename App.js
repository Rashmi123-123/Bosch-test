import React from 'react';
import './App.css';
import Body from './components/body';
import { Navbar, Container, Tab, Row, Col, Nav } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            Logo
          </Navbar.Brand>
        </Navbar>
        <Body />
      </Container>
    </React.Fragment>
  )
}

export default App;
