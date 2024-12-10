import React from 'react';

interface TimeRangeSelectorProps {
  currentRange: string;
  onRangeChange: (range: string) => void;
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({
  currentRange,
  onRangeChange,
}) => {
  const styles: Record<string, React.CSSProperties> = {
    container: {
      display: 'flex',
      gap: '8px',
      marginBottom: '16px',
      padding: '4px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      width: 'fit-content',
    },
    button: {
      padding: '6px 12px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      backgroundColor: 'transparent',
      color: '#666',
      transition: 'all 0.2s ease',
    },
    activeButton: {
      backgroundColor: 'white',
      color: '#2196F3',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  };

  const ranges = [
    { label: '1Q', value: 'quarter' },
    { label: '2Q', value: 'halfYear' },
    { label: '1Y', value: 'year' },
    { label: '2Y', value: 'twoYears' },
    { label: 'All', value: 'all' },
  ];

  return (
    <div style={styles.container}>
      {ranges.map(range => (
        <button
          key={range.value}
          onClick={() => onRangeChange(range.value)}
          style={{
            ...styles.button,
            ...(currentRange === range.value ? styles.activeButton : {}),
          }}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
};

export default TimeRangeSelector;
