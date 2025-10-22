import React, { useState } from 'react'

const FloatingLabelInput = ({ 
  type = 'text', 
  label, 
  placeholder, 
  value, 
  onChange, 
  className = '',
  rows = 4,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value && value.length > 0
  const shouldFloat = isFocused || hasValue

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <div className={`floating-label-group ${className}`}>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="floating-label-input resize-none"
          rows={rows}
          {...props}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="floating-label-input"
          {...props}
        />
      )}
      <label 
        className={`floating-label ${shouldFloat ? 'focused has-value' : 'unfocused'}`}
      >
        {label}
      </label>
    </div>
  )
}

export default FloatingLabelInput
