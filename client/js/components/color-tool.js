import * as React from 'react';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: props.colors.concat(),
      newColor: '',
    };

    // this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }

  addColor = () => {
    this.setState({
      colors: this.state.colors.concat(this.state.newColor),
      newColor: '',
    });
  }

  render() {

    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {this.state.colors.map(color => <li>{color}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="new-color-input">New Color:</label>
          <input type="text" id="new-color-input" name="newColor"
            value={this.state.newColor} onChange={this.onChange} />
        </div>
        <button type="button" onClick={this.addColor}>Add Color</button>
      </form>
    </div>;
  }
}