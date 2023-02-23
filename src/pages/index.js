import react, { useState } from 'react';


function Home() {
  const [count, setCount] = useState(0);
  function handleEvent () {
    setCount(count +1);
  }  


  return (
    
      
        <div className=''>
        <p className='w-full'>You tapped the button {count} times</p>
        <button onClick={handleEvent}>Click Me</button>
        </div>
    
  
  );
}


export default Home
