import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
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
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default App;
