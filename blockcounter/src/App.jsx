import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/App.css';
import BlockCounter from './components/BlockCounter';

function App() {
  const [minedBlocks, setMinedBlocks] = useState({});
  useEffect(() => {
    const interval = setInterval(() => {
      getBlocks();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const getBlocks = async () => {
    try {
      const response = await axios.get('https://mempool.space/api/v1/blocks');
      if (response.data && response.data.length > 0) {
        setMinedBlocks(response.data[0]);
      }
    } catch (error) {
      console.error('Error al obtener la información de los bloques:', error.message);
    }
  };
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };
  const copyToClipboard = (text) => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    document.body.removeChild(textField);
  };
  const blockLink = 'https://mempool.space/block/';
  const blockRef = `${blockLink}${(minedBlocks.height)}`;
  const shortBlockHeight = blockRef.slice(-6);

  console.log(typeof (shortBlockHeight))

  return (
    <div className="container">
      <h1>Bitcoin Blocks Counter</h1>
      <div className="content">
        <div className='blockNumber-container'>
          <h2 className="title">Block number:</h2>
          <div id='blockCounter-container'>
            <BlockCounter number={minedBlocks.height} />
          </div>
          <h3 className="subtitle">Date: {formatDate(minedBlocks.timestamp)}</h3>
          <button className="button" onClick={() => copyToClipboard(`${blockLink}${shortBlockHeight}`)}>
            GET STAMP
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;