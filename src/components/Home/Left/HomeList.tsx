import ListItem from '@/components/List/ListItem';
import { homeData } from '@/constants/data';

const HomeList = () => (
  <ul className="home-list">
    {homeData.list.map((item, idx) => (
      <ListItem key={idx} text={item} />
    ))}
  </ul>
);

export default HomeList; 