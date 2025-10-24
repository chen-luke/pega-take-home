import styles from './search-bar.module.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ isHovering }: { isHovering: boolean }) {
  return isHovering ? (
    <div className={styles.searchContainer}>
      <FaSearch className={styles.searchIcon} />
      <input placeholder='search' className={styles.searchBar} />
    </div>
  ) : (
    <div className={styles.containerNoHover}>
      <FaSearch className={styles.searchIcon} />
    </div>
  );
}

export default SearchBar;
