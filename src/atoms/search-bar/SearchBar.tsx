import styles from './search-bar.module.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <FaSearch className={styles.searchIcon} />
      <input placeholder='search' className={styles.searchBar} />
    </div>
  );
}

export default SearchBar;
