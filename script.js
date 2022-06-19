const url = `https://pokeapi.co/api/v2/pokemon/?limit=1126`

let pokemonList = [];

fetch(url)
  .then(res => {
    console.log(`success!`, res);
    return res.json();
  })
  .then(res => {
      pokemonList.push(...res.results);
  })
  .catch(err => {
    console.log(`something went wrong...`, err);
  }); 




// searched pokemon weaknesses & resistance & type

class Pokemon {
    constructor(weakness, resistance, immunity, type, abilities, moves) {
        this.weakness = weakness;
        this.resistance = resistance;
        this.immunity = immunity;
        this.type = type;
        this.abilities = abilities;
        this.moves = moves;
    }
}

let pokemon = new Pokemon([],[],[],[],[],[]);

let pokemonOne = new Pokemon([],[],[],[],[],[]);
let pokemonTwo = new Pokemon([],[],[],[],[],[]);
let pokemonThree = new Pokemon([],[],[],[],[],[]);
let pokemonFour = new Pokemon([],[],[],[],[],[]);
let pokemonFive = new Pokemon([],[],[],[],[],[]);
let pokemonSix = new Pokemon([],[],[],[],[],[]);








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
    let picture = ``;
    if (assigned == 1) {
        textInput = document.querySelector(`#pokemonOneInputBar`).value;
        data = document.getElementById(`pokemonOneType`);
        picture = document.getElementById(`pokemonOneSprite`);
    }
    else if (assigned == 2) {
        textInput = document.querySelector(`#pokemonTwoInputBar`).value;
        data = document.getElementById(`pokemonTwoType`);
        picture = document.getElementById(`pokemonTwoSprite`);
    }
    else if (assigned == 3) {
        textInput = document.querySelector(`#pokemonThreeInputBar`).value;
        data = document.getElementById(`pokemonThreeType`);   
        picture = document.getElementById(`pokemonThreeSprite`);   
    }
    else if (assigned == 4) {
        textInput = document.querySelector(`#pokemonFourInputBar`).value;
        data = document.getElementById(`pokemonFourType`);    
        picture = document.getElementById(`pokemonFourSprite`);    
    }
    else if (assigned == 5) {
        textInput = document.querySelector(`#pokemonFiveInputBar`).value;
        data = document.getElementById(`pokemonFiveType`);      
        picture = document.getElementById(`pokemonFiveSprite`); 
    }
    else if (assigned == 6) {
        textInput = document.querySelector(`#pokemonSixInputBar`).value;
        data = document.getElementById(`pokemonSixType`);    
        picture = document.getElementById(`pokemonSixSprite`);  
    }
    data.innerHTML = ``;
    picture.src = ``;
    picture.alt = ``;
    url += textInput;
    console.log(url);
    pokemon.weakness = [];
    pokemon.resistance = [];
    pokemon.immunity = [];
    pokemon.type = [];
    pokemon.abilities = [];
    pokemon.moves = [];
    fetch(url)
        .then(res => res.json())
        .then(res => {
            let types = res.types;
            for(let i = 0; i < types.length; i++) {
                typeChecker(types[i].type.name);
                pokemon.type.push(types[i].type.name);
            
            }

            let uniquePokemonWeakness = pokemon.weakness.filter((c, index) => { //removes duplicates from weakness for double types
                return pokemon.weakness.indexOf(c) === index;
            });
            let uniquePokemonResistance = pokemon.resistance.filter((c, index) => { //removes duplicates from resistance for double types
                return pokemon.resistance.indexOf(c) === index;
            });

            let abilities = res.abilities;
            for(let i = 0; i < abilities.length; i++) {
                pokemon.abilities.push(abilities[i].ability.name);

            }
            let moves = res.moves;
            for(let i = 0; i < moves.length; i++) {
                pokemon.moves.push(moves[i].move.name);
            }

            uniquePokemonWeaknessFiltered = uniquePokemonWeakness.filter(val => !uniquePokemonResistance.includes(val)); //filters weaknesses for dual types for true weakness
            uniquePokemonWeaknessImmune = uniquePokemonWeaknessFiltered.filter(val => !pokemon.immunity.includes(val)); // filters immunity from weaknesses
            uniquePokemonResistanceFiltered = uniquePokemonResistance.filter(val => !uniquePokemonWeakness.includes(val)); //filters resistance for dual types for true resistance
            uniquePokemonResistanceImmune = uniquePokemonResistanceFiltered.filter(val => !pokemon.immunity.includes(val)); // filters immunity from resistance
            if (assigned == 1) {
                pokemonOne.weakness.length = 0;
                pokemonOne.resistance.length = 0;
                pokemonOne.immunity.length = 0;
                pokemonOne.type.length = 0;
                pokemonOne.abilities.length = 0;
                pokemonOne.moves.length = 0;
                pokemonOne.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonOne.resistance.push(...uniquePokemonResistanceImmune);
                pokemonOne.immunity.push(...pokemon.immunity);
                pokemonOne.type.push(...pokemon.type);
                pokemonOne.abilities.push(...pokemon.abilities);
                pokemonOne.moves.push(...pokemon.moves);
                console.log(pokemonOne.abilities);
                console.log(pokemonOne.moves)
            }
            else if (assigned == 2) {
                pokemonTwo.weakness.length = 0;
                pokemonTwo.resistance.length = 0;
                pokemonTwo.immunity.length = 0;
                pokemonTwo.type.length = 0;
                pokemonTwo.abilities.length = 0;
                pokemonTwo.moves.length = 0;
                pokemonTwo.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonTwo.resistance.push(...uniquePokemonResistanceImmune);
                pokemonTwo.immunity.push(...pokemon.immunity);
                pokemonTwo.type.push(...pokemon.type);
                pokemonTwo.abilities.push(...pokemon.abilities);
                pokemonTwo.moves.push(...pokemon.moves);
            }
            else if (assigned == 3) {
                pokemonThree.weakness.length = 0;
                pokemonThree.resistance.length = 0;
                pokemonThree.immunity.length = 0;
                pokemonThree.type.length = 0;
                pokemonThree.abilities.length = 0;
                pokemonThree.moves.length = 0;
                pokemonThree.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonThree.resistance.push(...uniquePokemonResistanceImmune);
                pokemonThree.immunity.push(...pokemon.immunity);
                pokemonThree.type.push(...pokemon.type);     
                pokemonThree.abilities.push(...pokemon.abilities);
                pokemonThree.moves.push(...pokemon.moves);
            }
            else if (assigned == 4) {
                pokemonFour.weakness.length = 0;
                pokemonFour.resistance.length = 0;
                pokemonFour.immunity.length = 0;
                pokemonFour.type.length = 0;
                pokemonFour.abilities.length = 0;
                pokemonFour.moves.length = 0;
                pokemonFour.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonFour.resistance.push(...uniquePokemonResistanceImmune);
                pokemonFour.immunity.push(...pokemon.immunity);
                pokemonFour.type.push(...pokemon.type);      
                pokemonFour.abilities.push(...pokemon.abilities);
                pokemonFour.moves.push(...pokemon.moves);
            }
            else if (assigned == 5) {
                pokemonFive.weakness.length = 0;
                pokemonFive.resistance.length = 0;
                pokemonFive.immunity.length = 0;
                pokemonFive.type.length = 0;
                pokemonFive.abilities.length = 0;
                pokemonFive.moves.length = 0;
                pokemonFive.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonFive.resistance.push(...uniquePokemonResistanceImmune);
                pokemonFive.immunity.push(...pokemon.immunity);
                pokemonFive.type.push(...pokemon.type);          
                pokemonFive.abilities.push(...pokemon.abilities);
                pokemonFive.moves.push(...pokemon.moves); 
            }
            else if (assigned == 6) {
                pokemonSix.weakness.length = 0;
                pokemonSix.resistance.length = 0;
                pokemonSix.immunity.length = 0;
                pokemonSix.type.length = 0;
                pokemonSix.abilities.length = 0;
                pokemonSix.moves.length = 0;
                pokemonSix.weakness.push(...uniquePokemonWeaknessImmune);
                pokemonSix.resistance.push(...uniquePokemonResistanceImmune);
                pokemonSix.immunity.push(...pokemon.immunity);            
                pokemonSix.type.push(...pokemon.type);
                pokemonSix.abilities.push(...pokemon.abilities);
                pokemonSix.moves.push(...pokemon.moves);
            }
            for (let j = 0; j < pokemon.type.length; j++) {
                let list = document.createElement(`li`);
                list.innerHTML = `<img src="./art/${pokemon.type[j]}.png" alt="${pokemon.type[j]}" class="typePic">`
                data.appendChild(list)
            }
            picture.alt = textInput;
            picture.src = res.sprites.other[`official-artwork`].front_default;
        })
        .catch(err => console.log(`something went wrong...`, err))
        .finally(() => console.log("request was made!"));
  }

//coverage calculator

function calculateCoverage() {
    let coverageStatement = document.querySelector(`#coverageStatement`);
    let coverageType = document.querySelector(`#typeCoverage`)
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
    coverageType.innerHTML = ``
    if(fullPokemonWeaknessFiltered.length > 0) {
        coverageStatement.innerHTML = "Your Pokemon team is lacking coverage against the following types:";
        for(let i = 0; i < fullPokemonWeaknessFiltered.length ; i++) {
            let list = document.createElement(`li`);
            list.innerHTML = `<img src="./art/${fullPokemonWeaknessFiltered[i]}.png" alt="${fullPokemonWeaknessFiltered[i]}" class="weaknessPic">`;
            coverageType.appendChild(list)
        }
    } else if(fullPokemonWeaknessFiltered.length == 0) {
        coverageStatement.innerHTML = "Your Pokemon team has complete typing coverage!"
    }
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
pokemonOneForm.addEventListener(`submit`, assignerOne);
pokemonTwoForm.addEventListener(`submit`, assignerTwo);
pokemonThreeForm.addEventListener(`submit`, assignerThree);
pokemonFourForm.addEventListener(`submit`, assignerFour);
pokemonFiveForm.addEventListener(`submit`, assignerFive);
pokemonSixForm.addEventListener(`submit`, assignerSix);
coverageButton.addEventListener(`click`, calculateCoverage);

// input bar variable + listeners

let pokemonOneBar = document.querySelector(`#pokemonOneInputBar`);
let pokemonTwoBar = document.querySelector(`#pokemonTwoInputBar`);
let pokemonThreeBar = document.querySelector(`#pokemonThreeInputBar`);
let pokemonFourBar = document.querySelector(`#pokemonFourInputBar`);
let pokemonFiveBar = document.querySelector(`#pokemonFiveInputBar`);
let pokemonSixBar = document.querySelector(`#pokemonSixInputBar`);

pokemonOneBar.addEventListener(`click`, dropAssignOne);
pokemonTwoBar.addEventListener(`click`, dropAssignTwo);
pokemonThreeBar.addEventListener(`click`, dropAssignThree);
pokemonFourBar.addEventListener(`click`, dropAssignFour);
pokemonFiveBar.addEventListener(`click`, dropAssignFive);
pokemonSixBar.addEventListener(`click`, dropAssignSix);


// dynamic filter functions

pokemonOneBar.addEventListener(`keyup`, (e) => {
    if (!dropDown.classList.contains(`show`)){
        dropDown.classList.add(`show`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemonList.filter((pokemon) => {
        return (pokemon.name.toLowerCase().includes(searchString));
    });
    displayedPokemon(filteredPokemon);
});

pokemonTwoBar.addEventListener(`keyup`, (e) => {
    if (!dropDown.classList.contains(`show`)){
        dropDown.classList.add(`show`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemonList.filter((pokemon) => {
        return (pokemon.name.toLowerCase().includes(searchString));
    });
    displayedPokemon(filteredPokemon);
});

pokemonThreeBar.addEventListener(`keyup`, (e) => {
    if (!dropDown.classList.contains(`show`)){
        dropDown.classList.add(`show`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemonList.filter((pokemon) => {
        return (pokemon.name.toLowerCase().includes(searchString));
    });
    displayedPokemon(filteredPokemon);
});

pokemonFourBar.addEventListener(`keyup`, (e) => {
    if (!dropDown.classList.contains(`show`)){
        dropDown.classList.add(`show`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemonList.filter((pokemon) => {
        return (pokemon.name.toLowerCase().includes(searchString));
    });
    displayedPokemon(filteredPokemon);
});

pokemonFiveBar.addEventListener(`keyup`, (e) => {
    if (!dropDown.classList.contains(`show`)){
        dropDown.classList.add(`show`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemonList.filter((pokemon) => {
        return (pokemon.name.toLowerCase().includes(searchString));
    });
    displayedPokemon(filteredPokemon);
});

pokemonSixBar.addEventListener(`keyup`, (e) => {
    if (!dropDown.classList.contains(`show`)){
        dropDown.classList.add(`show`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemonList.filter((pokemon) => {
        return (pokemon.name.toLowerCase().includes(searchString));
    });
    displayedPokemon(filteredPokemon);
});

//dropdowns



let dropDown = ``;

let dropDown1 = document.querySelector(`#myDropdown1`);
let dropDown2 = document.querySelector(`#myDropdown2`);
let dropDown3 = document.querySelector(`#myDropdown3`);
let dropDown4 = document.querySelector(`#myDropdown4`);
let dropDown5 = document.querySelector(`#myDropdown5`);
let dropDown6 = document.querySelector(`#myDropdown6`);




function showDropdownMenu() {
    displayedPokemon(pokemonList)
    dropDown.classList.toggle("show");
}

const displayedPokemon = (pokemon) => {
    const pokemonString = pokemon.map((pokemon) => {
        return `<a href="#" class="dropdown-item">${pokemon.name}</a>`;
    })
    .join(` `);
    dropDown.innerHTML = pokemonString
}

//dropdown assigner



function dropAssignOne (event) {
    event.preventDefault()
    dropDown = dropDown1
    showDropdownMenu()
}

function dropAssignTwo (event) {
    event.preventDefault()
    dropDown = dropDown2
    showDropdownMenu()
}

function dropAssignThree (event) {
    event.preventDefault()
    dropDown = dropDown3
    showDropdownMenu()
}

function dropAssignFour (event) {
    event.preventDefault()
    dropDown = dropDown4
    showDropdownMenu()
}

function dropAssignFive (event) {
    event.preventDefault()
    dropDown = dropDown5
    showDropdownMenu()
}

function dropAssignSix (event) {
    event.preventDefault()
    dropDown = dropDown6
    showDropdownMenu()
}

//fill in on click

$(function(){
    $('#myDropdown1').on('click', '.dropdown-item', function() {
        $("#pokemonOneInputBar").val($(this).html());
    });
});

$(function(){
    $('#myDropdown2').on('click', '.dropdown-item', function() {
        $("#pokemonTwoInputBar").val($(this).html());
    });
});

$(function(){
    $('#myDropdown3').on('click', '.dropdown-item', function() {
        $("#pokemonThreeInputBar").val($(this).html());
    });
});

$(function(){
    $('#myDropdown4').on('click', '.dropdown-item', function() {
        $("#pokemonFourInputBar").val($(this).html());
    });
});

$(function(){
    $('#myDropdown5').on('click', '.dropdown-item', function() {
        $("#pokemonFiveInputBar").val($(this).html());
    });
});

$(function(){
    $('#myDropdown6').on('click', '.dropdown-item', function() {
        $("#pokemonSixInputBar").val($(this).html());
    });
});

// close dropdown

window.onclick = function(event) {
    if (!event.target.matches('#pokemonOneInputBar')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    } if (!event.target.matches('#pokemonTwoInputBar')) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      } if (!event.target.matches('#pokemonThreeInputBar')) {
        var dropdowns = document.getElementsByClassName("dropdown-content3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      } if (!event.target.matches('#pokemonFourInputBar')) {
        var dropdowns = document.getElementsByClassName("dropdown-content4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      } if (!event.target.matches('#pokemonFiveInputBar')) {
        var dropdowns = document.getElementsByClassName("dropdown-content5");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      } if (!event.target.matches('#pokemonSixInputBar')) {
        var dropdowns = document.getElementsByClassName("dropdown-content6");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      } if (!event.target.matches('#pokemonOneAbility')) {
        var dropdowns = document.getElementsByClassName("abilityContent1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonTwoAbility')) {
        var dropdowns = document.getElementsByClassName("abilityContent2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonThreeAbility')) {
        var dropdowns = document.getElementsByClassName("abilityContent3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonFourAbility')) {
        var dropdowns = document.getElementsByClassName("abilityContent4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonFiveAbility')) {
        var dropdowns = document.getElementsByClassName("abilityContent5");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonSixAbility')) {
        var dropdowns = document.getElementsByClassName("abilityContent6");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonOneMove1')) {
        var dropdowns = document.getElementsByClassName("pokemon1Move1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonOneMove2')) {
        var dropdowns = document.getElementsByClassName("pokemon1Move2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonOneMove3')) {
        var dropdowns = document.getElementsByClassName("pokemon1Move3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonOneMove4')) {
        var dropdowns = document.getElementsByClassName("pokemon1Move4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonTwoMove1')) {
        var dropdowns = document.getElementsByClassName("pokemon2Move1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonTwoMove2')) {
        var dropdowns = document.getElementsByClassName("pokemon2Move2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonTwoMove3')) {
        var dropdowns = document.getElementsByClassName("pokemon2Move3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonTwoMove4')) {
        var dropdowns = document.getElementsByClassName("pokemon2Move4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonThreeMove1')) {
        var dropdowns = document.getElementsByClassName("pokemon3Move1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonThreeMove2')) {
        var dropdowns = document.getElementsByClassName("pokemon3Move2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonThreeMove3')) {
        var dropdowns = document.getElementsByClassName("pokemon3Move3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonThreeMove4')) {
        var dropdowns = document.getElementsByClassName("pokemon3Move4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonFourMove1')) {
        var dropdowns = document.getElementsByClassName("pokemon4Move1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonFourMove2')) {
        var dropdowns = document.getElementsByClassName("pokemon4Move2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonFourMove3')) {
        var dropdowns = document.getElementsByClassName("pokemon4Move3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonFourMove4')) {
        var dropdowns = document.getElementsByClassName("pokemon4Move4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonFiveMove1')) {
        var dropdowns = document.getElementsByClassName("pokemon5Move1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonFiveMove2')) {
        var dropdowns = document.getElementsByClassName("pokemon5Move2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonFiveMove3')) {
        var dropdowns = document.getElementsByClassName("pokemon5Move3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonFiveMove4')) {
        var dropdowns = document.getElementsByClassName("pokemon5Move4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonSixMove1')) {
        var dropdowns = document.getElementsByClassName("pokemon6Move1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonSixMove2')) {
        var dropdowns = document.getElementsByClassName("pokemon6Move2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonSixMove3')) {
        var dropdowns = document.getElementsByClassName("pokemon6Move3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      } if (!event.target.matches('#pokemonSixMove4')) {
        var dropdowns = document.getElementsByClassName("pokemon6Move4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('abilityShow')) {
            openDropdown.classList.remove('abilityShow');
          }
        }
      }  
  }

// ALL ABILITY STUFF

  let pokemonOneAbilityBar = document.querySelector(`#pokemonOneAbility`);
  let pokemonTwoAbilityBar = document.querySelector(`#pokemonTwoAbility`);
  let pokemonThreeAbilityBar = document.querySelector(`#pokemonThreeAbility`);
  let pokemonFourAbilityBar = document.querySelector(`#pokemonFourAbility`);
  let pokemonFiveAbilityBar = document.querySelector(`#pokemonFiveAbility`);
  let pokemonSixAbilityBar = document.querySelector(`#pokemonSixAbility`);

  pokemonOneAbilityBar.addEventListener(`click`, abilityAssignOne);
  pokemonTwoAbilityBar.addEventListener(`click`, abilityAssignTwo);
  pokemonThreeAbilityBar.addEventListener(`click`, abilityAssignThree);
  pokemonFourAbilityBar.addEventListener(`click`, abilityAssignFour);
  pokemonFiveAbilityBar.addEventListener(`click`, abilityAssignFive);
  pokemonSixAbilityBar.addEventListener(`click`, abilityAssignSix);


  let abilityDropdown = ``;
  let abilityDropdown1 = document.querySelector(`#abilityDropdown1`);
  let abilityDropdown2 = document.querySelector(`#abilityDropdown2`);
  let abilityDropdown3 = document.querySelector(`#abilityDropdown3`);
  let abilityDropdown4 = document.querySelector(`#abilityDropdown4`);
  let abilityDropdown5 = document.querySelector(`#abilityDropdown5`);
  let abilityDropdown6 = document.querySelector(`#abilityDropdown6`);
  
  let abilities = ``
  
  let abilityPokemon = []
  
  function abilityAssignOne (event) {
    event.preventDefault()
    abilityDropdown = abilityDropdown1;
    abilityPokemon = pokemonOne
    showAbilityMenu()
}

function abilityAssignTwo (event) {
    event.preventDefault()
    abilityDropdown = abilityDropdown2;
    abilityPokemon = pokemonTwo
    showAbilityMenu()
}

function abilityAssignThree (event) {
    event.preventDefault()
    abilityDropdown = abilityDropdown3;
    abilityPokemon = pokemonThree
    showAbilityMenu()
}

function abilityAssignFour (event) {
    event.preventDefault()
    abilityDropdown = abilityDropdown4;
    abilityPokemon = pokemonFour
    showAbilityMenu()
}

function abilityAssignFive (event) {
    event.preventDefault()
    abilityDropdown = abilityDropdown5;
    abilityPokemon = pokemonFive
    showAbilityMenu()
}

function abilityAssignSix (event) {
    event.preventDefault()
    abilityDropdown = abilityDropdown6;
    abilityPokemon = pokemonSix
    showAbilityMenu()
}
  
  
function showAbilityMenu() {
    abilityList(abilityPokemon.abilities)
    abilityDropdown.classList.toggle(`abilityShow`);
}  
  
  
  
  const abilityList = (ability) => {
      const abilityString = ability.map((ability) => {
          return `<a href="#" class="dropdown-item">${ability}</a>`;
      })
      .join(` `);
      abilityDropdown.innerHTML = abilityString;
  }
  

  
  
  

// ability fill on click
$(function(){
    $('#abilityDropdown1').on('click', '.dropdown-item', function() {
        $("#pokemonOneAbility").val($(this).html());
    });
});
$(function(){
    $('#abilityDropdown2').on('click', '.dropdown-item', function() {
        $("#pokemonTwoAbility").val($(this).html());
    });
});
$(function(){
    $('#abilityDropdown3').on('click', '.dropdown-item', function() {
        $("#pokemonThreeAbility").val($(this).html());
    });
});
$(function(){
    $('#abilityDropdown4').on('click', '.dropdown-item', function() {
        $("#pokemonFourAbility").val($(this).html());
    });
});
$(function(){
    $('#abilityDropdown5').on('click', '.dropdown-item', function() {
        $("#pokemonFiveAbility").val($(this).html());
    });
});
$(function(){
    $('#abilityDropdown6').on('click', '.dropdown-item', function() {
        $("#pokemonSixAbility").val($(this).html());
    });
});

//MOVE STUFF
let moveDropdown = ``;
let moves = ``;
let movePokemon = []
const moveList = (move) => {
    const moveString = move.map((move) => {
        return `<a href="#" class="dropdown-item">${move}</a>`;
    })
    .join(` `);
    moveDropdown.innerHTML = moveString;
}

// ALL MOVES STUFF POKEMON ONE


let pokemonOneMoveOneBar = document.querySelector(`#pokemonOneMove1`)
let pokemonOneMoveTwoBar = document.querySelector(`#pokemonOneMove2`)
let pokemonOneMoveThreeBar = document.querySelector(`#pokemonOneMove3`)
let pokemonOneMoveFourBar = document.querySelector(`#pokemonOneMove4`)

pokemonOneMoveOneBar.addEventListener(`click`, moveAssignPokemonOneMoveOne);
pokemonOneMoveTwoBar.addEventListener(`click`, moveAssignPokemonOneMoveTwo);
pokemonOneMoveThreeBar.addEventListener(`click`, moveAssignPokemonOneMoveThree);
pokemonOneMoveFourBar.addEventListener(`click`, moveAssignPokemonOneMoveFour);


let pokemon1MoveDropdown1 = document.querySelector(`#pokemon1MoveDropdown1`);
let pokemon1MoveDropdown2 = document.querySelector(`#pokemon1MoveDropdown2`);
let pokemon1MoveDropdown3 = document.querySelector(`#pokemon1MoveDropdown3`);
let pokemon1MoveDropdown4 = document.querySelector(`#pokemon1MoveDropdown4`);
  


function moveAssignPokemonOneMoveOne (event) {
    event.preventDefault()
    moveDropdown = pokemon1MoveDropdown1;
    movePokemon = pokemonOne;
    showMoveMenu()
}

function moveAssignPokemonOneMoveTwo (event) {
    event.preventDefault()
    moveDropdown = pokemon1MoveDropdown2;
    movePokemon = pokemonOne;
    showMoveMenu()
}

function moveAssignPokemonOneMoveThree (event) {
    event.preventDefault()
    moveDropdown = pokemon1MoveDropdown3;
    movePokemon = pokemonOne;
    showMoveMenu()
}

function moveAssignPokemonOneMoveFour (event) {
    event.preventDefault()
    moveDropdown = pokemon1MoveDropdown4;
    movePokemon = pokemonOne;
    showMoveMenu()
}

function showMoveMenu() {
    moveList(movePokemon.moves)
    moveDropdown.classList.toggle(`abilityShow`);
}  



// pokemon one moves fill on click
$(function(){
    $('#pokemon1MoveDropdown1').on('click', '.dropdown-item', function() {
        $("#pokemonOneMove1").val($(this).html());
    });
});
$(function(){
    $('#pokemon1MoveDropdown2').on('click', '.dropdown-item', function() {
        $("#pokemonOneMove2").val($(this).html());
    });
});
$(function(){
    $('#pokemon1MoveDropdown3').on('click', '.dropdown-item', function() {
        $("#pokemonOneMove3").val($(this).html());
    });
});
$(function(){
    $('#pokemon1MoveDropdown4').on('click', '.dropdown-item', function() {
        $("#pokemonOneMove4").val($(this).html());
    });
});

//pokemon one dynamic search moves
pokemonOneMoveOneBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonOne.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});
pokemonOneMoveTwoBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonOne.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});
pokemonOneMoveThreeBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonOne.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});
pokemonOneMoveFourBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonOne.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

////////////////////////////////

//All move stuff pokemon two

let pokemonTwoMoveOneBar = document.querySelector(`#pokemonTwoMove1`)
let pokemonTwoMoveTwoBar = document.querySelector(`#pokemonTwoMove2`)
let pokemonTwoMoveThreeBar = document.querySelector(`#pokemonTwoMove3`)
let pokemonTwoMoveFourBar = document.querySelector(`#pokemonTwoMove4`)

pokemonTwoMoveOneBar.addEventListener(`click`, moveAssignpokemonTwoMoveOne);
pokemonTwoMoveTwoBar.addEventListener(`click`, moveAssignpokemonTwoMoveTwo);
pokemonTwoMoveThreeBar.addEventListener(`click`, moveAssignpokemonTwoMoveThree);
pokemonTwoMoveFourBar.addEventListener(`click`, moveAssignpokemonTwoMoveFour);


let pokemon2MoveDropdown1 = document.querySelector(`#pokemon2MoveDropdown1`);
let pokemon2MoveDropdown2 = document.querySelector(`#pokemon2MoveDropdown2`);
let pokemon2MoveDropdown3 = document.querySelector(`#pokemon2MoveDropdown3`);
let pokemon2MoveDropdown4 = document.querySelector(`#pokemon2MoveDropdown4`);
  


function moveAssignpokemonTwoMoveOne (event) {
    event.preventDefault()
    moveDropdown = pokemon2MoveDropdown1;
    movePokemon = pokemonTwo;
    showMoveMenu()
}

function moveAssignpokemonTwoMoveTwo (event) {
    event.preventDefault()
    moveDropdown = pokemon2MoveDropdown2;
    movePokemon = pokemonTwo;
    showMoveMenu()
}

function moveAssignpokemonTwoMoveThree (event) {
    event.preventDefault()
    moveDropdown = pokemon2MoveDropdown3;
    movePokemon = pokemonTwo;
    showMoveMenu()
}

function moveAssignpokemonTwoMoveFour (event) {
    event.preventDefault()
    moveDropdown = pokemon2MoveDropdown4;
    movePokemon = pokemonTwo;
    showMoveMenu()
}




// pokemon two moves fill on click
$(function(){
    $('#pokemon2MoveDropdown1').on('click', '.dropdown-item', function() {
        $("#pokemonTwoMove1").val($(this).html());
    });
});
$(function(){
    $('#pokemon2MoveDropdown2').on('click', '.dropdown-item', function() {
        $("#pokemonTwoMove2").val($(this).html());
    });
});
$(function(){
    $('#pokemon2MoveDropdown3').on('click', '.dropdown-item', function() {
        $("#pokemonTwoMove3").val($(this).html());
    });
});
$(function(){
    $('#pokemon2MoveDropdown4').on('click', '.dropdown-item', function() {
        $("#pokemonTwoMove4").val($(this).html());
    });
});

//pokemon two dynamic search moves
pokemonTwoMoveOneBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonTwo.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonTwoMoveTwoBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonTwo.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonTwoMoveThreeBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonTwo.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonTwoMoveFourBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonTwo.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});
////////////////////////////////

//All move stuff pokemon three
let pokemonThreeMoveOneBar = document.querySelector(`#pokemonThreeMove1`)
let pokemonThreeMoveTwoBar = document.querySelector(`#pokemonThreeMove2`)
let pokemonThreeMoveThreeBar = document.querySelector(`#pokemonThreeMove3`)
let pokemonThreeMoveFourBar = document.querySelector(`#pokemonThreeMove4`)

pokemonThreeMoveOneBar.addEventListener(`click`, moveAssignpokemonThreeMoveOne);
pokemonThreeMoveTwoBar.addEventListener(`click`, moveAssignpokemonThreeMoveTwo);
pokemonThreeMoveThreeBar.addEventListener(`click`, moveAssignpokemonThreeMoveThree);
pokemonThreeMoveFourBar.addEventListener(`click`, moveAssignpokemonThreeMoveFour);


let pokemon3MoveDropdown1 = document.querySelector(`#pokemon3MoveDropdown1`);
let pokemon3MoveDropdown2 = document.querySelector(`#pokemon3MoveDropdown2`);
let pokemon3MoveDropdown3 = document.querySelector(`#pokemon3MoveDropdown3`);
let pokemon3MoveDropdown4 = document.querySelector(`#pokemon3MoveDropdown4`);
  


function moveAssignpokemonThreeMoveOne (event) {
    event.preventDefault()
    moveDropdown = pokemon3MoveDropdown1;
    movePokemon = pokemonThree;
    showMoveMenu()
}

function moveAssignpokemonThreeMoveTwo (event) {
    event.preventDefault()
    moveDropdown = pokemon3MoveDropdown2;
    movePokemon = pokemonThree;
    showMoveMenu()
}

function moveAssignpokemonThreeMoveThree (event) {
    event.preventDefault()
    moveDropdown = pokemon3MoveDropdown3;
    movePokemon = pokemonThree;
    showMoveMenu()
}

function moveAssignpokemonThreeMoveFour (event) {
    event.preventDefault()
    moveDropdown = pokemon3MoveDropdown4;
    movePokemon = pokemonThree;
    showMoveMenu()
}




// pokemon three moves fill on click
$(function(){
    $('#pokemon3MoveDropdown1').on('click', '.dropdown-item', function() {
        $("#pokemonThreeMove1").val($(this).html());
    });
});
$(function(){
    $('#pokemon3MoveDropdown2').on('click', '.dropdown-item', function() {
        $("#pokemonThreeMove2").val($(this).html());
    });
});
$(function(){
    $('#pokemon3MoveDropdown3').on('click', '.dropdown-item', function() {
        $("#pokemonThreeMove3").val($(this).html());
    });
});
$(function(){
    $('#pokemon3MoveDropdown4').on('click', '.dropdown-item', function() {
        $("#pokemonThreeMove4").val($(this).html());
    });
});

//pokemon Three dynamic search moves
pokemonThreeMoveOneBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonThree.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonThreeMoveTwoBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonThree.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonThreeMoveThreeBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonThree.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonThreeMoveFourBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonThree.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

////////////////////////////////

//ALL MOVE STUFF POKEMON FOUR


let pokemonFourMoveOneBar = document.querySelector(`#pokemonFourMove1`)
let pokemonFourMoveTwoBar = document.querySelector(`#pokemonFourMove2`)
let pokemonFourMoveThreeBar = document.querySelector(`#pokemonFourMove3`)
let pokemonFourMoveFourBar = document.querySelector(`#pokemonFourMove4`)

pokemonFourMoveOneBar.addEventListener(`click`, moveAssignpokemonFourMoveOne);
pokemonFourMoveTwoBar.addEventListener(`click`, moveAssignpokemonFourMoveTwo);
pokemonFourMoveThreeBar.addEventListener(`click`, moveAssignpokemonFourMoveThree);
pokemonFourMoveFourBar.addEventListener(`click`, moveAssignpokemonFourMoveFour);


let pokemon4MoveDropdown1 = document.querySelector(`#pokemon4MoveDropdown1`);
let pokemon4MoveDropdown2 = document.querySelector(`#pokemon4MoveDropdown2`);
let pokemon4MoveDropdown3 = document.querySelector(`#pokemon4MoveDropdown3`);
let pokemon4MoveDropdown4 = document.querySelector(`#pokemon4MoveDropdown4`);
  


function moveAssignpokemonFourMoveOne (event) {
    event.preventDefault()
    moveDropdown = pokemon4MoveDropdown1;
    movePokemon = pokemonFour;   
    showMoveMenu()
}

function moveAssignpokemonFourMoveTwo (event) {
    event.preventDefault()
    moveDropdown = pokemon4MoveDropdown2;
    movePokemon = pokemonFour;   
    showMoveMenu()
}

function moveAssignpokemonFourMoveThree (event) {
    event.preventDefault()
    moveDropdown = pokemon4MoveDropdown3;
    movePokemon = pokemonFour;   
    showMoveMenu()
}

function moveAssignpokemonFourMoveFour (event) {
    event.preventDefault()
    moveDropdown = pokemon4MoveDropdown4;
    movePokemon = pokemonFour;   
    showMoveMenu()
}



// pokemon four moves fill on click
$(function(){
    $('#pokemon4MoveDropdown1').on('click', '.dropdown-item', function() {
        $("#pokemonFourMove1").val($(this).html());
    });
});
$(function(){
    $('#pokemon4MoveDropdown2').on('click', '.dropdown-item', function() {
        $("#pokemonFourMove2").val($(this).html());
    });
});
$(function(){
    $('#pokemon4MoveDropdown3').on('click', '.dropdown-item', function() {
        $("#pokemonFourMove3").val($(this).html());
    });
});
$(function(){
    $('#pokemon4MoveDropdown4').on('click', '.dropdown-item', function() {
        $("#pokemonFourMove4").val($(this).html());
    });
});

//pokemon four dynamic search moves
pokemonFourMoveOneBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonFour.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonFourMoveTwoBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonFour.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonFourMoveThreeBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonFour.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonFourMoveFourBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonFour.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

////////////////////////////////

//ALL MOVE STUFF POKEMON FIVE

let pokemonFiveMoveOneBar = document.querySelector(`#pokemonFiveMove1`)
let pokemonFiveMoveTwoBar = document.querySelector(`#pokemonFiveMove2`)
let pokemonFiveMoveThreeBar = document.querySelector(`#pokemonFiveMove3`)
let pokemonFiveMoveFourBar = document.querySelector(`#pokemonFiveMove4`)

pokemonFiveMoveOneBar.addEventListener(`click`, moveAssignpokemonFiveMoveOne);
pokemonFiveMoveTwoBar.addEventListener(`click`, moveAssignpokemonFiveMoveTwo);
pokemonFiveMoveThreeBar.addEventListener(`click`, moveAssignpokemonFiveMoveThree);
pokemonFiveMoveFourBar.addEventListener(`click`, moveAssignpokemonFiveMoveFour);


let pokemon5MoveDropdown1 = document.querySelector(`#pokemon5MoveDropdown1`);
let pokemon5MoveDropdown2 = document.querySelector(`#pokemon5MoveDropdown2`);
let pokemon5MoveDropdown3 = document.querySelector(`#pokemon5MoveDropdown3`);
let pokemon5MoveDropdown4 = document.querySelector(`#pokemon5MoveDropdown4`);
  


function moveAssignpokemonFiveMoveOne (event) {
    event.preventDefault()
    moveDropdown = pokemon5MoveDropdown1;
    movePokemon = pokemonFive;   
    showMoveMenu()
}

function moveAssignpokemonFiveMoveTwo (event) {
    event.preventDefault()
    moveDropdown = pokemon5MoveDropdown2;
    movePokemon = pokemonFive;   
    showMoveMenu()
}

function moveAssignpokemonFiveMoveThree (event) {
    event.preventDefault()
    moveDropdown = pokemon5MoveDropdown3;
    movePokemon = pokemonFive;   
    showMoveMenu()
}

function moveAssignpokemonFiveMoveFour (event) {
    event.preventDefault()
    moveDropdown = pokemon5MoveDropdown4;
    movePokemon = pokemonFive;   
    showMoveMenu()
}




// pokemon five moves fill on click
$(function(){
    $('#pokemon5MoveDropdown1').on('click', '.dropdown-item', function() {
        $("#pokemonFiveMove1").val($(this).html());
    });
});
$(function(){
    $('#pokemon5MoveDropdown2').on('click', '.dropdown-item', function() {
        $("#pokemonFiveMove2").val($(this).html());
    });
});
$(function(){
    $('#pokemon5MoveDropdown3').on('click', '.dropdown-item', function() {
        $("#pokemonFiveMove3").val($(this).html());
    });
});
$(function(){
    $('#pokemon5MoveDropdown4').on('click', '.dropdown-item', function() {
        $("#pokemonFiveMove4").val($(this).html());
    });
});

//pokemon five dynamic search moves
pokemonFiveMoveOneBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonFive.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonFiveMoveTwoBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonFive.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonFiveMoveThreeBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonFive.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonFiveMoveFourBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonFive.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});


////////////////////////////////

//ALL MOVE STUFF POKEMON SIX

let pokemonSixMoveOneBar = document.querySelector(`#pokemonSixMove1`)
let pokemonSixMoveTwoBar = document.querySelector(`#pokemonSixMove2`)
let pokemonSixMoveThreeBar = document.querySelector(`#pokemonSixMove3`)
let pokemonSixMoveFourBar = document.querySelector(`#pokemonSixMove4`)

pokemonSixMoveOneBar.addEventListener(`click`, moveAssignpokemonSixMoveOne);
pokemonSixMoveTwoBar.addEventListener(`click`, moveAssignpokemonSixMoveTwo);
pokemonSixMoveThreeBar.addEventListener(`click`, moveAssignpokemonSixMoveThree);
pokemonSixMoveFourBar.addEventListener(`click`, moveAssignpokemonSixMoveFour);


let pokemon6MoveDropdown1 = document.querySelector(`#pokemon6MoveDropdown1`);
let pokemon6MoveDropdown2 = document.querySelector(`#pokemon6MoveDropdown2`);
let pokemon6MoveDropdown3 = document.querySelector(`#pokemon6MoveDropdown3`);
let pokemon6MoveDropdown4 = document.querySelector(`#pokemon6MoveDropdown4`);
  


function moveAssignpokemonSixMoveOne (event) {
    event.preventDefault()
    moveDropdown = pokemon6MoveDropdown1;
    movePokemon = pokemonSix;   
    showMoveMenu()
}

function moveAssignpokemonSixMoveTwo (event) {
    event.preventDefault()
    moveDropdown = pokemon6MoveDropdown2;
    movePokemon = pokemonSix;   
    showMoveMenu()
}

function moveAssignpokemonSixMoveThree (event) {
    event.preventDefault()
    moveDropdown = pokemon6MoveDropdown3;
    movePokemon = pokemonSix;   
    showMoveMenu()
}

function moveAssignpokemonSixMoveFour (event) {
    event.preventDefault()
    moveDropdown = pokemon6MoveDropdown4;
    movePokemon = pokemonSix;   
    showMoveMenu()
}



// pokemon six moves fill on click
$(function(){
    $('#pokemon6MoveDropdown1').on('click', '.dropdown-item', function() {
        $("#pokemonSixMove1").val($(this).html());
    });
});
$(function(){
    $('#pokemon6MoveDropdown2').on('click', '.dropdown-item', function() {
        $("#pokemonSixMove2").val($(this).html());
    });
});
$(function(){
    $('#pokemon6MoveDropdown3').on('click', '.dropdown-item', function() {
        $("#pokemonSixMove3").val($(this).html());
    });
});
$(function(){
    $('#pokemon6MoveDropdown4').on('click', '.dropdown-item', function() {
        $("#pokemonSixMove4").val($(this).html());
    });
});

//pokemon six dynamic search moves
pokemonSixMoveOneBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonSix.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonSixMoveTwoBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonSix.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonSixMoveThreeBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonSix.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});

pokemonSixMoveFourBar.addEventListener(`keyup`, (e) => {
    if (!moveDropdown.classList.contains(`abilityShow`)){
        moveDropdown.classList.add(`abilityShow`)
    }
    const searchString = e.target.value.toLowerCase();
    const filteredMoves = pokemonSix.moves.filter((pokemon) => {
        return (pokemon.toLowerCase().includes(searchString));
    });
    moveList(filteredMoves);
});