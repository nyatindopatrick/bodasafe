import React from 'react';
import { greenChart, purpleChart, blueBar } from '../Icons';

export default function Overview({ overview, data }) {
  return (
    <div className='main-overview'>
      <div className='card ' style={{ maxWidth: '14rem' }}>
        <p>{overview[0]}</p>
        <div className='row'>
          <div className='col-6'>
            <h5>{data.length}</h5>
          </div>
          <div className='col-6'>
            <img src={blueBar} alt='...' />
          </div>
        </div>
      </div>
      <div className='card ' style={{ maxWidth: '14rem' }}>
        <p>{overview[1]}</p>
        <div className='row'>
          <div className='col-6'>
            {' '}
            <h5>{data.filter(({ status }) => status !== 'Active').length}</h5>
          </div>
          <div className='col-6'>
            <img src={purpleChart} alt='...' />
          </div>
        </div>
        <div className='bg-transparent '></div>
      </div>
      <div className='card ' style={{ maxWidth: '14rem' }}>
        <p>{overview[2]}</p>
        <div className='row'>
          <div className='col-6'>
            <h5>{data.filter(({ status }) => status === 'Active').length}</h5>
          </div>
          <div className='col-6'>
            <img src={greenChart} alt='...' />
          </div>
        </div>
      </div>
    </div>
  );
}
