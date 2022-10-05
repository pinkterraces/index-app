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

        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
            loadDetails(pokemon).then(function() {
                console.log(pokemon)
            });
        };

        function loadList() {
            return fetch(apiUrl).then(function(response) {
                return response.json();
            }).then(function(json) {
                json.results.forEach(function(item) {
                   let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                   };
                   add(pokemon);
                });
            }).catch(function(e) {
                console.error(e);
            })
        };

        function loadDetails(item) {
            let url = item.detailsUrl;
            return fetch(url).then(function(response) {
                return response.json();
            }).then(function(details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
            }).catch(function(e) {
                console.error(e);
            });
        };

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            loadList: loadList
        };      

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});

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
/* pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
}); */