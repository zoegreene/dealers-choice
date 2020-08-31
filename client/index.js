import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import Details from './components/Details';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cars: [],
      details: [],
      carId: ''
    }
    this.getDetails = this.getDetails.bind(this);
  }

  async getDetails() {
    const { carId } = this.state;
    const details = (await axios.get(`/api/cars/${carId}/details`)).data;
    this.setState({ details });
  }

  async componentDidMount() {
    this.setState({ cars: (await axios.get('/api/cars')).data });

    const loadCar = async() => {
      const carId = window.location.hash.slice(1) * 1;
      this.setState({ carId });
      this.getDetails();
    }

    window.addEventListener('hashchange', async() => {
      loadCar();
    });
  }

  render() {
    const { cars, details } = this.state;
    if (Object.keys(details).length > 0) {
      return <Details details={ details } />
    } else {
      return (
        <div>
          <h1 className='welcome'>Welcome to the Car Dealership!</h1>
          <h4 className='welcome'>Your dream car awaits...</h4>
          <div className='car-list'>
            <List cars={ cars }/>
          </div>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
