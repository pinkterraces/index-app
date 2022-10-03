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
        };

        function getAll() {
            return pokemonList;
        };

        //Adds one button per pokemon and event handler per button
        function addListItem(pokemon) {
            let pokemonListDisplay = document.querySelector(".pokemon-list");
            let listItem = document.createElement("li");
            let button = document.createElement("button")
            button.innerText = pokemon.name;
            button.classList.add("pokemon-list__button");
            listItem.appendChild(button);
            pokemonListDisplay.appendChild(listItem);

            button.addEventListener("click", function(event) {
                showDetails(pokemon);
            });

        };

        function showDetails(pokemon) {
            console.log(pokemon.name);
        };

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem
        };      

})();

//New Pokemon Data
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

//Adds New Pokemon Data
pokemonRepository.add(pokemon5);
pokemonRepository.add(pokemon6);

//Calls Pokemon array - info only
//console.log(pokemonRepository.getAll());

//Formats big pokemon text
let bigPokemon = " <b><span class='emoji'>&#9889;</span> Wow, that's big!</b> <span class='emoji'>&#9889;</span>";

//Assesses height of Pokemon and writes results to document
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});