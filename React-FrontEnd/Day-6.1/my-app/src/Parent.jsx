import React, { useState } from 'react'
import Child from './Child';


function Parent() {
    const [addData, setAddData] = useState('');// State

    // function
    const handleDataFromChild = (data) => {
        setAddData(data);
    }

  return (
    <div>
        <h1>Parent</h1>
        <p>Data from child: {addData}</p>

        <Child onDataFromChild = {handleDataFromChild}></Child>
        
    </div>
  )
}

export default Parent