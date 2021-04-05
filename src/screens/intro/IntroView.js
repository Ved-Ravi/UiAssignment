import React, {Component} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {screenHeight, screenWidth, ThemeColor} from '../../utils/util';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class IntroView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderDoneButton = () => {
    return (
      <View style={styles.skipButton}>
        <Text style={styles.skipButtonText}>Done</Text>
      </View>
    );
  };

  _renderSkipButton = () => {
    return (
      <View style={styles.skipButton}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </View>
    );
  };

  _onDone = () => {
    this.props.navigation.navigate('Auth');
  };
  _onSkip = () => {
    this.props.navigation.navigate('Auth');
  };
  _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <LinearGradient
          colors={[item.backgroundColor,'#ffffff']}
          style={{
            height: screenHeight,
            width: screenWidth
          }}>
          </LinearGradient>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={ThemeColor.backgroundColor}
          barStyle="light-content"
        />
        <AppIntroSlider
          data={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          onSkip={this._onSkip}
          bottomButton
          showSkipButton
          showNextButton={false}
          renderSkipButton={this._renderSkipButton}
          renderDoneButton={this._renderDoneButton}
        />

      </View>
    );
  }
}

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/icons/background.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/icons/background.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../../assets/icons/background.jpg'),
    backgroundColor: '#22bcb5',
  },
];
