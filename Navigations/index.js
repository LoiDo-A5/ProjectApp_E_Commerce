import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import Routes from '../App/Utils/Route';
import utils from './utils';
import {Colors} from '../App/Configs/Colors';
import {SplashScreen} from './SplashScreen';
import {AuthStack} from './AuthStack';

const Stack = createStackNavigator();

let NavStack = memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.SignInScreen}
      screenOptions={{
        ...utils.screenOptions,
        headerShown: true,
        headerTintColor: '#000',
        headerBackTitle: true,
        headerStyle: {
          elevation: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
          backgroundColor: Colors.Gray2,
        },
        headerLeftContainerStyle: {
          marginLeft: 12,
        },
      }}>
      <Stack.Screen
        name={Routes.Splash}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.Auth}
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
});

const AppWithNavigationState = () => {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
};

export default AppWithNavigationState;
