import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  screenHeight,
  screenWidth,
  heightScale,
  widthScale,
  ThemeColor,
} from '../../utils/util';
import styles from './styles';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Entypo';

export default class ImgViewerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 0,
    };
  }

  horizontalList = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({
            category: index,
          });
        }}
        style={{
          height: heightScale(40),
          marginLeft: index == 0 ? widthScale(20) : 0,
          marginRight: widthScale(5),
          backgroundColor:
            this.state.category == index ? '#f8bbd0' : '#ffffff00',
          borderRadius: widthScale(5),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color:
              this.state.category == index
                ? '#ec407a'
                : ThemeColor.themeDarkGray,
            paddingVertical: heightScale(5),
            paddingHorizontal: widthScale(10),
          }}>
          {item}
        </Text>
        {this.state.category == index && (
          <View
            style={{
              height: 5,
              width: 5,
              borderRadius: 1,
              backgroundColor: '#ec407a',
              position: 'absolute',
              bottom: 3,
              left: 3,
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  verticalList = ({item, index}) => {
    return (
      <View style={styles.verticalContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={
              styles.listHeader
            }>{`${item.title}  (${item.photoNum} Photos)`}</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: ThemeColor.themeDarkGray,
                fontSize: 12,
                marginRight: widthScale(20),
              }}>
              Show all
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: heightScale(10)}}
          data={item.photoList}
          renderItem={this.photoList}
          keyExtractor={item => item.name}
        />
      </View>
    );
  };

  photoList = ({item, index}) => {
    return (
      <View
        style={{
          ...styles.photoContainer,
          ...styles.photoStyle,
          marginLeft: index == 0 ? widthScale(20) : 0,
        }}>
        <Image style={styles.photoStyle} source={item.photo} />
        <View style={styles.profileContainer}>
          <Image style={styles.profilePicStyle} source={item.profilePic} />
          <View
            style={{
              paddingHorizontal: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 10,
                color: ThemeColor.white,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
            <Icon1 name="hearto" size={10} color={ThemeColor.white} />
          </View>
        </View>
        <TouchableOpacity style={styles.follow}>
          <Text
            style={{color: ThemeColor.white, fontSize: 8, fontWeight: 'bold'}}>
            Follow
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={ThemeColor.backgroundColor}
        />
        <View style={styles.navBar}>
          <Icon
            style={{}}
            name="menu"
            size={widthScale(35)}
            color={ThemeColor.themeDarkGray}
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          />
          <Image
            style={styles.profileIcon}
            source={{uri: 'https://picsum.photos/100/100'}}
          />
        </View>

        <View style={{marginHorizontal: widthScale(20)}}>
          <Text style={{fontSize: 16}}>Hi, David</Text>
          <Text style={{fontSize: 20}}>Choose what you like!!!</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search here"
            placeholderTextColor={ThemeColor.themeGray}
            style={styles.searchBox}
          />
          <Icon1
            name="search1"
            color={ThemeColor.white}
            style={{
              position: 'absolute',
              right: widthScale(7),
              backgroundColor: ThemeColor.skyGreen,
              padding: widthScale(7),
              borderRadius: widthScale(5),
            }}
            size={heightScale(20)}
          />
        </View>

        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginVertical: heightScale(10),
            }}
            data={HorizontalList}
            renderItem={this.horizontalList}
            keyExtractor={item => item.id}
          />
        </View>

        <FlatList
          nestedScrollEnabled
          style={{}}
          data={VerticalListData}
          renderItem={this.verticalList}
          keyExtractor={item => item.id}
          ref={(ref) => { this.flatListRef = ref; }}
        />

        <TouchableOpacity style={styles.bottomButton} onPress={() =>{
             this.flatListRef.scrollToIndex({animated: true, index: 1});
        }}>
          <View style={{height: 50, alignItems: 'center', marginTop: heightScale(10)}}>
            <Icon2
              name="arrow-back-ios"
              size={widthScale(18)}
              color={ThemeColor.skyGreen}
              style={{transform: [{rotate: '90deg'}], top: 0}}
            />
            <Icon3 name="circle" size={widthScale(12)} color={ThemeColor.skyGreen} style={{top: 9, position: 'absolute'}}/>
            <Icon2
              name="arrow-back-ios"
              size={widthScale(18)}
              color={ThemeColor.skyGreen}
              style={{transform: [{rotate: '-90deg'}], top: 13, position: 'absolute',}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const HorizontalList = [
  'Photo',
  'Video',
  'Movies',
  'Trending',
  'Music',
  'Travel',
  'Internet',
];

const VerticalListData = [
  {
    id: 1,
    title: 'Internet',
    photoNum: 4,
    photoList: [
      {
        name: 'Arjun',
        profilePic: {uri: 'https://picsum.photos/id/1/40/40'},
        photo: {uri: 'https://picsum.photos/id/1/200/300'},
      },
      {
        name: 'Rahul',
        profilePic: {uri: 'https://picsum.photos/id/2/40/40'},
        photo: {uri: 'https://picsum.photos/id/2/200/300'},
      },
      {
        name: 'Swati',
        profilePic: {uri: 'https://picsum.photos/id/3/40/40'},
        photo: {uri: 'https://picsum.photos/id/3/200/300'},
      },
      {
        name: 'Lisa',
        profilePic: {uri: 'https://picsum.photos/id/4/40/40'},
        photo: {uri: 'https://picsum.photos/id/4/200/300'},
      },
    ],
  },
  {
    id: 2,
    title: 'Fashion',
    photoNum: 4,
    photoList: [
      {
        name: 'Alice',
        profilePic: {uri: 'https://picsum.photos/id/130/40/40'},
        photo: {uri: 'https://picsum.photos/id/1000/200/300'},
      },
      {
        name: 'Zoya',
        profilePic: {uri: 'https://picsum.photos/id/155/40/40'},
        photo: {uri: 'https://picsum.photos/id/1001/200/300'},
      },
      {
        name: 'King',
        profilePic: {uri: 'https://picsum.photos/id/107/40/40'},
        photo: {uri: 'https://picsum.photos/id/1002/200/300'},
      },
      {
        name: 'Sourabh',
        profilePic: {uri: 'https://picsum.photos/id/102/40/40'},
        photo: {uri: 'https://picsum.photos/id/1003/200/300'},
      },
    ],
  },
  {
    id: 3,
    title: 'Travel',
    photoNum: 4,
    photoList: [
      {
        name: 'Sid',
        profilePic: {uri: 'https://picsum.photos/id/9/40/40'},
        photo: {uri: 'https://picsum.photos/id/1015/200/300'},
      },
      {
        name: 'Alex',
        profilePic: {uri: 'https://picsum.photos/id/10/40/40'},
        photo: {uri: 'https://picsum.photos/id/123/200/300'},
      },
      {
        name: 'Roy',
        profilePic: {uri: 'https://picsum.photos/id/11/40/40'},
        photo: {uri: 'https://picsum.photos/id/1024/200/300'},
      },
      {
        name: 'Ria',
        profilePic: {uri: 'https://picsum.photos/id/13/40/40'},
        photo: {uri: 'https://picsum.photos/id/13/200/300'},
      },
    ],
  },
  {
    id: 4,
    title: 'Business',
    photoNum: 4,
    photoList: [
      {
        name: 'Ruby',
        profilePic: {uri: 'https://picsum.photos/id/10/40/40'},
        photo: {uri: 'https://picsum.photos/id/1011/200/300'},
      },
      {
        name: 'Raja',
        profilePic: {uri: 'https://picsum.photos/id/15/40/40'},
        photo: {uri: 'https://picsum.photos/id/1012/200/300'},
      },
      {
        name: 'Sahil',
        profilePic: {uri: 'https://picsum.photos/id/16/40/40'},
        photo: {uri: 'https://picsum.photos/id/16/200/300'},
      },
      {
        name: 'Singh',
        profilePic: {uri: 'https://picsum.photos/id/17/40/40'},
        photo: {uri: 'https://picsum.photos/id/17/200/300'},
      },
    ],
  },
];
