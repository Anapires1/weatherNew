import styled from 'styled-components/native';
import { theme } from '../../../../theme';

const { colors } = theme;

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${colors.backgroundHeader};
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: colors.third,
  placeholder: 'Buscar cidade...',
})`
  align-self: center;
  width: 90%;
  height: 40px;
  background-color: ${colors.rippleColor};
  color: ${colors.primaryText};
  border-radius: 10px;
  font-size: 18px;
`;
