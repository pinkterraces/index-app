let pokemonRepository = (function()  {

    let pokemonList = [
        {
            name: 'Raichu',
            height: 0.8,
            types: ['Ground', 'Flying', 'Steel', 'Electric'],
            abilities: ['Static', 'Lightningrod']
        },
        {
            name: 'Krookodile',
            height: 1.5,
            types: ['Water', 'Grass', 'Ice', 'Fighting', 'Bug', 'Fairy'],
            abilities: ['Intimidate', 'Anger-point', 'Moxie']
        },
        {
            name: 'Jynx',
            height: 1.4,
            types: ['Rock', 'Steel', 'Fire', 'Bug', 'Ghost', 'Dragon'],
            abilities:['Oblivious', 'Dry-skin', 'Forewarn']
        },
        {
            name: 'Regice',
            height: 1.8,
            types: ['Fighting', 'Rock', 'Steel', 'Fire', 'Ice'],
            abilities:['Clear-body', 'Ice-body']
        } ];

        function add(pokemonItem) {
            if (typeof pokemonItem === "object" && "name") {
                pokemonList.push(pokemonItem);
            } else {
                console.log("Only objects can be added to the Pokemon Repository")
            }
        }

        function getAll() {
            return pokemonList;
        }

        function addListItem(pokemon) {
            let pokemonListDisplay = document.querySelector(".pokemon-list");
            let listItem = document.createElement("li");
            let button = document.createElement("button")
            button.innerText = pokemon.name;
            button.classList.add("pokemon-list__button");
            listItem.appendChild(button);
            pokemonListDisplay.appendChild(listItem);
        }

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem
        };

})();

let pokemon5 = {
    name: 'James',
    height: 3,
    types: ['Rock', 'Steel', 'Fire', 'Bug', 'Ghost', 'Dragon'],
    abilities:['Oblivious', 'Dry-skin', 'Forewarn']
};

let pokemon6 = {
    name: 'Maria',
    height: 1,
    types: ['Rock', 'Steel', 'Fire', 'Bug', 'Ghost', 'Dragon'],
    abilities:['Oblivious', 'Dry-skin', 'Forewarn']
};

let pokemon7 = {
    name: 'Malcolm',
    height: 1,
    types: ['Rock', 'Steel', 'Fire', 'Bug', 'Ghost', 'Dragon'],
    abilities:['Oblivious', 'Dry-skin', 'Forewarn']
};

//Adds Pokemon
pokemonRepository.add(pokemon5);
pokemonRepository.add(pokemon6);
pokemonRepository.add(pokemon7);

//Calls Pokemon array
console.log(pokemonRepository.getAll());


//Formats bid pokemon text
let bigPokemon = " <b><span class='emoji'>&#9889;</span> Wow, that's big!</b> <span class='emoji'>&#9889;</span>";

//Assesses height of Pokemon and writes results to document
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});

/* Old forEachLoop

pokemonAttributes.forEach(function(getPokemon) {
    if (getPokemon.height > 1.7) {
        document.write("<p>" + getPokemon.name + "<span class='pokelist__height'> Height: " + getPokemon.height + "</span>" + bigPokemon + "</p>");
    } else {
        document.write("<p>" + getPokemon.name + "<span class='pokelist__height'> Height: " + getPokemon.height + "</span></p>");
    };
});

/*Prints Objects to console
function printObject(print) {
    console.log(pokemonAttributes[print]);
};
Object.keys(pokemonAttributes).forEach(printObject); */