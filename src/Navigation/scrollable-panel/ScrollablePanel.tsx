import styles from './scrollable-panel.module.css';
import { menuLinks } from '../../util/dummylinks';
import ListItem from '../../atoms/list-item/ListItem';

function ScrollAblePanel({ isHovering }: { isHovering: boolean }) {
  const extendedMenuLinks = [
    ...menuLinks,
    // ...menuLinks,
    // ...menuLinks,
  ];

  return (
    <div className={styles.scrollableGroup}>
      <ul>
        {extendedMenuLinks.map((link) => (
          <ListItem isHovering={isHovering} key={link.label} link={link} />
        ))}
      </ul>
    </div>
  );
}

export default ScrollAblePanel;
