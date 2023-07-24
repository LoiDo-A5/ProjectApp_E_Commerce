import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Button, SafeAreaView, Image, Keyboard} from 'react-native';
import Routes from '../../../App/Utils/Route';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './LoginStyles';
import Images from '../../../App/Configs/Images';
import Text from '../../../App/Components/Text';
import TextInput from '../../../App/Components/Form/TextInput';
import TextInputPassword from '../../../App/Components/Form/TextInputPassword';
import useLogin from './hook/useLogin';
import {useSelector} from 'react-redux';

const Login = () => {
  const {isLogin} = useSelector(state => state.authReducer);
  const navigation = useNavigation();
  const {isLoading, handleClickLogin} = useLogin();

  console.log('22222222', isLogin);

  const [phone, setPhoneState] = useState('');
  const [phoneError, setPhoneErrorState] = useState();
  const [password, setPasswordState] = useState('');
  const [passwordError, setPasswordlErrorState] = useState();

  const validate = () => {
    Keyboard.dismiss();
    let hasError = false;
    if (!phone) {
      setPhoneErrorState('Please enter your phone number');
      hasError = true;
    } else {
      setPhoneErrorState('');
    }
    if (!password) {
      setPasswordlErrorState('Please enter your password');
      hasError = true;
    } else {
      setPasswordlErrorState('');
    }
    if (!hasError) {
      handleClickLogin({username: phone, password: password});
    }
  };

  useEffect(() => {
    if (isLogin) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
    }
  }, [isLogin, navigation]);

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
        <View style={[styles.center]}>
          <Text bold style={styles.loginText}>
            {'LOGIN'}
          </Text>
          <TextInput
            placeholder={'Phone Number'}
            onChange={setPhoneState}
            errorText={phoneError}
            value={phone}
            keyboardType={'numeric'}
            textInputStyle={styles.paddingVertical}
          />
          <TextInputPassword
            secureTextEntry
            placeholder={'Password'}
            onChange={setPasswordState}
            value={password}
            errorText={passwordError}
            textInputStyle={styles.paddingVertical}
            returnKeyType={'done'}
            onSubmitEditing={validate}
          />

          <View style={[styles.buttonWrap]}>
            <Button type="auth" title={'Login'} onPress={validate} />
          </View>
        </View>

        <View style={styles.touWrap}>
          <Text style={[styles.touText]}>{'Dont have an account ?.'}</Text>
          <Text
            bold
            style={styles.signUpText}
            onPress={() => navigation.navigate(Routes.SignUp)}>
            {' ' + 'Sign up'}
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
