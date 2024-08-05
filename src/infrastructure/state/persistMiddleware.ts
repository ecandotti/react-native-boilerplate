import { StateCreator } from 'zustand';
import { LocalStorageService } from '../services/localStorageService';

const localStorageService = new LocalStorageService();

export const persistMiddleware =
  <T extends object>(config: StateCreator<T>, key: string, blacklist?: string[]): StateCreator<T> =>
  (set, get, api) => {
    const loadPersistedState = async () => {
      try {
        const data = await localStorageService.get(key);
        if (data) {
          const parsedData = JSON.parse(data);
          return parsedData;
        }
      } catch (error) {
        console.error('Failed to load state', error);
      }
      return {};
    };

    const applyPersistedState = async () => {
      const persistedState = await loadPersistedState();
      const stateToApply = { ...persistedState };

      if (blacklist !== undefined) {
        blacklist.forEach(field => {
          delete stateToApply[field];
        });
      }
      set(stateToApply);
    };

    const result = config(
      (fn: any) => {
        return set((state: any) => {
          const newState = { ...state, ...fn(state) };
          localStorageService.save(key, JSON.stringify(newState));
          return newState;
        });
      },
      get,
      api
    );

    applyPersistedState();

    return result;
  };
