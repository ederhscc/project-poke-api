import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme-context';

export const Button = ({ onClick }) => {
    const {theme} = useContext(ThemeContext);

    return <ButtonStyled 
                onClick={onClick}
                style={{backgroundColor: theme.colors.backgroundColor, color: theme.colors.text}}
                >Buscar + 10 pokemons</ButtonStyled>;
}

const ButtonStyled = styled.button`

    min-height: 30px;
    min-width: 200px;
    border-radius: 5px;
    color:  var(--clr-dark-green);
    background-color: var(--clr-white);
    border: 1px solid  var(--clr-dark-green);
    box-shadow: 3px 3px 9px var(--clr-dark);
    cursor: pointer;
    transition: 0.8s ease-in-out;
`;