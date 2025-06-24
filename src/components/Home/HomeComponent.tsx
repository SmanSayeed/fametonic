import LeftContent from './Left/LeftContent';
import RightContent from './Right/RightContent';
import './Home.scss';

const HomeComponent = () => (
  <div className="home-root">
    <LeftContent />
    <RightContent />
  </div>
);

export default HomeComponent; 