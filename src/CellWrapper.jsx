import styled from 'styled-components';

export const CellWrapper = styled.td`
  height: 50px;
  width: 50px; 
  border: 1px solid black;
  vertical-align: middle;
  text-align: center;
  font-family: 'VT323', monospace;
  font-size: 30px;
  user-select: none;
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