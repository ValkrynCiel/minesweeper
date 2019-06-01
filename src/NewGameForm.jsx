import React, { Component } from 'react';

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
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="height">Height:</label>
          <input id="height" name="height"
                 value={this.state.height}
                 type="number"
                 min="5"
                 max="15"
                 onChange={this.handleChange} />

          <label htmlFor="width">Width:</label>
          <input id="width" name="width"
                 value={this.state.width}
                 type="number"
                 min="5"
                 max="15"
                 onChange={this.handleChange} />
          
          <label htmlFor="mineCount">Number of mines:</label>
          <input id="mineCount" name="mineCount"
                 value={this.state.mineCount}
                 type="number"
                 min="1"
                 max={`${+height * +width - 2}`}
                 onChange={this.handleChange} />

          <button>Make a new board!</button>

        </form>
    );
  }
}

export default NewGameForm;