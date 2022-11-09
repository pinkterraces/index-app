let pokemonRepository = (function () {
  let pokemonList = [];

  //Pokemon api
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //Adds pokemon to pokemonList
  function add(pokemonItem) {
    if (typeof pokemonItem === 'object' && 'name') {
      pokemonList.push(pokemonItem);
      console.log(pokemonItem);
    } else {
      console.log('Only objects can be added to the Pokemon Repository');
    }
  }

  //Gets list of pokemon names from api
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name.capitalize(),
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //Returns all pokemon in pokemonList
  function getAll() {
    return pokemonList;
  }

  //Adds one button per pokemon and event handler per button
  function addListItem(pokemon) {
    loadDetails(pokemon).then(function () {
      let pokemonListDisplay = $('#pokemon-list');

      let listItem = $('<li></li>');
      listItem.addClass('list-group-item');

      let pokemonCard = $('<div></div>');
      pokemonCard.addClass('pokemon-card');

      let pokemonImageFront = $('<img>');
      pokemonImageFront.addClass('pokemon-img-card');
      pokemonImageFront.attr('src', `${pokemon.imageUrlFront}`);
      pokemonImageFront.attr('width', '100');
      pokemonImageFront.attr('alt', 'Picture of front of the pokemon');

      let button = $('<button></button>');
      button.append(document.createTextNode(pokemon.name));
      button.addClass('pokemon-list__button btn btn-primary');
      button.attr('data-toggle', 'modal');
      button.attr('data-target', '#pokemonModal');

      button.click(function () {
        showDetails(pokemon);
      });

      listItem.append(pokemonCard);
      pokemonCard.append(pokemonImageFront);
      pokemonCard.append(button);
      pokemonListDisplay.append(listItem);
    });
  }

  //Gets specific information from the database about each pokemon
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrlFront = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.weight = details.weight;
        console.log(details);
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    $('.modal-title').empty();
    $('.modal-title').append(pokemon.name);
    $('.modal-body').empty();

    let modalImages = $('<div></div>');
    modalImages.addClass('modal-images');

    let pokemonImageFront = $('<img>');
    pokemonImageFront.addClass('pokemon-img-card');
    pokemonImageFront.attr('src', `${pokemon.imageUrlFront}`);
    pokemonImageFront.attr('width', '100');
    pokemonImageFront.attr('alt', 'Picture of front of the pokemon');

    let pokemonImageBack = $('<img>');
    pokemonImageBack.addClass('pokemon-img-card');
    pokemonImageBack.attr('src', `${pokemon.imageUrlBack}`);
    pokemonImageBack.attr('width', '100');
    pokemonImageBack.attr('alt', 'Picture of front of the pokemon');

    let modalProperties = $('<ul></ul>');
    modalProperties.addClass('modal-properties list-unstyled');
    let modalHeight = $('<li></li>');
    modalHeight.text('Height: ' + pokemon.height);
    let modalWeight = $('<li></li>');
    modalWeight.text('Weight: ' + pokemon.weight);

    $('.modal-body').append(modalProperties);
    $(modalProperties).append(modalHeight);
    $(modalProperties).append(modalWeight);
    $('.modal-body').append(modalImages);
    $(modalImages).append(pokemonImageFront);
    $(modalImages).append(pokemonImageBack);
  }

  //Access to the IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

//Triggers and creates initial pokemon list and buttons
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

//Capitalises names of Pokemon
Object.defineProperty(String.prototype, 'capitalize', {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});