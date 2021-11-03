import React from 'react';

export default class AddFood extends React.Component {
  state = {
    name: '',
    calories: 0,
    images: '',
    quantity: 0,
  };

  handleChange = (evt) => {
    this.setState = {
      [evt.target.id]: evt.target.value,
    };
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addFoodHandler(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={this.handleChange}></input>
        </div>
        <div className="input-container">
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            id="calories"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            onChange={this.handleChange}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}
