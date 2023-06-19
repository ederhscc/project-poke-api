import { ToggleButton } from "../button-toggle";
import { usePersistedState } from "../../utils/use-persisted-state";
import { light } from "../../themes/light"; 
import { dark } from "../../themes/dark";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context";

export const ThemeTogglerButton = () => {
    // const {themeContext} = useContext(ThemeContext);
    // const [theme, setTheme] = usePersistedState('theme', themeContext);
    const {theme, setTheme} = useContext(ThemeContext);
    console.log(theme)
    return (
        <div>
            <ToggleButton onClick={() => setTheme(theme === light ? dark : light)}>Light / Dark</ToggleButton>
        </div>
    );
}
