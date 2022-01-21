import React from 'react';

const Points = ({ dimension, points, color }) => {
    return (
      <div className="point-bar" style={{ width: dimension }}>
        <div style={{ color: color }}>Points: {points}</div>
      </div>
    );
  };
  export default Points;
