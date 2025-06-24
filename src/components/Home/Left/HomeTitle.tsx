import Typography from '@/components/Typography/Typography';
import { homeData } from '@/constants/data';

const HomeTitle = () => (
  <Typography variant="h1" color="white" className="home-title">
    {homeData.title}
  </Typography>
);

export default HomeTitle; 