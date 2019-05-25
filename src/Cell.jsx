import React, { PureComponent } from 'react';
import styled from 'styled-components';
import mineSrc from './mine.png'

const CellWrapper = styled.td`
  height: 50px;
  width: 50px; 
  border: 1px solid black;
  vertical-align: middle;
  text-align: center;
  font-family: 'VT323', monospace;
  font-size: 30px;
  user-select: none;
`

const RevealedCell = styled(CellWrapper)`
  background-color: ${props => props.value === 'explosion' ? 'red' : 'gainsboro'};
  color: ${props => {
    if (props.value === 1) return 'blue';
    else if (props.value === 2) return 'green';
    else if (props.value === 3) return 'red'
    else return 'purple';
  }}
  position: relative;
  img {
    width: 80%;
    height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const HiddenCell = styled(CellWrapper)`
  background-color: grey;
  cursor: ${props => props.gameOver ? 'default' : 'pointer'}
`

class Cell extends PureComponent {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    const { x, y, handleChange } = this.props;
    handleChange(x, y);
  }
  
  showValue(value) {
    if (!value) return null;
    if (isFinite(value)) return value;
    return <img src={mineSrc} alt='mine'/>
  }

  render() {
    const { show, value, gameOver } = this.props;
    return (
      <>
        {show ? <RevealedCell value={value}>{this.showValue(value)}</RevealedCell> :
          <HiddenCell gameOver={gameOver} onClick={gameOver ? null : this.handleClick}>?</HiddenCell>}
      </>
    )
  }
}

export default Cell;