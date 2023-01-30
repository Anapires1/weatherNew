import React, { createContext, useContext, useState } from 'react';
import { InitialValueProps, LocalCurrentForecastProps, HourlyForecastFourDaysProps } from './contexts.types';

export const initialValues = {
  localCurrentForecast: {} as LocalCurrentForecastProps,
  setLocalCurrentForecast: () => {},
  forecast: {} as HourlyForecastFourDaysProps,
  setForecast: () => {},
};

export const AuthContext = createContext<InitialValueProps>(initialValues);

export const useAuthContext = () => useContext<InitialValueProps>(AuthContext);

export default function AuthProvider({ children }) {
  const [localCurrentForecast, setLocalCurrentForecast] = useState(initialValues.localCurrentForecast);
  const [forecast, setForecast] = useState(initialValues.forecast);
  return (
    <AuthContext.Provider value={{ localCurrentForecast, setLocalCurrentForecast, forecast, setForecast }}>
      {children}
    </AuthContext.Provider>
  );
}
