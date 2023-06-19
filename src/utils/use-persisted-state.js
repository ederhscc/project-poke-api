import { useState, useEffect} from "react";

export function usePersistedState(key, initialState){

    const [state, setState] = useState(() => {

        const storageValue = localStorage.getItem(key);

        // if(storageValue.length){
        //     return JSON.parse(storageValue);
        // }else {
        //     return initialState;
        // }

    });   
    

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
        console.log('mudou o estado')
    }, [key, state]);

    return [state, setState];
}