import React from 'react';
import PropTypes from 'prop-types';

const Hero = props => {

  return (
    <div className="Hero">
      <h3>Hero name:</h3>
      <h2>{props.heroName}</h2>
      <p>Click damage: {props.clickDamage}</p>
      <p>Damage per second: {props.heroDPS}</p>
      <p>Hero cash: {props.heroCash}</p>
      <p>Monster slayed: {props.monsterSlayed}</p>
      <button onClick={ () => props.increaseClickDamage(props.clickDamage) }> price is {props.increaseClickPrice} </button>
    </div>
  );
};

Hero.propTypes = {
  heroName: PropTypes.string.isRequired,
  clickDamage: PropTypes.number.isRequired,
  heroDPS: PropTypes.number.isRequired,
  heroCash: PropTypes.number.isRequired,
  monsterSlayed: PropTypes.number.isRequired,
  increaseClickDamage: PropTypes.func.isRequired,
};

export default Hero;
