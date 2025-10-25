import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const CreateMenuProp = { label: 'Create', icon: <FaPlus />, link: 'create' };

function CreateMenu({ isHovering }: { isHovering: boolean }) {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(!isActive);
  };

  const style: React.CSSProperties = {
    background: '#161616ff',
    padding: '10px 26px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  };

  const navItemStyle: React.CSSProperties = {
    textDecoration: 'none',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'white',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    font: 'inherit',
    justifyContent: isHovering ? 'flex-start' : 'center',
  };

  return (
    <li key={CreateMenuProp.label} tabIndex={0}>
      <button
        style={{ ...navItemStyle, width: '100%' }}
        onClick={handleOnClick}
      >
        {CreateMenuProp.icon}
        {isHovering && CreateMenuProp.label}
      </button>
      {isHovering && isActive && (
        <ul style={style}>
          <li
            style={{ ...navItemStyle, width: '100%', boxSizing: 'border-box' }}
            tabIndex={0}
          >
            Bugs
          </li>
          <li
            style={{ ...navItemStyle, width: '100%', boxSizing: 'border-box' }}
            tabIndex={0}
          >
            Epics
          </li>
          <li
            style={{ ...navItemStyle, width: '100%', boxSizing: 'border-box' }}
            tabIndex={0}
          >
            Story
          </li>
        </ul>
      )}
    </li>
  );
}

export default CreateMenu;
