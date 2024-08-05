import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorageService } from './localStorageService';

jest.mock('@react-native-async-storage/async-storage');

describe('LocalStorageService', () => {
  const localStorageService = new LocalStorageService();

  it('should save data to AsyncStorage', async () => {
    const key = 'testKey';
    const value = { data: 'testData' };

    await localStorageService.save(key, value);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });

  it('should get data from AsyncStorage', async () => {
    const key = 'testKey';
    const value = { data: 'testData' };

    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(value));

    const result = await localStorageService.get(key);

    expect(result).toEqual(value);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key);
  });

  it('should remove data from AsyncStorage', async () => {
    const key = 'testKey';

    await localStorageService.remove(key);

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(key);
  });
});
