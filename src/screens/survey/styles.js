import {StyleSheet} from 'react-native';
import {
  screenHeight,
  screenWidth,
  heightScale,
  widthScale,
  ThemeColor,
  CompanyFont,
} from '../../utils/util';

const topBackgroundHeight = screenHeight / 4.5;
const topBackgroundCurve = screenHeight / 8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColor.backgroundWhite,
  },
  navBar: {
    height: heightScale(54),
    marginHorizontal: widthScale(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: ThemeColor.backgroundColor,
  },
  headerText: {
    color: '#ffffff',
    fontFamily: CompanyFont.RobotoRegular,
    fontSize: heightScale(20),
    fontWeight: '700',
  },
  profileIconContainer: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    marginTop: heightScale(15),
    backgroundColor: '#ffffff',
    elevation: 10,
  },
  notification: {
    position: 'absolute',
    height: 10,
    width: 10,
    borderRadius: 5,
    top: 3,
    right: 3,
    zIndex: 1,
    backgroundColor: '#ff1744',
  },
  profileIcon: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  topBackground: {
    backgroundColor: ThemeColor.backgroundColor,
    height: topBackgroundHeight,
    borderBottomLeftRadius: topBackgroundCurve,
  },
  topBackground2: {
    height: topBackgroundHeight,
    width: screenWidth,
    top: topBackgroundHeight,
    position: 'absolute',
    backgroundColor: ThemeColor.backgroundColor,
  },
  topBackground2b: {
    flex: 1,
    borderTopRightRadius: topBackgroundCurve,
    backgroundColor: ThemeColor.backgroundWhite,
  },
  imageContainer: {
    height: heightScale(250),
    width: screenWidth - widthScale(50),
    alignSelf: 'center',
    // marginTop: heightScale(35),
    alignItems: 'center',
    borderBottomLeftRadius: topBackgroundCurve - widthScale(15),
    borderTopRightRadius: topBackgroundCurve - widthScale(15),
    backgroundColor: ThemeColor.backgroundColor,
    elevation: 10,
  },
  imageStyle: {
    height: heightScale(250),
    width: screenWidth - widthScale(50),
    borderBottomLeftRadius: topBackgroundCurve - widthScale(15),
    borderTopRightRadius: topBackgroundCurve - widthScale(15),
  },
  submitButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: heightScale(20),
    backgroundColor: ThemeColor.themeYellow,
    height: heightScale(45),
    width: screenWidth - widthScale(40),
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;
