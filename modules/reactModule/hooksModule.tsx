import {useEffect, useState, useTransition} from "react";

/**
 * useState - компонентное хранилище данных, стейта
 * function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
 */
export const UseStateHookExample = () => {
    const [data, setData] = useState('');

    const clickHandler = () => {
        setData('data changed by click!')
    }

    return (<>
        <button type='button' onClick={clickHandler}>click me!</button>
        <div>this hook need to store state in component: {data}</div>
    </>);
}

/**
 * custom useState update hook return state and updater for it
 * @param propState
 */
export const useStateCustom = (propState) => {
    const [state, setState] = useState(propState);
    const updateStateFunc = (state) => {
        setState(state);
    }
    return {state, updateStateFunc};
}

const DEFAULT_VALUE = 0;

/**
 * useEffect - подпись на события
 * function useEffect(effect: EffectCallback, deps?: DependencyList): void;
 */
export const UseEffectHookExample = () => {
    const [number, setNumber] = useState(DEFAULT_VALUE);
    // with empty deps - renders once then component renders
    // without deps at all - render on every change
    // with deps - (re)renders everytime then deps is changed

    // this runs only once (will set number to default value)
    useEffect(() => {
        console.log('1');
        setNumber(DEFAULT_VALUE);
    }, [])

    // this run on ANY change and first render
    useEffect(() => {
        // sync
        console.log('11');
        // unmount event
        return () => {
            console.log('22');
        }
    })

    // this run on deps change and first render
    useEffect(() => {
        // sync
        console.log('111');
        // unmount event
        return () => {
            console.log('222');
        }
    }, [number])

    const onClickHandler = () => {
        console.log('updated');
        setNumber(prevState => prevState + 1);
    }

    const onClickResetHandler = () => {
        console.log('reset');
        setNumber(DEFAULT_VALUE);
    }

    return (<div>
        <h1>{number}</h1>
        <button type='button' onClick={onClickHandler}>update number</button>
        <button type='button' onClick={onClickResetHandler}>reset number</button>
    </div>)
}

/**
 * useCallback - кеширует функцию, предотвращает ререндер компонента
 * function useCallback<T extends Function>(callback: T, deps: DependencyList): T;
 *
 * обзязательно нужно оборачивать функции которые передаются пропсами
 *
 */

/**
 * useMemo
 * function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
 */

/**
 * useContext
 * function useContext<T>(context: Context<T>, (*)): T;
 * (*) - (not public API) observedBits?: number|boolean
 */

/**
 * useReducer
 *     function useReducer<R extends Reducer<any, any>>(
 *         reducer: R,
 *         initialState: ReducerState<R>,
 *         initializer?: undefined
 *     ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
 */

/**
 * useTransition
 *      Позволяет обновить состояние без блокировки UI.
 *      function useTransition(): [boolean, TransitionStartFunction];
 */