import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import NewGameForm from './NewGameForm';

const GameWrapper = styled.div`
  display: flex;
  align-items: center;
`

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 10,
      height: 10,
      mineCount: 10,
      gameId: 0
    }
    this.makeNewBoard = this.makeNewBoard.bind(this);
  }

  makeNewBoard(boardStats) {
    if (boardStats) {
      const { width, height, mineCount } = boardStats;
      this.setState( st => ({ 
        width: +width, 
        height: +height, 
        mineCount: +mineCount, 
        gameId: st.gameId + 1 }));
    } else {
      this.setState( st => ({gameId: st.gameId + 1}))
    }
  }
  render() {
    const { width, height, mineCount, gameId } = this.state;
    return (
      <GameWrapper>
      <Board 
        key={gameId} 
        width={width} 
        height={height} 
        mineCount={mineCount} />
      <NewGameForm
        key={`form-${gameId}`} 
        width={width} 
        height={height} 
        mineCount={mineCount} 
        makeNewBoard={this.makeNewBoard} />
      </GameWrapper>
    )
  }
}

export default Game;