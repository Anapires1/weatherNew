import React from 'react';
import { useAuthContext } from '../../../../contexts/auth';
import * as Styled from './hourlyContainer.styles';

export default function HourlyWeatherContainer() {
  const { forecast } = useAuthContext();

  return (
    <>
      <Styled.Container>
        <Styled.ContainerTitle>
          <Styled.TimeIcon />
          <Styled.Text>PREVISÃO HORÁRIA</Styled.Text>
        </Styled.ContainerTitle>
        <Styled.ScrollContainer>
          {forecast?.list?.map((item, index) => (
            <Styled.ContainerForecast key={index}>
              <Styled.TitleForecast>{item.dt_txt.slice(11, 13)}</Styled.TitleForecast>
              <Styled.IconForecast source={{ uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png` }} />
              <Styled.Temperature>{Math.round(item.main.temp)}º</Styled.Temperature>
            </Styled.ContainerForecast>
          ))}
        </Styled.ScrollContainer>
      </Styled.Container>
    </>
  );
}
