import HomeTitle from './HomeTitle';
import HomeSubtitle from './HomeSubtitle';
import HomeList from './HomeList';
import HomeActions from './HomeActions';
import HomeLegal from './HomeLegal';
import './LeftContent.scss';

const LeftContent = () => (
  <section className="home-left">
    <HomeTitle />
    <HomeSubtitle />
    <HomeList />
    <div className="home-actions-legal-wrapper">
      <HomeActions />
      <HomeLegal />
    </div>
  </section>
);

export default LeftContent; 