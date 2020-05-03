import React, { useState, useEffect } from 'react';
import Overview from '../shared/Overview';
import Table from '../Tables/RidersTable';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RiderPage({ Loading }) {
  const [UIData] = useState(UI.overViewHeader);
  const [TableHeader] = useState(UI.table.header);
  const [riderUI] = useState({ ...UI });
  const [data, setData] = useState();
  useEffect(() => {
    axios.post('/api/sacco/riders').then(res => {
      setData([...res.data]);
    });
  }, []);
  console.log(data);
  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        data && (
          <div>
            <h2>Riders</h2>
            <Overview overview={UIData} data={data} />

            <div className='row  table-utils'>
              <Link to='/app/newrider'>
                <button className='btn btn-info'>Add Riders</button>
              </Link>

              <form>
                <input type='search' placeholder='Search' />
              </form>
            </div>
            <div className='content-container'>
              <Table tableHeader={TableHeader} data={data} UI={riderUI} />
            </div>
          </div>
        )
      )}
    </>
  );
}

export default RiderPage;

const UI = {
  overViewHeader: ['Total Riders', 'Deactivated', 'Active'],
  table: {
    header: [
      'No.',
      'Name',
      'Status',
      'Rating',
      'Location',
      'Reports',
      'Actions'
    ]
  },
  modal: 'Rider'
};
