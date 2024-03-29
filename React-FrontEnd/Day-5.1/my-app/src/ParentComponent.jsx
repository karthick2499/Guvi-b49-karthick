import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [receivedData, setReceivedData] = useState('');

    const handleDataFromChild = (data) => {
        setReceivedData(data);
    }
  return (
    <div>
        <h1>ParentComponent</h1>
        <p>Data from child: {receivedData}</p>
        <ChildComponent onDataFromChild={handleDataFromChild}/>
    </div>
  )
}

export default ParentComponent