import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
  const [tools , setTools] = useState([]);
 
  useEffect(() =>{
    fetch('https://rocky-plateau-28765.herokuapp.com/tool')
    .then(res => res.json())
    .then(data => setTools(data).slice(0, 6))
  }, [])

  return (
    <div>
     <div className='text-center'>
     <h2 className='text-3xl text-center text-orange-700 font-bold uppercase my-5 py-5'>Our Tools</h2>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {
        tools.map(tool => <Tool
        key = {tool._id}
        tool = {tool}
     
        ></Tool>)
      }
    </div>
    
    
     </div>
    </div>
  );
};

export default Tools;