import type { LinkType } from '../../util/dummylinks';
import styles from './list-item.module.css';
import { Link } from 'react-router-dom';

function ListItem({
  isHovering,
  link,
}: {
  isHovering: boolean;
  link: LinkType;
}) {
  const listItemClasses = `${styles.listItem} ${
    !isHovering ? styles.listItemCollapsed : ''
  }`;

  const navItemStyle: React.CSSProperties = {
    textDecoration: 'none',
    padding: isHovering ? '8px 0px' : '10px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'white',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    font: 'inherit',
    width: '100%',
    justifyContent: isHovering ? 'flex-start' : 'center',
  };

  return (
    <li key={link.label} className={listItemClasses}>
      <Link to={link.slug} style={navItemStyle}>
        {link.icon}
        {isHovering && link.label}
      </Link>
    </li>
  );
}

export default ListItem;
