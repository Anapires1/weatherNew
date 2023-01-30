import { Dimensions } from 'react-native';

export const theme = {
  colors: {
    primary: '#3f7fbc',
    primaryText: '#FFFFFF',
    gradientPrimary: '#4ccce6',
    gradientSecondary: '#020024',
    gradientBarPrimary: '#e9e22b',
    gradientBarSecondary: '#ff900e',
    // backgroundScreens: '#FFFFFF',
    // secondary: '#FFFFFF',
    // secondaryText: '#333333',
    third: '#898A8D',
    // messageText: '#262424',
    // box: '#F0F0F0',
    // success: '#32A54A',
    // error: '#D72700',
    // warning: '#F29305',
    // danger: '#BF130D',
    backgroundGray: '#f5f5f5',
    transparentGray: '#E0FFFF',
    backgroundHeader: '#000000',
    rippleColor: 'rgba(169,169,169, 0.13)',
  },

  fonts: {
    name: 'Poppins',
    thin: 'Poppins-Thin', // 100
    extraLight: 'Poppins-ExtraLight', // 200
    light: 'Poppins-Light', // 300
    regular: 'Poppins-Regular', // 400
    medium: 'Poppins-Medium', // 500
    semiBold: 'Poppins-SemiBold', // 600
    bold: 'Poppins-Bold', // 700
    extraBold: 'Poppins-ExtraBold', // 800
    black: 'Poppins-Black', // 900
  },

  metrics: {
    roundness: 100,
    deviceWidth: Dimensions.get('screen').width,
    deviceHeight: Dimensions.get('screen').height,
    screenPadding: Dimensions.get('window').width / 14,
  },
};
