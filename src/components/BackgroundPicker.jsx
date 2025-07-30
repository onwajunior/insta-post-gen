import React from 'react';
import { backgroundColors } from '../templates/templates.js';
import './BackgroundPicker.css';

const BackgroundPicker = ({ selectedBackground, onSelectBackground }) => {
  return (
    <div className="background-picker">
      <label className="background-picker__label">Background</label>
      <div className="background-picker__grid">
        {backgroundColors.map((bgColor) => (
          <button
            key={bgColor.id}
            className={`background-picker__item ${selectedBackground.id === bgColor.id ? 'selected' : ''}`}
            onClick={() => onSelectBackground(bgColor)}
            aria-label={`Select ${bgColor.name} background`}
            style={{ backgroundColor: bgColor.color }}
          >
            {selectedBackground.id === bgColor.id && (
              <div className="background-picker__checkmark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundPicker; 