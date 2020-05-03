import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Article } from './generic';
import Snackbar from '../Snackbar';

const Loading = () => {
  const [message, setMessage] = useState();
  useEffect(() => {
    const msg = setTimeout(() => {
      setMessage({ warning: 'Please check your internet connection!' });
    }, 10000);
    return () => {
      clearTimeout(msg);
    };
  }, []);
  return (
    <>
      <Snackbar message={message} />
      <Article className='loading'>
        <ReactLoading type='bars' color='#248afd' />
      </Article>
    </>
  );
};

export default Loading;
