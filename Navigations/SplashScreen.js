import React, {useCallback, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Image} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Colors} from '../App/Configs/Colors';
import Images from '../App/Configs/Images';
import {useSelector} from 'react-redux';

export const SplashScreen = () => {
  const navigation = useNavigation();
  const { isLogin } = useSelector(state => state.auth);

  const resetNavigation = useCallback(
    routeName => {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: routeName}],
      });
      navigation.dispatch(resetAction);
    },
    [navigation],
  );

  useEffect(() => {
    const checkAuth = async () => {
      if (isLogin) {
        resetNavigation('Auth');
      } else {
        resetNavigation('Main');
      }
    };
    checkAuth();
  }, [isLogin, resetNavigation]);

  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator style={styles.icon} size="large" />
        <Image source={Images.logo} resizeMode="contain" style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Gray,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    zIndex: -1,
  },
});
