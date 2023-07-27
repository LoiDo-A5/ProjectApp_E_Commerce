import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axiosPrivate from '../../App/axiosPrivate';
import API from '../../App/Configs/API';

const Dashboard = () => {
  const handleClick = async () => {
    try {
      //   const response = await axios.post(`${baseUrl}${API.ORDER}`, {
      //     user_id: 1,
      //   });
      const response = await axiosPrivate.post(API.ORDER, {
        user_id: 1,
      });

      const {error, data, message} = response;
      console.log('555555555555', error, data, message);
    } catch (error) {
      console.log('6666666666', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text onPress={handleClick} style={styles.text}>
        Dashboard Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Dashboard;
