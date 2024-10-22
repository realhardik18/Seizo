import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useState } from 'react';

// GeoJSON data for India states
const geoUrl = 'https://gist.githubusercontent.com/karmadude/4527959/raw/59492893c2f13ffb909ba48253fa7fa30a640c56/in-states-topo.json';

const IndiaMap = () => {
  const [hoveredState, setHoveredState] = useState(null);

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto', background: '#121212', padding: '20px', borderRadius: '8px' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000, // Set scale to 1000
          center: [78.9629, 20.5], // Adjusted center to prevent cropping
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={hoveredState === geo.id ? '#BB86FC' : '#1E1E1E'} // Dark colors
                stroke="#3A3A3A" // Darker border for better contrast
                strokeWidth={0.5}
                onMouseEnter={() => {
                  setHoveredState(geo.id);
                }}
                onMouseLeave={() => {
                  setHoveredState(null);
                }}
                onClick={() => {}} // Disable click functionality
                style={{
                  default: {
                    outline: 'none',
                  },
                  hover: {
                    fill: '#3700B3', // Dark hover color
                    transition: 'all 0.3s ease',
                  },
                  pressed: {
                    fill: '#BB86FC',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {hoveredState && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            background: 'rgba(255, 255, 255, 0.1)', // Slightly transparent for dark theme
            color: '#FFFFFF', // White text for readability
            padding: '10px 15px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            zIndex: 10,
          }}
        >
          <strong>{hoveredState}</strong>
        </div>
      )}
    </div>
  );
};

export default IndiaMap;
