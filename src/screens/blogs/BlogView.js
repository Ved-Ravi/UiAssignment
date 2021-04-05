import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  TextInput,
  TouchableHighlightBase,
} from 'react-native';
import {
  ThemeColor,
  heightScale,
  widthScale,
  screenHeight,
  screenWidth,
  ListTileColor
} from '../../utils/util';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export default class BlogView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sectionCard = ({item, index}) => {
    return (
      <View
        style={{...styles.card, marginLeft: index == 0 ? widthScale(20) : 0}}>
        <Image style={styles.cardImage} source={item.imgUrl} />
        <Text
          style={{
            position: 'absolute',
            color: ThemeColor.white,
            fontSize: widthScale(16),
            fontWeight: '700',
            bottom: heightScale(15),
            left: heightScale(15),
          }}>
          {item.section}
        </Text>
      </View>
    );
  };

  latestCard = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: screenWidth - widthScale(40),
          backgroundColor: ThemeColor.white,
          alignSelf: 'center',
          borderRadius: 15,
          elevation: 5,
          marginBottom: heightScale(15),
        }}>
        <View
          style={{
            width: screenWidth - widthScale(130),
            justifyContent:'space-between'
          }}>
          <View style={{alignItems: 'flex-start', }}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: heightScale(10),
                marginLeft: widthScale(10),
                backgroundColor: ListTileColor[index].light,
                color: ListTileColor[index].dark,
              }}>
              {item.section}
            </Text>
          </View>
          <Text numberOfLines={2} style={{marginHorizontal: widthScale(10), fontWeight: '700', marginTop: heightScale(3)}}>
            {item.headline}
          </Text>
          <View style={{flexDirection: 'row', marginLeft: widthScale(10), marginVertical: heightScale(5),}}>
            <Text style={{fontSize: 13, color: '#455a64'}}>{item.author}</Text>
            <Text style={{fontSize: 12, color: '#757575', marginLeft: widthScale(20)}}>{item.time}</Text>
          </View>
        </View>
        <View>
          <Image
            source={item.imgUrl}
            style={{
              height: heightScale(125),
              width: widthScale(90),
              borderRadius: 15,
            }}
          />
        </View>
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
            style={{
              borderWidth: 1,
              padding: widthScale(3),
              borderColor: ThemeColor.themeGray,
              borderRadius: 5,
            }}
            name="menu"
            size={30}
            color={ThemeColor.themeDarkGray}
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          />
          <Text style={styles.navText}>Hi, David!</Text>
        </View>

        <View
          style={{alignItems: 'flex-end', marginHorizontal: widthScale(20)}}>
          <Text style={styles.headingText}>Explore today's</Text>
          <Text style={styles.headingText}>world news</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search here"
            placeholderTextColor={ThemeColor.themeDarkGray}
            style={styles.searchBox}
          />
          <Icon1
            name="search1"
            color={ThemeColor.themeDarkGray}
            style={{position: 'absolute', right: widthScale(15)}}
            size={heightScale(22)}
          />
        </View>
        <ScrollView>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: heightScale(15)}}
            data={DATA}
            renderItem={this.sectionCard}
            keyExtractor={item => item.id}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: widthScale(20),
            }}>
            <Text
              style={{
                marginLeft: widthScale(5),
                fontSize: 16,
                fontWeight: '700',
              }}>
              Latest News
            </Text>
            <Text style={{color: ThemeColor.themeSkyblue}}>More</Text>
          </View>

          <FlatList
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            style={{marginVertical: heightScale(15)}}
            data={latestNewsList}
            renderItem={this.latestCard}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    );
  }
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    imgUrl: {uri: 'https://picsum.photos/id/1060/200/300'},
    section: 'Technology',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    imgUrl: {uri: 'https://picsum.photos/id/1057/200/300'},
    section: 'Culture',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    imgUrl: {uri: 'https://picsum.photos/id/1059/200/300'},
    section: 'Business',
  },
];

const latestNewsList = [
  {
    id: 'bd7acbea-c1b1cdsdc',
    imgUrl: {uri: 'https://picsum.photos/id/1/200/300'},
    section: 'Technology',
    headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Olive Yew',
    time: '2m ago',
  },
  {
    id: '3ac68afc-c605add',
    imgUrl: {uri: 'https://picsum.photos/id/10/200/300'},
    section: 'Culture',
    headline: 'Justo donec enim diam vulputate.',
    author: 'Teri Dactyl',
    time: '15m ago',
  },
  {
    id: '58694a0f-3da1as',
    imgUrl: {uri: 'https://picsum.photos/id/1033/200/300'},
    section: 'Business',
    headline:
      'Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.',
    author: 'Allie Grater',
    time: '20m ago',
  },
];
