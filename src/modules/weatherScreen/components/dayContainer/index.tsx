import React, { useEffect, useState } from 'react';
import * as Styled from './dayContainer.styles';
import { useAuthContext } from '../../../../contexts/auth';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function DayWeatherContainer() {
  const { forecast } = useAuthContext();
  const [days, setDays] = useState([]);

  // useEffect(() => {
  //   setDays(
  //     forecast?.list?.find(function (item) {
  //       return (
  //         (format(parseISO(item.dt_txt), 'PPPP', { locale: ptBR }).slice(0, 3) === 'seg') &
  //         'ter' &
  //         'qua' &
  //         'qui' &
  //         'sex' &
  //         'sab' &
  //         'dom'
  //       );
  //     }),
  //   );
  // }, []);

  // console.tron.log('i', days);

  return (
    <>
      <Styled.Container>
        <Styled.ContainerTitle>
          <Styled.CalendarIcon />
          <Styled.Text>PREVISÃO PARA 6 DIAS</Styled.Text>
        </Styled.ContainerTitle>
        <Styled.Divider />
        <Styled.ScrollContainer>
          {forecast?.list?.map((item, index) => (
            <>
              <Styled.ContainerForecast key={index}>
                <Styled.TitleForecast>
                  {format(parseISO(item.dt_txt), 'PPPP', { locale: ptBR }).slice(0, 3)}.
                </Styled.TitleForecast>
                <Styled.Spacing />
                <Styled.IconForecast source={{ uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png` }} />
                <Styled.Spacing />
                <Styled.TemperatureMin>{Math.round(item.main.temp_min)}º</Styled.TemperatureMin>
                <Styled.Bar />
                <Styled.TemperatureMax>{Math.round(item.main.temp_max)}º</Styled.TemperatureMax>
              </Styled.ContainerForecast>
              <Styled.Divider />
            </>
          ))}
        </Styled.ScrollContainer>
      </Styled.Container>
    </>
  );
}
