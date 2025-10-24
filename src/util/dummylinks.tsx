import { RiHome2Fill } from 'react-icons/ri';
import { IoSparklesSharp, IoGrid, IoPerson } from 'react-icons/io5';
import { PiPaperPlaneRightFill } from 'react-icons/pi';

export type LinkType = {
  label: string;
  icon: React.ReactElement;
  slug: string;
  state?: string;
};

const menuLinks: LinkType[] = [
  { label: 'Home', icon: <RiHome2Fill />, slug: '', state: 'active' },
  {
    label: 'My Dashboard',
    icon: <IoSparklesSharp />,
    slug: 'dashboard',
    state: 'active',
  },
  { label: 'Spaces', icon: <IoGrid />, slug: 'spaces', state: 'active' },
  {
    label: 'Documents',
    icon: <PiPaperPlaneRightFill />,
    slug: 'documents',
    state: 'active',
  },
  { label: 'Bugs', icon: <IoPerson />, slug: 'bugs', state: 'active' },
  { label: 'Epics', icon: <IoGrid />, slug: 'epics', state: 'active' },
  { label: 'Goals', icon: <RiHome2Fill />, slug: 'goals', state: 'active' },
];

export { menuLinks };
