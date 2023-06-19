import { baseUrl } from "../variables";

export async function getPokemons(offSet) {
    const response = await fetch(`${baseUrl}?limit=10&offset=${offSet}`);
    const pokemonList = await response.json();

    const tenPokemonUrl = pokemonList.results.map(async (data) => {
        const pokemonUrl = data.url;
        const responsePokemon = await fetch(pokemonUrl);
        return await responsePokemon.json();

    });
    return await Promise.all(tenPokemonUrl);
}