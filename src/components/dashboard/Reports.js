import React from 'react';
import { MDBListGroup } from 'mdbreact';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const Reports = ({data, isLoading}) => {

  return (
    <div style={{ overflow: 'visible', height: '12rem' }}>
      {isLoading ? (
        <div align='center'>
          <Loading />
        </div>
      ) : (
        data &&
        data.map((item, i) => {
          const { from, message } = item;
          return (
            <MDBListGroup key={i}>
              <div
                className='col-fluid report'
                style={{ background: '#ffff', height: '5rem' }}
              >
                <div className='d-flex w-100 justify-content-between'>
                  <Link to='/#'>
                    <h5 className='mb-1'>{from}</h5>
                  </Link>
                  <small>
    
                  </small>
                </div>
                <p className='mb-1'>{message}</p>
              </div>
            </MDBListGroup>
          );
        })
      )}
    </div>
  );
};

export default Reports;
