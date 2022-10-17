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
                let pokemonListDisplay = document.querySelector(".pokemon-list");

                let listItem = document.createElement("li");
                listItem.classList.add('list-item');

                let pokemonCard = document.createElement('div');
                pokemonCard.classList.add('pokemon-card');

                let pokemonImageFront = document.createElement('img');
                pokemonImageFront.classList.add('pokemon-img');
                pokemonImageFront.setAttribute('src', `${pokemon.imageUrlFront}`);
                pokemonImageFront.setAttribute('width', '100');
                pokemonImageFront.setAttribute('alt', 'Picture of front of the pokemon');

                let button = document.createElement("button")
                button.innerText = pokemon.name;
                button.classList.add("pokemon-list__button");

                listItem.appendChild(pokemonCard);
                pokemonCard.appendChild(pokemonImageFront);
                pokemonCard.appendChild(button);
                pokemonListDisplay.appendChild(listItem);

                document.querySelector('.pokemon-list :first-child').classList.add('focus-pokemon');

                button.addEventListener("click", function(event) {
                    showDetails(pokemon);
                });
            });  
        };
        
        //Modal overlay to display pokemon details
        function showDetails(pokemon) {
            loadDetails(pokemon).then(function() {
                let modalContainer = document.querySelector('#modal-container');

                modalContainer.innerHTML = "";

                let modal = document.createElement('div');
                modal.classList.add('modal');

                let closeButton = document.createElement('button');
                closeButton.classList.add('modal-close-button');
                closeButton.innerText = 'Close';
                closeButton.addEventListener('click', hideModal);

                let modalTitle = document.createElement('h1');
                modalTitle.classList.add('modal-title');
                modalTitle.innerText = `${pokemon.name || '?'}`.capitalize();

                let modalHeight = document.createElement('p');
                modalHeight.innerText = `Height: ${pokemon.height || '?'}`;

                let modalWeight = document.createElement('p');
                modalWeight.innerText = `Weight: ${pokemon.weight || '?'}`;

                let modalImages = document.createElement('div');
                modalImages.classList.add('modal-images');

                let pokemonImageFront = document.createElement('img');
                pokemonImageFront.classList.add('pokemon-img');
                pokemonImageFront.setAttribute('src', `${pokemon.imageUrlFront}`);
                pokemonImageFront.setAttribute('width', '250');
                pokemonImageFront.setAttribute('alt', 'Picture of front of the pokemon');

                let pokemonImageBack = document.createElement('img');
                pokemonImageBack.classList.add('pokemon-img');
                pokemonImageBack.setAttribute('src', `${pokemon.imageUrlBack}`);
                pokemonImageBack.setAttribute('width', '250');
                pokemonImageBack.setAttribute('alt', 'Picture of back of the pokemon');

                modal.appendChild(closeButton);
                modal.appendChild(modalTitle);
                modal.appendChild(modalImages);
                modalImages.appendChild(pokemonImageFront);
                modalImages.appendChild(pokemonImageBack);
                modal.appendChild(modalHeight);
                modal.appendChild(modalWeight);
                modalContainer.append(modal);

                modalContainer.classList.add('is-visible');

                modalContainer.addEventListener('click', (e) => {
                    let target = e.target;
                    if (target === modalContainer) {
                        hideModal();
                    }
                });
            });
        }

        //Closes the modal overlay with pokemon details
        function hideModal() {
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
        //});
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