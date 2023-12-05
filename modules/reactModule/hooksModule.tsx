import {useState, useTransition} from "react";

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

/**
 * useEffect - подпись на события
 * function useEffect(effect: EffectCallback, deps?: DependencyList): void;
 */

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