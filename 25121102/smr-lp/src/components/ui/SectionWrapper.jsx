import React from 'react';

const SectionWrapper = ({ children, id, theme = 'dark', className = '' }) => {
  return (
    <section 
      id={id} 
      className={`section-wrapper theme-${theme} ${className}`}
      style={{
        padding: 'var(--spacing-section-sp) 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden' // For decorative elements
      }}
    >
      <div className="container">
        {children}
      </div>
      
      <style>{`
        @media (min-width: 768px) {
          .section-wrapper {
            padding: var(--spacing-section-pc) 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SectionWrapper;
