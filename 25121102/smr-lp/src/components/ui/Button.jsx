import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', icon: Icon }) => {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '16px 40px',
    borderRadius: 'var(--radius-button)',
    fontSize: '18px',
    fontWeight: '700',
    transition: 'transform 0.2s, box-shadow 0.2s',
    letterSpacing: '0.05em',
    textDecoration: 'none'
  };

  const variants = {
    primary: {
      background: 'var(--color-cta-gradient)',
      color: '#fff',
      boxShadow: '0 4px 14px rgba(249, 115, 22, 0.4)'
    },
    secondary: {
      background: 'transparent',
      border: '2px solid var(--color-accent-cyan)',
      color: 'var(--color-accent-cyan)'
    }
  };

  return (
    <button 
      className={`btn-${variant} ${className}`}
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant] }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        if (variant === 'primary') e.currentTarget.style.boxShadow = '0 6px 20px rgba(249, 115, 22, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        if (variant === 'primary') e.currentTarget.style.boxShadow = '0 4px 14px rgba(249, 115, 22, 0.4)';
      }}
    >
      {children}
      {Icon && <Icon size={20} />}
    </button>
  );
};

export default Button;
