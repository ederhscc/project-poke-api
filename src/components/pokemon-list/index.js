import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getPokemons } from "../../services/get-pokemons";
import { SearchBar } from "../search-bar";
import { Button } from "../button-search";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context";

export const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offSet, setOffSet] = useState(10);
    const [search, setSearch] = useState([]);
    const {theme} = useContext(ThemeContext);

    async function handleGetTenPokemon() {

        const newsPokemons = await getPokemons(offSet);
        const currentPokemons = pokemons.concat(newsPokemons);
        setPokemons([...currentPokemons]);
        setOffSet((prevState) => prevState + 10)
    }

    const filteredPokemonsForType = search.length > 0
        ? pokemons.filter(data => data.types[0].type.name.includes(search))
        : [];

    useEffect(() => {
        async function fetchData() {
            const pokemons = await getPokemons();
            return setPokemons([...pokemons]);
        }

        fetchData();

    }, []);

    return (
        <>
            <header>
                <SearchBar
                    searchPokemon={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </header>
            <Main style={{backgroundColor: theme.colors.backgroundColor}}>
                <Section >
                    {search.length > 0 ? (
                        <Ul>
                            {filteredPokemonsForType.map(data => {
                                return (
                                    <li key={data.name} >
                                        <Link to={`/pokemon/${data.id}`}>
                                            <CardPokemon style={{backgroundColor: theme.colors.backgroundColor}}>
                                                <div>
                                                    <img src={data.sprites.front_default} alt={data.name} />
                                                </div>
                                                <div>
                                                    <h3>{data.name}</h3>
                                                    <h4>{`Tipo: ${data.types[0].type.name}`}</h4>
                                                </div>
                                            </CardPokemon>
                                        </Link>
                                    </li>

                                );
                            })}
                        </Ul>
                    ) : (
                        <Ul>
                            {pokemons.map((pokemon) => {
                                return (
                                    <li key={pokemon.name}>
                                        <Link to={`/pokemon/${pokemon.id}`}>
                                            <CardPokemon style={{backgroundColor: theme.colors.backgroundColor, color: theme.colors.text}}>
                                                <div>
                                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                                </div>
                                                <div> 
                                                    <h3>{pokemon.name}</h3>
                                                    <h4>{`Tipo: ${pokemon.types[0].type.name}`}</h4>
                                                </div>
                                            </CardPokemon>
                                        </Link>
                                    </li>
                                );

                            })}
                        </Ul>
                    )
                    }
                    <footer>
                        <Button onClick={handleGetTenPokemon} />
                    </footer>
                </Section>

            </Main>
        </>
    )
}

const Main = styled.main`
    display: flex;
    min-height: 100vh;
    max-width: 100%;
    align-items: center;
    justify-content: center; 
    text-align: center;
`;

const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 1rem 6px 1rem;
    border-radius: 10px;
    background-color: var(--clr-dark-green);
    width: 90%;
    flex-wrap: wrap;

    @media (max-width: 640px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

const CardPokemon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:  var(--clr-light);
    padding: 10px 10px 0 10px;
    margin: 10px 5px;
    width: 220px;
    height: 100px;
    border-radius: 5px;
    box-shadow: 2px 2px 7px var(--clr-dark);
    text-decoration: none;
    text-transform: capitalize;
`;

