import type { LinkType } from '../../util/dummylinks';

function ListItem({
  key,
  link,
}: {
  key: React.Key | null | undefined;
  link: LinkType;
}) {
  return (
    <li key={key}>
      {link.icon}
      {link.label}
    </li>
  );
}

export default ListItem;
