import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './result.css'

function Result() {
    const navigate=useNavigate();
  const {  selectedState,selectedcity} = useParams();
  const [elem,setElem]=useState([])
  const [stateName,setStatename]=useState(null);

  useEffect(() => {
   fetch('/api/v1/states')
  .then((response) => response.json())
  .then((data) => setElem(data))
  .catch((error) => console.error(error));
}, []);

useEffect(() => {
    const selectedItem = elem.find((item) => item.stateId === selectedState);
    if (selectedItem) {
      setStatename(selectedItem.stateName);
    }
  }, [elem, selectedState]);

return (
    <>
    <div className='result-box'>

    <div >
    <h1>You Have selected:<br></br> <span>{selectedcity}<br></br> <b>in</b> <br></br> {stateName}</span></h1>
    <button onClick={()=>{return navigate('/')}}>Back to Home</button>
    </div>
    </div>
    
    </>
    
  );
}

export default Result;
