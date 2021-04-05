import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {
  heightScale,
  widthScale,
  ThemeColor,
  CompanyFont,
  screenWidth,
} from '../../utils/util';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalDropdown from 'react-native-modal-dropdown';

export default class SurveyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      selectedCategory: 'Food',
      questionData: questData,
      questionData1: questData1,
    };
  }

  verticalList = ({item, index}) => {
    return (
      <View
        style={{
          marginHorizontal: widthScale(20),
          marginBottom: heightScale(20),
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: ThemeColor.backgroundColor,
          }}>
          {item.question}
        </Text>
        <View
          style={{
            marginTop: heightScale(10),
            backgroundColor: '#ffffff',
            borderRadius: 15,
            elevation: 2,
          }}>
          {item.option.map((item, index1) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: widthScale(10),
                  marginBottom: heightScale(10),
                  marginTop: index1 == 0 ? heightScale(10) : 0,
                  alignItems: 'center',
                }}>
                {this.state.selectedCategory == 'Food' && (
                  <TouchableOpacity
                    onPress={() => {
                      let opt = this.state.questionData;
                      opt[0].data[index].option.map((dat, idx) => {
                        if (index1 != idx) {
                          dat.isSelected = false;
                        } else {
                          dat.isSelected = true;
                        }
                      });

                      this.setState({
                        questionData: opt,
                      });
                    }}
                    style={{
                      height: 24,
                      width: 24,
                      borderRadius: 12,
                      borderWidth: 2,
                      borderColor: ThemeColor.themeYellow,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {item.isSelected && (
                      <View
                        style={{
                          height: 16,
                          width: 16,
                          borderRadius: 8,
                          backgroundColor: ThemeColor.backgroundColor,
                        }}
                      />
                    )}
                  </TouchableOpacity>
                )}

                {this.state.selectedCategory == 'Travel' && (
                  <TouchableOpacity
                    onPress={() => {
                      let opt = this.state.questionData1;
                      opt[0].data[index].option.map((dat, idx) => {
                        if (index1 == idx) {
                          dat.isSelected = true;
                        }
                      });

                      this.setState({
                        questionData1: opt,
                      });
                    }}
                    style={{
                      height: 24,
                      width: 24,
                      borderRadius: 5,
                      borderWidth: 2,
                      borderColor: ThemeColor.themeYellow,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {item.isSelected && (
                      <Icon
                        name="check-bold"
                        color={ThemeColor.backgroundColor}
                        size={18}
                      />
                    )}
                  </TouchableOpacity>
                )}

                <Text style={{marginLeft: widthScale(10)}}>{item.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={ThemeColor.backgroundColor}
        />

        <View style={styles.topBackground}>
          <View style={styles.navBar}>
            <Icon
              name="menu"
              size={30}
              color="#ffffff"
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
            />
            <Text style={styles.headerText}>Todays survey</Text>
            <View style={styles.profileIconContainer}>
              <View style={styles.notification} />
              <Image
                style={styles.profileIcon}
                source={{uri: 'https://picsum.photos/id/1005/80/80'}}
              />
            </View>
          </View>

          <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    this.setState({
                      selectedTab: index,
                      selectedCategory: item,
                    });
                  }}
                  style={{
                    height: heightScale(35),
                    borderRadius: 15,
                    backgroundColor:
                      this.state.selectedTab == index
                        ? ThemeColor.themeYellow
                        : ThemeColor.backgroundColor,
                    marginLeft: index == 0 ? widthScale(25) : 0,
                    marginRight: widthScale(10),
                    marginTop: heightScale(20),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1.5,
                    borderColor:
                      this.state.selectedTab == index ? '#000000' : '#ffffff',
                    elevation: 10,
                  }}>
                  <Text
                    style={{
                      color:
                        this.state.selectedTab == index ? '#000000' : '#ffffff',
                      marginHorizontal: widthScale(15),
                      marginVertical: 5,
                      fontSize: 12,
                      fontWeight:
                        this.state.selectedTab == index ? '700' : 'normal',
                      fontFamily: CompanyFont.RobotoRegular,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={({item, index}) => index}
          />
        </View>

        <View style={styles.topBackground2}>
          <View style={styles.topBackground2b} />
        </View>

        {this.state.selectedCategory != 'Food' &&
          this.state.selectedCategory != 'Travel' && (
            <ScrollView style={{marginTop: 35}}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.imageStyle}
                  // source={require('../../assets/icons/background.jpg')}
                  source={{uri: 'https://picsum.photos/id/527/400/400'}}
                />
              </View>
              <Text
                style={{
                  marginLeft: widthScale(25),
                  fontSize: 18,
                  marginVertical: heightScale(15),
                  fontWeight: '700',
                  color: ThemeColor.backgroundColor,
                  fontFamily: CompanyFont.RobotoBold,
                }}>
                Survey Statistics
              </Text>

              <FlatList
                data={ListData}
                scrollEnabled={false}
                keyExtractor={({item, index}) => index + 'abc'}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        marginHorizontal: widthScale(25),
                        backgroundColor: '#ffffff',
                        marginBottom: heightScale(15),
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        borderRadius: 15,
                        elevation: 4,
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Icon
                          style={{
                            margin: heightScale(10),
                          }}
                          name={item.icon}
                          size={30}
                          color={ThemeColor.themeYellow}
                        />
                      </View>
                      <View
                        style={{
                          marginTop: 15,
                          marginBottom: 5,
                          alignItems: 'flex-start',
                          // backgroundColor: '#600'
                        }}>
                        <View
                          style={{
                            width: widthScale(200),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '700',
                              color: ThemeColor.backgroundColor,
                            }}>
                            {item.title}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '700',
                              color: '#c1c1c1',
                            }}>
                            {item.points} Points
                          </Text>
                        </View>
                        <View
                          style={{
                            height: heightScale(25),
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              backgroundColor: '#c1c1c1',
                              height: 5,
                              width: widthScale(200),
                              borderRadius: 3,
                            }}>
                            <View
                              style={{
                                backgroundColor: ThemeColor.backgroundColor,
                                height: 5,
                                width: widthScale(200) * (item.points / 100),
                                borderRadius: 3,
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            </ScrollView>
          )}

        {(this.state.selectedCategory == 'Food' ||
          this.state.selectedCategory == 'Travel') && (
          <ScrollView style={{marginTop: 35}}>
            <FlatList
              nestedScrollEnabled
              style={{
                marginTop: heightScale(20),
                marginBottom: heightScale(75),
              }}
              data={
                this.state.selectedCategory == 'Food'
                  ? this.state.questionData[0].data
                  : this.state.questionData1[0].data
              }
              renderItem={this.verticalList}
              keyExtractor={item => item.id}
              ref={ref => {
                this.flatListRef = ref;
              }}
            />
          </ScrollView>
        )}

        {(this.state.selectedCategory == 'Food' ||
          this.state.selectedCategory == 'Travel') && (
          <TouchableOpacity activeOpacity={0.8} style={styles.submitButton}>
            <Text style={{fontWeight: 'bold'}}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const DATA = ['Science', 'Food', 'Travel', 'Gaming', 'Culture', 'Business'];

const questData = [
  {
    category: 'Food',
    data: [
      {
        question: 'How often do you consume fast food on a week basis?',
        option: [
          {
            title: '1-2 times',
            isSelected: false,
          },
          {
            title: '3-4 times',
            isSelected: false,
          },
          {
            title: '5-6 times',
            isSelected: false,
          },
          {
            title: '7times or more',
            isSelected: false,
          },
        ],
      },
      {
        question: 'Do you use discount coupons to buy fast food?',
        option: [
          {
            title: 'Yes',
            isSelected: false,
          },
          {
            title: 'No',
            isSelected: false,
          },
        ],
      },
      {
        question: "What's your favourite fast food?",
        option: [
          {
            title: 'Chinese',
            isSelected: false,
          },
          {
            title: 'South Indian',
            isSelected: false,
          },
          {
            title: 'Streets food',
            isSelected: false,
          },
          {
            title: 'Other',
            isSelected: false,
          },
        ],
      },
    ],
  },
];

const questData1 = [
  {
    category: 'Travel',
    data: [
      {
        question: 'How often do you consume fast food on a week basis?',
        option: [
          {
            title: '1-2 times',
            isSelected: false,
          },
          {
            title: '3-4 times',
            isSelected: false,
          },
          {
            title: '5-6 times',
            isSelected: false,
          },
          {
            title: '7times or more',
            isSelected: false,
          },
        ],
      },
      {
        question: 'Do you use discount coupons to buy fast food?',
        option: [
          {
            title: 'Yes',
            isSelected: false,
          },
          {
            title: 'No',
            isSelected: false,
          },
        ],
      },
      {
        question: "What's your favourite fast food?",
        option: [
          {
            title: 'Chinese',
            isSelected: false,
          },
          {
            title: 'South Indian',
            isSelected: false,
          },
          {
            title: 'Streets food',
            isSelected: false,
          },
          {
            title: 'Other',
            isSelected: false,
          },
        ],
      },
    ],
  },
];

const ListData = [
  {
    id: 1,
    title: 'Food & Drinks',
    points: 40,
    icon: 'gift',
  },
  {
    id: 2,
    title: 'Business',
    points: 80,
    icon: 'google-my-business',
  },
  {
    id: 3,
    title: 'Travell',
    points: 30,
    icon: 'alarm-bell',
  },
  {
    id: 4,
    title: 'Health',
    points: 70,
    icon: 'wallet-travel',
  },
];
