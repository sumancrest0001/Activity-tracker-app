import React, { Component } from 'react';
import Stat from '../Stat/Stat';
import Button from '../../components/Button/Button';

class History extends Component {
  render() {
    return (
      <div>
        <Button>Today</Button>
        <Button>Yesterday</Button>
        <Button>A Week Ago</Button>
        <Button>A Month Ago</Button>
        <Stat />
      </div>
    );
  }
}

export default History;