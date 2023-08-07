import React, { useState, useEffect } from 'react';

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
    loading ?
      <div className='block-counter'>
        <h3 className='loading'>Loading...</h3>
      </div>
      :
      <di className='block-counter'>

        {digits.map((digit, index) => (

          <div key={index} className='digit-container'>
            <p className='digit'>
              {digit}
            </p>
          </div>
        ))}
      </di>
  );
};

export default BlockCounter;
