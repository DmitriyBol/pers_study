import {useState} from "react";

const DEFAULT_VALUE = 0;
const DEFAULT_TEXT = 'Interact with button to see response';
let cache = new Map();

export const CachedCalculation = () => {
    const [number, setNumber] = useState(DEFAULT_VALUE);
    const [responseText, setResponseText] = useState(DEFAULT_TEXT)

    let calculate = (a: number, b: number): number => {
        return a + b;
    }

    const cachingDecorator = (func: Function) => {
        return function(a, b) {
            if (cache.has(a + b)) {
                setNumber(-1);
                const cachedObj = cache.get(a + b);

                setResponseText(
                    `number already exist, returned from cache - ${cachedObj}`
                )
                return cache.get(a + b);
            }

            let result = func(a, b);

            setNumber(result);
            setResponseText('cached!');
            cache.set(a + b, result);
            return result;
        };
    }

    const onClickHandler = () => {
        const number1 = Math.floor(Math.random() * 10);
        const number2 = Math.floor(Math.random() * 10);
        console.log('random 2 numbers', number1, number2);

        calculate = cachingDecorator(calculate);
        calculate(number1, number2);
    }

    return (<div>
        <h1>{number}</h1>
        <p>{responseText}</p>
        <button type='button' onClick={onClickHandler}>Calculate</button>
    </div>)
}