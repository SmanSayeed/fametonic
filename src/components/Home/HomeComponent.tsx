import LeftContent from './Left/LeftContent';
import RightContent from './Right/RightContent';
import './Home.scss';

const HomeComponent = () => (
  <div className="home-root">
    <RightContent />
    <LeftContent />
  </div>
);

export default HomeComponent; 