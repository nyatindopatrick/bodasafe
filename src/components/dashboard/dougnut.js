import React from 'react';
import DonutChart from 'react-donut-chart';

const App = ({ data }) => {
  return (
    <div style={{ width: '20px' }}>
      <DonutChart legend={false} height={300} width={230} data={data} />
    </div>
  );
};

export default App;
