import axios from 'axios';
import API from '../Configs/API';
import {store} from '../Redux/store';
import {handleLogout, setAccessToken} from '../Redux/reducer/authSlice';
import {resetUser} from '../Redux/reducer/userSlice';
import {ToastBottomHelper} from '../Utils/utils';

export const baseUrl = 'http://localhost:5001/v1';

const getNewAccessToken = async refreshToken => {
  try {
    const response = await axios.post(`${baseUrl}${API.AUTH.REFRESH_TOKEN}`, {
      refreshToken: refreshToken,
    });
    const {
      data: {accessToken},
    } = response.data;
    return accessToken;
  } catch (error) {
    console.error('Error refreshing access token:', error);
  }
};

export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  headers: {'Content-Type': 'application/json'},
});

export const stateStore = store.getState();

axiosPrivate.interceptors.request.use(
  config => {
    const accessToken = stateStore.auth.accessToken;

    if (!config.headers.Authorization && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

axiosPrivate.interceptors.response.use(
  response => response.data,
  async error => {
    const refreshToken = stateStore.auth.refreshToken;

    if (error && error.response) {
      const htmlResponse = error.response.data;
      const tokenExpiredErrorPattern = /TokenExpiredError/g;
      const isTokenExpiredError = tokenExpiredErrorPattern.test(htmlResponse);

      const prevRequest = error.config;
      if (error.response.status === 401) {
        if (isTokenExpiredError && !prevRequest?.sent) {
          const newAccessToken = await getNewAccessToken(refreshToken);

          if (!newAccessToken) {
            ToastBottomHelper.error('Phiên làm việc của bạn đã kết thúc');
            store.dispatch(resetUser());
            store.dispatch(handleLogout());
            return;
          }

          store.dispatch(setAccessToken(newAccessToken));
          return axiosPrivate({
            ...prevRequest,
            headers: {
              ...prevRequest.headers,
              Authorization: `Bearer ${newAccessToken}`,
            },
            sent: true,
          });
        }
      }
      return Promise.reject(error);
    }
  },
);
export default axiosPrivate;
