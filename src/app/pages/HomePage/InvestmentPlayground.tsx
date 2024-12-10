import { SetStateAction, useEffect, useState } from 'react';
import { Line } from 'recharts';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, RefreshCcw } from 'lucide-react';
import Tutorial from './Tutorial';
import TradingModal from './Trading';
import ProgressBar from './ProgressBar';
import TimeRangeSelector from './TimeSelector';
import ToastNotifications from './Notification';

// Helper function to handle responsive styles
const useResponsiveStyles = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};
const getResponsiveStyles = (
  isMobile: boolean,
): Record<string, React.CSSProperties> => ({
  container: {
    maxWidth: '1300px',
    margin: '-1.5rem', // Counteract root padding from global styles
    width: '98.5%', // Compensate for the negative margin
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    padding: isMobile ? '16px' : '24px',
    marginBottom: '24px',
    width: '100%',
    boxSizing: 'border-box',
    maxWidth: isMobile ? '100%' : '1400px', // Control max width
  },
  cardHeader: {
    marginBottom: isMobile ? '12px' : '16px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'center',
    gap: isMobile ? '8px' : '0',
  },
  title: {
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 'bold',
    margin: 0,
  },
  subtitle: {
    color: '#666',
    margin: 0,
    fontSize: isMobile ? '14px' : '16px',
  },
  chartContainer: {
    marginBottom: '24px',
    width: '100%',
    overflow: 'hidden', // Force hide overflow
    position: 'relative', // Ensure proper containment
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '12px' : '16px',
    marginBottom: '24px',
  },
  statBox: {
    padding: isMobile ? '12px' : '16px',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
  },
  statLabel: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '4px',
  },
  statValue: {
    fontSize: isMobile ? '18px' : '20px',
    fontWeight: 'bold',
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: isMobile ? '12px' : '16px',
    marginBottom: '24px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '8px',
    width: '100%',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: isMobile ? '12px' : '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    flex: 1,
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    border: '1px solid #dc3545',
    color: '#dc3545',
  },
  secondaryButton: {
    backgroundColor: '#2196F3',
    color: 'white',
    width: isMobile ? '100%' : 'auto',
  },
  newsContainer: {
    display: 'grid',
    gap: isMobile ? '12px' : '16px',
    gridTemplateColumns: isMobile
      ? '1fr'
      : 'repeat(auto-fill, minmax(300px, 1fr))',
  },
  newsItem: {
    padding: isMobile ? '12px' : '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '8px' : '12px',
    cursor: 'pointer',
  },
  newsTitle: {
    fontSize: isMobile ? '16px' : '18px',
    fontWeight: 'bold',
    margin: 0,
    lineHeight: 1.4,
  },
  newsImpact: {
    color: '#666',
    margin: 0,
    fontSize: isMobile ? '13px' : '14px',
    lineHeight: 1.5,
  },
  newsPrice: {
    color: '#888',
    fontSize: isMobile ? '12px' : '14px',
    margin: 0,
    marginTop: 'auto',
  },
  companyTag: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: isMobile ? '11px' : '12px',
    fontWeight: '500',
    marginBottom: '4px',
  },
  endScreenOverlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
  },
  endScreenContent: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    width: isMobile ? '90%' : '80%',
    maxHeight: '90vh',
    overflowY: 'auto',
    padding: isMobile ? '16px' : '24px',
  },
  endScreenGrid: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '16px' : '24px',
  },
  resultsBox: {
    backgroundColor: '#f8f9fa',
    padding: isMobile ? '12px' : '16px',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  list: {
    paddingLeft: isMobile ? '16px' : '24px',
    marginBottom: '16px',
  },
  listItem: {
    marginBottom: '8px',
  },
  centerAlign: {
    textAlign: 'center',
    marginTop: '24px',
  },
  tabs: {
    display: 'flex',
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
    position: isMobile ? 'sticky' : 'relative',
    top: isMobile ? 0 : 'auto',
    backgroundColor: isMobile ? '#fff' : '#fff',
    zIndex: isMobile ? 10 : 1,
    width: '100%',
    paddingTop: isMobile ? '0rem' : '1.5rem',
  },
  tab: {
    padding: isMobile ? '10px 16px' : '12px 24px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s ease',
    color: '#666',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: '500',
    flex: isMobile ? 1 : 'initial',
    marginRight: isMobile ? 0 : '8px',
  },
  activeTab: {
    color: '#2196F3',
    borderBottom: '2px solid #2196F3',
  },
  content: {
    display: 'none',
    height: 'calc(100vh - 100px)', // Match card height
  },
  activeContent: {
    display: 'block',
  },
  notificationDot: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    width: '8px',
    height: '8px',
    backgroundColor: '#ff4444',
    borderRadius: '50%',
    display: 'block',
    zIndex: 10, // Ensure dot appears above other elements
    pointerEvents: 'none', // Prevent dot from interfering with clicks
  },
});
interface DataPoint {
  year: string;
  msft: number;
  pets: number;
  wcom: number;
  isQuarter?: boolean;
  isTransition?: boolean;
}

interface InterpolatedPoint extends DataPoint {
  isQuarter: boolean;
  isTransition?: boolean;
}
const InvestmentPlayground = () => {
  const [chartTimeRange, setChartTimeRange] = useState('all');
  const [showTutorial, setShowTutorial] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const isMobile = useResponsiveStyles();
  const styles = getResponsiveStyles(isMobile);
  const [activeTab, setActiveTab] = useState('market');
  const [showNotification, setShowNotification] = useState(false);
  // Add to your existing state in InvestmentPlayground
  const [tradeModalOpen, setTradeModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [isBuyAction, setIsBuyAction] = useState(true);

  // Separate historical data from simulation data
  const historicalData = [
    { year: '1996 Q1', msft: 40, pets: 0, wcom: 25 },
    { year: '1996 Q2', msft: 45, pets: 0, wcom: 30 },
    { year: '1996 Q3', msft: 50, pets: 0, wcom: 35 },
    { year: '1996 Q4', msft: 55, pets: 0, wcom: 40 },
    { year: '1997 Q1', msft: 60, pets: 0, wcom: 45 },
    { year: '1997 Q2', msft: 65, pets: 0, wcom: 50 },
    { year: '1997 Q3', msft: 70, pets: 0, wcom: 55 },
    { year: '1997 Q4', msft: 85, pets: 0, wcom: 70 },
  ];
  // Real historical price movements (adjusted for scale)
  const stockData = [
    { year: '1998 Q1', msft: 100, pets: 0, wcom: 100 },
    { year: '1998 Q2', msft: 110, pets: 0, wcom: 120 },
    { year: '1998 Q3', msft: 130, pets: 0, wcom: 135 },
    { year: '1998 Q4', msft: 145, pets: 0, wcom: 150 },
    { year: '1999 Q1', msft: 160, pets: 0, wcom: 180 },
    { year: '1999 Q2', msft: 180, pets: 0, wcom: 210 },
    { year: '1999 Q3', msft: 190, pets: 100, wcom: 230 }, // Pets.com IPO planning
    { year: '1999 Q4', msft: 220, pets: 120, wcom: 280 },
    { year: '2000 Q1', msft: 250, pets: 150, wcom: 320 }, // Peak
    { year: '2000 Q2', msft: 200, pets: 80, wcom: 250 },
    { year: '2000 Q3', msft: 180, pets: 40, wcom: 200 },
    { year: '2000 Q4', msft: 170, pets: 10, wcom: 150 }, // Pets.com shutdown
    { year: '2001 Q1', msft: 160, pets: 0, wcom: 120 },
    { year: '2001 Q2', msft: 165, pets: 0, wcom: 100 },
    { year: '2001 Q3', msft: 155, pets: 0, wcom: 80 },
    { year: '2001 Q4', msft: 160, pets: 0, wcom: 60 },
    { year: '2002 Q1', msft: 165, pets: 0, wcom: 40 },
    { year: '2002 Q2', msft: 160, pets: 0, wcom: 20 },
    { year: '2002 Q3', msft: 155, pets: 0, wcom: 5 }, // WorldCom bankruptcy
    { year: '2002 Q4', msft: 160, pets: 0, wcom: 0 },
  ];

  // Modified interpolation function with type safety
  const interpolatePoints = (
    start: number,
    end: number,
    points: number,
    volatilityFactor: number = 0.1,
  ): number[] => {
    const result: number[] = [];
    for (let i = 0; i <= points; i++) {
      const progress = i / points;
      const baseValue = start + (end - start) * progress;
      const volatility = Math.abs(end - start) * volatilityFactor;
      const randomVariation = (Math.random() - 0.5) * volatility;
      result.push(Math.max(0, baseValue + randomVariation));
    }
    return result;
  };
  const pointsPerQuarter = 10;
  // Modified function to generate detailed data with proper typing
  const generateDetailedData = (
    quarterlyData: DataPoint[],
  ): InterpolatedPoint[] => {
    const detailedData: InterpolatedPoint[] = [];

    for (let i = 0; i < quarterlyData.length - 1; i++) {
      const currentQuarter = quarterlyData[i];
      const nextQuarter = quarterlyData[i + 1];

      // Special handling for transition between historical and stock data
      if (currentQuarter.year === '1997 Q4' && nextQuarter.year === '1998 Q1') {
        // Generate transition points
        const transitionPoints = interpolatePoints(
          currentQuarter.msft,
          nextQuarter.msft,
          pointsPerQuarter,
          0.05,
        );

        // Add the current quarter marker
        detailedData.push({
          ...currentQuarter,
          isQuarter: true,
        });

        // Add transition points
        for (let j = 1; j < pointsPerQuarter; j++) {
          detailedData.push({
            year: `W${j}`,
            msft: transitionPoints[j],
            pets: currentQuarter.pets,
            wcom: interpolatePoints(
              currentQuarter.wcom,
              nextQuarter.wcom,
              pointsPerQuarter,
              0.05,
            )[j],
            isQuarter: false,
            isTransition: true,
          });
        }
      } else {
        // Regular interpolation for non-transition periods
        const msftPoints = interpolatePoints(
          currentQuarter.msft,
          nextQuarter.msft,
          pointsPerQuarter,
        );
        const petsPoints = interpolatePoints(
          currentQuarter.pets,
          nextQuarter.pets,
          pointsPerQuarter,
        );
        const wcomPoints = interpolatePoints(
          currentQuarter.wcom,
          nextQuarter.wcom,
          pointsPerQuarter,
        );

        detailedData.push({
          ...currentQuarter,
          isQuarter: true,
        });

        for (let j = 1; j < pointsPerQuarter; j++) {
          detailedData.push({
            year: `${currentQuarter.year} W${j}`,
            msft: msftPoints[j],
            pets: petsPoints[j],
            wcom: wcomPoints[j],
            isQuarter: false,
          });
        }
      }
    }

    // Add the last quarter
    detailedData.push({
      ...quarterlyData[quarterlyData.length - 1],
      isQuarter: true,
    });

    return detailedData;
  };
  // Company-specific news and events
  // Enhanced news coverage
  const enhancedNews = {
    '1998 Q1': [
      {
        category: 'Market',
        title: 'Fed Keeps Interest Rates Low',
        impact: 'Easy money fuels tech investment',
        analysis: 'Low rates encourage speculative investments',
      },
      {
        company: 'Microsoft',
        title: 'Windows 98 Launch Planned',
        impact: 'Strong enterprise position',
        price: 'MSFT: $28.75',
      },
      {
        company: 'WorldCom',
        title: 'Continues Aggressive Expansion',
        impact: 'Growth through acquisitions',
        price: 'WCOM: $24.50',
      },
      {
        category: 'Technology',
        title: 'Google Founded in Garage',
        impact: 'New search engine enters market',
        analysis: 'Innovation continues in Silicon Valley',
      },
    ],
    '1998 Q2': [
      {
        company: 'Microsoft',
        title: 'Windows 98 Launches Successfully',
        impact: 'PC market grows stronger',
        price: 'MSFT: $32.50',
      },
      {
        category: 'Technology',
        title: 'Apple Introduces iMac',
        impact: 'Consumer tech gets stylish',
        analysis: 'Design becomes key differentiator',
      },
      {
        category: 'Market',
        title: 'Tech IPOs Surge 200%',
        impact: 'Investor appetite grows',
        analysis: 'Early signs of market fever',
      },
    ],
    '1998 Q3': [
      {
        category: 'Technology',
        title: 'Yahoo Acquires GeoCities',
        impact: 'Web community consolidation begins',
        analysis: 'Big players start buying growth',
      },
      {
        company: 'WorldCom',
        title: 'Announces Major Fiber Expansion',
        impact: 'Network capacity increases',
        price: 'WCOM: $28.75',
      },
      {
        category: 'Market',
        title: 'Online Trading Platforms Emerge',
        impact: 'Retail investors gain direct access',
        analysis: 'Democratization of trading',
      },
    ],
    '1998 Q4': [
      {
        category: 'Technology',
        title: 'Amazon Expands Beyond Books',
        impact: 'E-commerce scope widens',
        analysis: 'Digital retail revolution begins',
      },
      {
        category: 'Market',
        title: 'Internet Fund Returns 196%',
        impact: 'Tech sector outperformance',
        analysis: 'Momentum investing takes hold',
      },
      {
        company: 'Microsoft',
        title: 'MSN Growth Accelerates',
        impact: 'Internet services expand',
        price: 'MSFT: $35.50',
      },
    ],
    '1999 Q1': [
      {
        category: 'Market',
        title: 'Day Trading Becomes Mainstream',
        impact: 'Retail investors flood the market',
        analysis: 'Speculation increases market volatility',
      },
      {
        company: 'Microsoft',
        title: 'Reports Record Profits',
        impact: 'Traditional metrics still strong',
        price: 'MSFT: $85.50',
      },
      {
        category: 'Technology',
        title: 'PayPal Launches Online Payments',
        impact: 'E-commerce infrastructure grows',
        analysis: 'Internet financial services emerge',
      },
    ],
    '1999 Q2': [
      {
        category: 'Technology',
        title: 'Webvan Raises Record VC Round',
        impact: 'Online grocery delivery boom',
        analysis: 'Traditional retail disruption attempt',
      },
      {
        category: 'Market',
        title: 'NASDAQ Tops 2,500',
        impact: 'Tech valuations soar',
        analysis: 'Momentum investing accelerates',
      },
      {
        company: 'WorldCom',
        title: 'Revenue Growth "Unstoppable"',
        impact: 'Aggressive expansion continues',
        price: 'WCOM: $35.25',
      },
    ],
    '1999 Q3': [
      {
        company: 'Pets.com',
        title: 'Files for IPO',
        impact: 'Heavy marketing spending begins',
        price: 'Initial pricing planned',
      },
      {
        category: 'Technology',
        title: 'Napster Disrupts Music Industry',
        impact: 'Digital distribution challenges emerge',
        analysis: 'Internet threatens traditional business',
      },
      {
        category: 'Market',
        title: 'Margin Debt Reaches Record High',
        impact: 'Investors taking on more risk',
        analysis: 'Leverage increases system risk',
      },
    ],
    '1999 Q4': [
      {
        category: 'Technology',
        title: 'E-commerce Holiday Sales Surge',
        impact: 'Online shopping goes mainstream',
        analysis: 'Digital retail validation',
      },
      {
        category: 'Market',
        title: 'Tech Valuations Hit New Heights',
        impact: 'P/E ratios become "irrelevant"',
        analysis: 'Traditional metrics abandoned',
      },
      {
        company: 'Microsoft',
        title: 'Stock Splits Again',
        impact: 'Market cap reaches $500B',
        price: 'MSFT: $95.50',
      },
    ],
    '2000 Q1': [
      {
        category: 'Market',
        title: 'NASDAQ Hits 5,048.62',
        impact: 'Peak of the bubble',
        analysis: 'Maximum market euphoria',
      },
      {
        company: 'Pets.com',
        title: 'Super Bowl Ad Success',
        impact: 'High marketing spend continues',
        price: 'IPET: $14.00',
      },
      {
        category: 'Technology',
        title: 'AOL Merges with Time Warner',
        impact: 'Largest merger in history',
        analysis: 'Old and new media combine',
      },
    ],
    '2000 Q2': [
      {
        category: 'Market',
        title: 'Margin Calls Accelerate',
        impact: 'Forced selling begins',
        analysis: 'Leverage unwind starts',
      },
      {
        company: 'WorldCom',
        title: 'Growth Numbers Questioned',
        impact: 'Accounting concerns emerge',
        price: 'WCOM: $45.00',
      },
      {
        category: 'Technology',
        title: 'Amazon Loses 75% of Value',
        impact: 'E-commerce model questioned',
        analysis: 'Profitability concerns mount',
      },
    ],
    '2000 Q3': [
      {
        category: 'Market',
        title: 'Tech Layoffs Begin',
        impact: 'Dot-com workforce shrinks',
        analysis: 'Reality sets in',
      },
      {
        category: 'Technology',
        title: 'Startup Funding Freezes',
        impact: 'Cash runway becomes critical',
        analysis: 'VC sentiment shifts dramatically',
      },
      {
        company: 'Microsoft',
        title: 'Growth Slows Significantly',
        impact: 'Enterprise spending cuts hit',
        price: 'MSFT: $65.50',
      },
    ],
    '2000 Q4': [
      {
        company: 'Pets.com',
        title: 'Announces Shutdown',
        impact: 'Liquidates all assets',
        price: 'IPET: $0.19',
      },
      {
        category: 'Technology',
        title: 'Internet Ad Rates Collapse',
        impact: 'Revenue models fail',
        analysis: 'Basic business models prove unsustainable',
      },
      {
        category: 'Market',
        title: 'NASDAQ Down 50% from Peak',
        impact: 'Tech crash accelerates',
        analysis: 'Wealth effect reverses',
      },
    ],
    '2001 Q1': [
      {
        category: 'Market',
        title: 'Dot-com Bankruptcies Surge',
        impact: 'Industry consolidation begins',
        analysis: 'Survivors emerge stronger',
      },
      {
        company: 'WorldCom',
        title: 'Debt Concerns Mount',
        impact: 'Credit ratings cut',
        price: 'WCOM: $15.00',
      },
      {
        category: 'Technology',
        title: 'Silicon Valley Office Vacancy Spikes',
        impact: 'Real estate market crashes',
        analysis: 'Tech hub contraction',
      },
    ],
    '2001 Q2': [
      {
        category: 'Market',
        title: 'Nasdaq Down 68% From Peak',
        impact: 'Tech crash accelerates',
        analysis: 'Wealth effect reverses',
      },
      {
        company: 'Microsoft',
        title: 'Enterprise Sales Stable',
        impact: 'Traditional software resilient',
        price: 'MSFT: $67.75',
      },
      {
        category: 'Technology',
        title: 'Bandwidth Prices Plummet',
        impact: 'Infrastructure commoditization',
        analysis: 'Tech deflation begins',
      },
    ],
    '2001 Q3': [
      {
        category: 'Global',
        title: '9/11 Attacks Shake Markets',
        impact: 'Trading halted for days',
        analysis: 'Economic uncertainty deepens',
      },
      {
        category: 'Technology',
        title: 'Tech Spending Hits New Lows',
        impact: 'CIOs slash budgets',
        analysis: 'Recovery timeline extends',
      },
      {
        company: 'WorldCom',
        title: 'Accounting Probe Begins',
        impact: 'SEC investigates financials',
        price: 'WCOM: $8.00',
      },
    ],
    '2001 Q4': [
      {
        category: 'Market',
        title: 'Tech Sector Jobs Down 20%',
        impact: 'Mass layoffs continue',
        analysis: 'Skilled worker surplus grows',
      },
      {
        category: 'Technology',
        title: 'Amazon Posts First Profit',
        impact: 'E-commerce survivor emerges',
        analysis: 'New business models validated',
      },
      {
        company: 'Microsoft',
        title: 'Xbox Launch Success',
        impact: 'Digital entertainment grows',
        price: 'MSFT: $70.25',
      },
    ],
    '2002 Q1': [
      {
        category: 'Market',
        title: 'IPO Market Remains Frozen',
        impact: 'No tech offerings planned',
        analysis: 'Capital markets reset continues',
      },
      {
        company: 'WorldCom',
        title: 'Major Restatement Expected',
        impact: 'Fraud scope expands',
        price: 'WCOM: $5.00',
      },
      {
        category: 'Technology',
        title: 'Google Gains Search Dominance',
        impact: 'New tech leaders emerge',
        analysis: 'Industry reorganization accelerates',
      },
    ],
    '2002 Q2': [
      {
        category: 'Market',
        title: 'Venture Capital at 1997 Levels',
        impact: 'Investment reset complete',
        analysis: 'New normal established',
      },
      {
        category: 'Technology',
        title: 'Enterprise Software Stabilizes',
        impact: 'Core tech spending returns',
        analysis: 'Recovery begins in select sectors',
      },
      {
        company: 'Microsoft',
        title: '.NET Strategy Takes Shape',
        impact: 'Web services era begins',
        price: 'MSFT: $65.50',
      },
    ],
    '2002 Q3': [
      {
        company: 'WorldCom',
        title: 'Files Largest Bankruptcy in History',
        impact: '$11B accounting fraud revealed',
        price: 'WCOM: $0.06',
      },
      {
        category: 'Market',
        title: 'Crisis of Confidence',
        impact: 'Corporate fraud fears spread',
        analysis: 'Trust in markets damaged',
      },
      {
        category: 'Technology',
        title: 'Return to Basics',
        impact: 'Focus on profitable growth',
        analysis: 'Business model reality check',
      },
    ],
    '2002 Q4': [
      {
        category: 'Market',
        title: 'NASDAQ Bottoms at 1,114',
        impact: 'Down 78% from peak',
        analysis: 'Bubble fully deflated',
      },
      {
        category: 'Technology',
        title: 'PayPal Acquired by eBay',
        impact: 'Consolidation continues',
        analysis: 'Strong survivors expand',
      },
      {
        company: 'Microsoft',
        title: 'Enterprise Focus Pays Off',
        impact: 'Steady growth resumes',
        price: 'MSFT: $55.75',
      },
    ],
  };

  const endGameAnalysis = {
    marketStats: {
      peakToTroughNasdaq: '-78%',
      peakToTroughSP: '-49%',
      totalLostMarketCap: '$5 trillion',
      failedCompanies: '51%',
    },
    keyLessons: [
      'Fundamental business models matter more than growth',
      'Excessive leverage amplifies market crashes',
      'Infrastructure must match market expectations',
      'Venture capital abundance can mask unsustainable businesses',
      "Traditional metrics shouldn't be ignored during bubbles",
    ],
    survivorCharacteristics: [
      'Strong cash flows (Microsoft)',
      'Real revenue models',
      'Sustainable competitive advantages',
      'Conservative financial management',
      'Diverse customer base',
    ],
    failurePatterns: [
      'Excessive marketing spend (Pets.com)',
      'Accounting fraud (WorldCom)',
      'Unsustainable unit economics',
      'Over-reliance on external funding',
      'Ignored fundamental business metrics',
    ],
  };

  // Restart game function
  const restartGame = () => {
    setCurrentIndex(0);
    setPriceHistory(stockData.slice(0, 1));
    setHoldings({
      msft: { shares: 0, value: 0 },
      pets: { shares: 0, value: 0 },
      wcom: { shares: 0, value: 0 },
    });
    setBalance(10000);
    setShowEndScreen(false);
  };

  const [priceHistory, setPriceHistory] = useState(stockData.slice(0, 1));
  const [holdings, setHoldings] = useState({
    msft: { shares: 0, value: 0 },
    pets: { shares: 0, value: 0 },
    wcom: { shares: 0, value: 0 },
  });
  const [balance, setBalance] = useState(10000);

  const getCurrentPrices = () => {
    const current = priceHistory[priceHistory.length - 1];
    return {
      msft: current.msft,
      pets: current.pets,
      wcom: current.wcom,
    };
  };
  // const detailedHistoricalData = generateDetailedData(historicalData);
  // Update the getVisibleData function
  // Modified getVisibleData function with proper typing
  const getVisibleData = (): InterpolatedPoint[] => {
    const combinedData = [...historicalData, ...stockData];
    const allDetailedData = generateDetailedData(combinedData);

    const currentDetailedIndex =
      (historicalData.length + currentIndex) * pointsPerQuarter;

    switch (chartTimeRange) {
      case 'quarter':
        return allDetailedData.slice(
          Math.max(0, currentDetailedIndex - Math.floor(pointsPerQuarter)),
          currentDetailedIndex + 1,
        );
      case 'halfYear':
        return allDetailedData.slice(
          Math.max(0, currentDetailedIndex - pointsPerQuarter * 2),
          currentDetailedIndex + 1,
        );
      case 'year':
        return allDetailedData.slice(
          Math.max(0, currentDetailedIndex - pointsPerQuarter * 4),
          currentDetailedIndex + 1,
        );
      case 'twoYears':
        return allDetailedData.slice(
          Math.max(0, currentDetailedIndex - pointsPerQuarter * 8),
          currentDetailedIndex + 1,
        );
      case 'all':
        return allDetailedData.slice(0, currentDetailedIndex + 1);
      default:
        return allDetailedData;
    }
  };
  const handleTrade = (shares: number, isBuy: boolean) => {
    const prices = getCurrentPrices();
    const price = prices[selectedCompany];

    if (isBuy) {
      if (balance >= price * shares) {
        setHoldings({
          ...holdings,
          [selectedCompany]: {
            shares: holdings[selectedCompany].shares + shares,
            value: (holdings[selectedCompany].shares + shares) * price,
          },
        });
        setBalance(balance - price * shares);
      }
    } else {
      if (holdings[selectedCompany].shares >= shares) {
        setHoldings({
          ...holdings,
          [selectedCompany]: {
            shares: holdings[selectedCompany].shares - shares,
            value: (holdings[selectedCompany].shares - shares) * price,
          },
        });
        setBalance(balance + price * shares);
      }
    }
  };

  const handleTradeClick = (company: string, isBuy: boolean) => {
    setSelectedCompany(company);
    setIsBuyAction(isBuy);
    setTradeModalOpen(true);
  };

  const getMaxBuyShares = (company: string) => {
    const prices = getCurrentPrices();
    return Math.floor(balance / prices[company]);
  };
  // Modified advance market function
  const advanceMarket = () => {
    setShowNotification(true);
    if (currentIndex < stockData.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setPriceHistory(stockData.slice(0, newIndex + 1));
      // Update holdings values
      const newPrices = stockData[newIndex];
      setHoldings({
        msft: {
          ...holdings.msft,
          value: holdings.msft.shares * newPrices.msft,
        },
        pets: {
          ...holdings.pets,
          value: holdings.pets.shares * newPrices.pets,
        },
        wcom: {
          ...holdings.wcom,
          value: holdings.wcom.shares * newPrices.wcom,
        },
      });

      // Show end screen if we've reached the end
      if (newIndex === stockData.length - 1) {
        setShowEndScreen(true);
      }
    }
  };

  const EndScreen = () => {
    const finalValue =
      balance + holdings.msft.value + holdings.pets.value + holdings.wcom.value;
    const totalReturn = (((finalValue - 10000) / 10000) * 100).toFixed(2);
    const survivedCrash = finalValue > 10000;

    return (
      <div style={styles.endScreenOverlay}>
        <div style={styles.endScreenContent}>
          <h2 style={styles.title}>Dot-com Bubble Simulation Results</h2>

          <div style={styles.endScreenGrid}>
            <div>
              <h3 style={styles.title}>Your Performance</h3>
              <div style={styles.resultsBox}>
                <p>Final Portfolio Value: ${finalValue.toFixed(2)}</p>
                <p>Total Return: {totalReturn}%</p>
                <p>
                  Strategy Outcome:{' '}
                  {survivedCrash
                    ? '✅ Survived the Crash'
                    : '❌ Lost to the Bubble'}
                </p>
              </div>

              <h3 style={styles.title}>Market Statistics</h3>
              <div style={styles.statsGrid}>
                {Object.entries(endGameAnalysis.marketStats).map(
                  ([key, value]) => (
                    <div key={key} style={styles.resultsBox}>
                      <p style={styles.statLabel}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p style={styles.statValue}>{value}</p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 style={styles.title}>Key Lessons</h3>
              <ul style={styles.list}>
                {endGameAnalysis.keyLessons.map((lesson, index) => (
                  <li key={index} style={styles.listItem}>
                    {lesson}
                  </li>
                ))}
              </ul>

              <h3 style={styles.title}>Success Factors</h3>
              <ul style={styles.list}>
                {endGameAnalysis.survivorCharacteristics.map((char, index) => (
                  <li key={index} style={styles.listItem}>
                    {char}
                  </li>
                ))}
              </ul>

              <h3 style={styles.title}>Failure Patterns</h3>
              <ul style={styles.list}>
                {endGameAnalysis.failurePatterns.map((pattern, index) => (
                  <li key={index} style={styles.listItem}>
                    {pattern}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <button
              onClick={restartGame}
              style={{ ...styles.button, ...styles.secondaryButton }}
            >
              <RefreshCcw size={16} /> Restart Simulation
            </button>
          </div>
        </div>
      </div>
    );
  };

  const News = () => {
    const getCompanyColor = (company: string) => {
      switch (company) {
        case 'Microsoft':
          return {
            color: '#00a8e8',
            backgroundColor: 'rgba(0, 168, 232, 0.1)',
          };
        case 'Pets.com':
          return {
            color: '#ff6b6b',
            backgroundColor: 'rgba(255, 107, 107, 0.1)',
          };
        case 'WorldCom':
          return {
            color: '#51cf66',
            backgroundColor: 'rgba(81, 207, 102, 0.1)',
          };
        default:
          return { color: '#666', backgroundColor: 'rgba(102, 102, 102, 0.1)' };
      }
    };

    return (
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.title}>Company News</h2>
          <p style={styles.subtitle}>Return: {totalReturn}%</p>
        </div>
        <div style={styles.newsContainer}>
          {(enhancedNews[stockData[currentIndex].year] || []).map(
            (news, index) => {
              const companyColor = getCompanyColor(news.company);
              return (
                <div
                  key={index}
                  style={{
                    ...styles.newsItem,
                    borderColor: companyColor.color,
                  }}
                >
                  {news.company && (
                    <span
                      style={{
                        ...styles.companyTag,
                        ...companyColor,
                      }}
                    >
                      {news.company}
                    </span>
                  )}
                  <h3 style={styles.newsTitle}>{news.title}</h3>
                  <p style={styles.newsImpact}>{news.impact}</p>
                  {news.price && <p style={styles.newsPrice}>{news.price}</p>}
                </div>
              );
            },
          )}
        </div>
      </div>
    );
  };
  const totalValue =
    balance + holdings.msft.value + holdings.pets.value + holdings.wcom.value;
  const totalReturn = (((totalValue - 10000) / 10000) * 100).toFixed(2);

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
    // Clear notification when switching to the tab that has it
    if (tab === 'news') {
      setShowNotification(false);
    }
  };

  // Update the XAxis formatting
  const formatXAxisTick = timeRange => value => {
    // Handle weekly data points
    if (value.includes('W')) {
      const weekNumber = parseInt(value.split('W')[1]);
      if (timeRange === 'quarter' && weekNumber % 2 === 0) {
        return `W${weekNumber}`;
      }
      if (timeRange === 'halfYear' && weekNumber % 4 === 0) {
        return `W${weekNumber}`;
      }
      return '';
    }

    // Handle quarterly data points
    const parts = value.split(' ');
    const year = parts[0];
    const quarter = parts[1];

    // Always show full format for shorter time ranges
    if (timeRange === 'quarter' || timeRange === 'halfYear') {
      return `${year} ${quarter}`;
    }

    // For longer time ranges, show all quarters
    if (quarter) {
      if (quarter === 'Q1') {
        return `${year}\n${quarter}`;
      }
      return quarter;
    }

    return value;
  };

  const Market = () => {
    const visibleData = getVisibleData();
    return (
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.title}>Dot-com Companies Comparison (1998-2002)</h2>
          {/* <p style={styles.subtitle}>
            Current Period: {stockData[currentIndex].year}
          </p> */}
        </div>
        <ProgressBar
          currentIndex={currentIndex}
          totalQuarters={stockData.length}
          currentYear={stockData[currentIndex].year}
        />
        <TimeRangeSelector
          currentRange={chartTimeRange}
          onRangeChange={setChartTimeRange}
        />
        <div>
          <div
            style={{
              ...styles.chartContainer,
              position: 'relative',
              width: '100%',
              paddingRight: '20px',
            }}
          >
            <LineChart
              width={isMobile ? window.innerWidth - 80 : 600}
              height={300}
              data={visibleData}
              margin={{ right: 20, left: 0, top: 5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                tick={{ fontSize: isMobile ? 10 : 12 }}
                tickFormatter={formatXAxisTick(chartTimeRange)}
                interval={0}
                minTickGap={10}
                angle={-30}
                textAnchor="end"
                height={60}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis
                domain={[0, 400]}
                tick={{ fontSize: isMobile ? 10 : 12 }}
              />
              <Tooltip
                formatter={(value: number) => [`$${value.toFixed(2)}`]}
                labelFormatter={label =>
                  label.includes('W') ? `Week ${label.split('W')[1]}` : label
                }
              />
              <Legend />

              <Legend />
              <Line
                type="monotone"
                dataKey="msft"
                stroke="#00a8e8"
                name="Microsoft"
                dot={false}
                activeDot={{
                  r: 6,
                  fill: '#00a8e8',
                  stroke: '#fff',
                  strokeWidth: 2,
                }}
              />
              <Line
                type="monotone"
                dataKey="pets"
                stroke="#ff6b6b"
                name="Pets.com"
                dot={false}
                activeDot={{
                  r: 6,
                  fill: '#ff6b6b',
                  stroke: '#fff',
                  strokeWidth: 2,
                }}
              />
              <Line
                type="monotone"
                dataKey="wcom"
                stroke="#51cf66"
                name="WorldCom"
                dot={false}
                activeDot={{
                  r: 6,
                  fill: '#51cf66',
                  stroke: '#fff',
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </div>

          <div style={styles.statsGrid}>
            <div style={styles.statBox}>
              <p style={styles.statLabel}>Cash</p>
              <p style={styles.statValue}>${balance.toFixed(2)}</p>
            </div>
            <div style={styles.statBox}>
              <p style={styles.statLabel}>MSFT Shares</p>
              <p style={styles.statValue}>{holdings.msft.shares}</p>
            </div>
            <div style={styles.statBox}>
              <p style={styles.statLabel}>PETS Shares</p>
              <p style={styles.statValue}>{holdings.pets.shares}</p>
            </div>
            <div style={styles.statBox}>
              <p style={styles.statLabel}>WCOM Shares</p>
              <p style={styles.statValue}>{holdings.wcom.shares}</p>
            </div>
          </div>

          <div style={styles.buttonGrid}>
            {['msft', 'pets', 'wcom'].map(company => (
              <div key={company} style={styles.buttonContainer}>
                <button
                  onClick={() => handleTradeClick(company, true)}
                  style={{ ...styles.button, ...styles.primaryButton }}
                >
                  <TrendingUp size={16} />
                  Buy {company.toUpperCase()}
                </button>
                <button
                  onClick={() => handleTradeClick(company, false)}
                  style={{ ...styles.button, ...styles.outlineButton }}
                >
                  <TrendingDown size={16} />
                  Sell
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={advanceMarket}
              style={{ ...styles.button, ...styles.secondaryButton }}
            >
              <DollarSign size={16} />
              Next Quarter
            </button>
          </div>
        </div>
        <TradingModal
          isOpen={tradeModalOpen}
          onClose={() => setTradeModalOpen(false)}
          onTrade={handleTrade}
          company={selectedCompany}
          currentPrice={getCurrentPrices()[selectedCompany]}
          maxBuyShares={getMaxBuyShares(selectedCompany)}
          currentShares={holdings[selectedCompany]?.shares || 0}
          isBuy={isBuyAction}
        />
      </div>
    );
  };

  return (
    <div style={styles.container} className="flex-container">
      {showTutorial && <Tutorial onClose={() => setShowTutorial(false)} />}
      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'market' ? styles.activeTab : {}),
          }}
          onClick={() => handleTabClick('market')}
        >
          Market
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'news' ? styles.activeTab : {}),
          }}
          onClick={() => handleTabClick('news')}
        >
          News
          {showNotification && activeTab !== 'news' && (
            <span style={styles.notificationDot} />
          )}
        </button>
      </div>
      <div
        style={{
          ...styles.content,
          ...(activeTab === 'market' ? styles.activeContent : {}),
        }}
      >
        <Market />
      </div>
      <div
        style={{
          ...styles.content,
          ...(activeTab === 'news' ? styles.activeContent : {}),
        }}
      >
        <News />
      </div>
      <ToastNotifications
        news={enhancedNews[stockData[currentIndex].year] || []}
        currentYear={stockData[currentIndex].year}
        currentIndex={currentIndex} // Add this prop
      />
      {showEndScreen && <EndScreen />}
    </div>
  );
};

export default InvestmentPlayground;
