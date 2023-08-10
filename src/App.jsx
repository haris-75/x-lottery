import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import HomePage from './pages/Home';
import LotteryLifeCycle from './pages/LotteryLifeCycle';
import WelcomePage from './pages/Welcome';
import WhyPage from './pages/WhyPage';
import WinPage from './pages/WinPage';
import WomenAd from './pages/WomenAd';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <LotteryLifeCycle />
      <WomenAd />
      <WelcomePage />
      <WinPage />
      <WhyPage />
      <Footer />
    </>
  );
}

export default App;
