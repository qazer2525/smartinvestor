import React, { useState } from 'react';
import { X } from 'lucide-react';

interface TutorialProps {
  onClose: () => void;
}

interface TutorialStep {
  title: string;
  content: string;
}

const Tutorial: React.FC<TutorialProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps: TutorialStep[] = [
    {
      title: 'Welcome to the Dot-com Bubble Simulator',
      content:
        "Experience the dramatic rise and fall of tech stocks during the 1998-2002 period. You'll start with $10,000 to invest across three companies: Microsoft (stable tech), Pets.com (dot-com startup), and WorldCom (telecom giant).",
    },
    {
      title: 'Market View',
      content:
        'The main chart shows stock prices over time. You can track Microsoft (blue), Pets.com (red), and WorldCom (green). Watch how they perform differently as the market evolves.',
    },
    {
      title: 'Making Trades',
      content:
        'Use the Buy and Sell buttons to trade stocks. Keep an eye on your cash balance and number of shares. Choose your positions carefully as market conditions change.',
    },
    {
      title: 'News Feed',
      content:
        'Switch to the News tab to see important market updates and company-specific news. These events can significantly impact stock prices - use this information to make informed decisions.',
    },
    {
      title: 'Advancing Time',
      content:
        "Click 'Next Quarter' to advance time and see how your investments perform. The simulation runs from 1998 to 2002, covering the entire dot-com bubble period.",
    },
    {
      title: 'Final Tips',
      content:
        "Remember: Not all tech companies are the same. Look for strong business fundamentals, be wary of hype, and don't invest more than you can afford to lose. Good luck!",
    },
  ];

  const styles: Record<string, React.CSSProperties> = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    container: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '24px',
      maxWidth: '500px',
      width: '90%',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px',
    },
    title: {
      fontSize: '24px',
      marginBottom: '16px',
      color: '#2196F3',
    },
    content: {
      fontSize: '16px',
      lineHeight: 1.5,
      marginBottom: '24px',
      color: '#333',
    },
    navigation: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: '#2196F3',
      color: 'white',
      fontSize: '14px',
    },
    secondaryButton: {
      backgroundColor: '#e0e0e0',
      color: '#333',
    },
    progress: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '16px',
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#e0e0e0',
    },
    activeDot: {
      backgroundColor: '#2196F3',
    },
  };

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <button style={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        <h2 style={styles.title}>{tutorialSteps[currentStep].title}</h2>
        <p style={styles.content}>{tutorialSteps[currentStep].content}</p>

        <div style={styles.navigation}>
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              style={{ ...styles.button, ...styles.secondaryButton }}
            >
              Previous
            </button>
          )}
          <button onClick={handleNext} style={styles.button}>
            {currentStep === tutorialSteps.length - 1
              ? 'Start Trading'
              : 'Next'}
          </button>
        </div>

        <div style={styles.progress}>
          {tutorialSteps.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.dot,
                ...(index === currentStep ? styles.activeDot : {}),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
