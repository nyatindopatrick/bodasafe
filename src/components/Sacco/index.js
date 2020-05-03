import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from '../shared/Overview';
import Table from '../Tables/Table';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from '../Classes/classes';
import { Link } from 'react-router-dom';
import Loading from '../Loading';


function SaccoDashBoard() {
  const [UIData] = useState(UI.overViewHeader);
  const [TableHeader] = useState(UI.table.header);
  const [saccoUI] = useState({ ...UI });
  const [data, setData] = useState();
  const classes = useStyles();

  useEffect(() => {
    axios
      .post('/api/admin/saccos')
      .then(res => {
        console.log(res);
        setData({ ...res.data });
      })
      .catch(err => console.error(err));
  }, []);

 
  return (
    <>
      <div className='content-wrapper'>
        <h2>{name}</h2>
        {!data ? (
          <div align='center'>
            <Loading />
          </div>
        ) : (
          <div>
            <Overview overview={UIData} data={data.sacco} />
            <div className='  table-utils'>
              <Link to='/app/newsacco'>
                <button className='btn btn-info'>Add Sacco</button>
              </Link>
              <div className={classes.search}>
                <InputBase
                  placeholder='Search…'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </div>
            <div className='content-container'>
              <Table UI={saccoUI} tableHeader={TableHeader} data={data} />
              
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SaccoDashBoard;

// component Label
const name = 'Sacco';
// UI specifics props

const UI = {
  overViewHeader: ['Total Sacco', 'Deactivated', 'Active'],
  table: {
    header: [
      'Sacco',
      'Status',
      'Riders',
      'Location',
      'Reports',
      'Actions'
    ]
  },
  modal: 'Sacco'
};
