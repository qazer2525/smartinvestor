import React, { useState, useEffect, useRef } from 'react';
import { X, AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface NewsItem {
  company?: string;
  title: string;
  impact?: string;
}

interface ToastNotification {
  id: string;
  company: string;
  title: string;
  type: 'info' | 'warning' | 'alert';
  timestamp: Date;
}

interface ToastNotificationsProps {
  news: NewsItem[];
  currentYear: string;
  currentIndex: number;
}

const ToastNotifications: React.FC<ToastNotificationsProps> = ({
  news,
  currentYear,
  currentIndex,
}) => {
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);
  const processedNews = useRef(new Set<string>());
  const lastIndexRef = useRef(currentIndex);

  const styles: Record<string, React.CSSProperties> = {
    container: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '350px',
    },
    notification: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    companyTag: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '13px',
      fontWeight: 500,
    },
    closeButton: {
      background: 'none',
      border: 'none',
      padding: '4px',
      cursor: 'pointer',
      color: '#666',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      fontSize: '14px',
      color: '#333',
      marginLeft: '4px',
    },
    progressBar: {
      height: '3px',
      backgroundColor: '#eee',
      borderRadius: '1.5px',
      marginTop: '8px',
      overflow: 'hidden',
    },
    progress: {
      height: '100%',
      backgroundColor: '#4CAF50',
      width: '100%',
    },
  };

  const getCompanyStyle = (company: string) => {
    switch (company) {
      case 'Microsoft':
        return { backgroundColor: 'rgba(0, 168, 232, 0.1)', color: '#00a8e8' };
      case 'Pets.com':
        return {
          backgroundColor: 'rgba(255, 107, 107, 0.1)',
          color: '#ff6b6b',
        };
      case 'WorldCom':
        return { backgroundColor: 'rgba(81, 207, 102, 0.1)', color: '#51cf66' };
      default:
        return { backgroundColor: 'rgba(102, 102, 102, 0.1)', color: '#666' };
    }
  };

  const getNotificationIcon = (type: ToastNotification['type']) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle size={16} />;
      case 'alert':
        return <AlertCircle size={16} />;
      default:
        return <Info size={16} />;
    }
  };

  const determineNotificationType = (
    impact: string | undefined,
  ): ToastNotification['type'] => {
    if (!impact) return 'info';
    const lowercaseImpact = impact.toLowerCase();
    if (
      lowercaseImpact.includes('warning') ||
      lowercaseImpact.includes('concern')
    ) {
      return 'warning';
    }
    if (
      lowercaseImpact.includes('critical') ||
      lowercaseImpact.includes('emergency')
    ) {
      return 'alert';
    }
    return 'info';
  };

  useEffect(() => {
    if (currentIndex !== lastIndexRef.current) {
      lastIndexRef.current = currentIndex;

      const companyNews = news
        .filter((item): item is NewsItem & { company: string } => {
          if (!item.company || !item.title) return false;
          const newsId = `${item.company}-${item.title}-${currentYear}`;
          if (processedNews.current.has(newsId)) return false;
          processedNews.current.add(newsId);
          return true;
        })
        .map(item => ({
          id: `${item.company}-${item.title}-${currentYear}`,
          company: item.company,
          title: item.title,
          type: determineNotificationType(item.impact),
          timestamp: new Date(),
        }));

      if (companyNews.length > 0) {
        setNotifications(prev => [...companyNews, ...prev].slice(0, 3));
      }
    }
  }, [news, currentYear, currentIndex]);

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  useEffect(() => {
    notifications.forEach(notification => {
      const timer = setTimeout(() => {
        removeNotification(notification.id);
      }, 5000);

      return () => clearTimeout(timer);
    });
  }, [notifications]);

  return (
    <div style={styles.container}>
      <style>
        {`
          .notification-enter {
            opacity: 0;
            transform: translateX(100%);
          }
          .notification-enter-active {
            opacity: 1;
            transform: translateX(0);
            transition: opacity 300ms, transform 300ms;
          }
          .notification-exit {
            opacity: 1;
            transform: translateX(0);
          }
          .notification-exit-active {
            opacity: 0;
            transform: translateX(100%);
            transition: opacity 300ms, transform 300ms;
          }
          @keyframes countdown {
            from { width: 100%; }
            to { width: 0%; }
          }
          .progress-bar {
            animation: countdown 5s linear forwards;
          }
        `}
      </style>
      {notifications.map(notification => (
        <div
          key={notification.id}
          className="notification-enter notification-enter-active"
          style={styles.notification}
        >
          <div style={styles.header}>
            <div
              style={{
                ...styles.companyTag,
                ...getCompanyStyle(notification.company),
              }}
            >
              {getNotificationIcon(notification.type)}
              {notification.company}
            </div>
            <button
              style={styles.closeButton}
              onClick={() => removeNotification(notification.id)}
            >
              <X size={16} />
            </button>
          </div>
          <div style={styles.content}>{notification.title}</div>
          <div style={styles.progressBar}>
            <div className="progress-bar" style={styles.progress} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastNotifications;
