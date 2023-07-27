import Toast from 'react-native-toast-message';
import CryptoJS from 'crypto-js';

export const ToastBottomHelper = {
  success: (msg, visibilityTime = 2000) => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: msg,
      visibilityTime: 2000,
    });
  },
  error: (msg, visibilityTime = 2000) => {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: msg,
      visibilityTime: visibilityTime,
    });
  },
};

export const _makeRandomText = length => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateApiKey = () => {
  const cipherText = CryptoJS.AES.encrypt(
    _makeRandomText(16),
    process.env.REACT_APP_CLIENT_SECRET_KEY,
  );
  return cipherText.toString();
};
