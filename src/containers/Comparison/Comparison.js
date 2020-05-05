import React from 'react';
import Stat from '../Stat/Stat';
import Button from '../../components/Button/Button';

const comparison = () => (
  <div>
    <Button>Today</Button>
    <Button>Yesterday</Button>
    <Button>A Week Ago</Button>
    <Button>A Month Ago</Button>
    <Stat />
  </div>
);

export default comparison;
