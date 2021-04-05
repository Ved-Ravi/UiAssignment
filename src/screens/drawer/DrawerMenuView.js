import React, {Component} from 'react';
import {View, Text, Linking, TouchableOpacity, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import {
  heightScale,
  screenHeight,
  ThemeColor,
  widthScale,
} from '../../utils/util';
import LinearGradient from 'react-native-linear-gradient';

export default class DrawerMenuView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DrawerContentScrollView {...this.props} scrollEnabled={false}>
        <LinearGradient
          colors={['#f9cb13', '#f41a68']}
          style={{flex: 1, height: screenHeight, top: -heightScale(4)}}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 0}}>
          <View
            style={{
              marginTop: heightScale(15),
              marginLeft: widthScale(10),
              flexDirection: 'row',
            }}>
            <Image
              style={{
                height: heightScale(70),
                width: widthScale(60),
                borderRadius: 10,
              }}
              source={{uri: 'https://picsum.photos/id/338/100/100'}}
            />
            <View
              style={{
                marginLeft: widthScale(10),
              }}>
              <Text style={{color: ThemeColor.white, fontSize: 16}}>
                Dave Allippa
              </Text>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                +91 xxxxx yyyyy
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    width: widthScale(75),
                    backgroundColor: '#ffffff',
                    borderRadius: 12,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    marginTop: heightScale(7),
                    fontSize: 10,
                    fontWeight: 'bold',
                    paddingVertical: heightScale(4),
                  }}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 0.5,
              opacity: 0.4,
              backgroundColor: '#ffffff',
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          />
          <DrawerItemList {...this.props} />

          <Text
            style={{
              position: 'absolute',
              bottom: heightScale(40),
              left: 10,
              color: '#ffffff',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            App version -V1.0
          </Text>
        </LinearGradient>
      </DrawerContentScrollView>
    );
  }
}
