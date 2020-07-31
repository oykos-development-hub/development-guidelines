// Internal dependencies
import {UtilService} from './util.service';
const localStorageKey = 'DevelopmentGuidelinesStore';
const localStorageAPI = {
    update: (data) => {
        if (localStorage) {
            const localStorageData = data ? UtilService.clone(data) : {};
            localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
            return true;
        }
        return false;
    },
    get: () => {
        const data = localStorage.getItem(localStorageKey);
        return JSON.parse(data);
    }
};
let cachedData = {};
export const StoreService = {
    initialize: () => {
        let storage = localStorageAPI.get();
        if (storage) {
            cachedData = storage;
        } else {
            cachedData = StoreService.getEmptyData();
        }
        localStorageAPI.update(cachedData);
        StoreService.hooks = {};
    },
    getEmptyData: () => {
        return {};
    },
    getStoreData: () => {
        return UtilService.clone(cachedData);
    },
    getStoreProperty: (property) => {
        const currentStore = UtilService.clone(cachedData);
        if (!property) return null;
        return currentStore[property];
    },
    updateStoreData: (data) => {
        if (data) {
            Object.keys(data).forEach((key) => {
                cachedData[key] = data[key];
            });
        }
        localStorageAPI.update(cachedData);
        const clonedData = StoreService.getStoreData();
        Object.values(StoreService.hooks).forEach((hookCallback) => {
            hookCallback(clonedData);
        });
    },
    updateStoreProperty: (property, value) => {
        if (!property) return null;
        cachedData[property] = value;
        localStorageAPI.update(cachedData);
        const clonedData = StoreService.getStoreData();
        Object.values(StoreService.hooks).forEach((hookCallback) => {
            hookCallback(clonedData);
        });
    },
    hookOnStoreUpdate: (hookName, hookCallback) => {
        StoreService.hooks[hookName] = hookCallback;
    },
    deleteHookOnStoreUpdate: (hookName) => {
        delete StoreService.hooks[hookName];
    },
    clearStoreData: () => {
        let emptyData = StoreService.getEmptyData();
        cachedData = emptyData;
        localStorageAPI.update(cachedData);
    }
};