import {useState} from "react";

const openDataBase = window.indexedDB.open('TEST_BASE', 1);
openDataBase.onupgradeneeded = () => {
    const db = openDataBase.result;

    if (!db.objectStoreNames.contains('INPUTS')) {
        db.createObjectStore("INPUTS", {keyPath: 'inputs1', autoIncrement: true});
    }
}

export const IndexedDBExample = () => {
    const [inputKeyText, setInputKeyText] = useState('');
    const [inputValueText, setInputValueText] = useState('');
    const [indexDbSearch, setIndexDbSearch] = useState('');

    const inputOnChangeHandle = (e) => {
        setInputKeyText(e.target.value)
    }

    const inputOnChangeHandleTwo = (e) => {
        setInputValueText(e.target.value)
    }

    const inputOnChangeHandleThree = (e) => {
        setIndexDbSearch(e.target.value)
    }

    const checkDbHandler = () => {
        const indexDB = openDataBase.result;

        indexDB.onerror = () => {
            console.log('cant open (use) the db, error');
        }
        console.log('indexDB', indexDB);

        const transaction = indexDB.transaction('INPUTS', "readwrite");
        const dbObjectByKey = transaction.objectStore('INPUTS');

        console.log('dbObjectByKey', dbObjectByKey);
    }

    const createIndexedObject = () => {
        if (!inputKeyText && !inputValueText) {
            console.log('inputs cant be empty!')
            return;
        }
        const indexDB = openDataBase.result;

        const transaction = indexDB.transaction('INPUTS', "readwrite");
        const dbObjectByKey = transaction.objectStore('INPUTS');

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

    const lookUpByKey = () => {
        if (!indexDbSearch) return;
        const indexDB = openDataBase.result;
        const transaction = indexDB.transaction(indexDbSearch, "readwrite");
        const dbObjectByKey = transaction.objectStore(indexDbSearch);

        const getData = dbObjectByKey.getAll();

        getData.onsuccess = () => {
            console.log('getData', getData.result);
        }

        getData.onerror = () => {
            console.log('nothing found!')
        }
    }

    return (
        <>
            <input type="text" onChange={(e) => inputOnChangeHandle(e)}/>
            <input type="text" onChange={(e) => inputOnChangeHandleTwo(e)}/>
            <div>Key text: {inputKeyText}</div>
            <div>Value text: {inputValueText}</div>
            <button type='button' onClick={createIndexedObject}>Create indexed element</button>
            <button type='button' onClick={checkDbHandler}>Display current indexed DB</button>
            <input type="text" onChange={(e) => inputOnChangeHandleThree(e)}/>
            <button type='button' onClick={lookUpByKey}>Console search by Id {indexDbSearch}</button>
        </>
    )
}