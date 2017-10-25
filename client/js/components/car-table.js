import * as React from 'react';

import { CarViewRow } from './car-view-row';

export const CarTable = props => <table>
  <thead>
    <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
      <th>Color</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {props.cars.map(car => <CarViewRow key={car.id} car={car} />)}
  </tbody>
</table>;
