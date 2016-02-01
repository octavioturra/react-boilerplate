/*
 * HomePage
 * This is the first thing users see of our App
 */

import * as appActions from '../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {mapStateToProps, mapDispatchToProps} from '../../utils/mapTo';

const actions = [
  appActions
];

class HomePage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { projectName, ownerName } = this.props.home;
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>This is the demo for the <span className="home__text--red">{ projectName }</span> by <a href={'https://twitter.com/' + ownerName} >@{ ownerName }</a></h2>
        <label className="home__label">Change to your project name:
          <input className="home__input" type="text" onChange={(evt) => {this.props.actions.asyncChangeProjectName(evt.target.value); }} defaultValue="React.js Boilerplate" value={projectName} />
        </label>
        <label className="home__label">Change to your name:
          <input className="home__input" type="text" onChange={(evt) => {this.props.actions.asyncChangeOwnerName(evt.target.value); }} defaultValue="mxstbr" value={ownerName} />
        </label>
        <Link className="btn" to="/readme">Setup</Link>
      </div>
    );
  }
}


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps(actions))(HomePage);
