import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface ProgressBarProps {
  currentIndex: number;
  totalQuarters: number;
  currentYear: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentIndex,
  totalQuarters,
  currentYear,
}) => {
  const styles: Record<string, React.CSSProperties> = {
    container: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      margin: 0,
      color: '#333',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    currentPeriod: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#666',
      fontSize: '14px',
    },
    progressContainer: {
      width: '100%',
      height: '24px',
      backgroundColor: '#f0f0f0',
      borderRadius: '12px',
      overflow: 'hidden',
      position: 'relative',
    },
    progressBar: {
      height: '100%',
      backgroundColor: '#4CAF50',
      width: `${(currentIndex / (totalQuarters - 1)) * 100}%`,
      transition: 'width 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    progressText: {
      position: 'absolute',
      width: '100%',
      textAlign: 'center',
      fontSize: '12px',
      fontWeight: 'bold',
      zIndex: 1,
      color: 'white',
      textShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)', // Added for better visibility
    },
    milestones: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '8px',
      padding: '0 4px',
    },
    milestone: {
      fontSize: '12px',
      color: '#666',
      position: 'relative',
      textAlign: 'center',
      width: '60px',
    },
    activeMilestone: {
      color: '#4CAF50',
      fontWeight: 'bold',
    },
    timeRemaining: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#666',
      fontSize: '14px',
      marginTop: '10px',
    },
  };

  const keyYears = ['1998', '1999', '2000', '2001', '2002'];
  const quarterCount = totalQuarters - currentIndex - 1;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>
          <Calendar size={18} />
          Simulation Progress
        </h3>
        <div style={styles.currentPeriod}>
          <Clock size={16} />
          Current: {currentYear}
        </div>
      </div>

      <div style={styles.progressContainer}>
        <div style={styles.progressBar} />
        <div style={styles.progressText}>
          {Math.round((currentIndex / (totalQuarters - 1)) * 100)}% Complete
        </div>
      </div>

      <div style={styles.milestones}>
        {keyYears.map((year, index) => (
          <div
            key={year}
            style={{
              ...styles.milestone,
              ...(currentYear.includes(year) ? styles.activeMilestone : {}),
            }}
          >
            {year}
          </div>
        ))}
      </div>

      <div style={styles.timeRemaining}>
        <Clock size={14} />
        {quarterCount} {quarterCount === 1 ? 'quarter' : 'quarters'} remaining
      </div>
    </div>
  );
};

export default ProgressBar;
