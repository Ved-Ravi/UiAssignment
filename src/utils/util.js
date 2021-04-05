import {Dimensions, Platform} from 'react-native';

const standardWidth = 375.0;
const standardHeight = 667.0;
const {height, width} = Dimensions.get('window');

export const screenHeight = height;
export const screenWidth = width;

export function widthScale(dimensions) {
  return (dimensions / standardWidth) * width;
}

export function heightScale(dimensions) {
  return (dimensions / standardHeight) * height;
}

export const ThemeColor = {
  backgroundColor: '#f41a68',
  backgroundWhite: '#F3F3F3',
  themeYellow: '#FEDA24',
  themeGray: '#c1c1c1',
  themeDarkGray: '#727272',
  white: '#ffffff',
  themeSkyblue: '#0A9EFD',
  themeLightBlack: '#2b2b2b',
  themePink: '#ff6c9d',
  skyGreen: '#00ffde',
};

export const ListTileColor = [
  {dark: '#ff1744', light: '#ff8a80'},
  {dark: '#aa00ff', light: '#ea80fc'},
  {dark: '#00e676', light: '#b9f6ca'},
]

export const CompanyFont = {
}
