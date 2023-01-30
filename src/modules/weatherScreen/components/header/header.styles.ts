import styled from 'styled-components/native';
import { theme } from '../../../../theme';

const { colors } = theme;

export const Container = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const TextCity = styled.Text`
  font-size: 32px;
  color: ${colors.primaryText};
  margin-top: 20px;
`;
export const TitleTemperature = styled.Text`
  margin-top: -30px;
  font-size: 100px;
  color: ${colors.primaryText};
  text-align: center;
  margin-bottom: -20px;
`;

export const TextInfo = styled.Text`
  font-size: 20px;
  color: ${colors.primaryText};
`;
