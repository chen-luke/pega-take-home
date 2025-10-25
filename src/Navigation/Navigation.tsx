import { useState } from 'react';
import SearchBar from '../atoms/search-bar/SearchBar';
import AppUtil from './app-util/AppUtil';
import styles from './navigation.module.css';
import ScrollablePanel from './scrollable-panel/ScrollablePanel';
import { IconContext } from 'react-icons';

function Navigation() {
  const [isHovering, setIsHovering] = useState(false);

  const hoverStyle = {
    width: isHovering ? '331px' : '80px',
    alignItems: isHovering ? 'flex-start' : 'center',
  };

  const handleActivateSearchBar = () => {
    setIsHovering(true);
  };

  return (
    <IconContext.Provider value={{ size: '1.25rem', color: '#ffffffff' }}>
      <nav
        className={styles.navigation}
        style={hoverStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div style={{ margin: '20px 20px' }} tabIndex={0}>
          <span aria-label='company name'>PEGA</span>
        </div>
        <SearchBar
          isHovering={isHovering}
          onActivateSearchBar={handleActivateSearchBar}
        />
        <ScrollablePanel isHovering={isHovering} />
        <AppUtil isHovering={isHovering} />
      </nav>
    </IconContext.Provider>
  );
}

export default Navigation;
