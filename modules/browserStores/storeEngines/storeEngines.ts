import defaults from 'store/plugins/defaults';
import expire from 'store/plugins/expire';
import cookieStorage from 'store/storages/cookieStorage';
import storeEngine from 'store/src/store-engine';
import localStorage from 'store/storages/localStorage';
import sessionStorage from 'store/storages/sessionStorage';

type CookieStoreType = {
    testKey: string;
};

type NonUndefinedType<T> = T extends undefined ? never : T;

interface StoreJsAPI {
    readonly version: string;
    readonly enabled: boolean;
    get(key: string, optionalDefaultValue?: any): any;
    set(key: string, value: any): any;
    remove(key: string): void;
    each(callback: (val: any, namespacedKey: string) => void): void;
    clearAll(): void;
    hasNamespace(namespace: string): boolean;
    createStore(plugins?: Function[], namespace?: string): StoreJsAPI;
    addPlugin(plugin: Function): void;
    namespace(namespace: string): StoreJsAPI;
}

export type CookieStoreEngineType = Pick<StoreJsAPI, 'each' | 'clearAll'> & {
    set: <T extends keyof CookieStoreType>(key: T, value: CookieStoreType[T]) => void;
    get: <T extends keyof CookieStoreType, F extends CookieStoreType[T]>(
        key: T,
        optionalDefaultValue?: F,
    ) => F extends undefined ? CookieStoreType[T] : NonUndefinedType<CookieStoreType[T]>;
    remove: (key: keyof CookieStoreType) => void;
};

export type LocalStoreEngineType = Pick<StoreJsAPI, 'each' | 'clearAll'> & {
    set: <T>(key: T, value: [T]) => void;
    get: <T, S>(key: T, optionalDefaultValue?: S) => S [T];
    remove: (key: any) => void;
};

export const cookieStore = (storeEngine.createStore([cookieStorage], [defaults, expire]) as CookieStoreEngineType);

export const sessionStore = storeEngine.createStore([sessionStorage]);

export const localStore = (storeEngine.createStore([localStorage]) as LocalStoreEngineType);