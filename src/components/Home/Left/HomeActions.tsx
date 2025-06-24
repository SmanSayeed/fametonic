import Button from '@/components/Button/Button';
import Typography from '@/components/Typography/Typography';
import { homeData } from '@/constants/data';

const HomeActions = () => (
  <div className="home-actions">
    <div className="button-container">
      <Button>{homeData.buttonText}</Button>
      <Typography variant="small" color="white" className="home-actions-subtext">
        {homeData.buttonSubtext}
      </Typography>
    </div>
  </div>
);

export default HomeActions; 