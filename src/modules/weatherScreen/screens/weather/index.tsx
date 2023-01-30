import React, { useEffect } from 'react';
import Header from '../../components/header';
import useWeatherServices from '../../../../services/weather.services';
import * as Styled from './weather.styles';
import HourlyWeatherContainer from '../../components/hourlyContainer';
import DayWeatherContainer from '../../components/dayContainer';

export default function Weather() {
  const { currentLocation, loading, error } = useWeatherServices();

  useEffect(() => {
    currentLocation();
  }, []);

  return (
    <>
      {loading ? (
        <Styled.LoadingContainer>
          <Styled.LottieLoading loop autoPlay />
        </Styled.LoadingContainer>
      ) : error ? (
        <Styled.LoadingContainer>
          <Styled.LottieErrror loop autoPlay />
        </Styled.LoadingContainer>
      ) : (
        <Styled.ContainerScreen>
          <Header />
          <Styled.ContainerScroll>
            <HourlyWeatherContainer />
            <DayWeatherContainer />
          </Styled.ContainerScroll>
        </Styled.ContainerScreen>
      )}
    </>
  );
}
