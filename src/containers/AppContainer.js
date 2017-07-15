import React, { Component } from 'react';
import PropTypes from 'prop-types';// eslint-disable-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeTitleAction } from '../actions';
import App from '../components/App';

const propTypes = {
  title: PropTypes.string.isRequired,
  changeTitleAction: PropTypes.func.isRequired,
};

const defaultProps = {};

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <App
        title={this.props.title}
        onChangeTitle={this.props.changeTitleAction}
      />
    );
  }
}

AppContainer.propTypes = propTypes;

AppContainer.defaultProps = defaultProps;

const mapStateToProps = ({ app }) => ({ title: app.title });

const mapDispatchToProps = dispatch => bindActionCreators({ changeTitleAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
