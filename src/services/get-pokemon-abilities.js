import { getPokemon } from "./get-pokemon";

export async function getPokemonAbilities(id) {
    
        const response = await getPokemon(id);
        const abilities = response[3];
        const pokemonAbility = abilities.map(async (data) => {
            const ability = await fetch(data.ability.url);
            return ability.json();
        });
        return await Promise.all(pokemonAbility);   
}