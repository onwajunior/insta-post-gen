import React from 'react';
import { colorPalettes } from '../templates/templates.js';
import './ColorPalette.css';

const ColorPalette = ({ selectedPalette, onSelectPalette }) => {
  return (
    <div className="color-palette">
      <label className="color-palette__label">Text Color</label>
      <div className="color-palette__grid">
        {colorPalettes.map((palette) => (
          <button
            key={palette.id}
            className={`color-palette__item ${selectedPalette.id === palette.id ? 'selected' : ''}`}
            onClick={() => onSelectPalette(palette)}
            aria-label={`Select ${palette.name} text color`}
          >
            <div 
              className="color-palette__preview"
              style={{ backgroundColor: palette.background }}
            >
              <div 
                className="color-palette__dot"
                style={{ backgroundColor: palette.text }}
              />
            </div>
            <span className="color-palette__name">{palette.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette; 