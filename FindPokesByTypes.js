// You have an array.
const pokesArr = [
  {
    name: "bulbasaur",
    types: ["grass", "poison"],
  },
  {
    name: "ivysaur",
    types: ["grass", "poison"],
  },
  {
    name: "venusaur",
    types: ["grass", "poison"],
  },
  {
    name: "charmander",
    types: ["fire"],
  },
  {
    name: "charmeleon",
    types: ["fire"],
  },
  {
    name: "charizard",
    types: ["fire", "flying"],
  },
  {
    name: "squirtle",
    types: ["water"],
  },
  {
    name: "wartortle",
    types: ["water"],
  },
  {
    name: "blastoise",
    types: ["water"],
  },
  {
    name: "caterpie",
    types: ["bug"],
  },
  {
    name: "metapod",
    types: ["bug"],
  },
  {
    name: "butterfree",
    types: ["bug", "flying"],
  },
  {
    name: "weedle",
    types: ["bug", "poison"],
  },
  {
    name: "kakuna",
    types: ["bug", "poison"],
  },
  {
    name: "beedrill",
    types: ["bug", "poison"],
  },
  {
    name: "pidgey",
    types: ["normal", "flying"],
  },
  {
    name: "pidgeotto",
    types: ["normal", "flying"],
  },
  {
    name: "pidgeot",
    types: ["normal", "flying"],
  },
  {
    name: "rattata",
    types: ["normal"],
  },
  {
    name: "raticate",
    types: ["normal"],
  },
  {
    name: "spearow",
    types: ["normal", "flying"],
  },
  {
    name: "fearow",
    types: ["normal", "flying"],
  },
  {
    name: "ekans",
    types: ["poison"],
  },
  {
    name: "arbok",
    types: ["poison"],
  },
  {
    name: "pikachu",
    types: ["electric"],
  },
  {
    name: "raichu",
    types: ["electric"],
  },
  {
    name: "sandshrew",
    types: ["ground"],
  },
  {
    name: "sandslash",
    types: ["ground"],
  },
  {
    name: "nidoran-f",
    types: ["poison"],
  },
  {
    name: "nidorina",
    types: ["poison"],
  },
  {
    name: "nidoqueen",
    types: ["poison", "ground"],
  },
  {
    name: "nidoran-m",
    types: ["poison"],
  },
  {
    name: "nidorino",
    types: ["poison"],
  },
  {
    name: "nidoking",
    types: ["poison", "ground"],
  },
  {
    name: "clefairy",
    types: ["fairy"],
  },
  {
    name: "clefable",
    types: ["fairy"],
  },
  {
    name: "vulpix",
    types: ["fire"],
  },
  {
    name: "ninetales",
    types: ["fire"],
  },
  {
    name: "jigglypuff",
    types: ["normal", "fairy"],
  },
  {
    name: "wigglytuff",
    types: ["normal", "fairy"],
  },
  {
    name: "zubat",
    types: ["poison", "flying"],
  },
  {
    name: "golbat",
    types: ["poison", "flying"],
  },
  {
    name: "oddish",
    types: ["grass", "poison"],
  },
  {
    name: "gloom",
    types: ["grass", "poison"],
  },
  {
    name: "vileplume",
    types: ["grass", "poison"],
  },
  {
    name: "paras",
    types: ["bug", "grass"],
  },
  {
    name: "parasect",
    types: ["bug", "grass"],
  },
  {
    name: "venonat",
    types: ["bug", "poison"],
  },
  {
    name: "venomoth",
    types: ["bug", "poison"],
  },
  {
    name: "diglett",
    types: ["ground"],
  },
];
// An item of the array has `name`, a string, and `types`, an array of strings.
// The length of `types` in a record can be 1-99 (not always 1-2)
// e.g. [{ name: "bulbasaur", types: ["grass", "poison"] }]

const type = "grass";
// Problem 1: Filter by type
const filterArr = pokesArr.filter((poke) => {
  return poke.types.includes(type);
});
// - Populate `answer1` with Pokemon names that contain the type string
const answer1 = filterArr.map((poke) => {
  return poke.name;
});
// console.log("answer1", answer1);

// Problem 2: Filter by types (AND / OR)
// (Note that the length of the given `types` can be 1-99. (not always 1-2))
const types = ["bug", "poison"];
// - Populate `answer2Or` with Pokemon names that satisfy AT LEAST ONE of the given types
const filteredOr = pokesArr.filter((poke) => {
  return types.some((type) => poke.types.includes(type));
});
const answer2Or = filteredOr.map((poke) => poke.name);

// - Populate `answer2And` with Pokemon names that satisfy ALL of the given types
const filteredAnd = pokesArr.filter((poke) => {
  return types.every((t) => poke.types.includes(t));
});
const answer2And = filteredAnd.map((poke) => poke.name);

// See your results in your DevTools console
console.log("Answer 1", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);

// --------------------------------
// *********** Sorry, there is no DOM in this file, not sure about the following part.
// *********** If it's required to build an htlm, please let me know.
// function getPokes() {
//   const elScript = document.querySelector("#pokes");
//   const json = elScript.text;
//   const data = JSON.parse(json);
//   return data;
// }
// const pokes = getPokes();
// console.log("Pokes", pokes);
