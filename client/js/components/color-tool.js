import * as React from 'react';

import { ToolHeader } from './tool-header';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: props.colors.concat(),
    };
  }



  addColor = newColor => {
    this.setState({
      colors: this.state.colors.concat(newColor),
    });
  }

  render() {

    return <div>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {this.state.colors.map(color => <li>{color}</li>)}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={this.addColor} />
    </div>;
  }
}