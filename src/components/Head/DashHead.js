import React from 'react';

export default function DashHead({ info, data }) {
  const { sacco, rider } = info;
  return (
    <div>
      <div className='row'>
        <div className='col-md-4 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-title text-md-center text-xl-left'>Saccos</p>
              <div className='d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center'>
                <h3 className='mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0'>
                  {sacco.length}
                </h3>
                <i className='ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0'></i>
              </div>
              <p className='mb-0 mt-2 text-danger'>100%</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-title text-md-center text-xl-left'>Riders</p>
              <div className='d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center'>
                <h3 className='mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0'>
                  {rider.length}
                </h3>
                <i className='ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0'></i>
              </div>
              <p className='mb-0 mt-2 text-danger'>100%</p>
            </div>
          </div>
        </div>
   
        <div className='col-md-4 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <p className='card-title text-md-center text-xl-left'>
                Active Riders
              </p>
              <div className='d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center'>
                <h3 className='mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0'>
                  {rider.filter(({ status }) => status === 'Active').length}
                </h3>
                <i className='ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0'></i>
              </div>
              <p className='mb-0 mt-2 text-success'>{`${(rider.filter(
                ({ status }) => status === 'Active'
              ).length >
                0 / rider.length) *
                100}%`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
