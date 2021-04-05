import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ImgViewerView from './ImgViewerView';

export default class ImgViewerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ImgViewerView {...this.props} />;
  }
}
