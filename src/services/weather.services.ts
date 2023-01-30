import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { PermissionsAndroid } from 'react-native';
import { useAuthContext } from '../contexts/auth';
import { ForecastProps, LocalCurrentForecastProps } from '../contexts/contexts.types';
import { CurrentLocationProps } from './weather.types';

export default function useWeatherServices() {
  const { setLocalCurrentForecast, setForecast } = useAuthContext();
  const [location, setLocation] = useState<CurrentLocationProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (location) {
      (async () => {
        await currentForecast();
        forecast();
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  async function currentLocation() {
    const result = requestLocationPermission();
    result.then((res) => {
      if (res) {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            setLocation(position);
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      }
    });
  }
  // async function currentLocation() {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       setCurrentLongitude(JSON.stringify(position.coords.longitude));
  //       setCurrentLatitude(JSON.stringify(position.coords.latitude));
  //       console.tron.log(currentLatitude, currentLongitude);
  //       if (currentLatitude && currentLongitude) {
  //         currentForecast();
  //         hourlyForecastFourDays();
  //       } else {
  //         Alert.alert('erro');
  //       }
  //     },
  //     (error) => Alert.alert(error.message),
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 20000,
  //       maximumAge: 1000,
  //     },
  //   );
  // }

  async function forecast() {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location?.coords?.latitude}&lon=${location?.coords?.longitude}&lang=pt_br&units=metric&appid=5e3a728896ac5d08c92a18e55cb13c5c`,
      );
      setForecast(data);
      setLoading(false);
    } catch (_) {
      setLoading(false);
      setError(true);
    }
  }

  async function currentForecast() {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location?.coords?.latitude}&lon=${location?.coords?.longitude}&lang=pt_br&units=metric&appid=5e3a728896ac5d08c92a18e55cb13c5c`,
      );
      setLocalCurrentForecast(data);
    } catch (_) {
      setLoading(false);
      setError(true);
    }
  }

  return {
    currentForecast,
    currentLocation,
    loading,
    error,
  };
}
