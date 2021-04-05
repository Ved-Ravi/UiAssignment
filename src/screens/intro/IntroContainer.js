import React, {Component} from 'react';
import {View, Text} from 'react-native';
import IntroView from './IntroView';

export default class IntroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <IntroView {...this.props} />;
  }
}
