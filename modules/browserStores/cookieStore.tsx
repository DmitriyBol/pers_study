import {useState} from "react";
import {cookieStore} from "./storeEngines/storeEngines";

export const CookieStoreExample = () => {
    const [cookieData, setCookieData] = useState('');

    const writeCookieHandler = () => {
        cookieStore.set('testKey', 'someValue');
        setCookieData('cookieWrited')
    }

    const clearCookieHandler = () => {
        setCookieData('');
        cookieStore.remove('testKey');
    }

    return (
        <>
            {cookieData && <h4>{cookieData}</h4>}
            <button onClick={writeCookieHandler}>Write cookie</button>
            <button onClick={clearCookieHandler}>Clear cookie</button>
        </>
    )
}