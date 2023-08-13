import Navbar from './components/Navbar';
import Footer from './pages/Footer/index';
import HomePage from './pages/Home';
import LotteryLifeCycle from './pages/LotterLifeCycle';
import WelcomePage from './pages/Welcome';
import WhyPage from './pages/WhyPage';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <LotteryLifeCycle />
      <WelcomePage />
      <WhyPage />
      <Footer />
    </>
  );
}

export default App;
