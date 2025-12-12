import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';

const Trust = () => {
  return (
    <SectionWrapper id="trust" theme="dark">
      <div className="trust-container">
        <p className="trust-label">導入実績 2,000店舗以上</p>
        <div className="logo-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="logo-item">
              LOGO {i}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-container {
          text-align: center;
        }
        
        .trust-label {
          color: var(--color-text-sub-dark);
          margin-bottom: 40px;
          font-size: 14px;
          letter-spacing: 0.1em;
        }

        .logo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          opacity: 0.7;
        }

        .logo-item {
          height: 60px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: var(--color-text-sub-dark);
          font-family: var(--font-number);
        }

        @media (min-width: 768px) {
          .logo-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Trust;
