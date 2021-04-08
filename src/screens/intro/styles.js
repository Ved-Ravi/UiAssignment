import {StyleSheet} from 'react-native';
import {
  widthScale,
  heightScale,
  ThemeColor,
  screenHeight,
  screenWidth,
} from '../../utils/util';

const styles = StyleSheet.create({
  skipButton: {
    height: heightScale(45),
    width: widthScale(100),
    borderRadius: heightScale(25),
    borderWidth: 1,
    borderColor: ThemeColor.themeGray,
    borderStyle: 'dashed',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeColor.white,
    opacity: 0.8,
    elevation: 4,
    marginVertical: heightScale(50),
  },
  skipButtonText: {
    fontWeight: '700',
  },
  tabContainer: {
    height: screenHeight,
    width: screenWidth,
    alignItems: 'center',
  },
  boxContainer: {
    height: heightScale(250),
    width: widthScale(300),
    borderWidth: 3,
    borderRadius: 10,
    marginTop: heightScale(50),
    borderColor: ThemeColor.backgroundColor,
  },
  heading: {fontSize: 20, textAlign: 'center', margin: 10},
  
});

export default styles;
