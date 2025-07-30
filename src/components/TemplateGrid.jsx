import React from 'react';
import { templates } from '../templates/templates.js';
import './TemplateGrid.css';

const TemplateGrid = ({ onSelectTemplate }) => {
  return (
    <div className="template-grid">
      <h1 className="template-grid__title">Instagram Post Generator</h1>
      <p className="template-grid__subtitle">Choose a template to get started</p>
      
      <div className="template-grid__container">
        {templates.map((template) => (
          <div
            key={template.id}
            className="template-card"
            onClick={() => onSelectTemplate(template)}
          >
            <div 
              className="template-card__preview"
              style={{ backgroundColor: template.preview.background }}
            >
              <div 
                className="template-card__text"
                style={{ color: template.preview.textColor }}
              >
                {template.preview.text}
              </div>
            </div>
            <div className="template-card__info">
              <h3 className="template-card__name">{template.name}</h3>
              <p className="template-card__description">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="template-grid__cta">Tap to start →</p>
    </div>
  );
};

export default TemplateGrid; 