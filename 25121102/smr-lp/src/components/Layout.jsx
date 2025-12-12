import React from 'react';
import Button from '../ui/Button';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">SMR</div>
          <nav className="nav-pc">
            <a href="#features">機能</a>
            <a href="#problem-solution">解決できること</a>
            <a href="#trust">導入実績</a>
          </nav>
          <div className="header-cta">
            <Button variant="primary" className="btn-small">お問い合わせ</Button>
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">SMR</div>
            <p className="copyright">© 2025 SMR Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        .header {
          height: var(--header-height);
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(10px);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          border-bottom: 1px solid var(--color-border-dark);
        }

        .header-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: 900;
          color: #fff;
          font-family: var(--font-number);
          letter-spacing: -0.05em;
        }

        .nav-pc {
          display: none;
          gap: 32px;
        }

        .nav-pc a {
          color: var(--color-text-sub-dark);
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-pc a:hover {
          color: #fff;
        }

        .btn-small {
          padding: 8px 20px !important;
          font-size: 14px !important;
        }

        .footer {
          background: #000;
          padding: 60px 0;
          color: var(--color-text-sub-dark);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .footer-logo {
          font-size: 24px;
          font-weight: bold;
          color: #fff;
        }

        .copyright {
          font-size: 12px;
        }

        @media (min-width: 768px) {
          .nav-pc {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
