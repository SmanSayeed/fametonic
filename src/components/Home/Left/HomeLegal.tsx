import Typography from '@/components/Typography/Typography';
import { homeData } from '@/constants/data';

const HomeLegal = () => (
  <div className="home-legal">
    <Typography variant="small" className="home-legal-terms">
      {homeData.legal1}
    </Typography>
    <Typography className="typography-legal2 home-legal-copyright">
      {homeData.legal2}
    </Typography>
  </div>
);

export default HomeLegal; 