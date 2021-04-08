import React, {Component} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  heightScale,
  screenHeight,
  screenWidth,
  ThemeColor,
  widthScale,
} from '../../utils/util';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import FadeInView from './components/FadeInView';

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
          colors={[item.backgroundColor, '#ffffff']}
          style={styles.tabContainer}>
          <View style={styles.boxContainer}>
            <FadeInView style={{...styles.heading, fontSize: 20}} time={1500}>
              {item.title}
            </FadeInView>
            <FadeInView style={{...styles.heading, fontSize: 16}} time={5000}>
              {item.text}
            </FadeInView>
          </View>
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
          onSlideChange={() => {
            
          }}
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
    title: 'Hey',
    text: 'Description.\nSay something cool',
    image: require('../../assets/icons/background.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Hello',
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
