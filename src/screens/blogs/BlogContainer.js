import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BlogView from './BlogView';

export default class BlogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <BlogView {...this.props} />;
  }
}
