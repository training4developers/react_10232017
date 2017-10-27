import * as React from 'react';

import { ToolHeader } from './tool-header';
import { ColorList } from './color-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

  addColor = newColor => { };

  render() {

    return <div>
      <ToolHeader headerText="Color Tool" />
      <ColorList {...this.props} />
      <ColorForm buttonText="Add Color" onSubmitColor={this.addColor} />
    </div>;
  }
}