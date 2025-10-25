import styles from './scrollable-panel.module.css';
import { menuLinks } from '../../util/dummylinks';
import ListItem from '../../atoms/list-item/ListItem';
import CreateMenu from '../create-menu/CreateMenu';

function ScrollAblePanel({ isHovering }: { isHovering: boolean }) {
  // Testing scrolling if too many menu links
  const extendedMenuLinks = [
    ...menuLinks,
    // ...menuLinks,
    // ...menuLinks,
  ];

  return (
    <div className={styles.scrollableGroup}>
      <ul>
        <CreateMenu isHovering={isHovering} />
        {extendedMenuLinks.map((link) => (
          <ListItem isHovering={isHovering} key={link.label} link={link} />
        ))}
      </ul>
    </div>
  );
}

export default ScrollAblePanel;
