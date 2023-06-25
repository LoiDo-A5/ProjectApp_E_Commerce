import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Button, SafeAreaView, Image} from 'react-native';
import Routes from '../../App/Utils/Route';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './LoginStyles';
import Images from '../../App/Configs/Images';

const Login = () => {
  const navigation = useNavigation();

  const handleSignupPress = () => {
    navigation.navigate(Routes.SignUp);
  };
  return (
    <SafeAreaView style={styles.wrap}>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.scrollView, styles.hwrap]}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.wrapLogo}>
          <Image
            source={Images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Button title="Signup" onPress={handleSignupPress} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
