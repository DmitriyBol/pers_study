/**
 * this is example HOC, execute function and props if need and execute it
 */
import React, {useEffect, useState} from "react";

import './examplesHOC.css';

const FETCH_URL_STRICT = 'https://jsonplaceholder.typicode.com/posts/1';

type PropsType = {
    componentOrFunction: Function | React.Component,
    needFakeData?: boolean,
    label?: string,
}

/**
 *
 * @param componentOrFunction component or function enter
 * @param needFakeData need for some fake data in new component (partial)
 * @constructor
 */
export const ExamplesHOC = ({
    componentOrFunction,
    needFakeData,
    label
}: PropsType) => {
    const [answer, setAnswer] = useState<any>();
    const [fakeData, setFakeData] = useState({});

    useEffect(() => {
        if (needFakeData) {
            fetch(FETCH_URL_STRICT)
                .then((response) => response.json())
                .then((json) => setFakeData(json))
        }
        return () => setFakeData({});
    }, [needFakeData])

    if (!componentOrFunction) return null;

    const componentWithFakeData = () => {
        if (React.isValidElement(componentOrFunction) && needFakeData) {
            return React.cloneElement(componentOrFunction, fakeData)
        }
    }

    if (React.isValidElement(componentOrFunction)) {
        return (
            <div className='component'>
                <span className='label'>{label}</span>
                {needFakeData ? componentWithFakeData() : componentOrFunction}
            </div>
        )
    }

    return (
        <div className='function'>
            <span className='label'>{label}</span>
            <button typeof='button' onClick={() => {
                setAnswer(componentOrFunction);
            }}>{answer ? answer : 'Click me!'}</button>
        </div>
    )

}