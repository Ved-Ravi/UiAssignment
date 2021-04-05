import {StyleSheet} from 'react-native';
import {
  screenHeight,
  screenWidth,
  heightScale,
  widthScale,
  ThemeColor,
} from '../../utils/util';

const styles = StyleSheet.create({
  navBar: {
    height: heightScale(54),
    marginHorizontal: widthScale(20),
    marginTop: heightScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff00',
  },
  profileIcon: {
    height: heightScale(45),
    width: heightScale(45),
    borderRadius: heightScale(10),
  },
  searchContainer: {
    marginHorizontal: widthScale(20),
    justifyContent: 'center',
    marginTop: heightScale(10),
    marginBottom: heightScale(15),
  },
  searchBox: {
    height: heightScale(45),
    borderRadius: widthScale(5),
    backgroundColor: ThemeColor.white,
    paddingLeft: widthScale(20),
    paddingRight: widthScale(65),
  },
  verticalContainer: {
    marginBottom: heightScale(15)
  },
  listHeader: {
    marginLeft: widthScale(20),
    fontSize: 16,
    fontWeight: '700',
  },
  photoContainer: {
    marginRight: widthScale(10),
    backgroundColor: '#ab0',
  },
  photoStyle: {
    height: heightScale(120),
    width: widthScale(135),
    borderRadius: heightScale(15),
  },
  profileContainer: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 5
  },
  profilePicStyle: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  follow:{
    position: 'absolute',
    bottom: 10,
    left: 10,
    height: 20,
    width: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColor.skyGreen,
  },
  bottomButton: {
    height:80,
    width: 80,
    borderRadius: 40,
    backgroundColor: ThemeColor.white,
    elevation: 5,
    position: 'absolute',
    bottom: -35,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

export default styles;
