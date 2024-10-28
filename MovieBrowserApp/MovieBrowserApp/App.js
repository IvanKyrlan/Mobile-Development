import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './screens/SearchScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Movie Browser App',
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Details"
          component={MovieDetailsScreen}
          options={{
            title: 'Movie Details',
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
