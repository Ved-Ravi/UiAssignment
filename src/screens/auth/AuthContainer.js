import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AuthView from './AuthView';

export default class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AuthView {...this.props} />;
  }
}
