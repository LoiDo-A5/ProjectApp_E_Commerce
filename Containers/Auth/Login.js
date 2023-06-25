import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Button, SafeAreaView, Image} from 'react-native';
import Routes from '../../App/Utils/Route';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './LoginStyles';
import Images from '../../App/Configs/Images';
import Text from '../../App/Components/Text';
import TextInput from '../../App/Components/Form/TextInput';

const Login = () => {
  const navigation = useNavigation();
  const [phone, setPhoneState] = useState('');
  const [phoneError, setPhoneErrorState] = useState();

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
        </View>
        <Button title="Signup" onPress={handleSignupPress} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
