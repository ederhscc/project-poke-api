import { useContext, useEffect, useState } from "react";
import { getPokemonAbilities } from "../../services/get-pokemon-abilities";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { ThemeContext } from "../../theme-context";


export const Ability = () => {
    const [ability, setAbility] = useState([]);
    const {theme} = useContext(ThemeContext);

    const { id } = useParams();

    useEffect(() => {
        async function fetchAbility() {
            const newAbility = await getPokemonAbilities(id);
            setAbility(newAbility);           
        }

        fetchAbility();
    }, []);

    return (

        <Section style={{backgroundColor: theme.colors.backgroundColor, color: theme.colors.text}}>
            <H3>Habilidades</H3>
            <Ul>
                {ability.map((data, index) => {
                    return (
                        <div key={index}>
                            <li><H4>{data.name}</H4></li>
                            <li>{data.effect_entries[0].language.name === 'en' ? data.effect_entries[0].effect : data.effect_entries[1].effect}</li>
                        </div>
                    );
                })
                }
            </Ul>
        </Section>
    );
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 2px 2px 8px var(--clr-dark);
`;

const H3 = styled.h3`
    margin-bottom: 5px;
`;

const Ul = styled.ul`
    line-height: 25px;
`;

const H4 = styled.h4`
    text-transform: capitalize;
    margin: 10px;
`;
