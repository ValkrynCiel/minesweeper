import React, { Component } from 'react';
import HiddenCell from './Cell_Hidden';
import RevealedCell from './Cell_Revealed';

class Board extends Component {

  static defaultProps = {
    height: 10,
    width: 10,
    mineCount: 10
  }

  constructor(props) {
    super(props);
    this.state = {
      board: [],
      boardView: [],
      gameEndMessage: '',
      safeCount: 0
    }
    this.changeCellView = this.changeCellView.bind(this);
  }

  componentDidMount() {
    const { height, width } = this.props;

    const valueMap = Array.from(new Array(height),
      () => new Array(width).fill(0));

    const board = this.createBoard(valueMap,
      this.defineMineLocations(height, width));

    const boardView = Array.from(new Array(height),
      () => new Array(width).fill(false));

    this.setState({ board, boardView });
  }

  componentDidUpdate() {
    const { height, width, mineCount } = this.props;
    const { gameEndMessage, safeCount } = this.state;
    if (safeCount === height * width - mineCount && !gameEndMessage) {
      this.setState({ gameEndMessage: 'YOU WON' })
    }
  }

  //pick mine coordinates randomly and returns the coordinates of mines
  defineMineLocations(height, width) {
    const locations = [];

    //create array of coordinate strings
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        locations.push([i, j]);
      }
    }
    return () => {
      //choose random locations from locations array
      let i = Math.floor(Math.random() * locations.length);
      if (i === locations.length - 1) {
        return locations.pop();
      } else {
        let temp = locations[i];
        locations[i] = locations.pop();
        return temp;
      }
    }
  }

  //create a board populated with numbers around mines
  createBoard(valueMap, mineGenerator) {
    let mines = 0;
    while (mines < this.props.mineCount) {

      let [x, y] = mineGenerator();

      valueMap[x][y] = 'mine';

      for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
          if (valueMap[i] && isFinite(valueMap[i][j])) {
            valueMap[i][j]++;
          }
        }
      }
      mines++;
    }
    return valueMap;
  }

  changeCellView(x, y) {
    this.setState(st => {
      let { boardView, safeCount } = this.searchArea(x, y, st.board, st.boardView, st.safeCount);
      return { boardView, safeCount }
    });

    if (this.state.board[x][y] === 'mine') {
      this.setState({ gameEndMessage: 'YOU LOST' })
    }
  }

  //recursively search area for adjacent numbers to reveal
  searchArea(x, y, board, boardView, safeCount) {

    function _revealSpot(x, y) {
      boardView[x][y] = true;
      if (board[x][y] === 'mine') {
        board[x][y] = 'explosion';
        boardView = boardView.map(r => r.fill(true))
        return;
      }

      safeCount++;
      if (board[x][y] > 0) return;

      for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
          if (board[i] && isFinite(board[i][j]) && boardView[i][j] === false) {
            _revealSpot(i, j)
          }
        }
      }
    }
    _revealSpot(x, y);

    return { boardView, safeCount };
  }

  render() {
    let { board, boardView, gameEndMessage } = this.state;
    return (
      <>
        <h1>{gameEndMessage}</h1>
        <table>
          <tbody>
            {board.map((r, x) => <tr key={x}>
              {r.map((c, y) => (
                boardView[x][y] ?
                  <RevealedCell value={c} /> :
                  <HiddenCell
                    x={x}
                    y={y}
                    gameOver={gameEndMessage.length}
                    handleChange={gameEndMessage.length ? null : this.changeCellView}>?
                  </HiddenCell>
              ))}
            </tr>)}
          </tbody>
        </table>
      </>
    )
  }
}

export default Board;