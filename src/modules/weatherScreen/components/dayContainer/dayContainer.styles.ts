import styled from 'styled-components/native';
import RNLinearGradient from 'react-native-linear-gradient';
import { theme } from '../../../../theme';
import iconTimer from 'react-native-vector-icons/MaterialCommunityIcons';

const { colors } = theme;

const LinearGradienteColors = [colors.gradientBarPrimary, colors.gradientBarSecondary];

export const Container = styled.View`
  margin-top: 25px;
  border-radius: 15px;
  width: 100%;
  height: 360px;
  background-color: ${colors.primary};
  padding: 20px;
`;

export const ScrollContainer = styled.View`
  border-radius: 15px;
  width: 100%;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const ContainerForecast = styled.View`
  margin-top: 11px;
  width: 60px;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: ${colors.primaryText};
  margin-left: 5px;
`;
export const TitleForecast = styled.Text`
  font-size: 16px;
  color: ${colors.primaryText};
  font-weight: bold;
  margin-left: 5px;
  margin-bottom: 5px;
  align-self: center;
`;
export const IconForecast = styled.Image`
  margin-left: 5px;
  margin-bottom: 5px;
  align-self: center;
  width: 35px;
  height: 35px;
`;
export const TemperatureMin = styled.Text`
  font-size: 17px;
  color: ${colors.transparentGray};
  margin-left: 5px;
  align-self: center;
  font-weight: bold;
`;
export const TemperatureMax = styled.Text`
  font-size: 17px;
  color: ${colors.primaryText};
  margin-left: 5px;
  align-self: center;
  font-weight: bold;
`;

export const CalendarIcon = styled(iconTimer).attrs({
  name: 'calendar-month',
})`
  font-size: 12px;
  color: ${colors.primaryText};
`;

export const Divider = styled.View`
  border-bottom-width: 0.9px;
  border-bottom-color: ${colors.backgroundGray};
  width: 100%;
`;

export const Spacing = styled.View`
  margin-left: 20px;
`;

export const Bar = styled(RNLinearGradient).attrs({
  start: { x: 0, y: 1 },
  end: { x: 1, y: 1 },
  colors: LinearGradienteColors,
})`
  width: 100px;
  height: 3px;
  background-color: #000;
  border-radius: 100px;
  align-self: center;
  margin: 0px 20px;
`;
