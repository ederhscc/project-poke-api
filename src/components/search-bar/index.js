import { useContext } from 'react';
import { ThemeTogglerButton } from '../theme-toggle-button';
import styled from 'styled-components';
import { ThemeContext } from '../../theme-context';

export const SearchBar = ({ searchPokemon, onChange }) => {
    const {theme} = useContext(ThemeContext);

    return (
        <Nav style={{backgroundColor: theme.colors.backgroundColor, color: theme.colors.text}}>
            <div>
                <ThemeTogglerButton />
            </div>
            <Img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo PokeAPI" />
            <Input
                type="text"
                value={searchPokemon}
                placeholder="Filtrar pelo tipo..."
                onChange={onChange}
            />
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    position: relative;
    
    &::after {
        content: "";
        border: 1.5px solid var(--clr-dark-green);
        position: absolute;
        width: 100%;
        top: 100%;
        right: 0;
        transition: 0.8s ease-in-out;
    }

    &:hover::after{
        border: 1.5 solid var(--clr-light-blue);
        width: 0;
    }

    @media(max-width: 550px){
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
`;

const Img = styled.img`
    width: 150px;
    height: 50px;

    @media(max-width: 550px){
        width: 140px;
        height: 40px;
        margin: 10px 0;
    }
`;

const Input = styled.input`
    min-height: 30px;
    min-width: 200px;
    border-radius: 5px;
    border: 1px solid  var(--clr-dark-green);
    background-color: var(--clr-white);
    transition: 0.8s ease-in-out;

    &::placeholder {
        color:  var(--clr-dark-green);
    }

    &:hover {
        color:  var(--clr-dark-green);
        background-color: var(--clr-light-blue);  
    }

    @media(max-width: 550px) {
        margin-bottom: 10px;
    }
`;