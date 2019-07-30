import React, { PureComponent } from 'react';
import styled from 'styled-components';


const ButtonWrapper = styled.button`
  height: 40px;
  width: 200px;
  margin: auto;
  box-sizing: content-box;
  background-color: ${props => props.active ? 'lightgreen' : 'gainsboro'};
  border: 5px ${props => props.active ? 'inset': 'outset'} grey;
  display: flex;
  cursor: pointer;

  &:focus {
    outline: 0px;
  }
`

const ButtonDisplay = styled.div`
  margin: auto;
  height: 30px;
  display: flex;
  align-items: center;
  p {
    font-size: 25px;
    display: inline-block;
    margin: auto;
  }
  img {
    height: 80%;
    width: auto;
    margin-right 10px;
  }
`

class Button extends PureComponent {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props.onClick();
  }

  render() {
    const { imgSrc, alt, active, onClick, children } = this.props;
    return(
      <ButtonWrapper onClick={onClick} active={active}>
        <ButtonDisplay img={imgSrc}>
          {imgSrc && <img src={imgSrc} alt={alt} />}
          <p>{children}</p>
        </ButtonDisplay>
      </ButtonWrapper>
    )
  }
}

export default Button;