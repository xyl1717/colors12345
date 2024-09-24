import React, { useState } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('yellow');
  
  const colors = ['yellow', 'green', 'black'];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '400px',
        marginBottom: '20px',
        backgroundColor: 'black',
        color: 'white',
        padding: '10px'
      }}>
        <span>Currently selected:</span>
        <span style={{ backgroundColor: selectedColor, padding: '5px', borderRadius: '4px', color: 'black' }}>{selectedColor}</span>
      </div>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        {colors.map(color => (
          <div
            key={color}
            onClick={() => handleColorChange(color)}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
              border: selectedColor === color ? '3px solid black' : 'none',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;

