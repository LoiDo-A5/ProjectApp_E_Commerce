import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerContainer from '../Containers/Drawer';

// Define your screen components
const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View>
    <Text>Profile Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View>
    <Text>Settings Screen</Text>
  </View>
);

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerTitleAlign: 'center', // Align the title to the center
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            headerTitleAlign: 'center', // Align the title to the center
          }}
          name="Profile"
          component={ProfileScreen}
        />
        <Tab.Screen
          options={{
            headerTitleAlign: 'center', // Align the title to the center
          }}
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </>
  );
};

// Create the drawer navigator
const Drawer = createDrawerNavigator();

const MainDrawer = () => (
  <Drawer.Navigator
    backBehavior="none"
    drawerType={'slide'}
    // eslint-disable-next-line react/no-unstable-nested-components
    drawerContent={props => <DrawerContainer {...props} />}>
    <Drawer.Screen
      options={{title: '', headerTransparent: true}}
      name="Stack"
      component={StackNavigator}
    />
  </Drawer.Navigator>
);

export default MainDrawer;
