import React from 'react';

export default class AddFood extends React.Component {
  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.handler(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="input-container">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="calories" className="label">
            Calories
          </label>
          <input
            className="input"
            type="number"
            id="calories"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="image" className="label">Image</label>
          <input type="text" id="image" className="input" onChange={this.handleChange}></input>
        </div>
        <button className="button">Submit</button>
      </form>
    );
  }
}
