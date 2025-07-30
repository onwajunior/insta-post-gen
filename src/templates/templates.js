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
      background: '#ffffff',
      text: 'Beautiful\nQuote Here',
      textColor: '#000000'
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
      background: '#f8fafc',
      text: 'Business\nAnnouncement',
      textColor: '#1e293b'
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
      background: '#fef3c7',
      text: 'New Product\nLaunch',
      textColor: '#92400e'
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
      background: '#1e293b',
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
      textColor: '#374151'
    }
  }
];

// Background color options
export const backgroundColors = [
  { id: 'white', name: 'White', color: '#ffffff' },
  { id: 'black', name: 'Black', color: '#000000' },
  { id: 'gray-light', name: 'Light Gray', color: '#f9fafb' },
  { id: 'gray', name: 'Gray', color: '#6b7280' },
  { id: 'blue-light', name: 'Light Blue', color: '#dbeafe' },
  { id: 'blue', name: 'Blue', color: '#3b82f6' },
  { id: 'green-light', name: 'Light Green', color: '#d1fae5' },
  { id: 'green', name: 'Green', color: '#10b981' },
  { id: 'yellow-light', name: 'Light Yellow', color: '#fef3c7' },
  { id: 'yellow', name: 'Yellow', color: '#f59e0b' },
  { id: 'red-light', name: 'Light Red', color: '#fee2e2' },
  { id: 'red', name: 'Red', color: '#ef4444' },
  { id: 'purple-light', name: 'Light Purple', color: '#e9d5ff' },
  { id: 'purple', name: 'Purple', color: '#8b5cf6' },
  { id: 'pink-light', name: 'Light Pink', color: '#fce7f3' },
  { id: 'pink', name: 'Pink', color: '#ec4899' }
];

// Color palettes for text (keeping existing)
export const colorPalettes = [
  {
    id: 'classic',
    name: 'Classic',
    background: '#ffffff',
    text: '#000000',
    accent: '#333333'
  },
  {
    id: 'warm',
    name: 'Warm',
    background: '#fef7f0',
    text: '#8b4513',
    accent: '#cd853f'
  },
  {
    id: 'cool',
    name: 'Cool',
    background: '#f0f8ff',
    text: '#1e3a8a',
    accent: '#3b82f6'
  },
  {
    id: 'nature',
    name: 'Nature',
    background: '#f0f9ff',
    text: '#166534',
    accent: '#10b981'
  },
  {
    id: 'bold',
    name: 'Bold',
    background: '#fef3c7',
    text: '#dc2626',
    accent: '#f59e0b'
  },
  {
    id: 'mono',
    name: 'Monochrome',
    background: '#f9fafb',
    text: '#374151',
    accent: '#6b7280'
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