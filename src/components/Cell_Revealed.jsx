import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { CellWrapper } from './CellWrapper';
import mineSrc from '../images/mine.png';
import flagSrc from '../images/flag.png';

const CellDisplay = styled(CellWrapper)`
  background-color: ${props => props.value === 'explosion' ? 'red' : 'gainsboro'};
  color: ${props => {
    if (props.value === 1) return 'blue';
    else if (props.value === 2) return 'green';
    else if (props.value === 3) return 'red'
    else return 'purple';
  }}
  img {
    width: 80%;
    height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  div {
    position: absolute;
    height: 40%;
    width: 40%;
    top: 0;
    left: 0;
    z-index: 10;
    display: ${props => props.wrongFlag ? 'block' : 'none'};
  } 
  div > img {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`

class RevealedCell extends PureComponent {
  showValue(value) {
    if (!value) return null;
    if (isFinite(value)) return value;
    return <img src={mineSrc} alt='mine' />
  }

  render() {
    const { value, wrongFlag} = this.props;
    return (
      <CellDisplay 
        value={value}
        wrongFlag={wrongFlag}>
        {this.showValue(value)}
        <div><img src={flagSrc} alt='flagged' /></div>
      </CellDisplay>
    )
  }
}

export default RevealedCell;