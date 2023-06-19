import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../theme-context";

export function usePersistedState(key, initialState){
    const {setTheme} = useContext(ThemeContext);

    const [state, setState] = useState(() => {

        const storageValue = localStorage.getItem(key);

        if(storageValue){
            return JSON.parse(storageValue);
        }else {
            return initialState;
        }

    });   
    

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
        setTheme(state);
    }, [key, state]);

    return [state, setState];
}