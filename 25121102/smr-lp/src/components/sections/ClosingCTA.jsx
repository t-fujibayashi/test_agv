import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const ClosingCTA = () => {
  return (
    <SectionWrapper id="cta" theme="light" className="closing-cta">
      <div className="cta-content">
        <h2 className="cta-title">
          あなたの店には、<br />
          まだ<span className="highlight">伸び代</span>がある。
        </h2>
        <p className="cta-desc">
          データ経営で、次のステージへ。<br />
          まずは無料のオンライン相談から。
        </p>
        <Button variant="primary" icon={ArrowRight} className="cta-button-large">
          オンライン相談を予約する
        </Button>
      </div>

      <style>{`
        .closing-cta {
          background: linear-gradient(180deg, #F9FAFB 0%, #F3F4F6 100%);
        }

        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .cta-title {
          font-size: 32px;
          margin-bottom: 24px;
          color: var(--color-text-main-light);
          line-height: 1.3;
        }

        .highlight {
          color: #DC2626; /* Red for emphasis */
          position: relative;
          display: inline-block;
        }
        
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(220, 38, 38, 0.2);
          z-index: -1;
        }

        .cta-desc {
          font-size: 16px;
          color: var(--color-text-sub-light);
          margin-bottom: 48px;
        }

        .cta-button-large {
          padding: 20px 60px;
          font-size: 20px;
        }

        @media (min-width: 768px) {
          .cta-title { font-size: 56px; }
          .cta-desc { font-size: 20px; }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default ClosingCTA;
