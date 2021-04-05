import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SurveyView from './SurveyView';

export default class SurveyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <SurveyView {...this.props} />;
  }
}
