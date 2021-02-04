import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



import MovieHome from '~/Screens/MovieHome';
import MovieDetail from '~/Screens/MovieDetail';

const Stack = createStackNavigator();



const MovieNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MovieHome"
        component={MovieHome}
        options={{
          title: 'Rubi APP',
          headerTintColor: '#e03838',
          headerStyle: {
            backgroundColor: '#000000',
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
          },
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          title: 'Rubi APP',
          headerTintColor: '#e03838',
          headerStyle: {
            backgroundColor: '#000000',
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {

  return (
    <NavigationContainer>
      <MovieNavigator />
    </NavigationContainer>
  );
};
