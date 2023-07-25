import React, {useEffect, useCallback, useState, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {IconOutline} from '@ant-design/icons-react-native';

import Text from '../../App/Components/Text';
import {Colors} from '../../App/Configs/Colors';
import Images from '../../App/Configs/Images';
import Routes from '../../App/Utils/Route';
import AlertModal from '../../App/Components/Alert';
import {useDispatch} from 'react-redux';
import {handleLogout} from '../../App/Redux/reducer/authSlice';
import {CommonActions} from '@react-navigation/native';

const DrawerContainer = ({navigation}) => {
  const alertRef = useRef(null);
  const dispatch = useDispatch();

  const user = {
    avatar:
      'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg',
    name: 'loi',
  };

  const doLogout = () => {
    dispatch(handleLogout());
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{name: 'Auth'}],
    });
    navigation.dispatch(resetAction);
    alertRef.current.hideModal();
  };

  const onLogout = () => {
    alertRef.current.alert('Account logout do you really want to logout', '', [
      {
        label: 'logout',
        onPress: doLogout,
        style: {marginRight: 7},
      },
      {
        primary: true,
        label: 'cancel',
        onPress: () => alertRef.current.hideModal(),
        style: {marginLeft: 7},
      },
    ]);
  };

  const goToMyAccount = () => {
    navigation.navigate(Routes.MyAccount);
  };

  const goToPolicy = () => {
    navigation.navigate(Routes.TermAndPolicy);
  };

  const goToContact = () => {
    navigation.navigate(Routes.ContactUs);
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={[styles.row, styles.logoWrap]}>
          <Image source={Images.logo} style={styles.logo} />

          <View style={styles.avatarBackground}>
            {user.avatar ? (
              <Image source={{uri: user.avatar}} style={styles.avatar} />
            ) : (
              <View style={styles.avatar}>
                {/* <Icon name={'user'} size={27} /> */}
              </View>
            )}
            <View style={styles.textContainer}>
              <Text style={[styles.fullName]}>{user?.name}</Text>
              <Text style={[styles.email]}>
                {user ? user.phone_number : ''}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View>
            <Row
              onPress={goToMyAccount}
              image={'user'}
              name={'text_my_account'}
            />
            <Row
              onPress={() => navigation.navigate(Routes.Language)}
              image={'global'}
              name={'text_language'}
            />
            <Row onPress={onLogout} image={'export'} name={'logout'} />
          </View>
        </View>
        <AlertModal ref={alertRef} />
      </ScrollView>
    </SafeAreaView>
  );
};

export const Row = ({name, onPress, image, borderBottom, testID}) => {
  const nameActiveFeature = [
    'text_my_account',
    'text_language',
    'logout',
    'policy',
    'text_contact',
  ];
  const textColor =
    nameActiveFeature.indexOf(name) < 0 ? 'rgba(0,0,0,0.2)' : 'black';
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.row,
        styles.optionWrap,
        borderBottom && styles.borderBottom,
      ]}>
      <IconOutline
        name={image}
        size={24}
        color={
          nameActiveFeature.indexOf(name) < 0 ? 'rgba(0,0,0,0.2)' : 'black'
        }
      />

      <View style={styles.wrapText}>
        <Text
          style={[
            styles.text,
            {
              color: textColor,
            },
          ]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapText: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  text: {
    fontSize: 16,
    color: Colors.Gray8,
  },
  wrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.White,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  borderBottom: {
    borderBottomColor: Colors.Gray4,
    borderBottomWidth: 1,
  },
  logoWrap: {
    paddingTop: 32,
    paddingLeft: 28,
    paddingRight: 23,
  },
  optionWrap: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 32,
  },
  logo: {
    width: 32,
    height: 16,
    position: 'absolute',
    top: 10,
    left: 30,
  },

  // header
  avatarBackground: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 22,
    borderBottomColor: Colors.Gray4,
    borderBottomWidth: 1,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: Colors.Gray5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 15,
    justifyContent: 'flex-start',
    flex: 1,
  },
  fullName: {
    backgroundColor: Colors.TextTransparent,
    fontSize: 16,
    marginBottom: 6,
    color: Colors.Black,
    fontWeight: 'bold',
  },
  email: {
    backgroundColor: Colors.TextTransparent,
    fontSize: 14,
    color: Colors.Gray8,
  },
  containerRow: {
    paddingHorizontal: 28,
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default DrawerContainer;
