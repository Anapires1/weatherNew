import React from 'react';
import { useAuthContext } from '../../../../contexts/auth';
import * as Styled from './header.styles';

export default function Header() {
  const { localCurrentForecast } = useAuthContext();

  return (
    <>
      <Styled.Container>
        <Styled.TextCity>{localCurrentForecast?.name}</Styled.TextCity>
        <Styled.TitleTemperature>{Math.round(localCurrentForecast?.main?.temp)}</Styled.TitleTemperature>
        <Styled.TextInfo>{localCurrentForecast?.weather?.[0]?.description}</Styled.TextInfo>
        <Styled.TextInfo>
          Máx.: {localCurrentForecast?.main?.temp_max}º Mín.: {localCurrentForecast?.main?.temp_min}º
        </Styled.TextInfo>
      </Styled.Container>
    </>
  );
}
