let pokemonRepository = (function()  {
    let pokemonList = [];

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
                item.weight = details.weight;
            }).catch(function(e) {
                console.error(e);
            });
        };

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails
        };      

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});




//Calls Pokemon array - info only
//console.log(pokemonRepository.getAll());
//Formats big pokemon text
//let bigPokemon = " <b><span class='emoji'>&#9889;</span> Wow, that's big!</b> <span class='emoji'>&#9889;</span>";
//Assesses height of Pokemon and writes results to document
/* pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
}); */