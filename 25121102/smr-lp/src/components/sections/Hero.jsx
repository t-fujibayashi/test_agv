import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <SectionWrapper id="hero" theme="dark" className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1 className="hero-title">
            現場が回る、<br />
            <span className="text-gradient">売上が伸びる。</span><br />
            SMR
          </h1>
          <p className="hero-subtitle">
            予約・顧客・売上をリアルタイムで一元管理。<br />
            データに基づく経営判断と、迷わない現場オペレーションを同時に実現します。
          </p>
          <div className="cta-group">
            <Button variant="primary" icon={ArrowRight}>
              オンライン相談（無料）
            </Button>
            <p className="cta-note">※最短1週間で導入可能</p>
          </div>
        </div>
        
        <div className="visual-content">
          {/* Placeholder for 3D Dashboard Image */}
          <div className="dashboard-mockup">
            <div className="mockup-screen">
              <div className="mockup-header"></div>
              <div className="mockup-body">
                <div className="graph-placeholder"></div>
                <div className="stats-row">
                  <div className="stat-box"></div>
                  <div className="stat-box"></div>
                  <div className="stat-box"></div>
                </div>
              </div>
            </div>
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-title {
          font-size: 36px;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 16px;
          color: var(--color-text-sub-dark);
          margin-bottom: 40px;
          line-height: 1.8;
        }

        .cta-note {
          font-size: 12px;
          color: var(--color-text-sub-dark);
          margin-top: 12px;
        }

        .visual-content {
          position: relative;
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dashboard-mockup {
          width: 100%;
          max-width: 600px;
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--color-border-dark);
          border-radius: 12px;
          position: relative;
          backdrop-filter: blur(10px);
          overflow: hidden;
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
          transition: transform 0.5s ease;
        }
        
        .dashboard-mockup:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
        }

        .mockup-screen {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mockup-header {
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          width: 30%;
        }

        .mockup-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .graph-placeholder {
          flex: 2;
          background: linear-gradient(90deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%);
          border-radius: 8px;
          border: 1px dashed var(--color-accent-cyan);
          position: relative;
        }
        
        .graph-placeholder::after {
          content: 'Dashboard UI';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--color-accent-cyan);
          font-size: 12px;
          font-family: var(--font-number);
        }

        .stats-row {
          flex: 1;
          display: flex;
          gap: 12px;
        }

        .stat-box {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, var(--color-accent-cyan-glow) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          z-index: -1;
          opacity: 0.5;
        }

        @media (min-width: 960px) {
          .hero-content {
            grid-template-columns: 1fr 1fr;
          }

          .hero-title {
            font-size: 72px;
          }

          .hero-subtitle {
            font-size: 18px;
          }
          
          .visual-content {
            height: 400px;
          }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Hero;
