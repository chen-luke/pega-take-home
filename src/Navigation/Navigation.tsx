import SearchBar from '../atoms/search-bar/SearchBar';
import AppUtil from './app-util/AppUtil';
import styles from './navigation.module.css';
import ScrollablePanel from './scrollable-panel/ScrollablePanel';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div>
        <span>PEGA</span>
        <span>Cosmos</span>
      </div>
      <SearchBar />
      <ScrollablePanel />
      <AppUtil />
    </nav>
  );
}

export default Navigation;
