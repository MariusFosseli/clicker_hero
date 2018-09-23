import * as ActionTypes from './actions/ActionTypes';

export const attackMonsterClick = (remainingHealth, clickDamage) => {
  return {
    type: ActionTypes.ATTACK_MONSTER_CLICK,
    remainingHealth
  };
};

export const increaseClickDamage = {clickDamage} => {
  return {
    type: ActionTypes.INCREASE_CLICK_DAMAGE,
    clickDamage
  };
};
