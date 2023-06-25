import React, {useCallback, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Colors} from '../App/Configs/Colors';

export const SplashScreen = () => {
  const navigation = useNavigation();

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
      if (true) {
        resetNavigation('Auth');
      } else {
        resetNavigation('Auth');
      }
    };
    checkAuth();
  }, [resetNavigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
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
});
