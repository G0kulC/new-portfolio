import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="padding-global">
        <div className="container-large">
          <div className="footer-links">
            <div style={{ gridColumn: 'span 4' }}>
              <div className="footer-link-title">(Menu)</div>
              <div className="footer-link-group">
                {[['/', 'Home'], ['/portfolio', 'Portfolio'], ['/process', 'My process'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
                  <Link key={to} to={to} className="footer-link">{label}</Link>
                ))}
              </div>
            </div>
            <div style={{ gridColumn: 'span 3' }}>
              <div className="footer-link-title">(Socials)</div>
              <div className="footer-link-group">
                <a href="https://github.com/G0kulC" className="footer-link" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/gokul-chandrasekaran" className="footer-link" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://gokuldev.netlify.app" className="footer-link" target="_blank" rel="noreferrer">Portfolio</a>
              </div>
            </div>
            <div style={{ gridColumn: 'span 5', justifySelf: 'end' }}>
              <div className="footer-link-title">(Say &quot;Hello&quot;)</div>
              <div className="footer-link-group">
                <a href="mailto:gggokul865@gmail.com?subject=Hey Gokul! I have a project idea" className="footer-link">
                  gggokul865@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="footer-wordmark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1845 250" fill="none">
              <path d="M0 4.00391H58.9477C76.0185 4.00391 88.5549 7.73815 96.5568 15.2066C104.737 22.6751 108.826 34.1446 108.826 49.615V62.4181C108.826 74.5099 106.337 84.2012 101.358 91.4918C96.379 98.7825 87.6657 103.406 75.2183 105.362V105.895C88.7327 107.14 97.9794 111.408 102.958 118.698C108.115 125.811 110.694 135.236 110.694 146.972V168.311C110.694 186.626 105.803 199.874 96.0233 208.053C86.2432 216.055 72.3731 220.056 54.4132 220.056H0V4.00391ZM44.0107 40.2794V91.4918H50.9457C56.1025 91.4918 59.6589 90.2471 61.615 87.7576C63.7488 85.0903 64.8158 81.0004 64.8158 75.4879V54.6829C64.8158 49.5261 63.9266 45.8808 62.1484 43.7469C60.548 41.4352 57.2584 40.2794 52.2794 40.2794H44.0107ZM44.0107 125.9V183.781H53.3463C57.9696 183.781 61.2593 182.714 63.2154 180.58C65.3492 178.268 66.4161 174.534 66.4161 169.377V141.104C66.4161 135.947 65.2603 132.124 62.9486 129.634C60.637 127.145 56.636 125.9 50.9457 125.9H44.0107Z" fill="currentColor"/>
              <path d="M173.055 224.054C154.028 224.054 139.535 218.898 129.577 208.584C119.797 198.093 114.907 180.844 114.907 156.838V68.2833C114.907 44.4553 119.975 27.1177 130.111 16.2706C140.247 5.42354 154.917 0 174.121 0C193.148 0 207.552 5.15681 217.332 15.4704C227.29 25.6062 232.269 42.8549 232.269 67.2163V155.771C232.269 179.244 227.112 196.492 216.799 207.517C206.663 218.542 192.081 224.054 173.055 224.054ZM173.588 186.979C183.19 186.979 187.992 180.044 187.992 166.174V57.3473C187.992 50.2344 186.747 45.0776 184.257 41.8768C181.768 38.6761 178.122 37.0757 173.321 37.0757C163.897 37.0757 159.185 43.9218 159.185 57.614V166.707C159.185 173.82 160.34 178.977 162.652 182.178C165.142 185.378 168.787 186.979 173.588 186.979Z" fill="currentColor"/>
              <path d="M836.822 106.696L868.296 220.056H821.085L796.279 113.631H795.745V220.056H751.735V4.00391H795.745V103.495H796.279L820.818 4.00391H867.229L836.822 106.696Z" fill="currentColor"/>
              <path d="M1367.09 220.056V4.00391H1411.1V220.056H1367.09Z" fill="currentColor"/>
              <path d="M1789.78 224.054C1772 224.054 1758.57 219.876 1749.5 211.518C1740.61 202.983 1735.99 189.824 1735.63 172.042L1735.1 140.301L1777.78 132.032V170.441C1777.78 181.644 1781.87 187.246 1790.05 187.246C1796.98 187.246 1800.45 182.8 1800.45 173.909V154.171C1800.45 148.658 1799.47 144.302 1797.52 141.101C1795.56 137.9 1792.18 135.144 1787.38 132.832L1769.51 123.497C1747.1 112.65 1735.9 95.3121 1735.9 71.484V52.2794C1735.9 33.9638 1740.88 20.7161 1750.84 12.5364C1760.97 4.17879 1774.22 0 1790.58 0C1807.83 0 1820.54 4.26771 1828.72 12.8031C1836.9 21.3385 1841.62 34.3195 1842.86 51.7459L1844.73 81.3531L1802.05 91.2222L1801.25 53.0796C1801.07 47.5671 1800.18 43.4772 1798.58 40.8099C1796.98 38.1426 1794.23 36.8089 1790.31 36.8089C1783.56 36.8089 1780.18 41.0766 1780.18 49.6121V68.55C1780.18 74.0624 1781.16 78.508 1783.11 81.8866C1785.25 85.2652 1788.54 88.1992 1792.98 90.6887L1812.19 100.558C1823.21 106.07 1831.39 112.561 1836.73 120.029C1842.06 127.498 1844.73 137.278 1844.73 149.37V169.908C1844.73 188.757 1839.75 202.538 1829.79 211.251C1820.01 219.787 1806.67 224.054 1789.78 224.054Z" fill="currentColor"/>
            </svg>
          </div>

          <div className="footer-bottom">
            <span>©2026 Gokul Chandrasekaran</span>
            <span>From Coimbatore with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
