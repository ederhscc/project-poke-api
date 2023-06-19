import { getPokemon } from "./get-pokemon";

export async function getPokemonMoves(pokemonId) {
    const response = await getPokemon(pokemonId);
    const moves = response[2];
    const pokemonMove = moves.map(async (data) => {
        const move = await fetch(data.move.url);
        return move.json();
    });
    return await Promise.all(pokemonMove);
}