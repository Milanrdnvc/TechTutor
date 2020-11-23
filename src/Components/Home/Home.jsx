import LandingPage from '../SharedComponents/LandingPage';
import GeneralInfo from './GeneralInfo';
import mascotVawing from '../../Pictures/mascot-waving.svg';
import mascotThinking from '../../Pictures/mascot-thinking.png';
import { data } from '../../data';
import '../../CSS/Home.css';

function Home() {
  return (
    <div className="home-wrapper">
      <main className="home">
        <LandingPage />
        <GeneralInfo
          title={data.generalInfo.sitePurpose.title}
          desc={data.generalInfo.sitePurpose.desc}
          img={mascotVawing}
          png={false}
        />
        <GeneralInfo
          title={data.generalInfo.aboutUs.title}
          desc={data.generalInfo.aboutUs.desc}
          img={mascotThinking}
          png={true}
        />
      </main>
    </div>
  );
}

export default Home;
