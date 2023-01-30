import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Weather from '../modules/weatherScreen/screens/weather';
import { theme } from '../theme';
import { Icon, IconSearch } from './styles';
import Search from '../modules/search/screens/search';

const Tab = createBottomTabNavigator();

export default function Routes() {
  const { colors } = theme;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primaryText,
          tabBarInactiveTintColor: colors.third,
          tabBarShowLabel: false,
          headerStyle: {
            height: 80,
            backgroundColor: colors.backgroundHeader,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
          },
          headerTintColor: colors.primaryText,
          tabBarStyle: {
            backgroundColor: colors.primary,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Weather}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              return <Icon color={color} size={25} />;
            },
          }}
        />
        <Tab.Screen
          name="Tempo"
          component={Search}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return <IconSearch color={color} size={25} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
