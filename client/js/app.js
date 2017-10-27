import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';
import { refreshColors } from './database';

// const myColors = [ 'red', 'yellow', 'blue', 'green' ];

refreshColors().then(colors => {

  ReactDOM.render(
    <ColorTool colors={colors.map(c => c.name)} />,
    document.querySelector('main'),
  );
  
});



// import { CarTool } from './components/car-tool';

// const carData = [
//   { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2017, color: 'blue', price: 23000 },
//   { id: 2, make: 'Ford', model: 'Focus', year: 2015, color: 'yellow', price: 12000 },
// ];

// ReactDOM.render(
//   <CarTool cars={carData} />,
//   document.querySelector('main')
// );