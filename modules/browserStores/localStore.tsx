import {SetStateAction, useState} from "react";
import {sessionStore} from "./storeEngines/storeEngines";

export const LocalStoreExample = () => {
    const [localStoreKey, setLocalStoreKey] = useState('');
    const [searchLocalStoreKey, setSearchLocalStoreKey] = useState('');

    const inputChangeDirectState = (event, stateFunction: SetStateAction<any>) => {
        stateFunction(event.target.value);
    }

    const writeLocalKey = () => {
        if (!localStoreKey) return;
        const isCookieAvailable = sessionStore.get(localStoreKey, false);

        if (isCookieAvailable) {
            console.log(`cookie ${isCookieAvailable} is removed`);
            sessionStore.remove(localStoreKey);
            setLocalStoreKey('');
            return;
        }
        console.log(`cookie ${isCookieAvailable} is added`);
        sessionStore.set(localStoreKey, true);
        setLocalStoreKey('');
        return;
    }

    const displayLocalKey = () => {
        if (!searchLocalStoreKey) return;
        const sessionCookie = sessionStore.get(searchLocalStoreKey);

        if (sessionCookie) {
            console.log('sessionCookie', sessionCookie)
        } else {
            console.log('no session cookie was found!');
        }
    }

    return (
        <div>
            <input type="text" value={localStoreKey} onChange={(e) => inputChangeDirectState(e, setLocalStoreKey)}/>
            <button type='button' onClick={writeLocalKey}>Add Key in localStore with true</button>
            <input type="text" value={searchLocalStoreKey} onChange={(e) => inputChangeDirectState(e, setSearchLocalStoreKey)}/>
            <button type='button' onClick={displayLocalKey}>Display Key in localStore</button>
        </div>
    )
}