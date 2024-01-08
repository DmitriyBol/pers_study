import {useState} from "react";

const DEFAULT_VALUE = 0;
const DEFAULT_TEXT = 'Interact with button to see response';
let cache = new Map();

export const CachedCalculation = () => {
    const [number, setNumber] = useState(DEFAULT_VALUE);
    const [responseText, setResponseText] = useState(DEFAULT_TEXT)

    let calculate = (x: number): number => {
        return x;
    }

    const cachingDecorator = (func: Function) => {
        return function(x) {
            console.log('cache', cache)

            if (cache.has(x)) {
                setNumber(-1);
                const cachedObj = cache.get(x);

                setResponseText(
                    `number already exist, returned from cache - ${cachedObj}`
                )
                return cache.get(x);
            }

            let result = func(x);

            setNumber(result);
            setResponseText('cached!');
            cache.set(x, result);
            return result;
        };
    }

    const onClickHandler = () => {
        const number = Math.floor(Math.random() * 10);
        console.log('random 1 to 10 number is', number);

        calculate = cachingDecorator(calculate);
        calculate(number);
    }

    return (<div>
        <h1>{number}</h1>
        <p>{responseText}</p>
        <button type='button' onClick={onClickHandler}>Calculate</button>
    </div>)
}