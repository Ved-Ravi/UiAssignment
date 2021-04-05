import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  heightScale,
  ThemeColor,
  screenHeight,
  widthScale,
  screenWidth,
} from '../../utils/util';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';

export default class AuthView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'login',
      user: 'tenant',
      passwordView: false,
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{backgroundColor: '#ffffff'}}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://picsum.photos/400/400'}}
            style={styles.image}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            // backgroundColor: 'red',
            height: screenHeight,
            width: screenWidth,
          }}>
          <Image
            source={require('../../assets/icons/whiteBackground.png')}
            style={{
              height: screenHeight,
              width: screenWidth,
              bottom: heightScale(20),
            }}
          />
        </View>
        <View style={styles.container}>
          <View
            style={{
              position: 'absolute',
              // backgroundColor: 'red',
              height: heightScale(60),
              width: heightScale(60),
              borderRadius: heightScale(30),
              elevation: 1,
              top: -heightScale(75),
              right: screenWidth / 4 - widthScale(28),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/icons/user.png')}
              style={{
                height: 30,
                width: 30,
              }}
              // resizeMode="contain"
            />
          </View>
          <View style={styles.authTitle}>
            <Image
              source={{uri: 'https://picsum.photos/50/50'}}
              style={{
                height: heightScale(52),
                width: heightScale(52),
                borderRadius: heightScale(26),
                borderWidth: 6,
                borderColor: ThemeColor.themeSkyblue,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flex: 1,
              }}>
              <Text
                onPress={() => {
                  this.setState({
                    user: 'tenant',
                  });
                }}
                style={{
                  ...styles.loginText,
                  color:
                    this.state.user == 'tenant'
                      ? ThemeColor.themeSkyblue
                      : ThemeColor.themeLightBlack,
                }}>
                {this.state.screen == 'login'
                  ? 'Login as tenant'
                  : 'Signup as tenant'}
              </Text>
              <View
                style={{
                  height: heightScale(30),
                  width: 1.5,
                  backgroundColor: ThemeColor.themeLightBlack,
                }}
              />
              <Text
                onPress={() => {
                  this.setState({
                    user: 'seller',
                  });
                }}
                style={{
                  ...styles.loginText,
                  color:
                    this.state.user == 'seller'
                      ? ThemeColor.themeSkyblue
                      : ThemeColor.themeLightBlack,
                }}>
                {this.state.screen == 'login'
                  ? 'Login as Seller'
                  : 'Signup as Seller'}
              </Text>
            </View>
          </View>
          <Text style={styles.loginHeadingText}>
            {this.state.screen == 'login' ? 'Login ___' : 'Register ___'}
          </Text>
          {this.state.screen == 'signup' && (
            <View style={styles.phoneContainer}>
              <TextInput
                placeholder="User Name"
                placeholderTextColor={ThemeColor.themeDarkGray}
                style={styles.inputBox}
                keyboardType="numeric"
              />
              <Icon2
                name="user"
                color={ThemeColor.themeDarkGray}
                style={{position: 'absolute', right: widthScale(15)}}
                size={heightScale(30)}
              />
            </View>
          )}

          {this.state.screen == 'signup' && (
            <View style={styles.phoneContainer}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={ThemeColor.themeDarkGray}
                style={styles.inputBox}
                keyboardType="default"
                secureTextEntry={!this.state.passwordView}
              />
              <Icon2
                onPress={() => {
                  this.setState({
                    passwordView: !this.state.passwordView,
                  });
                }}
                name={this.state.passwordView ? 'unlock' : 'lock'}
                color={ThemeColor.themeDarkGray}
                style={{position: 'absolute', right: widthScale(15)}}
                size={heightScale(30)}
              />
            </View>
          )}

          <View style={styles.phoneContainer}>
            <TextInput
              placeholder="Enter Phone no."
              placeholderTextColor={ThemeColor.themeDarkGray}
              style={styles.inputBox}
              keyboardType="numeric"
            />
            <Icon
              name="phone"
              color={ThemeColor.themeDarkGray}
              style={{position: 'absolute', right: widthScale(15)}}
              size={heightScale(22)}
            />
          </View>

          <View style={styles.loginButtonContainer}>
            <View style={styles.loginIcon}>
              <Icon1
                name="location-arrow"
                size={30}
                color={ThemeColor.themePink}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-evenly',
                flex: 1,
              }}>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => {
                  if (this.state.screen == 'login') {
                    this.props.navigation.navigate('Home');
                  } else {
                    this.setState({
                      screen: 'login',
                    });
                  }
                }}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
              <View
                style={{
                  height: heightScale(30),
                  width: 1.5,
                  backgroundColor: ThemeColor.white,
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  
                  if (this.state.screen == 'signup') {
                    this.props.navigation.navigate('Home');
                  } else {
                    this.setState({
                      screen: 'signup',
                    });
                  }
                }}
                style={{flex: 1}}>
                <Text style={styles.signupButtonText}>New user Signup?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                color: ThemeColor.themeDarkGray,
                fontWeight: '700',
                marginBottom: heightScale(15),
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
