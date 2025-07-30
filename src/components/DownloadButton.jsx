import React, { useState } from 'react';
import './DownloadButton.css';

const DownloadButton = ({ canvas, disabled = false }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!canvas || disabled || isDownloading) return;

    setIsDownloading(true);

    try {
      // Create download link
      const dataURL = canvas.toDataURL('image/png', 1.0);
      
      // Create temporary link element
      const link = document.createElement('a');
      link.download = `instagram-post-${Date.now()}.png`;
      link.href = dataURL;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Small delay for user feedback
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    } catch (error) {
      console.error('Error downloading image:', error);
      setIsDownloading(false);
    }
  };

  return (
    <button 
      className={`download-button ${disabled ? 'disabled' : ''} ${isDownloading ? 'downloading' : ''}`}
      onClick={handleDownload}
      disabled={disabled || isDownloading}
    >
      {isDownloading ? (
        <>
          <div className="download-spinner"></div>
          <span>Downloading...</span>
        </>
      ) : (
        <>
          <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span>Download PNG</span>
          <span className="download-size">1080 × 1080</span>
        </>
      )}
    </button>
  );
};

export default DownloadButton; 