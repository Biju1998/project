import React, { useState, useEffect } from 'react';
import CitiesList from './CitiesList';
import { useNavigate } from 'react-router-dom';
import './List.css'

function List() {
    const navigate=useNavigate()
    // const {selectedState}=useParams()
    const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedcity,setSelectedCity] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch states from the API
  useEffect(() => {
    fetch('/api/v1/states')
  .then((response) => response.json())
  .then((data) => setStates(data))
  .catch((error) => console.error(error));
  }, []);

  const handleSubmit = () => {
    if(selectedState && selectedcity){
        setIsSubmitted(true);
        navigate(`/result/${selectedState}/${selectedcity}`)

    }
    else{
        alert('Select State and City!')
    }
  };

  return (
    <div className='container'>
        <h2>City-Selector-App </h2>
      <div className='container-box'>

      
      <label>Select a state:</label><br></br>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.stateId} value={state.stateId}>
            {state.stateName}
          </option>
        ))}
      </select>
      <CitiesList selectedState={selectedState} setSelectedCity={setSelectedCity} isSubmitted={isSubmitted} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
}

export default List;
