import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { CellWrapper } from './CellWrapper';
import flagSrc from './flag.png'


const CellDisplay = styled(CellWrapper)`
  background-color: grey;
  cursor: ${props => props.gameOver ? 'default' : 'pointer'} 
`

class HiddenCell extends PureComponent {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    const { x, y, handleCellCheck } = this.props;
    handleCellCheck(x, y);
  }


  render() {
    const { gameOver, handleCellCheck, flag } = this.props;
    return (
      <CellDisplay gameOver={gameOver} onClick={handleCellCheck ? this.handleClick : null}>{flag ? <img src={flagSrc} alt='flag'/> : '?'}</CellDisplay>
    )
  }
}

export default HiddenCell;