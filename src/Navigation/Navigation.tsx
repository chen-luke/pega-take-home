import { useState } from 'react';
import SearchBar from '../atoms/search-bar/SearchBar';
import AppUtil from './app-util/AppUtil';
import styles from './navigation.module.css';
import ScrollablePanel from './scrollable-panel/ScrollablePanel';

function Navigation() {
  const [isHovering, setIsHovering] = useState(false);

  const hoverStyle = { width: isHovering ? '331px' : '80px' };

  return (
    <nav
      className={styles.navigation}
      style={hoverStyle}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div>
        <span>PEGA</span>
        <span>Cosmos</span>
      </div>
      <SearchBar isHovering={isHovering} />
      <ScrollablePanel />
      <AppUtil />
    </nav>
  );
}

export default Navigation;
