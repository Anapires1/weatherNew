import RNLinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import image from '../../../../images/sol.jpg';
import { theme } from '../../../../theme';
import Lottie from 'lottie-react-native';
import loading from '../../../../animations/loading.json';
import error from '../../../../animations/error.json';

const { colors } = theme;

const LinearGradienteColors = [colors.gradientPrimary, colors.primaryText];

export const ContainerScreen = styled.ImageBackground.attrs({
  source: image,
})`
  flex: 1;
  padding: 0px 27px;
`;
export const ContainerScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const TextTemperature = styled.Text``;
export const TextHour = styled.Text``;

export const LoadingContainer = styled(RNLinearGradient).attrs({
  start: { x: 1, y: 0 },
  end: { x: 1, y: 1 },
  colors: LinearGradienteColors,
})`
  flex: 1;
`;

export const LottieLoading = styled(Lottie).attrs({
  source: loading,
})``;
export const LottieErrror = styled(Lottie).attrs({
  source: error,
})``;
