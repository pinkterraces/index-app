let pokemonRepository = (function()  {
    let pokemonList = [];

        //Adds pokemon to pokemonList
        function add(pokemonItem) {
            if (typeof pokemonItem === "object" && "name") {
                pokemonList.push(pokemonItem);
            } else {
                console.log("Only objects can be added to the Pokemon Repository")
            }
        };

        //Pokemon api
        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

        //Returns all pokemon in pokemonList
        function getAll() {
            return pokemonList;
        };

        //Adds one button per pokemon and event handler per button
        function addListItem(pokemon) {
            loadDetails(pokemon).then(function() {
                let pokemonListDisplay = $('#pokemon-list');

                let listItem = $('<li></li>');
                listItem.addClass('list-item group-list-item');

                let pokemonCard = $('<div></div>');
                pokemonCard.addClass('pokemon-card');

                let pokemonImageFront = $('<img>');
                pokemonImageFront.addClass('pokemon-img-card');
                pokemonImageFront.attr('src', `${pokemon.imageUrlFront}`);
                pokemonImageFront.attr('width', '100');
                pokemonImageFront.attr('alt', 'Picture of front of the pokemon');

                let button = $('<button></button>')
                button.append(document.createTextNode(pokemon.name));
                button.addClass('pokemon-list__button btn btn-primary');
                button.attr('data-toggle', 'modal');
                button.attr('data-target', '#pokemonModal');
                button.click(showDetails);

                listItem.append(pokemonCard);
                pokemonCard.append(pokemonImageFront);
                pokemonCard.append(button);
                pokemonListDisplay.append(listItem);

                /* document.querySelector('.pokemon-list :first-child').classList.add('focus-pokemon'); */
                
            });  
        };
        
        //Modal overlay to display pokemon details

       // $('.modal-header').append(document.createTextNode(`${pokemon.name || '?'}`.capitalize()));

        function showDetails(pokemon) {
            loadDetails(pokemon).then(function() {

                $('.modal-title').append('Name');
                $('.modal-body').append('Pokemon Body Image Front');
                $('.modal-body').append('Pokemon Body Image Back');
                $('.modal-body').append('Pokemon Body Height');
                $('.modal-body').append('Pokemon Body Weight');

            });
        };

        //Closes the modal overlay with pokemon details
      /*function hideModal() {
            let modalContainer = document.querySelector('#modal-container');
            modalContainer.classList.remove('is-visible');
        }
        window.addEventListener('keydown', (e) => {
            let modalContainer = document.querySelector('#modal-container');
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                hideModal();
            }
        });

        //document.querySelector('.pokemon-list__button').addEventListener('click', () => {
        //    showModal('Modal title', 'This is the modal content!');
        //}); */
        //Modal overlay finshes here

        //Gets list of pokemon names from api
        function loadList() {
            return fetch(apiUrl).then(function(response) {
                return response.json();
            }).then(function(json) {
                json.results.forEach(function(item) {
                   let pokemon = {
                    name: item.name.capitalize(),
                    detailsUrl: item.url
                   };
                   add(pokemon);
                });
            }).catch(function(e) {
                console.error(e);
            })
        };

        //Gets specific information from the database about each pokemon
        function loadDetails(item) {
            let url = item.detailsUrl;
            return fetch(url).then(function(response) {
                return response.json();
            }).then(function(details) {
                item.imageUrlFront = details.sprites.front_default;
                item.imageUrlBack = details.sprites.back_default;
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

 
//Triggers and creates initial pokemon list and buttons
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});

//Capit alises names of Pokemon
Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });



//Calls Pokemon array - info only
//console.log(pokemonRepository.getAll());
//Formats big pokemon text
//let bigPokemon = " <b><span class='emoji'>&#9889;</span> Wow, that's big!</b> <span class='emoji'>&#9889;</span>";
//Assesses height of Pokemon and writes results to document
// pokemonRepository.getAll().forEach(function(pokemon) {
//    pokemonRepository.addListItem(pokemon);
//});