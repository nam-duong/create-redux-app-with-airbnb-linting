import React from 'react';
import PropTypes from 'prop-types';// eslint-disable-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';

const propTypes = {
  store: PropTypes.object.isRequired,
};

const defaultProps = {};

const Root = ({ store }) => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

Root.propTypes = propTypes;

Root.defaultProps = defaultProps;

export default Root;
