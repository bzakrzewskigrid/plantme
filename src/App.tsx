import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </>
  );
};

export default App;
