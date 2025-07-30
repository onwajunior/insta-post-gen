// Template definitions for the 5 MVP templates
export const templates = [
  {
    id: 'quote',
    name: 'Quote',
    description: 'Perfect for inspirational quotes',
    layout: {
      background: 'solid',
      textPosition: { x: 540, y: 540 }, // Center of 1080x1080
      textAlign: 'center',
      maxWidth: 800,
      padding: 140
    },
    preview: {
      background: '#000000',
      text: 'Beautiful\nQuote Here',
      textColor: '#ffffff'
    }
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Professional announcements',
    layout: {
      background: 'solid',
      textPosition: { x: 540, y: 640 },
      textAlign: 'center',
      maxWidth: 700,
      padding: 120,
      hasAccent: true,
      accentPosition: { x: 540, y: 300 }
    },
    preview: {
      background: '#1a1a1a',
      text: 'Business\nAnnouncement',
      textColor: '#ffffff'
    }
  },
  {
    id: 'product',
    name: 'Product',
    description: 'Showcase your products',
    layout: {
      background: 'solid',
      textPosition: { x: 540, y: 740 },
      textAlign: 'center',
      maxWidth: 600,
      padding: 100,
      hasSubtext: true,
      subtextPosition: { x: 540, y: 400 }
    },
    preview: {
      background: '#667eea',
      text: 'New Product\nLaunch',
      textColor: '#ffffff'
    }
  },
  {
    id: 'motivational',
    name: 'Motivational',
    description: 'Bold and inspiring',
    layout: {
      background: 'solid',
      textPosition: { x: 540, y: 540 },
      textAlign: 'center',
      maxWidth: 900,
      padding: 90,
      bold: true
    },
    preview: {
      background: '#764ba2',
      text: 'ACHIEVE\nGREATNESS',
      textColor: '#ffffff'
    }
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean and simple',
    layout: {
      background: 'solid',
      textPosition: { x: 200, y: 200 },
      textAlign: 'left',
      maxWidth: 600,
      padding: 160,
      minimal: true
    },
    preview: {
      background: '#ffffff',
      text: 'Simple\nMessage',
      textColor: '#000000'
    }
  }
];

// Modern gradient background colors inspired by the mood app
export const backgroundColors = [
  { id: 'white', name: 'White', color: '#ffffff' },
  { id: 'black', name: 'Black', color: '#000000' },
  { id: 'warm-gradient', name: 'Warm', color: '#ff9a8b' },
  { id: 'sunset', name: 'Sunset', color: '#ff6b6b' },
  { id: 'ocean', name: 'Ocean', color: '#4ecdc4' },
  { id: 'forest', name: 'Forest', color: '#45b7d1' },
  { id: 'lavender', name: 'Lavender', color: '#96ceb4' },
  { id: 'coral', name: 'Coral', color: '#ffeaa7' },
  { id: 'purple', name: 'Purple', color: '#6c5ce7' },
  { id: 'mint', name: 'Mint', color: '#55efc4' },
  { id: 'peach', name: 'Peach', color: '#fd79a8' },
  { id: 'sky', name: 'Sky', color: '#74b9ff' },
  { id: 'rose', name: 'Rose', color: '#e84393' },
  { id: 'amber', name: 'Amber', color: '#fdcb6e' },
  { id: 'emerald', name: 'Emerald', color: '#00b894' },
  { id: 'violet', name: 'Violet', color: '#a29bfe' }
];

// Modern color palettes with sophisticated combinations
export const colorPalettes = [
  {
    id: 'classic',
    name: 'Classic',
    background: '#ffffff',
    text: '#000000',
    accent: '#333333'
  },
  {
    id: 'midnight',
    name: 'Midnight',
    background: '#000000',
    text: '#ffffff',
    accent: '#667eea'
  },
  {
    id: 'sunset',
    name: 'Sunset',
    background: '#ff6b6b',
    text: '#ffffff',
    accent: '#ff9a8b'
  },
  {
    id: 'ocean',
    name: 'Ocean',
    background: '#4ecdc4',
    text: '#ffffff',
    accent: '#45b7d1'
  },
  {
    id: 'royal',
    name: 'Royal',
    background: '#6c5ce7',
    text: '#ffffff',
    accent: '#a29bfe'
  },
  {
    id: 'nature',
    name: 'Nature',
    background: '#00b894',
    text: '#ffffff',
    accent: '#55efc4'
  }
];

// Font options
export const fonts = [
  {
    id: 'inter',
    name: 'Inter',
    family: 'Inter, sans-serif',
    weights: [400, 600, 700]
  },
  {
    id: 'playfair',
    name: 'Playfair',
    family: 'Playfair Display, serif',
    weights: [400, 600, 700]
  }
];

// Text size options
export const textSizes = [
  { id: 'small', name: 'S', size: 48 },
  { id: 'medium', name: 'M', size: 72 },
  { id: 'large', name: 'L', size: 96 }
];

// Helper function to get contrasting text color for readability
export const getContrastingTextColor = (backgroundColor) => {
  // Convert hex to RGB
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return black for light backgrounds, white for dark backgrounds
  return luminance > 0.5 ? '#000000' : '#ffffff';
}; 