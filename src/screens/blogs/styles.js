import {StyleSheet} from 'react-native';
import {
  screenHeight,
  screenWidth,
  heightScale,
  widthScale,
  ThemeColor,
  CompanyFont,
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
  navText: {
    fontSize: heightScale(18),
    color: ThemeColor.themeDarkGray,
    alignSelf: 'flex-end',
  },
  headingText: {
    fontSize: heightScale(20),
    fontWeight: 'bold',
  },
  searchContainer: {
    marginHorizontal: widthScale(20),
    justifyContent: 'center',
    marginTop: heightScale(10),
    marginBottom: heightScale(15)
  },
  searchBox: {
    height: heightScale(45),
    borderRadius: widthScale(15),
    backgroundColor: '#E7E7EF',
    paddingLeft: widthScale(20),
    paddingRight: widthScale(65),
  },
  card:{
      height: heightScale(220),
      width: heightScale(200),
      borderRadius: heightScale(25),
      marginRight: widthScale(20),
      elevation: 3
  },
  cardImage:{
    height: heightScale(220),
    width: heightScale(200),
    borderRadius: heightScale(25),
  }
});

export default styles;
