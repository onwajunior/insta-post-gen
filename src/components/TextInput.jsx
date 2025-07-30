import React from 'react';
import './TextInput.css';

const TextInput = ({ text, onChange, maxLength = 150 }) => {
  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      onChange(newText);
    }
  };

  const isNearLimit = text.length > maxLength * 0.8;
  const isAtLimit = text.length >= maxLength;

  return (
    <div className="text-input">
      <label className="text-input__label">Your Message</label>
      <textarea
        className="text-input__field"
        value={text}
        onChange={handleChange}
        placeholder="Start typing your message..."
        rows={3}
        maxLength={maxLength}
      />
      <div className={`text-input__counter ${isNearLimit ? 'warning' : ''} ${isAtLimit ? 'limit' : ''}`}>
        {text.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextInput; 