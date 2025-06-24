import Typography from '@/components/Typography/Typography';
import { homeData } from '@/constants/data';

const HomeLegal = () => (
  <div className="home-legal">
    <Typography variant="small" color="lightgray" className="home-legal-terms">
      {homeData.legal1}
    </Typography>
    <Typography variant="small" color="white" className="home-legal-copyright">
      {homeData.legal2}
    </Typography>
  </div>
);

export default HomeLegal; 