import { IoNotifications } from 'react-icons/io5';
import styles from './app-util.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { FaClockRotateLeft } from 'react-icons/fa6';

function AppUtil({ isHovering }: { isHovering: boolean }) {
  const AppUtilLinks = [
    { label: 'Notification', icon: <IoNotifications /> },
    { label: 'Recents', icon: <FaClockRotateLeft /> },
    { label: 'User', icon: <FaUserCircle /> },
  ];

  const navItemStyle: React.CSSProperties = {
    textDecoration: 'none',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'white',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    font: 'inherit',
    justifyContent: isHovering ? 'flex-start' : 'center',
  };

  return (
    <div className={styles.appUtilStyle}>
      <ul>
        {AppUtilLinks.map((link) => (
          <li style={navItemStyle} key={link.label}>
            {link.icon}
            {isHovering && link.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppUtil;
