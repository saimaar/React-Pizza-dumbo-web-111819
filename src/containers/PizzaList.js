import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    let pizzaArr = this.props.pizzas.map(pizza => <Pizza editPizza={this.props.editPizza} pizza = {pizza}/>)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
          pizzaArr
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;

//here we are going to map through pizza and render the
//the pizza component
