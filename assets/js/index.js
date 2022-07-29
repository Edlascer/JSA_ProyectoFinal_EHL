const pokemonContainer = document.querySelector('.pokemon-container')
const url = 'https://pokeapi.co/api/v2/pokemon/'


const fetchPokemon = (id) => {
  fetch(url + `${id}/`)
    .then(response => response.json())
    .then((data) => {
      createPokemon(data);
    })
}

const fetchPokemons = number => {
  for (let i = 1; i <= number; i++) {
    fetchPokemon(i)
  }
}


const createPokemon = pokemon => {
  const card = document.createElement('div');
  card.classList.add('pokemon-block');

  const spriteContainer = document.createElement ('div');
  spriteContainer.classList.add('img-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default

  spriteContainer.appendChild(sprite);

  const number = document.createElement('p')
  number.textContent ='Id: ' + `#${pokemon.id.toString().padStart(3, 0)}`

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent ='Name: ' + pokemon.name

  const weight = document.createElement('p')
  weight.classList.add('name');
  weight.textContent ='Weight: ' + pokemon.weight

  
  const abilities = document.createElement('p')
  abilities.classList.add('name');
  abilities.textContent ='Abilities: ' + pokemon.abilities[0].ability.name


  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(weight);
  card.appendChild(abilities);

  pokemonContainer.appendChild(card);
}

fetchPokemons(20)