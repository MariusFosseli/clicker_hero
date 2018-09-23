import React, { Component, PropTypes } from 'react';
import * as ActionCreators from '../actiontypes/ActionTypes';
import Monster from '../components/Monster';
import Hero from '../components/Hero';
import { connect } from 'react-redux';

  let increaseDPSPrice = 1;
  let increaseClickPrice = 1;

class App extends Component {
/*
      increaseDPS = () => {
        if (this.state.heroCash >= increaseDPSPrice) {
        this.setState({
          ...this.state,
          heroDPS: (this.state.heroDPS + 1),
          heroCash: (this.state.heroCash - increaseDPSPrice)
        })
        increaseDPSPrice++;
        console.log("DPS Increased! New DSP: " + (this.state.heroDPS+1));
        console.log("New upgrade price is " + increaseDPSPrice)
      } else {
        console.log("Not enough cash");
      }
      };

      tick() {
        if(this.state.remainingHealth > 0) {
        this.setState(prevState => ({
          remainingHealth: this.state.remainingHealth - this.state.heroDPS,
        }))
      } else {
      this.attackMonster();
      }
    };

      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }
*/

  render() {

    return (
      <div>
        <Hero
          heroName={this.props.heroName}
          clickDamage={this.props.clickDamage}
          heroDPS={this.props.heroDPS}
          heroCash={this.props.heroCash}
          monsterSlayed={this.props.monsterSlayed}
          increaseClickPrice={this.props.increaseClickPrice}
          increaseClickDamage={this.props.increaseClickDamage}
        />

        <Monster
          monsterName={this.props.monsterName}
          maxHealth={this.props.maxHealth}
          remainingHealth={this.props.remainingHealth}
          attackMonsterClick={this.props.attackMonsterClick}
        />
        <div>
          <h2>dps heroes container</h2>
          <ul>
            <li>
              hero name
              <button onClick={this.props.buyHero}>
              +
              </button>
            </li>
            <li>
              hero name
              <button>
              +
              </button>
            </li>
          </ul>
        </div>
        <div>
          <button onClick={this.props.addHero}>Add hero</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //Hero
    heroName: state.heroName,
    clickDamage: state.clickDamage,
    heroDPS: state.heroDPS,
    heroCash: state.heroCash,
    monsterSlayed: state.monsterSlayed,
    increaseClickPrice: state.increaseClickPrice,
    //Monster
    monsterName: state.monsterName,
    maxHealth: state.maxHealth,
    remainingHealth: state.remainingHealth,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    attackMonsterClick: () => dispatch({type:'ATTACK_MONSTER_CLICK'}),
    buyHero: () => dispatch({type: 'BUY_HERO_DPS'}),
    addHero: () => dispatch({type: 'ADD_NEW_HERO'}),
    increaseClickDamage: () => dispatch({type: 'INCREASE_CLICK_DAMAGE'}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
