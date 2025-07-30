import React from 'react';
import { fonts, textSizes } from '../templates/templates.js';
import './StyleControls.css';

const StyleControls = ({ 
  selectedFont, 
  selectedTextSize, 
  onSelectFont, 
  onSelectTextSize 
}) => {
  return (
    <div className="style-controls">
      {/* Font Selection */}
      <div className="style-controls__section">
        <label className="style-controls__label">Font</label>
        <div className="style-controls__options">
          {fonts.map((font) => (
            <button
              key={font.id}
              className={`style-controls__option ${selectedFont.id === font.id ? 'selected' : ''}`}
              onClick={() => onSelectFont(font)}
              style={{ fontFamily: font.family }}
            >
              {font.name}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="style-controls__section">
        <label className="style-controls__label">Size</label>
        <div className="style-controls__options">
          {textSizes.map((size) => (
            <button
              key={size.id}
              className={`style-controls__option ${selectedTextSize.id === size.id ? 'selected' : ''}`}
              onClick={() => onSelectTextSize(size)}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleControls; 