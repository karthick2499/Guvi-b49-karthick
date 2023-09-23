import React from 'react'

function ChildComponent(props) {
    const sendDataToParent = () => {
        const data = "Hello from Child";
        props.onDataFromChild(data);
    }
  return (
    <div>
        <h2>ChildComponent</h2>
        <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  )
}

export default ChildComponent