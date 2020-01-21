function Fighter(fighter) {
  let { name, dmg, hp, strength, agility } = fighter;
  let currentHP = hp;
  let wins = 0, losses = 0;

  const booleanProbabilityDistribution = (probability) => { 
    const MAX_PROBABILITY = 100;
    return Math.floor(Math.random() * MAX_PROBABILITY) + 1 > probability;
  }

  return {
    getName: () => name,
    getDamage: () => dmg,
    getStrength: () => strength,
    getAgility: () => agility,
    getHealth: () => currentHP,
    addWin: () => wins++,
    addLoss: () => losses++,
    logCombatHistory: () => console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`),
    heal: (hpValue) => {
      currentHP = currentHP + hpValue > hp ? hp : currentHP + hpValue;
    },
    dealDamage: (hpValue) => {
      currentHP = currentHP - hpValue < 0 ? 0 : currentHP - hpValue;
    },
    attack: (defender) => {
      let success_attack = booleanProbabilityDistribution(defender.getStrength() + defender.getAgility());
      if (success_attack) {
        defender.dealDamage(dmg);
        console.log(`${name} makes ${dmg} damage to ${defender.getName()}`);
      } else {
        console.log(`${name} attack missed`);
      }
    }
  };
}

function battle(...player) {
  const checkHP = () => player[0].getHealth() && player[1].getHealth();
  if (!checkHP()) {
    console.log(`${player[0].getHealth() ? player[1].getName() : player[0].getName()} is dead and can't fight.`);
    return;
  }
  let i = 0;
  while (checkHP()) {
    player[i].attack(player[i ^= 1]); // i^=1 toggle
  }
  console.log(`${player[i ^= 1].getName()} has won!`);
  player[i].addWin();
  player[i ^= 1].addLoss();
}