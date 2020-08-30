import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import Details from './components/Details';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cars: []
    }
  }

  async componentDidMount() {
    this.setState({ cars: (await axios.get('/api/cars')).data });
  }

  render() {
    return (
      <div>
        <h1>Cars List</h1>
        <ul className='car-list'>
          <List cars={this.state.cars} />
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
