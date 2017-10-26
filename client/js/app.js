import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { ColorTool } from './components/color-tool';

// const myColors = [ 'red', 'yellow', 'blue', 'green' ];

// ReactDOM.render(
//   <div>
//     <ColorTool colors={myColors} />
//   </div>,
//   document.querySelector('main'),
// );

import { CarTool } from './components/car-tool';

const carData = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2017, color: 'blue', price: 23000 },
  { id: 2, make: 'Ford', model: 'Focus', year: 2015, color: 'yellow', price: 12000 },
];

ReactDOM.render(
  <CarTool cars={carData} />,
  document.querySelector('main')
);