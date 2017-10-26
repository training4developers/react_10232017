import * as React from 'react';

import { CarViewRow } from './car-view-row';

export class CarTable extends React.Component {
  
  render() {
  
    return <table>
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.props.cars.map(car => <CarViewRow key={car.id} car={car} onDelete={this.props.onDeleteCar} />)}
      </tbody>
    </table>;
  }
}
