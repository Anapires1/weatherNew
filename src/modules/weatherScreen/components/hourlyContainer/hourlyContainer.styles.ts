import styled from 'styled-components/native';
import { theme } from '../../../../theme';
import iconTimer from 'react-native-vector-icons/MaterialCommunityIcons';

const { colors } = theme;

export const Container = styled.View`
  margin-top: 40px;
  border-radius: 15px;
  width: 100%;
  height: 140px;
  background-color: ${colors.primary};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  border-radius: 15px;
  width: 100%;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  margin-top: 9px;
  margin-left: 12px;
`;

export const ContainerForecast = styled.View`
  margin-top: 11px;
  width: 60px;
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
export const Temperature = styled.Text`
  font-size: 17px;
  color: ${colors.primaryText};
  margin-left: 5px;
  align-self: center;
`;

export const TimeIcon = styled(iconTimer).attrs({
  name: 'clock-time-nine-outline',
})`
  font-size: 12px;
  color: ${colors.primaryText};
`;
