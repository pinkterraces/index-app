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

//Formats the output
let pokeName__open = "<p class='pokeList'>"
let pokeName__close = "</p>"
let pokeHeight__open = " <span class='pokelist__height'>Height: ";
let pokeHeight__close = "</span>"

for (let i = 1; i < pokemonList.length; i++) {
    document.write(pokeName__open + pokemonList[i].name + pokeHeight__open + pokemonList[i].height + pokeHeight__close + pokeName__close);
    console.log(pokemonList[i].name);
}

