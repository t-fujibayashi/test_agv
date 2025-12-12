import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { X, Check } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <SectionWrapper id="problem-solution" theme="light">
      <div className="ps-container">
        <div className="section-header">
          <h2 className="section-title">データが繋がれば、<br className="sp-only" />経営はもっとシンプルになる</h2>
          <p className="section-desc">
            予約、POS、顧客台帳。バラバラのシステム管理が<br />
            現場の疲弊と機会損失を生んでいます。
          </p>
        </div>

        <div className="comparison-wrapper">
          {/* Before: Chaos */}
          <div className="comparison-card before">
            <div className="card-label label-bad">Before</div>
            <h3 className="card-title">従来の管理</h3>
            <div className="chaos-visual">
              <div className="chaos-node">予約サイト</div>
              <div className="chaos-node">電話</div>
              <div className="chaos-node">紙台帳</div>
              <div className="chaos-node">POS</div>
              <X className="icon-bad" size={48} />
            </div>
            <ul className="feature-list bad">
              <li><X size={16} /> 転記作業による入力ミス</li>
              <li><X size={16} /> ダブルブッキングの発生</li>
              <li><X size={16} /> 顧客情報が蓄積されない</li>
            </ul>
          </div>

          {/* After: Sync */}
          <div className="comparison-card after">
            <div className="card-label label-good">After</div>
            <h3 className="card-title">SMR導入後</h3>
            <div className="sync-visual">
              <div className="sync-center">
                <span className="logo-text">SMR</span>
              </div>
              <div className="orbit-item item-1">予約</div>
              <div className="orbit-item item-2">会計</div>
              <div className="orbit-item item-3">顧客</div>
              <Check className="icon-good" size={48} />
            </div>
            <ul className="feature-list good">
              <li><Check size={16} /> 全データをリアルタイム同期</li>
              <li><Check size={16} /> 在庫連動で機会損失ゼロ</li>
              <li><Check size={16} /> 自動で顧客カルテを作成</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title {
          font-size: 28px;
          margin-bottom: 16px;
          color: var(--color-text-main-light);
        }
        .section-desc {
          color: var(--color-text-sub-light);
        }
        .sp-only { display: inline; }

        .comparison-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        .comparison-card {
          background: #fff;
          border-radius: var(--radius-card);
          padding: 32px;
          border: 1px solid var(--color-border-light);
          position: relative;
          overflow: hidden;
        }

        .comparison-card.after {
          border: 2px solid var(--color-accent-cyan);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.1);
        }

        .card-label {
          position: absolute;
          top: 0;
          left: 0;
          padding: 4px 16px;
          font-size: 12px;
          font-weight: bold;
          border-bottom-right-radius: 8px;
        }
        .label-bad { background: #F3F4F6; color: #6B7280; }
        .label-good { background: var(--color-accent-cyan); color: #fff; }

        .card-title {
          text-align: center;
          margin-bottom: 24px;
          font-size: 20px;
        }

        .chaos-visual, .sync-visual {
          height: 200px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 24px;
          background: #F9FAFB;
          border-radius: 8px;
        }

        .chaos-node {
          position: absolute;
          padding: 8px 12px;
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 4px;
          font-size: 12px;
          color: #6B7280;
        }
        .chaos-node:nth-child(1) { top: 20%; left: 10%; transform: rotate(-10deg); }
        .chaos-node:nth-child(2) { top: 60%; left: 20%; transform: rotate(5deg); }
        .chaos-node:nth-child(3) { top: 30%; right: 15%; transform: rotate(15deg); }
        .chaos-node:nth-child(4) { top: 70%; right: 25%; transform: rotate(-5deg); }
        
        .icon-bad { color: #EF4444; opacity: 0.2; position: absolute; }
        .icon-good { color: var(--color-accent-cyan); opacity: 0.2; position: absolute; }

        .sync-center {
          width: 80px;
          height: 80px;
          background: var(--color-accent-cyan);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: bold;
          z-index: 2;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
        }

        .orbit-item {
          position: absolute;
          font-size: 12px;
          font-weight: bold;
          color: var(--color-text-main-light);
        }
        .item-1 { top: 20%; }
        .item-2 { bottom: 20%; left: 20%; }
        .item-3 { bottom: 20%; right: 20%; }

        .feature-list {
          list-style: none;
        }
        .feature-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          font-size: 15px;
        }
        .feature-list.bad li { color: #6B7280; }
        .feature-list.good li { color: var(--color-text-main-light); font-weight: 500; }
        .feature-list.good li svg { color: var(--color-accent-cyan); }

        @media (min-width: 768px) {
          .section-title { font-size: 40px; }
          .sp-only { display: none; }
          
          .comparison-wrapper {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default ProblemSolution;
