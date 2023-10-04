// Arrays Exercise

const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

console.log(pokemons)

const countThem = () => {
  console.log(`I have ${pokemons.length} pokemons!`)
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
};

countThem()

const orderThem = () => {
  // order the pokemons alphabetically
  console.log(pokemons.sort())
};

orderThem()

const flipThem = () => {
  // reverse the order of the pokemons
  console.log(pokemons.reverse())
};

flipThem()

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
    pokemons.forEach((pokemon) => {
      console.log(pokemon.toUpperCase())
    })
};

makeThemBig(pokemons)

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  pokemons.forEach((pokemon) => {
    if (pokemon.charAt(0) === 'B') {
      console.log(pokemon)
    }
  })
};

onlyTheBs()

pokemons.reverse()

const notTheCs = () => {
    // remove all pokemons that starts with C
  pokemons.forEach((pokemon) => {
    if (pokemon.charAt(0) === 'C') {
      delete pokemon
    } else {
      console.log(pokemon)
    }
  })
};

// notTheCs()
console.log(pokemons)

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  pokemons.forEach((pokemon) => {
    console.log(`${pokemons.indexOf(pokemon)} - ${pokemon}`)
  })
};

nameAndIdThanks()

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push(name)
};

catchPokemon("Sandygast")
console.log(pokemons)



const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  if (pokemons.includes(name)) {
    console.log(true)
  } else {
    console.log(false)
  }
};

didICatchIt("")



const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  
};

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};
