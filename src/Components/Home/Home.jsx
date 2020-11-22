import LandingPage from '../SharedComponents/LandingPage';
import GeneralInfo from './GeneralInfo';
import { data } from '../../data';

function Home() {
  return (
    <>
      <LandingPage />
      <GeneralInfo
        title={data.generalInfo.sitePurpose.title}
        desc={data.generalInfo.sitePurpose.desc}
        img={'mascotvawe'}
      />
      <GeneralInfo
        title={data.generalInfo.aboutUs.title}
        desc={data.generalInfo.aboutUs.desc}
        img={'mascotlooing'}
      />
    </>
  );
}

export default Home;
