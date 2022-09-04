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
];

//Formats bid pokemon text
let bigPokemon = " <b><span class='emoji'>&#9889;</span> Wow, that's big!</b> <span class='emoji'>&#9889;</span>";

//Assesses height of Pokemon and writes results to document
pokemonList.forEach(function(getPokemon) {
    if (getPokemon.height > 1.7) {
        document.write("<p>" + getPokemon.name + "<span class='pokelist__height'> Height: " + getPokemon.height + "</span>" + bigPokemon + "</p>");
    } else {
        document.write("<p>" + getPokemon.name + "<span class='pokelist__height'> Height: " + getPokemon.height + "</span></p>");
    };
});

//Prints Objects to console
function printObject(print) {
    console.log(pokemonList[print]);
};

Object.keys(pokemonList).forEach(printObject);




/*OLD for LOOP CODE - REPLACED WITH forEach

//Defines and formats the copy for the big pokemon 
let bigPokemon = " <b><span class='emoji'>&#9889;</span> Wow, that's big!</b> <span class='emoji'>&#9889;</span>";

//Defines the loop conditions
for (let i = 0; i < pokemonList.length; i++) {
    //Defines the minimum height of the big Pokémon
    if (pokemonList[i].height > 1.7) {
        //Defines sentence to be displayed for big Pokémon
        document.write("<p>" + pokemonList[i].name + "<span class='pokelist__height'> Height: " + pokemonList[i].height + "</span>" + bigPokemon + "</p>");
    } else {
        //Defines sentence to be displayed for NOT big Pokémon
        document.write("<p>" + pokemonList[i].name + "<span class='pokelist__height'> Height: " + pokemonList[i].height + "</span>" + "</p>");
    }
};*/

/*
Object.keys(pokemonList).forEach(function (printPokemon) {
    console.log(pokemonList[printPokemon]);
});*/


