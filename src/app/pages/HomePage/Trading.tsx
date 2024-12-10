import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface TradingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTrade: (shares: number, isBuy: boolean) => void;
  company: string;
  currentPrice: number;
  maxBuyShares: number;
  currentShares: number;
  isBuy: boolean;
}

const TradingModal: React.FC<TradingModalProps> = ({
  isOpen,
  onClose,
  onTrade,
  company,
  currentPrice,
  maxBuyShares,
  currentShares,
  isBuy,
}) => {
  const [shares, setShares] = useState<string>('1');
  const [error, setError] = useState<string>('');

  // Reset shares when modal opens
  useEffect(() => {
    if (isOpen) {
      setShares('1');
      setError('');
    }
  }, [isOpen]);

  // Check if trading is possible
  const isTradingDisabled = currentPrice === 0 && isBuy;

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
      maxWidth: '400px',
      width: '90%',
      position: 'relative',
    },
    header: {
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: '20px',
      fontWeight: 'bold',
      margin: 0,
      color: '#333',
    },
    closeButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px',
    },
    content: {
      marginBottom: '24px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#666',
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '16px',
      marginBottom: '8px',
    },
    info: {
      color: '#666',
      fontSize: '14px',
      marginBottom: '8px',
    },
    error: {
      color: '#dc3545',
      fontSize: '14px',
      marginBottom: '8px',
    },
    warning: {
      backgroundColor: '#fff3cd',
      color: '#856404',
      padding: '12px',
      borderRadius: '4px',
      marginBottom: '16px',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    buttonGroup: {
      display: 'flex',
      gap: '12px',
    },
    button: {
      flex: 1,
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    confirmButton: {
      backgroundColor: isBuy ? '#4CAF50' : '#dc3545',
      color: 'white',
      opacity: isTradingDisabled ? 0.5 : 1,
      cursor: isTradingDisabled ? 'not-allowed' : 'pointer',
    },
    cancelButton: {
      backgroundColor: '#e0e0e0',
      color: '#333',
    },
  };

  const handleSharesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShares(value);
    validateShares(parseInt(value));
  };

  const validateShares = (shareCount: number) => {
    if (isNaN(shareCount) || shareCount <= 0) {
      setError('Please enter a valid number of shares');
      return false;
    }
    if (isBuy && shareCount > maxBuyShares) {
      setError(
        `You can only buy up to ${maxBuyShares} shares with your current balance`,
      );
      return false;
    }
    if (!isBuy && shareCount > currentShares) {
      setError(`You only have ${currentShares} shares to sell`);
      return false;
    }
    setError('');
    return true;
  };

  const handleTrade = () => {
    if (isTradingDisabled) return;

    const shareCount = parseInt(shares);
    if (validateShares(shareCount)) {
      onTrade(shareCount, isBuy);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>
            {isBuy ? 'Buy' : 'Sell'} {company.toUpperCase()}
          </h2>
          <button style={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {isTradingDisabled && (
          <div style={styles.warning}>
            ⚠️ Trading is currently unavailable - Company has been delisted
          </div>
        )}

        <div style={styles.content}>
          <label style={styles.label}>Number of Shares</label>
          <input
            type="number"
            min="1"
            max={isBuy ? maxBuyShares : currentShares}
            value={shares}
            onChange={handleSharesChange}
            style={styles.input}
            disabled={isTradingDisabled}
          />

          <div style={styles.info}>
            <p>Current Price: ${currentPrice.toFixed(2)}</p>
            <p>
              Total Value: ${(parseFloat(shares) * currentPrice).toFixed(2)}
            </p>
            {isBuy ? (
              <p>Max shares you can buy: {maxBuyShares}</p>
            ) : (
              <p>Current shares owned: {currentShares}</p>
            )}
          </div>

          {error && <p style={styles.error}>{error}</p>}
        </div>

        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.button, ...styles.cancelButton }}
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            style={{ ...styles.button, ...styles.confirmButton }}
            onClick={handleTrade}
            disabled={isTradingDisabled}
          >
            Confirm {isBuy ? 'Buy' : 'Sell'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradingModal;
