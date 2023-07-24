import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  static async getItem(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error getting item from AsyncStorage:', error);
      return null;
    }
  }

  static async setItem(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting item in AsyncStorage:', error);
    }
  }

  static async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from AsyncStorage:', error);
    }
  }

  static async clear() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  }

  static async updateValueOfKey(keyInLocalStorage, key, newValue) {
    try {
      const _value = await LocalStorage.getItem(keyInLocalStorage);
      _value[key] = newValue;
      await LocalStorage.setItem(keyInLocalStorage, _value);
    } catch (error) {
      console.error('Error updating value in AsyncStorage:', error);
    }
  }
}

export default LocalStorage;
