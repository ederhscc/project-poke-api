import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { getPokemon } from "../../services/get-pokemon";
import { Ability } from "../pokemon-ability";
import { Move } from "../pokemon-moves";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context";


export const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState([]);
    const {theme} = useContext(ThemeContext);

    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const newPokemon = await getPokemon(id);
            setPokemon(newPokemon);
        }
        fetchData();

    }, []);

    return (
        <Main style={{backgroundColor: theme.colors.backgroundColor}}>
            <Section>
                <header>
                    <Link to='/'>
                        <Button style={{backgroundColor: theme.colors.backgroundColor, color: theme.colors.text}}>Voltar</Button>
                    </Link>
                </header>
                <CardPokemon style={{backgroundColor: theme.colors.backgroundColor, color: theme.colors.text}}>
                    <img src={pokemon[1]} alt={pokemon[0]} />
                    <h1>{pokemon[0]}</h1>
                    <h3>Tipo: {pokemon[4]}</h3>
                </CardPokemon>
                <CardInfo>
                    <div>
                        <Move />
                    </div>
                    <div>
                        <Ability />
                    </div>
                </CardInfo>
            </Section>
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    min-height: 100vh;
    max-width: 100%;
    align-items: center;
    /* background-color: ${props => props.theme.backgroundColor}; */
    justify-content: center; 
    text-align: center;
`;

const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 10px;
    background-color: var(--clr-dark-green);
    width: 90%;
    flex-wrap: wrap;
`;

const Button = styled.button`
    cursor: pointer;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    box-shadow: 3px 3px 9px var(--clr-dark);
    transition: 0.8s ease-in-out;
`;

const CardPokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--clr-light);
    border-radius: 10px;    
    margin: 1rem;
    padding: 1rem;
    text-transform: capitalize;
    color: var(--clr-dark-blue);
    box-shadow: 3px 3px 9px var(--clr-dark);
`;

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
`;


