import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox.component/FoodBox.jsx';
import AddFood from './AddFood.component/AddFood.jsx';

const cloned = [...foods];

export default class App extends React.Component {
  state = {
    food: cloned,
  };

  addFood = (infos) => {
    console.log(infos);
    const clonedFood = [...this.state.food];
    clonedFood.push(infos);
    this.setState({ food: clonedFood, });
  }

  render() {
    return (
      <div className="App">
        {this.state.food.map((food, index) => (
          <FoodBox props={food} />
        ))}

        <button>Add Food</button>
        <AddFood addFoodHandler={this.addFood} />
      </div>
    );
  }
}
