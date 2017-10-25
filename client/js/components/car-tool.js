import * as React from 'react';

import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';

export class CarTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: props.cars.concat(),
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    };
  }

  saveCar = () => {
    this.setState({
      cars: this.state.cars.concat({
        id: Math.max(...this.state.cars.map(c => c.id)) + 1,
        make: this.state.make,
        model: this.state.model,
        year: this.state.year,
        color: this.state.color,
        price: this.state.price,
      }),
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  };

  onChange = e => this.setState({
    [ e.currentTarget.name ]: e.currentTarget.type === 'number'
      ? Number(e.currentTarget.value)
      : e.currentTarget.value, 
  });

  render() {
    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.state.cars}  />
      <form>
        <div>
          <label htmlFor="make-input">Make:</label>
          <input type="text" id="make-input" name="make"
            value={this.state.make} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="model-input">Model:</label>
          <input type="text" id="model-input" name="model"
            value={this.state.model} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="year-input">Year:</label>
          <input type="number" id="year-input" name="year"
            value={this.state.year} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="color-input">Color:</label>
          <input type="text" id="color-input" name="color"
            value={this.state.color} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="price-input">Price:</label>
          <input type="number" id="price-input" name="price"
            value={this.state.price} onChange={this.onChange} />
        </div>
        <button type="button" onClick={this.saveCar}>Save Car</button>
      </form>
    </div>;
  }
}

