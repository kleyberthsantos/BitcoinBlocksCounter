import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const BlockCounter = ({ number }) => {
  const [digits, setDigits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    number ? setLoading(false) : setLoading(true);

    const updateDigits = async () => {
      const digitArray = Array.from(String(number), Number);
      setDigits(digitArray);
    };

    updateDigits();

  }, [number]);

  return (

    <div className='block-counter'>
      {
        loading ?
          <Loader />
          :
          digits.map((digit, index) => (

            <div key={index} className='digit-container'>
              <p className='digit'>
                {digit}
              </p>
            </div>
          ))
      }
    </div>
  );
};

export default BlockCounter;
