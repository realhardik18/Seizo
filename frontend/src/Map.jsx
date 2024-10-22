import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/amurto/react-india-region-selector/refs/heads/master/src/topojsons/india.json';

const Map = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [inputItem, setInputItem] = useState(''); // State for input field
  const [retrievedData, setRetrievedData] = useState([]); // State for API response
  const [displayedItem, setDisplayedItem] = useState(''); // State for displaying retrieved item

  // Function to handle data retrieval from the API
  const handleRetrieveData = async () => {
    if (!inputItem) return; // Don't send the request if input is empty

    try {
      const response = await fetch(`http://127.0.0.1:5000/top5states?item=${inputItem}`);
      if (response.ok) {
        const data = await response.json();
        setRetrievedData(data); // Display the API response, assume it's an array of state names
        setDisplayedItem(inputItem); // Set the displayed item to the input value
      } else {
        setRetrievedData(["Error retrieving data"]);
        setDisplayedItem(''); // Clear displayed item on error
      }
    } catch (error) {
      setRetrievedData(["Error connecting to the API"]);
      setDisplayedItem(''); // Clear displayed item on error
    }
  };

  // Function to check for first and last word match
  const doesFirstLastWordMatch = (stateName, dataStateName) => {
    const stateWords = stateName.split(' ');
    const dataWords = dataStateName.split(' ');

    const stateFirstWord = stateWords[0].toLowerCase();
    const stateLastWord = stateWords[stateWords.length - 1].toLowerCase();

    const dataFirstWord = dataWords[0].toLowerCase();
    const dataLastWord = dataWords[dataWords.length - 1].toLowerCase();

    // Return true if both first and last words match
    return stateFirstWord === dataFirstWord && stateLastWord === dataLastWord;
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#121212' }}>
      {/* Fixed Sidebar */}
      <div style={{
        width: '20%',
        padding: '20px',
        background: '#1F1B24',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        position: 'fixed',
        height: '100vh',
        top: '0',
        left: '0',
        boxShadow: '2px 0 5px rgba(0,0,0,0.3)',
      }}>
        <h2>Hover Status</h2>
        <div style={{
          padding: '10px',
          background: '#333333',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        }}>
          <strong>{hoveredState ? hoveredState : "false"}</strong>
        </div>

        {/* Input and Button for Data Retrieval */}
        <div style={{
          padding: '10px',
          background: '#333333',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        }}>
          <input
            type="text"
            placeholder="Type in an item"
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)} // Update input state
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              marginBottom: '10px',
              background: '#555',
              color: '#FFF',
              fontSize: '1rem',
            }}
          />
          <button
            onClick={handleRetrieveData}
            style={{
              width: '100%',
              padding: '10px',
              background: '#BB86FC',
              border: 'none',
              borderRadius: '5px',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Retrieve Data
          </button>
        </div>

        {/* Display Retrieved Data */}
        <div style={{
          padding: '10px',
          background: '#333333',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          maxHeight: '300px',
          overflowY: 'auto',
          fontSize: '1rem',
        }}>
          {retrievedData.length > 0 && Array.isArray(retrievedData) ? (
            <div>
              <strong>Top states for {displayedItem}:</strong>
              <ol>
                {retrievedData.map((state, index) => (
                  <li key={index}>{state}</li>
                ))}
              </ol>
            </div>
          ) : (
            <strong>No data retrieved</strong>
          )}
        </div>
      </div>

      {/* Scrollable Map Area */}
      <div style={{
        marginLeft: '20%',
        width: '80%',
        height: '100vh',
        overflowY: 'auto',
        background: '#1E1E1E',
        padding: '20px',
      }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 750,
            center: [78.9629, 20.5],
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stateName = geo.properties['ST_NM'];

                // Check if state name matches based on first and last word
                const isHighlighted = retrievedData.some((dataState) =>
                  doesFirstLastWordMatch(stateName, dataState)
                );

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHighlighted ? 'green' : (hoveredState === geo.id ? '#BB86FC' : '#3A3A3A')}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    onMouseEnter={() => {                      
                      setHoveredState(stateName); // Set the hovered state
                    }}
                    onMouseLeave={() => {                    
                      setHoveredState(false); // Reset hovered state
                    }}                                 
                    style={{
                      default: {
                        outline: 'none',
                      },
                      hover: {
                        fill: '#BB86FC',
                        transition: 'all 0.3s ease',
                      },
                      pressed: {
                        fill: '#3700B3',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;
