import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Survey from '../screens/survey';
import Auth from '../screens/auth';
import Blog from '../screens/blogs';
import ImageViewer from '../screens/imgViewer';
import StackNavigation from './StackNavgation';
import DrawerMenuView from '../screens/drawer/DrawerMenuView';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {widthScale} from '../utils/util';

const Drawer = createDrawerNavigator();
const iconSize = widthScale(15);
const iconColor = '#ffffff';

export default class DrawerNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Drawer.Navigator
        // hideStatusBar="true"
        statusBarAnimation="fade"
        drawerStyle={{
          // backgroundColor: '#e8f5e9',
          width: 250,
        }}
        drawerContentOptions={{
          // activeTintColor: '#e91e63',
          labelStyle: {color: iconColor,left: -25},
          // activeBackgroundColor: '#ff4081',
        }}
        drawerContent={props => <DrawerMenuView {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Survey}
          options={({navigation}) => ({
            title: 'Survey',
            drawerIcon: () => (
              <LinearGradient
                colors={['#f9cb13', '#f41a68']}
                style={styles.iconLG}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}>
                <Icon
                  name="home"
                  size={iconSize}
                  color={iconColor}
                  style={styles.iconStyle}
                />
              </LinearGradient>
            ),
          })}
        />
        <Drawer.Screen
          name="Blog"
          component={Blog}
          options={({navigation}) => ({
            drawerIcon: () => (
              <LinearGradient
                colors={['#f9cb13', '#f41a68']}
                style={styles.iconLG}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}>
                <Icon1
                  name="blog"
                  size={iconSize}
                  color={iconColor}
                  style={styles.iconStyle}
                />
              </LinearGradient>
            ),
          })}
        />
        <Drawer.Screen
          name="Image"
          component={ImageViewer}
          options={({navigation}) => ({
            drawerIcon: () => (
              <LinearGradient
                colors={['#f9cb13', '#f41a68']}
                style={styles.iconLG}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}>
                <Icon1
                  name="images"
                  size={iconSize}
                  color={iconColor}
                  style={styles.iconStyle}
                />
              </LinearGradient>
            ),
          })}
        />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {},
  iconLG: {
    height: 2 * iconSize + 4,
    width: 2 * iconSize + 4,
    borderRadius: iconSize + 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
});
