import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerContainer from '../Containers/Drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '../Containers/Dashboard';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

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
  const {isLogin} = useSelector(state => state.auth);
  const navigation = useNavigation();

  useEffect(() => {
    if (!isLogin) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Auth'}],
      });
    }
  }, [isLogin, navigation]);

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          headerTitleAlign: 'center',
        })}>
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
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
