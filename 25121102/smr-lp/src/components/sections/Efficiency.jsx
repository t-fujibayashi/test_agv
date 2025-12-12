import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Phone, Globe, Users } from 'lucide-react';

const Efficiency = () => {
  return (
    <SectionWrapper id="efficiency" theme="light">
      <div className="efficiency-container">
        <div className="text-side">
          <h2 className="section-title">在庫は常にひとつ。<br />機会損失をゼロへ。</h2>
          <p className="section-desc">
            電話予約が入った瞬間、グルメサイトの空席も自動で埋まります。<br />
            もう、ダブルブッキングを恐れて席を空けておく必要はありません。
          </p>
        </div>
        
        <div className="visual-side">
          <div className="central-hub">
            <div className="hub-core">
              <span>Inventory</span>
            </div>
            
            <div className="connection-line line-1"></div>
            <div className="connection-line line-2"></div>
            <div className="connection-line line-3"></div>
            
            <div className="satellite sat-1">
              <Globe size={24} />
              <span className="sat-label">Web</span>
            </div>
            <div className="satellite sat-2">
              <Phone size={24} />
              <span className="sat-label">Phone</span>
            </div>
            <div className="satellite sat-3">
              <Users size={24} />
              <span className="sat-label">Walk-in</span>
            </div>
            
            <div className="pulse-ring"></div>
          </div>
        </div>
      </div>

      <style>{`
        .efficiency-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }

        .section-title {
          font-size: 28px;
          margin-bottom: 24px;
          color: var(--color-text-main-light);
        }

        .section-desc {
          color: var(--color-text-sub-light);
          font-size: 16px;
        }

        .visual-side {
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          border-radius: 20px;
          border: 1px solid var(--color-border-light);
        }

        .central-hub {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hub-core {
          width: 80px;
          height: 80px;
          background: var(--color-text-main-light);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-weight: bold;
          z-index: 10;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }

        .satellite {
          position: absolute;
          width: 50px;
          height: 50px;
          background: #fff;
          border: 1px solid var(--color-border-light);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 5;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        
        .sat-label {
          font-size: 10px;
          margin-top: 2px;
          color: var(--color-text-sub-light);
        }

        .sat-1 { top: 0; left: 50%; transform: translate(-50%, -50%); }
        .sat-2 { bottom: 10%; left: 0; }
        .sat-3 { bottom: 10%; right: 0; }

        .connection-line {
          position: absolute;
          background: #E5E7EB;
          z-index: 1;
          transform-origin: center;
        }
        
        .line-1 { width: 2px; height: 80px; top: 25px; left: 50%; transform: translateX(-50%); }
        .line-2 { width: 2px; height: 80px; bottom: 35px; left: 30%; transform: rotate(45deg); }
        .line-3 { width: 2px; height: 80px; bottom: 35px; right: 30%; transform: rotate(-45deg); }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid var(--color-accent-cyan);
          opacity: 0;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { width: 80px; height: 80px; opacity: 0.8; }
          100% { width: 160px; height: 160px; opacity: 0; }
        }

        @media (min-width: 768px) {
          .efficiency-container {
            grid-template-columns: 1fr 1fr;
          }
          .section-title { font-size: 40px; }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Efficiency;
