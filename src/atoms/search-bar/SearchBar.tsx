import styles from './search-bar.module.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar({
  isHovering,
  onActivateSearchBar,
}: {
  isHovering: boolean;
  onActivateSearchBar: () => void;
}) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivateSearchBar();
    }
  };
  return isHovering ? (
    <div className={styles.searchContainer}>
      <FaSearch className={styles.searchIcon} />
      <input
        placeholder='search'
        className={styles.searchBar}
        tabIndex={0}
        aria-label='Search input field'
      />
    </div>
  ) : (
    <div
      className={styles.containerNoHover}
      onClick={onActivateSearchBar}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label='Expand search bar'
    >
      <FaSearch className={styles.searchIcon} />
    </div>
  );
}

export default SearchBar;
