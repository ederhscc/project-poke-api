import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme-context';

export const ToggleButton = (props) => {
    const {theme} = useContext(ThemeContext);

    return (
        <Button 
            {...props}
            style={{backgroundColor: theme.colors.backgroundColor, color: theme.colors.text}}
        />
    );
}

const Button = styled.button`

    min-height: 30px;
    min-width: 200px;
    border-radius: 5px;
    border: 1px solid  var(--clr-dark-green);
    cursor: pointer;
    transition: 0.8s ease-in-out;
`;