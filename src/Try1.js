import React, { useState, useEffect } from "react";

function Try1() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = num + "tilte";
   
  });

  return (
    <div>
      <button onClick={()=>setNum(num + 1)}>{num} </button>
    </div>
  );
}

export default Try1;

// import React, { useState, useEffect } from 'react';

// function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = count + " my title";
//   });

//   return (
//     <div>
//      {console.log(useEffect)}
//       <button onClick={incrementNum}>{num}</button>
//     </div>
//   );
// }

// export default Example;
