import React, { Component } from 'react';
import styled from 'styled-components';
import HiddenCell from './Cell_Hidden';
import RevealedCell from './Cell_Revealed';
import Button from './Button';
import flagSrc from './flag.png';

const GameEndMessage = styled.h1`
  font-size: 60px;
  margin: auto;
  color: red;
`
const ButtonContainer = styled.div`
  height: 100px;
  width: 500px;
  display: flex;
`
const BoardWrapper = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  user-select: none;
`

const BoardDisplay = styled.table`
  margin-bottom: 40px;
`

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: [],
      boardView: [],
      gameEndMessage: '',
      safeCount: 0,
      flaggedCells: new Set(),
      flagMode: false,
      firstMove: true
    }
    this.mines = [];
    this.handleCellChange = this.handleCellChange.bind(this);
  }

  componentDidMount() {
    const { height, width } = this.props;

    //create board with numeric values
    const board = Array.from(new Array(height),
      () => new Array(width).fill(0));

    //create board to determine if a cell is hidden or revealed
    const boardView = Array.from(new Array(height),
      () => new Array(width).fill(false));

    this.setState({ board, boardView });
  }

  componentDidUpdate() {
    const { height, width, mineCount } = this.props;
    const { gameEndMessage, safeCount } = this.state;

    //check if all safe cells have been revealed and end the game as a win
    if (safeCount === height * width - mineCount && !gameEndMessage) {

      this.setState(st => {
        //add flags to mine positions
        for (let [x, y] of this.mines) {
          st.flaggedCells.add(`${x},${y}`);
        }

        return { flaggedCells: st.flaggedCells, gameEndMessage: 'YOU WON' }
      })
    }
  }

  /** pick mine coordinates randomly and returns the coordinates of mines */
  defineMineLocations(height, width, exclude) {
    const [x, y] = exclude;
    const locations = [];

    //create array of coordinate strings
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (!(x === i && y === j)) {
        locations.push([i, j]);
        }
      }
    }
    return () => {
      //choose random locations and add them to board and record locations
      let i = Math.floor(Math.random() * locations.length);
      if (i === locations.length - 1) {
        let location = locations.pop();
        this.mines.push(location);
        return location;
      } else {
        let temp = locations[i];
        locations[i] = locations.pop();
        this.mines.push(temp);
        return temp;
      }
    }
  }

  /** create a board populated with numbers around mines */
  placeMines(board, mineGenerator) {
    let mines = 0;
    while (mines < this.props.mineCount) {
      //generate mines until correct number of mines are on the board
      let [x, y] = mineGenerator();

      board[x][y] = 'mine';

      for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
          if (board[i] && isFinite(board[i][j])) {
            board[i][j]++;
          }
        }
      }
      mines++;
    }
    return board;
  }

  /** reveal cells and remove flags as we go along, reveals numbered cells and gaps */
  revealHiddenCell(x, y) {
    
    if (this.state.firstMove) {
      const { board } = this.state;
      const { height, width } = this.props;

      //fill board with mines and increment values as necessary
      const mineGenerator = this.defineMineLocations(height, width, [x, y]);
      const newBoard = this.placeMines(board, mineGenerator);
      this.setState({ board: newBoard, firstMove: false})
    }

    this.setState(st => {
      let { boardView, safeCount, flaggedCells } = 
      this.searchArea(
          x,
          y,
          st.board,
          st.boardView,
          st.safeCount,
          st.flaggedCells);

      return { boardView, safeCount, flaggedCells }
    });

    if (this.state.board[x][y] === 'mine') {
      this.setState({ gameEndMessage: 'YOU LOST' })
    }
  }

  /** recursively search area for adjacent numbers to reveal*/
  searchArea(x, y, board, boardView, safeCount, flaggedCells) {

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
            flaggedCells.delete(`${i},${j}`);
            _revealSpot(i, j);
          }
        }
      }
    }
    _revealSpot(x, y);

    return { boardView, safeCount, flaggedCells };
  }

  /** flag/unflag cells that are potentially mines */
  toggleFlagOnHiddenCell(x, y) {
    let coord = `${x},${y}`
    if (this.state.flaggedCells.has(coord)) {
      this.setState(st => {
        st.flaggedCells.delete(coord);
        return { flaggedCells: st.flaggedCells }
      })
    } else {
      this.setState(st => {
        st.flaggedCells.add(coord);
        return { flaggedCells: st.flaggedCells }
      });
    }
  }

  /** either reveals a hidden cell or toggles the flag indicator depending on mode */
  handleCellChange(x, y) {
    if (this.state.flagMode) {
      this.toggleFlagOnHiddenCell(x, y);
    } else {
      this.revealHiddenCell(x, y);
    }
  }

  changeToFlagMode(bool) {
    this.setState({ flagMode: bool });
  }

  /** hidden cells have robust functionality 
   * and must be disabled under certain conditions */ 
  displayHiddenCell(x, y) {
    const { gameEndMessage, flaggedCells, flagMode } = this.state;
    const flag = flaggedCells.has(`${x},${y}`);
    const gameEnd = gameEndMessage.length;

    //user cannot reveal a flagged cell or click on a cell at end of game
    if (gameEnd || (flag && flagMode === false)) {
      return (<HiddenCell
        key={`${x},${y}`}
        x={x}
        y={y}
        disabled
        flag={flag} />)
    } else {
    // user can click on cells in flag mode or reveal cells that are not flagged
      return (<HiddenCell
        key={`${x},${y}`}
        x={x}
        y={y}
        handleCellChange = {this.handleCellChange}
        flag={flag} />)
    }
  }

  render() {
    let { board, boardView, gameEndMessage, flaggedCells, flagMode } = this.state;
    return (
      <BoardWrapper>
        <ButtonContainer>
          { gameEndMessage ? <GameEndMessage>{gameEndMessage}</GameEndMessage> :
          <>
            <Button 
              onClick={() => this.changeToFlagMode(false)}
              active={!flagMode}>
                Search Mode
            </Button>
            <Button onClick={() => this.changeToFlagMode(true)} 
                    imgSrc={flagSrc} 
                    alt='flag'
                    active={flagMode}>
              Flag Mode
            </Button>
          </>
          }
        </ButtonContainer>
        <BoardDisplay>
          <tbody>
            {board.map((r, x) => <tr key={x}>
              {r.map((c, y) => (
                boardView[x][y] 
                ?
                  <RevealedCell 
                    value={c} 
                    key={`${x},${y}`} 
                    wrongFlag={gameEndMessage && 
                               flaggedCells.has(`${x},${y}`) && 
                               isFinite(c) ? true : false} /> 
                :
                  this.displayHiddenCell(x, y)
              ))}
            </tr>)}
          </tbody>
        </BoardDisplay>
      </BoardWrapper>
    )
  }
}

export default Board;