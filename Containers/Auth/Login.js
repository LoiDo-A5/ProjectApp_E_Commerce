import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Routes from '../../App/Utils/Route';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './LoginStyles';
import Images from '../../App/Configs/Images';
import Text from '../../App/Components/Text';
import TextInput from '../../App/Components/Form/TextInput';
import TextInputPassword from '../../App/Components/Form/TextInputPassword';

const Login = () => {
  const navigation = useNavigation();
  const [phone, setPhoneState] = useState('');
  const [phoneError, setPhoneErrorState] = useState();
  const [password, setPasswordState] = useState('');
  const [passwordError, setPasswordlErrorState] = useState();
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
            // onSubmitEditing={validate}
          />
          <TouchableOpacity style={styles.forgotWrap}>
            <Text
              onPress={() => {
                navigation.navigate(Routes.ForgotPassword);
              }}
              style={styles.forgotText}>
              {'Forgot Password ?'}
            </Text>
          </TouchableOpacity>

          <View style={[styles.buttonWrap]}>
            <Button type="auth" title={'Login'} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
