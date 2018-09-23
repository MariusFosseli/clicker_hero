import * as ActionTypes from '../actiontypes/ActionTypes';
const { createStore } = require('redux');

 const initalState = {
     monsterName: "Torleif",
     maxHealth: 10,
     remainingHealth: 10,

     heroName: "Torleif slayer",
     clickDamage: 1,
     heroDPS: 0,
     heroCash: 0,
     monsterSlayed: 0,

     increaseClickPrice: 1
   };

  export default function allActions(state = initalState, action) {
    switch(action.type){
      case ActionTypes.ATTACK_MONSTER_CLICK: {
        if(state.remainingHealth <= 0) {
          const newHealth = (state.maxHealth + 1);
          const newBalance = (state.heroCash + 1);
          return {
            ...state,
            maxHealth: newHealth,
            remainingHealth: newHealth,
            heroCash: newBalance,
            monsterSlayed: state.monsterSlayed + 1,
          };
        } else {
          console.log("Attacked!");
        }
      return {
        ...state,
        remainingHealth: state.remainingHealth - state.clickDamage
      };
    }

    case ActionTypes.INCREASE_CLICK_DAMAGE: {
      if(state.heroCash >= state.increaseClickPrice) {
        return {
          ...state,
          heroCash: state.heroCash - state.increaseClickPrice,
          clickDamage: state.clickDamage + 1,
          increaseClickPrice: + state.increaseClickPrice + 1,
        };
      } else {
        console.log("Not enough cash mate");
      }
      return {
        ...state
      };
    }

    case ActionTypes.BUY_HERO_DPS: {
      console.log("Hero bought!");
    return {
      ...state
    };
  }

  case ActionTypes.ADD_NEW_HERO: {
    console.log("Hero added");
  return {
    ...state
  };
  }

  default:
    return state;
}
}
