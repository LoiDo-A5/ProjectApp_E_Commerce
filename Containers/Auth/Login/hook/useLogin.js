import {useState} from 'react';
import {ToastBottomHelper} from '../../../../App/Utils/utils';
import axios from 'axios';
import {baseUrl} from '../../../../App/axiosPrivate';
import API from '../../../../App/Configs/API';
import {useDispatch} from 'react-redux';
import {updateAuthentication} from '../../../../App/Redux/reducer/authSlice';
import {updateUser} from '../../../../App/Redux/reducer/userSlice';

const useLogin = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleClickLogin = async values => {
    if (!values) {
      return;
    }
    const {username, password} = values;
    if (!username || !password) {
      ToastBottomHelper.error('Please enter your full account');
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(`${baseUrl}${API.AUTH.LOGIN}`, {
        user_name: username,
        password: password,
      });
      const {error, result, message} = response.data;

      if (!error) {
        const {
          id,
          user_name,
          full_name,
          email,
          phone_number,
          address,
          refreshToken,
          accessToken,
        } = result;
        dispatch(
          updateAuthentication({accessToken, refreshToken, isLogin: true}),
        );
        // dispatch(
        //   updateUser({
        //     id,
        //     user_name,
        //     password,
        //     full_name,
        //     email,
        //     phone_number,
        //     address,
        //   }),
        // );
      } else {
        ToastBottomHelper.error(message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleClickLogin,
  };
};

export default useLogin;
