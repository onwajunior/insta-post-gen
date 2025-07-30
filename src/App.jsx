import React, { useState, useCallback } from 'react';
import TemplateGrid from './components/TemplateGrid.jsx';
import Canvas from './components/Canvas.jsx';
import TextInput from './components/TextInput.jsx';
import StyleControls from './components/StyleControls.jsx';
import BackgroundPicker from './components/BackgroundPicker.jsx';
import ColorPalette from './components/ColorPalette.jsx';
import DownloadButton from './components/DownloadButton.jsx';
import { colorPalettes, fonts, textSizes, backgroundColors } from './templates/templates.js';
import './App.css';

function App() {
  // Main state
  const [currentScreen, setCurrentScreen] = useState('templates'); // 'templates' | 'editor'
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [canvas, setCanvas] = useState(null);

  // Content state
  const [text, setText] = useState('');
  const [selectedFont, setSelectedFont] = useState(fonts[0]); // Default to Inter
  const [selectedTextSize, setSelectedTextSize] = useState(textSizes[1]); // Default to Medium
  const [selectedColorPalette, setSelectedColorPalette] = useState(colorPalettes[0]); // Default to Classic
  const [selectedBackground, setSelectedBackground] = useState(backgroundColors[0]); // Default to White

  // Handle template selection
  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setText(''); // Reset text when switching templates
    setCurrentScreen('editor');
  };

  // Handle back to templates
  const handleBackToTemplates = () => {
    setCurrentScreen('templates');
    setSelectedTemplate(null);
    setText('');
  };

  // Canvas ready callback
  const handleCanvasReady = useCallback((canvasElement) => {
    setCanvas(canvasElement);
  }, []);

  // Render template selection screen
  if (currentScreen === 'templates') {
    return (
      <div className="app">
        <TemplateGrid onSelectTemplate={handleSelectTemplate} />
      </div>
    );
  }

  // Render editor screen
  return (
    <div className="app">
      <div className="app__header">
        <button 
          className="app__back-button"
          onClick={handleBackToTemplates}
          aria-label="Go back to templates"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
          Back
        </button>
        <h1 className="app__title">Post Generator</h1>
      </div>

      <div className="app__content">
        {/* Canvas Preview */}
        <div className="app__canvas-section">
          <Canvas
            template={selectedTemplate}
            text={text}
            font={selectedFont}
            textSize={selectedTextSize}
            colorPalette={selectedColorPalette}
            backgroundColor={selectedBackground}
            onCanvasReady={handleCanvasReady}
          />
        </div>

        {/* Controls */}
        <div className="app__controls">
          <TextInput
            text={text}
            onChange={setText}
            maxLength={150}
          />

          <StyleControls
            selectedFont={selectedFont}
            selectedTextSize={selectedTextSize}
            onSelectFont={setSelectedFont}
            onSelectTextSize={setSelectedTextSize}
          />

          <BackgroundPicker
            selectedBackground={selectedBackground}
            onSelectBackground={setSelectedBackground}
          />

          <ColorPalette
            selectedPalette={selectedColorPalette}
            onSelectPalette={setSelectedColorPalette}
          />

          <DownloadButton
            canvas={canvas}
            disabled={!canvas}
          />
        </div>
      </div>
    </div>
  );
}

export default App; 