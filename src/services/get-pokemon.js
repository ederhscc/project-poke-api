import { baseUrl } from "../variables";

export async function getPokemon(id) {
    const response = await fetch(`${baseUrl}/${id}/`);
    const pokemonData = await response.json();
    const data = [pokemonData.name, pokemonData.sprites.front_default, pokemonData.moves, pokemonData.abilities, pokemonData.types[0].type.name];
    return await Promise.all(data);
}