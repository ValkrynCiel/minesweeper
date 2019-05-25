import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { CellWrapper } from './CellWrapper';


const CellDisplay = styled(CellWrapper)`
  background-color: grey;
  cursor: ${props => props.gameOver ? 'default' : 'pointer'}
}} 
`

class HiddenCell extends PureComponent {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    const { x, y, handleChange } = this.props;
    handleChange(x, y);
  }

  render() {
    const { gameOver, handleChange } = this.props;
    return (
      <CellDisplay gameOver={gameOver} onClick={handleChange ? this.handleClick : null}>{this.props.children}</CellDisplay>
    )
  }
}

export default HiddenCell;