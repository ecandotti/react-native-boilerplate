import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorageService {
  async save(key: string, value: any): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error('Failed to save data to local storage', e);
    }
  }

  async get(key: string): Promise<any> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Failed to get data from local storage', e);
    }
  }

  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('Failed to remove data from local storage', e);
    }
  }
}
