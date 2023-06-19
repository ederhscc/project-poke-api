import { createContext, useState } from 'react';
import { light } from '../themes/light';

// export const themes = {
//     light: {
//         color: '#000000',
//         background: '#EEEEEE'
//     },
//     dark: {
//         color: '#FFFFFF',
//         background: '#000000'
//     }
// }

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(light);
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}