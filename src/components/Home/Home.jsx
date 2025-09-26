import HomeHeader from '../HomeHeader/HomeHeader';
import Properties from '../Properties/Properties';
import House from '../Properties/House';
function Home() {
  return (
    <div>
      <HomeHeader />
  <House disableRedirect={true} />

    </div>
  );
}

export default Home;