import React, { Component } from 'react';
import './App.css';

import Row from "./components/Layout/Row";
import Header from "./components/UI/Header";
import Logo from "./components/UI/Logo";
import Avatar from "./components/UI/Avatar";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import InputText from "./components/UI/Input/Text";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header elevated>
          <Logo/>
          <Avatar />
        </Header>

        <Card style={{width: 400}} elevated>
          <Row>
            <InputText />
            <InputText />
          </Row>
          <Button primary>Submit Prework</Button>
        </Card>
      </div>
    );
  }
}

export default App;
