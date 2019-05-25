import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { CellWrapper } from './CellWrapper';
import mineSrc from './mine.png';

const CellDisplay = styled(CellWrapper)`
  background-color: ${props => props.value === 'explosion' ? 'red' : 'gainsboro'};
  color: ${props => {
  if (props.value === 1) return 'blue';
  else if (props.value === 2) return 'green';
  else if (props.value === 3) return 'red'
  else return 'purple';
}} 
`

class RevealedCell extends PureComponent {
  showValue(value) {
    if (!value) return null;
    if (isFinite(value)) return value;
    return <img src={mineSrc} alt='mine'/>
  }

  render(){
    const { value } = this.props;
    return(
      <CellDisplay value={value}>{this.showValue(value)}</CellDisplay>
    )
  }
}

export default RevealedCell;