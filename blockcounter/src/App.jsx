import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/App.css';

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
  


  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Block: {minedBlocks.height}</h1>
        <h2 className="subtitle">Date: {formatDate(minedBlocks.timestamp)}</h2>
        <button className="button" onClick={() => copyToClipboard(`${blockLink}${shortBlockHeight}`)}>
          GET STAMP
        </button>
      </div>
    </div>
  );
}
export default App;