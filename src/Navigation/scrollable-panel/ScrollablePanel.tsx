import styles from './scrollable-panel.module.css';
import { menuLinks } from '../../util/dummylinks';
import ListItem from '../../atoms/list-item/ListItem';

function ScrollAblePanel() {
  return (
    <ul className={styles.scrollableGroup}>
      {menuLinks.map((link) => (
        <ListItem
          key={link.label}
          link={{
            label: link.label,
            icon: link.icon,
            slug: link.slug,
            state: link.state,
          }}
        />
      ))}
    </ul>
  );
}

export default ScrollAblePanel;
