import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Rooms } from './components/Rooms';
import { NewRes } from "./components/NewRes";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/NewRes' component={NewRes} />
        <Route path='/Rooms' component={Rooms}/>
      </Layout>
    );
  }
}
