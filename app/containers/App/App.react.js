/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';

import Img from 'Img/Img.react';
import Logo from 'logo.png';

import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Img className={styles.logo} src={Logo} alt="Max Stoiber - Logo"/>
        { this.props.children }
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);