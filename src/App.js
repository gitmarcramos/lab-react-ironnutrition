import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox.component/FoodBox.jsx';
import AddFood from './AddFood.component/AddFood.jsx';
import Buttons from './Buttons.component/Buttons.jsx';
import Searchbar from './Searchbar.component/Searchbar.jsx';

const cloned = [...foods];

export default class App extends React.Component {
  state = {
    food: cloned,
    displayForm: false,
  };

  addFood = (infos) => {
    if (infos.name === '' || infos.calories === '')
      return alert('Please add Name and calories');
    const clonedFood = [...this.state.food];
    clonedFood.push(infos);
    this.setState({ food: clonedFood, displayForm: false });
  };

  toggleDisplayForm = () => {
    this.setState({ displayForm: !this.state.displayForm });
  };

  inputHandleChange = (evt) => {
    console.log(evt.target.value);
  };

  render() {
    return (
      <div className="App">
        {/* <button onClick={() => this.setState({displayForm: !this.state.displayForm})}>Add Food</button>
      {this.state.displayForm && <AddFood handler={this.addFood}/>} */}

        {/* Button to add food ======= */}
        <Buttons props="Add food" toggler={this.toggleDisplayForm} />

        {/* Searchbar to filter food */}
        <Searchbar props={this.inputHandleChange}/>

        {!this.state.displayForm &&
          this.state.food.map((food, index) => (
            <FoodBox props={food} key={index} />
          ))}

        {/* Add food form */}
        {this.state.displayForm && <AddFood handler={this.addFood} />}
      </div>
    );
  }
}
