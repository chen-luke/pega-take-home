import { RiHome2Fill } from 'react-icons/ri';
import { IoSparklesSharp, IoGrid, IoPerson } from 'react-icons/io5';
import { PiPaperPlaneRightFill } from 'react-icons/pi';

const MenuLinks = [
  { label: 'Home', icon: <RiHome2Fill />, link: '', state: 'active' },
  {
    label: 'My Dashboard',
    icon: <IoSparklesSharp />,
    link: 'dashboard',
    state: 'active',
  },
  { label: 'Spaces', icon: <IoGrid />, link: 'spaces', state: 'active' },
  {
    label: 'Documents',
    icon: <PiPaperPlaneRightFill />,
    link: 'documents',
    state: 'active',
  },
  { label: 'Bugs', icon: <IoPerson />, link: 'bugs', state: 'active' },
  { label: 'Epics', icon: <IoGrid />, link: 'epics', state: 'active' },
  { label: 'Goals', icon: <RiHome2Fill />, link: 'goals', state: 'active' },
];

export { MenuLinks };
