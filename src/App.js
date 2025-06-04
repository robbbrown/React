import './App.css';
import ColorWindow from './ColorWindow';
import SearchBox from './SearchBox';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('')

  return (
    <div className='body'>
    <ColorWindow 
      color={color}
    />
    <SearchBox 
      color={color}
      setColor={setColor}
      handleSubmit={handleSubmit}/>
    </div>
  );

  function handleSubmit(e){
    e.preventDefault();
    console.log({color});
  }

}

export default App;
