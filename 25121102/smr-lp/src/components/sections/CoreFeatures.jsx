import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Calendar, Users, CreditCard, Globe, ShieldAlert, BarChart3, ArrowRight } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "予約管理",
    desc: "電話もネットも、全ての予約をこの1画面で。",
    icon: Calendar,
    color: "#3B82F6"
  },
  {
    id: 2,
    title: "顧客管理",
    desc: "来店履歴から好みまで、自動でデータベース化。",
    icon: Users,
    color: "#10B981"
  },
  {
    id: 3,
    title: "POSレジ連携",
    desc: "会計データが即座に反映。締め作業も0分に。",
    icon: CreditCard,
    color: "#F59E0B"
  },
  {
    id: 4,
    title: "外部予約集客",
    desc: "グルメサイトの在庫を自動調整。ダブルブッキング防止。",
    icon: Globe,
    color: "#8B5CF6"
  },
  {
    id: 5,
    title: "キャンセル対策",
    desc: "リマインドメール自動送信で、無断キャンセルを激減。",
    icon: ShieldAlert,
    color: "#EF4444"
  },
  {
    id: 6,
    title: "AI分析",
    desc: "「来週の売上予測」をAIが提示。仕入れの無駄をなくす。",
    icon: BarChart3,
    color: "#06B6D4"
  }
];

const CoreFeatures = () => {
  return (
    <SectionWrapper id="features" theme="dark">
      <div className="features-header">
        <h2 className="section-title">店舗運営に必要なすべてを、<br />ひとつのシステムで。</h2>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="card-visual" style={{ background: \`linear-gradient(135deg, \${feature.color}22 0%, transparent 100%)\` }}>
              <feature.icon size={48} color={feature.color} />
            </div>
            <div className="card-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
              <div className="card-link">
                詳しく見る <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .features-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title {
          font-size: 28px;
          color: var(--color-text-main-dark);
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--color-border-dark);
          border-radius: var(--radius-card);
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .feature-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-4px);
          border-color: var(--color-accent-cyan);
        }

        .card-visual {
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--color-border-dark);
        }

        .card-content {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .feature-title {
          font-size: 20px;
          margin-bottom: 12px;
          color: var(--color-text-main-dark);
        }

        .feature-desc {
          font-size: 15px;
          color: var(--color-text-sub-dark);
          margin-bottom: 24px;
          flex: 1;
        }

        .card-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-accent-cyan);
          font-size: 14px;
          font-weight: bold;
        }

        @media (min-width: 768px) {
          .section-title { font-size: 40px; }
          
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }
        
        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default CoreFeatures;
