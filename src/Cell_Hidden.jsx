import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { CellWrapper } from './CellWrapper';
import flagSrc from './flag.png'


const CellDisplay = styled(CellWrapper)`
  background-color: grey;
  cursor: ${props => props.onClick ? 'pointer' : 'default'}
  div {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: 5px outset silver;
    display: flex;
    p {
      margin: auto;
      height: 80%;
      width: 80%;
    }
    img {
      margin: auto;
      height: 60%;
      width: 60%;
    }
  }
  
`

class HiddenCell extends PureComponent {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    const { x, y, handleCellChange } = this.props;
    handleCellChange(x, y);
  }


  render() {
    const { flag, disabled } = this.props;
    return (
      <CellDisplay 
        onClick={disabled ? null : this.handleClick}>
        <div>
        {flag ? <img src={flagSrc} alt='flag'/> : <p>?</p>}
        </div>
      </CellDisplay>
    )
  }
}

export default HiddenCell;