import React, { useRef, useEffect, useState } from 'react';
import { getContrastingTextColor } from '../templates/templates.js';
import './Canvas.css';

const Canvas = ({ 
  template, 
  text, 
  font, 
  textSize, 
  colorPalette,
  backgroundColor,
  onCanvasReady 
}) => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Canvas dimensions - always 1080x1080 for Instagram
  const CANVAS_SIZE = 1080;

  useEffect(() => {
    if (canvasRef.current) {
      onCanvasReady(canvasRef.current);
    }
  }, [onCanvasReady]);

  useEffect(() => {
    drawCanvas();
  }, [template, text, font, textSize, colorPalette, backgroundColor]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !template) return;

    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    
    // Draw background - use selected background color or fallback to color palette
    const bgColor = backgroundColor ? backgroundColor.color : colorPalette.background;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    
    // Set up text styling
    const fontSize = textSize.size;
    const fontWeight = template.layout.bold ? '700' : '600';
    ctx.font = `${fontWeight} ${fontSize}px ${font.family}`;
    
    // Always use the selected color palette text color
    // This respects the user's text color choice
    const textColor = colorPalette.text;
    
    ctx.fillStyle = textColor;
    ctx.textAlign = template.layout.textAlign;
    ctx.textBaseline = 'middle';
    
    // Draw text
    if (text && text.trim()) {
      drawText(ctx, text, template.layout, fontSize);
    } else {
      // Draw placeholder text
      drawText(ctx, 'Your text here', template.layout, fontSize);
    }
    
    setIsLoaded(true);
  };

  const drawText = (ctx, textContent, layout, fontSize) => {
    const lines = textContent.split('\n');
    const lineHeight = fontSize * 1.2;
    const totalHeight = lines.length * lineHeight;
    
    // Calculate starting Y position to center the text block
    let startY = layout.textPosition.y;
    if (lines.length > 1) {
      startY = layout.textPosition.y - (totalHeight / 2) + (lineHeight / 2);
    }
    
    // Handle text wrapping for long lines
    lines.forEach((line, index) => {
      const y = startY + (index * lineHeight);
      
      if (layout.maxWidth && ctx.measureText(line).width > layout.maxWidth) {
        // Wrap text if it's too long
        const words = line.split(' ');
        let currentLine = '';
        let currentY = y;
        
        words.forEach(word => {
          const testLine = currentLine + (currentLine ? ' ' : '') + word;
          const metrics = ctx.measureText(testLine);
          
          if (metrics.width > layout.maxWidth && currentLine !== '') {
            ctx.fillText(currentLine, layout.textPosition.x, currentY);
            currentLine = word;
            currentY += lineHeight;
          } else {
            currentLine = testLine;
          }
        });
        
        if (currentLine) {
          ctx.fillText(currentLine, layout.textPosition.x, currentY);
        }
      } else {
        ctx.fillText(line, layout.textPosition.x, y);
      }
    });
  };

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="canvas"
      />
      {!isLoaded && (
        <div className="canvas-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Canvas; 