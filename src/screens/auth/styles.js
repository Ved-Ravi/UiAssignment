import {StyleSheet} from 'react-native';
import {
  screenHeight,
  screenWidth,
  heightScale,
  widthScale,
  ThemeColor,
} from '../../utils/util';

const topComponentMargin = heightScale(15);
const componentHeight = heightScale(45);

const styles = StyleSheet.create({
  imageContainer: {},
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 0.4 * screenHeight,
    width: screenWidth,
  },
  authTitle: {
    height: componentHeight,
    marginTop: topComponentMargin,
    marginHorizontal: widthScale(20),
    flexDirection: 'row',
    backgroundColor: ThemeColor.white,
    elevation: 5,
    borderRadius: componentHeight/2,
    alignItems: 'center',
    //   justifyContent:
  },
  loginText: {
    fontWeight: '700',
  },
  phoneContainer:{
    marginTop: topComponentMargin,
    justifyContent: 'center'
  },
  inputBox: {
    height: componentHeight,
    borderRadius: componentHeight/2,
    width: screenWidth - widthScale(40),
    elevation: 2,
    paddingLeft: widthScale(20),
    paddingRight: widthScale(65)
  },
  loginHeadingText:{
      marginTop: topComponentMargin,
      fontSize: heightScale(18),
      color: ThemeColor.themeLightBlack,
      alignSelf: 'flex-start',
      marginLeft: widthScale(20)
  },
  loginButtonContainer:{
      height: componentHeight + heightScale(4),
      width: screenWidth - widthScale(40),
      borderRadius: componentHeight+heightScale(4)/2,
      backgroundColor: ThemeColor.themePink,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: topComponentMargin
  },
  loginIcon:{
    height: heightScale(50),
    width: heightScale(50),
    borderRadius: heightScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColor.white,
    elevation: 3
  },
  loginButtonText:{
    color: ThemeColor.white,
    paddingVertical: heightScale(10),
    alignSelf: 'center'
  },
  signupButtonText:{
    marginLeft: widthScale(5),
    paddingVertical: heightScale(10),
    color: ThemeColor.white,
    justifyContent: 'space-between',
  }
});

export default styles;
