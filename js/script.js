let pokemonList = [
    pokemon1 = {
        name: 'Raichu',
        height: 0.8,
        types: ['Ground', 'Flying', 'Steel', 'Electric'],
        abilities: ['Static', 'Lightningrod']
    },
    pokemon2 = {
        name: 'Krookodile',
        height: 1.5,
        types: ['Water', 'Grass', 'Ice', 'Fighting', 'Bug', 'Fairy'],
        abilities: ['Intimidate', 'Anger-point', 'Moxie']
    },
    pokemon3 = {
        name: 'Jynx',
        height: 1.4,
        types: ['Rock', 'Steel', 'Fire', 'Bug', 'Ghost', 'Dragon'],
        abilities:['Oblivious', 'Dry-skin', 'Forewarn']
    },
    pokemon4 = {
        name: 'Regice',
        height: 1.8,
        types: ['Fighting', 'Rock', 'Steel', 'Fire', 'Ice'],
        abilities:['Clear-body', 'Ice-body']
    }
]

//Formats the height output
let height_o = " <span class='pokelist__height'>";
let height_c = "</span>";
//Defines and formats the copy for the big pokemon 
let bigPokemon = " <b><span class='emoji'>&#9889;</span> Wow, that's big!</b> <span class='emoji'>&#9889;</span>";

//Defines the loop conditions
for (let i = 0; i < pokemonList.length; i++) {
    //Defines the minimum height of the big Pokémon
    if (pokemonList[i].height > 1.7) {
        //Defines sentence to be displayed for big Pokémon
        document.write("<p>" + pokemonList[i].name + height_o + "Height: " + pokemonList[i].height + height_c + bigPokemon + "</p>");
        console.log("<p>" + pokemonList[i].name + height_o + "Height: " + pokemonList[i].height + height_c + bigPokemon + "</p>");
    } else {
        //Defines sentence to be displayed for NOT big Pokémon
        document.write("<p>" + pokemonList[i].name + height_o + "Height: " + pokemonList[i].height + height_c + "</p>");
        console.log("<p>" + pokemonList[i].name + height_o + "Height: " + pokemonList[i].height + height_c + "</p>");
    }
}

