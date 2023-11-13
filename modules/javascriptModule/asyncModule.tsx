import {useEffect, useState} from "react";

// fake data from https://jsonplaceholder.typicode.com/
const FETCH_URL_STRICT = 'https://jsonplaceholder.typicode.com/posts/1';

/**
 * q: что значит асинхронный код и в чем его польза?
 * a: Асинхронный код позволяет выполнять логику без очереди задач,
 * данная логика ждет своего выполенения и после резолва или реджекта проиводит свои манипуляции с данными.
 * Если общими чертами - асинхронность не блокирует основной поток выполнения.
 *
 * example: логика отрисовки ДОМ просходит паралельно при асинхронных запросах
 */
export const AsyncExampleOne = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(FETCH_URL_STRICT)
            .then((response) => response.json())
            .then((json) => setData(json))
    }, []);

    return (
        <div>
            <p>We requesting something, answer below</p>
            {data ? <p>{data.body}</p> : <p>Loading...</p>}
        </div>
    )
}

type DataPropsType = {
    userId: number;
    body: string;
    title: string;
    id: number;
}

export const AsyncExampleTwoWithFakeData = ({...props}: Partial<DataPropsType>) => {
    console.log(props)
    return (
        <div>
            <h4>{props.userId}{' -- '}{props.id}</h4>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}