import { AboutUs } from './components/AboutUs';
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
    </>
  );
};

export default App;
