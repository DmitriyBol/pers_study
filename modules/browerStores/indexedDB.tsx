import {SetStateAction, useEffect, useState} from "react";

export const INDEXED_DB_NAME = 'TEST_BASE';
export const INDEXED_INPUT_STORE = 'INPUTS';

const openDataBase = window.indexedDB.open(INDEXED_DB_NAME, 1);
openDataBase.onupgradeneeded = () => {
    const db = openDataBase.result;

    if (!db.objectStoreNames.contains(INDEXED_INPUT_STORE)) {
        db.createObjectStore(INDEXED_INPUT_STORE, {keyPath: 'inputs1', autoIncrement: true});
    }
}

export const IndexedDBExample = () => {
    const [inputKeyText, setInputKeyText] = useState('');
    const [inputValueText, setInputValueText] = useState('');
    const [indexDbSearch, setIndexDbSearch] = useState('');

    useEffect(() => {
        return () => {
            let deleteRequest = indexedDB.deleteDatabase(INDEXED_DB_NAME);

            deleteRequest.onsuccess = () => {
                console.log('database is cleared!');
            }

            deleteRequest.onerror = () => {
                console.log('couldn\'t delete the base')
            }
        }
    }, [])

    const inputChangeDirectState = (event, stateFunction: SetStateAction<any>) => {
        stateFunction(event.target.value);
    }

    const checkDbHandler = () => {
        const indexDB = openDataBase.result;

        indexDB.onerror = () => {
            console.log('cant open (use) the db, error');
        }
        console.log('indexDB', indexDB);

        const transaction = indexDB.transaction(INDEXED_INPUT_STORE, "readwrite");
        const dbObjectByKey = transaction.objectStore(INDEXED_INPUT_STORE);

        console.log('dbObjectByKey', dbObjectByKey);
    }

    const createIndexedObject = () => {
        if (!inputKeyText && !inputValueText) {
            console.log('inputs cant be empty!')
            return;
        }
        const indexDB = openDataBase.result;

        const transaction = indexDB.transaction(INDEXED_INPUT_STORE, "readwrite");
        const dbObjectByKey = transaction.objectStore(INDEXED_INPUT_STORE);

        console.log('dbObjectByKey', dbObjectByKey)

        const request = dbObjectByKey.add({inputs: `${inputValueText}_${inputValueText}`});

        request.onsuccess = () => {
            console.log('200');
            setInputKeyText('');
            setInputValueText('');
        }

        request.onerror = () => {
            console.log('302');
            if (request.error.name == 'ConstraintError') console.log('current object already exist!')
        }
    }

    const lookUpBy = () => {
        const indexDB = openDataBase.result;
        const transaction = indexDB.transaction(INDEXED_INPUT_STORE, "readwrite");
        const dbObjectByKey = transaction.objectStore(INDEXED_INPUT_STORE);

        const getData = dbObjectByKey.getAll();

        getData.onsuccess = () => {
            console.log('getData', getData.result);
        }

        getData.onerror = () => {
            console.log('nothing found!')
        }
    }

    const lookUpByKey = () => {
        if (!indexDbSearch) return;
        console.log('123132');
    }

    return (
        <>
            <input type="text" onChange={(e) => inputChangeDirectState(e, setInputKeyText)} value={inputKeyText}/>
            <input type="text" onChange={(e) => inputChangeDirectState(e, setInputValueText)} value={inputValueText}/>
            <div>Key text: {inputKeyText}</div>
            <div>Value text: {inputValueText}</div>
            <button type='button' onClick={createIndexedObject}>Create indexed element</button>
            <button type='button' onClick={checkDbHandler}>Display current indexed DB</button>
            <button type='button' onClick={lookUpBy}>Display current {INDEXED_INPUT_STORE}</button>
            <input type="text" onChange={(e) => inputChangeDirectState(e, setIndexDbSearch)}/>
            <button type='button' onClick={lookUpByKey}>Console search by Id {indexDbSearch}</button>
        </>
    )
}