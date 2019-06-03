import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const InputWrapper = styled.div`
  margin-bottom: 40px;
  user-select: none;
`
const InputDiv = styled.div`
  height: 40px;
  display: flex;
  font-size: 30px;
  align-items: center;
`
const Input = styled.input`
  background-color: blue;
  margin-left: 10px;
  color: lightgreen;
`

const FormWrapper = styled.form`
  min-width: 400px;
`

class NewGameForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      width: props.width,
      mineCount: props.mineCount
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { height, width, mineCount } = this.state;
    this.props.makeNewBoard({height, width, mineCount});
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { height, width } = this.state;
    return (
        <FormWrapper onSubmit={this.handleSubmit}>
          <InputWrapper>
            <InputDiv>
              <label htmlFor="height">Height:</label>
              <Input id="height" name="height"
                    value={this.state.height}
                    type="number"
                    min="5"
                    max="15"
                    onChange={this.handleChange} />
            </InputDiv>
            <InputDiv>
              <label htmlFor="width">Width:</label>
              <Input id="width" name="width"
                    value={this.state.width}
                    type="number"
                    min="5"
                    max="15"
                    onChange={this.handleChange} />
            </InputDiv>
            <InputDiv>         
              <label htmlFor="mineCount">Number of mines:</label>
              <Input id="mineCount" name="mineCount"
                    value={this.state.mineCount}
                    type="number"
                    min="1"
                    max={`${+height * +width - 2}`}
                    onChange={this.handleChange} />
            </InputDiv> 
          </InputWrapper>
          <Button>Make a new board!</Button>

        </FormWrapper>
    );
  }
}

export default NewGameForm;