/* const url = `https://pokeapi.co/api/v2/pokemon-species/?limit=898`

fetch(url)
  .then(res => {
    console.log(`success!`, res);
    return res.json();
  })
  .then(res => {
      let pokemonList = res.results;
      console.log(pokemonList);
  })
  .catch(err => {
    console.log(`something went wrong...`, err);
  }); */




// searched pokemon weaknesses & resistance

class Pokemon {
    constructor(weakness, resistance, immunity) {
        this.weakness = weakness;
        this.resistance = resistance;
        this.immunity = immunity;
    }
}

let pokemon = new Pokemon([],[],[]);

let pokemonOne = new Pokemon([],[],[]);
let pokemonTwo = new Pokemon([],[],[]);
let pokemonThree = new Pokemon([],[],[]);
let pokemonFour = new Pokemon([],[],[]);
let pokemonFive = new Pokemon([],[],[]);
let pokemonSix = new Pokemon([],[],[]);








// Pokemon type weaknesses

// normal
let normal = {
    weakness : [],
    resistance : [],
    immunity: []
}

const normalDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/normal`
    fetch(type)
    .then(res => {
        console.log(`success fetch normal!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            normal.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into normalWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            normal.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into normalWeakness array
        }
        for (let i = 0; i < res.damage_relations.no_damage_from.length; i++) {
            normal.immunity.push(res.damage_relations.no_damage_from[i].name); //push weaknesses into normalImmunity array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}

// fire 
let fire = {
    weakness : [],
    resistance : [],
}

const fireDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/fire`
    fetch(type)
    .then(res => {
        console.log(`success fetch fire!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            fire.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into fireWeakness array
        }       
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            fire.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into fireWeakness array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}

// water
let water = {
    weakness : [],
    resistance : []
}

const waterDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/water`
    fetch(type)
    .then(res => {
        console.log(`success fetch water!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            water.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into waterWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            water.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into waterWeakness array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}

// grass
let grass = {
    weakness : [],
    resistance : []
}

const grassDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/grass`
    fetch(type)
    .then(res => {
        console.log(`success fetch grass!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            grass.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into grassWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            grass.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into grassWeakness array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// electric
let electric = {
    weakness : [],
    resistance : []
}

const electricDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/electric`
    fetch(type)
    .then(res => {
        console.log(`success fetch electric!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            electric.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into electricWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            electric.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into electricWeakness array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// ice
let ice = {
    weakness : [],
    resistance : []
}

const iceDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/ice`
    fetch(type)
    .then(res => {
        console.log(`success fetch fire!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            ice.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into iceWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            ice.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into iceWeakness array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// fighting
let fighting = {
    weakness : [],
    resistance : []
}

const fightingDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/fighting`
    fetch(type)
    .then(res => {
        console.log(`success fetch fighting!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            fighting.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into fightingWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            fighting.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into fightingWeakness array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// poison
let poison = {
    weakness : [],
    resistance : []
}

const poisonDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/poison`
    fetch(type)
    .then(res => {
        console.log(`success fetch poison!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            poison.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into poisonWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            poison.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into poisonWeakness array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// ground
let ground = {
    weakness : [],
    resistance : [],
    immunity: []
}

const groundDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/ground`
    fetch(type)
    .then(res => {
        console.log(`success fetch ground!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            ground.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into groundWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            ground.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into groundWeakness array
        }
        for (let i = 0; i < res.damage_relations.no_damage_from.length; i++) {
            ground.immunity.push(res.damage_relations.no_damage_from[i].name); //push weaknesses into groundImmunity array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// flying

let flying = {
    weakness : [],
    resistance : [],
    immunity: []
}

const flyingDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/flying`
    fetch(type)
    .then(res => {
        console.log(`success fetch flying!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            flying.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into flyingWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            flying.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into flyingWeakness array
        }
        for (let i = 0; i < res.damage_relations.no_damage_from.length; i++) {
            flying.immunity.push(res.damage_relations.no_damage_from[i].name); //push weaknesses into flyingImmunity array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}

// psychic
let psychic = {
    weakness : [],
    resistance : []
}

const psychicDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/psychic`
    fetch(type)
    .then(res => {
        console.log(`success fetch psychic!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            psychic.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into psychicWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            psychic.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into psychicWeakness array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// bug
let bug = {
    weakness : [],
    resistance : []
}

const bugDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/bug`
    fetch(type)
    .then(res => {
        console.log(`success fetch bug!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            bug.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into bugWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            bug.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into bugWeakness array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// rock
let rock = {
    weakness : [],
    resistance : []
}

const rockDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/rock`
    fetch(type)
    .then(res => {
        console.log(`success fetch rock!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            rock.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into rockWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            rock.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into rockWeakness array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// ghost
let ghost = {
    weakness : [],
    resistance : [],
    immunity: []
}

const ghostDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/ghost`
    fetch(type)
    .then(res => {
        console.log(`success fetch ghost!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            ghost.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into ghostWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            ghost.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into ghostWeakness array
        }
        for (let i = 0; i < res.damage_relations.no_damage_from.length; i++) {
            ghost.immunity.push(res.damage_relations.no_damage_from[i].name); //push weaknesses into ghostImmunity array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// dark
let dark = {
    weakness : [],
    resistance : [],
    immunity: []
}

const darkDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/dark`
    fetch(type)
    .then(res => {
        console.log(`success fetch dark!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            dark.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into darkWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            dark.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into darkWeakness array
        }
        for (let i = 0; i < res.damage_relations.no_damage_from.length; i++) {
            dark.immunity.push(res.damage_relations.no_damage_from[i].name); //push weaknesses into darkImmunity array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// dragon
let dragon = {
    weakness : [],
    resistance : []
}

const dragonDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/dragon`
    fetch(type)
    .then(res => {
        console.log(`success fetch dragon!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            dragon.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into dragonWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            dragon.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into dragonWeakness array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// steel
let steel = {
    weakness : [],
    resistance : [],
    immunity: []
}

const steelDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/steel`
    fetch(type)
    .then(res => {
        console.log(`success fetch steel!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            steel.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into steelWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            steel.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into steelWeakness array
        }
        for (let i = 0; i < res.damage_relations.no_damage_from.length; i++) {
            steel.immunity.push(res.damage_relations.no_damage_from[i].name); //push weaknesses into steelImmunity array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}
// fairy
let fairy= {
    weakness : [],
    resistance : [],
    immunity: []
}

const fairyDamageRelations = () => {
    const type = `https://pokeapi.co/api/v2/type/fairy`
    fetch(type)
    .then(res => {
        console.log(`success fetch fairy!`, res);
        return res.json();
    })
    .then(res => {
        for (let i = 0; i < res.damage_relations.double_damage_from.length; i++) {
            fairy.weakness.push(res.damage_relations.double_damage_from[i].name); //push weaknesses into fairyWeakness array
        }        
        for (let i = 0; i < res.damage_relations.half_damage_from.length; i++) {
            fairy.resistance.push(res.damage_relations.half_damage_from[i].name); //push weaknesses into fairyWeakness array
        }
        for (let i = 0; i < res.damage_relations.no_damage_from.length; i++) {
            fairy.immunity.push(res.damage_relations.no_damage_from[i].name); //push weaknesses into fairyImmunity array
        }
    })
    .catch(err => {
        console.log(`something went wrong...`, err);
    });

}


// api fetch for types




normalDamageRelations();
fireDamageRelations();
waterDamageRelations();
grassDamageRelations();
electricDamageRelations();
iceDamageRelations();
fightingDamageRelations();
poisonDamageRelations();
groundDamageRelations();
flyingDamageRelations();
psychicDamageRelations();
bugDamageRelations();
rockDamageRelations();
ghostDamageRelations();
darkDamageRelations();
dragonDamageRelations();
steelDamageRelations();
fairyDamageRelations();


//type checker
function typeChecker (event) {
    if(event == `normal`){
        for(let j = 0; j < normal.weakness.length; j++) {
            pokemon.weakness.push(normal.weakness[j])
        }
        for (let k = 0; k < normal.resistance.length; k++) {
            pokemon.resistance.push(normal.resistance[k])
        }
        for (let l = 0; l < normal.immunity.length; l++) {
            pokemon.immunity.push(normal.immunity[l])
        }
    } if(event == `fire`){
        for(let j = 0; j < fire.weakness.length; j++) {
            pokemon.weakness.push(fire.weakness[j])
        }
        for (let k = 0; k < fire.resistance.length; k++) {
            pokemon.resistance.push(fire.resistance[k])
        }
    } if(event == `water`){
        for(let j = 0; j < water.weakness.length; j++) {
            pokemon.weakness.push(water.weakness[j])
        }
        for (let k = 0; k < water.resistance.length; k++) {
            pokemon.resistance.push(water.resistance[k])
        }
    } if(event == `grass`){
        for(let j = 0; j < grass.weakness.length; j++) {
            pokemon.weakness.push(grass.weakness[j])
        }
        for (let k = 0; k < grass.resistance.length; k++) {
            pokemon.resistance.push(grass.resistance[k])
        }
    } if(event == `electric`){
        for(let j = 0; j < electric.weakness.length; j++) {
            pokemon.weakness.push(electric.weakness[j])
        }
        for (let k = 0; k < electric.resistance.length; k++) {
            pokemon.resistance.push(electric.resistance[k])
        }
    } if(event == `ice`){
        for(let j = 0; j < ice.weakness.length; j++) {
            pokemon.weakness.push(ice.weakness[j])
        }
        for (let k = 0; k < ice.resistance.length; k++) {
            pokemon.resistance.push(ice.resistance[k])
        }
    } if(event == `fighting`){
        for(let j = 0; j < fighting.weakness.length; j++) {
            pokemon.weakness.push(fighting.weakness[j])
        }
        for (let k = 0; k < fighting.resistance.length; k++) {
            pokemon.resistance.push(fighting.resistance[k])
        }
    }  if(event == `poison`){
        for(let j = 0; j < poison.weakness.length; j++) {
            pokemon.weakness.push(poison.weakness[j])
        }
        for (let k = 0; k < poison.resistance.length; k++) {
            pokemon.resistance.push(poison.resistance[k])
        }
    } if(event == `ground`){
        for(let j = 0; j < ground.weakness.length; j++) {
            pokemon.weakness.push(ground.weakness[j])
        }
        for (let k = 0; k < ground.resistance.length; k++) {
            pokemon.resistance.push(ground.resistance[k])
        }
        for (let l = 0; l < ground.immunity.length; l++) {
            pokemon.immunity.push(ground.immunity[l])
        }
    } if(event == `flying`) {
        for(let j = 0; j < flying.weakness.length; j++) {
            pokemon.weakness.push(flying.weakness[j])
        }
        for (let k = 0; k < flying.resistance.length; k++) {
            pokemon.resistance.push(flying.resistance[k])
        }
        for (let l = 0; l < flying.immunity.length; l++) {
            pokemon.immunity.push(flying.immunity[l])
        }
    } if(event == `psychic`){
        for(let j = 0; j < psychic.weakness.length; j++) {
            pokemon.weakness.push(psychic.weakness[j])
        }
        for (let k = 0; k < psychic.resistance.length; k++) {
            pokemon.resistance.push(psychic.resistance[k])
        }
    } if(event == `bug`){
        for(let j = 0; j < bug.weakness.length; j++) {
            pokemon.weakness.push(bug.weakness[j])
        }
        for (let k = 0; k < bug.resistance.length; k++) {
            pokemon.resistance.push(bug.resistance[k])
        }
    } if(event == `rock`){
        for(let j = 0; j < rock.weakness.length; j++) {
            pokemon.weakness.push(rock.weakness[j])
        }
        for (let k = 0; k < rock.resistance.length; k++) {
            pokemon.resistance.push(rock.resistance[k])
        }
    } if(event == `ghost`){
        for(let j = 0; j < ghost.weakness.length; j++) {
            pokemon.weakness.push(ghost.weakness[j])
        }
        for (let k = 0; k < ghost.resistance.length; k++) {
            pokemon.resistance.push(ghost.resistance[k])
        }
        for (let l = 0; l < ghost.immunity.length; l++) {
            pokemon.immunity.push(ghost.immunity[l])
        }
    } if(event == `dark`){
        for(let j = 0; j < dark.weakness.length; j++) {
            pokemon.weakness.push(dark.weakness[j])
        }
        for (let k = 0; k < dark.resistance.length; k++) {
            pokemon.resistance.push(dark.resistance[k])
        }
        for (let l = 0; l < dark.immunity.length; l++) {
            pokemon.immunity.push(dark.immunity[l])
        }
    } if(event == `dragon`){
        for(let j = 0; j < dragon.weakness.length; j++) {
            pokemon.weakness.push(dragon.weakness[j])
        }
        for (let k = 0; k < dragon.resistance.length; k++) {
            pokemon.resistance.push(dragon.resistance[k])
        }
    } if(event == `steel`){
        for(let j = 0; j < steel.weakness.length; j++) {
            pokemon.weakness.push(steel.weakness[j])
        }
        for (let k = 0; k < steel.resistance.length; k++) {
            pokemon.resistance.push(steel.resistance[k])
        }
        for (let l = 0; l < steel.immunity.length; l++) {
            pokemon.immunity.push(steel.immunity[l])
        }
    } if(event == `fairy`){
        for(let j = 0; j < fairy.weakness.length; j++) {
            pokemon.weakness.push(fairy.weakness[j])
        }
        for (let k = 0; k < fairy.resistance.length; k++) {
            pokemon.resistance.push(fairy.resistance[k])
        }
        for (let l = 0; l < fairy.immunity.length; l++) {
            pokemon.immunity.push(fairy.immunity[l])
        }
    }

}


// button declarations


let pokemonOneForm = document.querySelector(`#pokemonOne`); 
let pokemonTwoForm = document.querySelector(`#pokemonTwo`);
let pokemonThreeForm = document.querySelector(`#pokemonThree`);
let pokemonFourForm = document.querySelector(`#pokemonFour`);
let pokemonFiveForm = document.querySelector(`#pokemonFive`);
let pokemonSixForm = document.querySelector(`#pokemonSix`);
let coverageButton = document.querySelector(`#calculateCoverage`);





// API fetch functions
function pokemonData () {
    let url = "https://pokeapi.co/api/v2/pokemon/"
    let textInput = ``;
    let data = ``;
    if (assigned == 1) {
        textInput = document.querySelector(`#pokemonOneInputBar`).value;
        data = document.getElementById(`pokemonOneType`);
    }
    else if (assigned == 2) {
        textInput = document.querySelector(`#pokemonTwoInputBar`).value;
        data = document.getElementById(`pokemonTwoType`);
    }
    else if (assigned == 3) {
        textInput = document.querySelector(`#pokemonThreeInputBar`).value;
        data = document.getElementById(`pokemonThreeType`);      
    }
    else if (assigned == 4) {
        textInput = document.querySelector(`#pokemonFourInputBar`).value;
        data = document.getElementById(`pokemonFourType`);        
    }
    else if (assigned == 5) {
        textInput = document.querySelector(`#pokemonFiveInputBar`).value;
        data = document.getElementById(`pokemonFiveType`);       
    }
    else if (assigned == 6) {
        textInput = document.querySelector(`#pokemonSixInputBar`).value;
        data = document.getElementById(`pokemonSixType`);      
    }
    data.innerHTML = ``;
    url += textInput;
    console.log(url);
    pokemon.weakness = [];
    pokemon.resistance = [];
    pokemon.immunity = [];
    fetch(url)
        .then(res => res.json())
        .then(res => {
            let types = res.types;
            for(let i = 0; i < types.length; i++) {
                typeChecker(types[i].type.name);
            
            }

            let uniquePokemonWeakness = pokemon.weakness.filter((c, index) => { //removes duplicates from weakness for double types
                return pokemon.weakness.indexOf(c) === index;
            });
            let uniquePokemonResistance = pokemon.resistance.filter((c, index) => { //removes duplicates from resistance for double types
                return pokemon.resistance.indexOf(c) === index;
            });

            uniquePokemonWeaknessFiltered = uniquePokemonWeakness.filter(val => !uniquePokemonResistance.includes(val)); //filters weaknesses for dual types for true weakness
            uniquePokemonWeaknessImmune = uniquePokemonWeaknessFiltered.filter(val => !pokemon.immunity.includes(val)); // filters immunity from weaknesses
            uniquePokemonResistanceFiltered = uniquePokemonResistance.filter(val => !uniquePokemonWeakness.includes(val)); //filters resistance for dual types for true resistance
            uniquePokemonResistanceImmune = uniquePokemonResistanceFiltered.filter(val => !pokemon.immunity.includes(val)); // filters immunity from resistance
            if (assigned == 1) {
                pokemonOne.weakness.length = 0;
                pokemonOne.resistance.length = 0;
                pokemonOne.immunity.length = 0;
                pokemonOne.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonOne.resistance.push(...uniquePokemonResistanceImmune);
                pokemonOne.immunity.push(...pokemon.immunity);
            }
            else if (assigned == 2) {
                pokemonTwo.weakness.length = 0;
                pokemonTwo.resistance.length = 0;
                pokemonTwo.immunity.length = 0;
                pokemonTwo.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonTwo.resistance.push(...uniquePokemonResistanceImmune);
                pokemonTwo.immunity.push(...pokemon.immunity);
            }
            else if (assigned == 3) {
                pokemonThree.weakness.length = 0;
                pokemonThree.resistance.length = 0;
                pokemonThree.immunity.length = 0;
                pokemonThree.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonThree.resistance.push(...uniquePokemonResistanceImmune);
                pokemonThree.immunity.push(...pokemon.immunity);      
            }
            else if (assigned == 4) {
                pokemonFour.weakness.length = 0;
                pokemonFour.resistance.length = 0;
                pokemonFour.immunity.length = 0;
                pokemonFour.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonFour.resistance.push(...uniquePokemonResistanceImmune);
                pokemonFour.immunity.push(...pokemon.immunity);       
            }
            else if (assigned == 5) {
                pokemonFive.weakness.length = 0;
                pokemonFive.resistance.length = 0;
                pokemonFive.immunity.length = 0;
                pokemonFive.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonFive.resistance.push(...uniquePokemonResistanceImmune);
                pokemonFive.immunity.push(...pokemon.immunity);            }
            else if (assigned == 6) {
                pokemonSix.weakness.length = 0;
                pokemonSix.resistance.length = 0;
                pokemonSix.immunity.length = 0;
                pokemonSix.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonSix.resistance.push(...uniquePokemonResistanceImmune);
                pokemonSix.immunity.push(...pokemon.immunity);            }
            for (let j = 0; j < uniquePokemonWeaknessImmune.length; j++) {
                let list = document.createElement(`li`);
                list.innerHTML = uniquePokemonWeaknessImmune[j]
                data.appendChild(list)
            }
        })
        .catch(err => console.log(`something went wrong...`, err))
        .finally(() => console.log("request was made!"));
  }

//coverage calculator

function calculateCoverage() {
    let coverageStatement = document.querySelector(`#coverageStatement`);
    let fullWeakness = pokemonOne.weakness.concat(pokemonTwo.weakness, pokemonThree.weakness, pokemonFour.weakness, pokemonFive.weakness, pokemonSix.weakness);
    let fullResistance = pokemonOne.resistance.concat(pokemonOne.immunity, pokemonTwo.resistance, pokemonTwo.immunity, pokemonThree.resistance, pokemonThree.immunity, pokemonFour.resistance, pokemonFour.immunity, pokemonFive.resistance, pokemonFive.immunity, pokemonSix.resistance, pokemonSix.immunity);
    let fullPokemonWeakness = fullWeakness.filter((c, index) => { //removes duplicates from weakness from all pokemon together
        return fullWeakness.indexOf(c) === index;
    });
    let fullPokemonResistance = fullResistance.filter((c, index) => { //removes duplicates from resistance from all pokemon together
        return fullResistance.indexOf(c) === index;
    });
    fullPokemonWeaknessFiltered = fullPokemonWeakness.filter(val => !fullPokemonResistance.includes(val)); //filters weaknesses for total coverage weakness
    fullPokemonResistanceFiltered = fullPokemonResistance.filter(val => !fullPokemonWeakness.includes(val)); //filters resistance for total coverage resistance
    console.log(fullPokemonWeaknessFiltered); 
}



// assigner
let assigned = ``;

function assignerOne (event) {
    event.preventDefault()
    assigned = 1;
    pokemonData()
}

function assignerTwo (event) {
    event.preventDefault()
    assigned = 2;
    pokemonData()
}

function assignerThree (event) {
    event.preventDefault()
    assigned = 3;
    pokemonData()
}

function assignerFour (event) {
    event.preventDefault()
    assigned = 4;
    pokemonData()
}

function assignerFive (event) {
    event.preventDefault()
    assigned = 5;
    pokemonData()
}

function assignerSix (event) {
    event.preventDefault()
    assigned = 6;
    pokemonData()
}


// event listeners
pokemonOneForm.addEventListener(`submit`, assignerOne)
pokemonTwoForm.addEventListener(`submit`, assignerTwo)
pokemonThreeForm.addEventListener(`submit`, assignerThree)
pokemonFourForm.addEventListener(`submit`, assignerFour)
pokemonFiveForm.addEventListener(`submit`, assignerFive)
pokemonSixForm.addEventListener(`submit`, assignerSix)
coverageButton.addEventListener(`click`, calculateCoverage)