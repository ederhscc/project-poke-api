import { ToggleButton } from "../button-toggle";
import { light } from "../../themes/light"; 
import { dark } from "../../themes/dark";
import { usePersistedState } from "../../utils/use-persisted-state";

export const ThemeTogglerButton = () => {
   
    const [theme, setTheme] = usePersistedState('theme', light);

    return (
        <div>
            <ToggleButton onClick={() => setTheme(theme === light ? dark : light)}>Light / Dark</ToggleButton>
        </div>
    );
}
