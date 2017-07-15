import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import logo from './logo.svg';
import './App.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
};

const App = ({ title = '', onChangeTitle }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
      <button onClick={onChangeTitle}>Change Title</button>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/components/App.js</code> and save to reload.
    </p>
  </div>
);

App.propTypes = propTypes;

export default App;
