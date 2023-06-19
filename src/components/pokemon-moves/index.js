import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonMoves } from "../../services/get-pokemon-moves";
import styled from "styled-components";
import { ThemeContext } from "../../theme-context";

export const Move = () => {
    const [nameMove, setNameMove] = useState([]);
    const { theme } = useContext(ThemeContext);

    const { id } = useParams();

    useEffect(() => {
        async function fetchMove() {
            const newMove = await getPokemonMoves(id);
            const data = newMove.map((data) => {
                const namesMove = [data.name];
                return namesMove;
            });
            setNameMove([...data]);
        }
        fetchMove();
    }, []);

    return (
        <Section style={{ backgroundColor: theme.colors.backgroundColor, color: theme.colors.text }}>
            <H3>Movimentos</H3>
            <Ul>
                {nameMove.map((data, index) => {
                    return (
                        <div key={index}>
                            <li>{data}</li>
                        </div>
                    );
                })}
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
    border-radius: 10px;
    box-shadow: 2px 2px 8px var(--clr-dark);
    padding: 1rem;
`;

const H3 = styled.h3`
    margin-bottom: 1rem;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;   
    flex-wrap: wrap;
    line-height: 1rem;
    
    li {
        text-align: center;
        margin: 8px;
        font-size: 17px;
        padding: 5px;
        border-radius: 5px;
    }
`;