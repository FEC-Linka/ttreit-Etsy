import React, { Component } from 'react';
import CostToShip from './CostToShip.jsx';
import DeliverTo from './DeliverTo.jsx';
import EstimatedDelivery from './EstimatedDelivery.jsx';
import From from './From.jsx';
import Policies from './Policies.jsx';
import ReadyToShip from './ReadyToShip.jsx';
import id1 from '../../../mongo-mockdata/id1.json';
import id2 from '../../../mongo-mockdata/id2.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { productId: id2 };
  }

  componentDidMount() {
    this.changeProduct();
  }

  changeProduct() {
    const test = 2;
    if (test === 1) {
      this.setState({ productId: id1 });
    } else {
      this.setState({ productId: id2 });
    }
  }

  render() {
    return (
      <div className="shippingBox" data-test="appComponent">
        <CostToShip />
        <DeliverTo />
        <EstimatedDelivery />
        <From
          city={this.state.productId.ship_from_city}
          state={this.state.productId.ship_from_state}
        />
        <Policies />
        <ReadyToShip />
      </div>
    );
  }
}

export default App;
