import {useState} from "react";

const URL = 'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=24'

export type PhotoResponseType = {
    description: string;
    id: number;
    title: string;
    url: string;
    user: number;
};

export type ResponseDataType = {
    limit: number;
    message: string;
    offset: number;
    photos: PhotoResponseType[];
    success: boolean;
    total_photos: number;
};

export const fetchDataTEST = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data;
};

// same as above but in hook type
export const useFakeDataWithImage = async (): Promise<ResponseDataType> => {
    const response = await fetch(URL);
    const data: ResponseDataType = await response.json();
    return {...data};
};

export const FetchDataModuleExample = () => {
    const [fetchedState, setFetchedState] = useState({
        message: '',
        photos: [],
    });
    // const fetchData = useFakeDataWithImage();

    const onClickHandler = async () => {
        const data: ResponseDataType = await fetchDataTEST(URL);
        if (data && data.success) {
            setFetchedState(data as any);
        }
    };

    return(
        <div>
            {fetchedState && <div>{fetchedState.message}</div>}
            <button onClick={onClickHandler}>Fetch data</button>
            {fetchedState.photos.length > 0 && <p>{fetchedState.photos.map((element, index) => {
                return <img loading='eager' key={index} width='500' height='400' src={element.url} alt={index.toString()}/>
            })}</p>}
        </div>
    )
};
