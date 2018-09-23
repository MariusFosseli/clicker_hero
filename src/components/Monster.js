import React from 'react';
import PropTypes from 'prop-types';

const Monster = props => {

  return (
    <div className="Monster">
      <div className="Monster_img"
      onClick={ () => props.attackMonsterClick(props.remainingHealth, - props.clickDamage) }>
      </div>
      <h2>Monsteret {props.monsterName}</h2>
      <p>Health: {props.maxHealth}</p>
      <p>Health remaining: {props.remainingHealth}</p>
    </div>
  );
};

Monster.propTypes = {
  monsterName: PropTypes.string.isRequired,
  maxHealth: PropTypes.number.isRequired,
  remainingHealth: PropTypes.number.isRequired,
  attackMonsterClick: PropTypes.func.isRequired,
};

export default Monster;
