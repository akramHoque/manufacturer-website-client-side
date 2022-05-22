import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  console.log(item);
//   useEffect(() => {
//     // const url = `Tools.json/${itemId}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => setItem(data));
// }, [item])
  return (
    <div>
      
    </div>
  );
};

export default Purchase;