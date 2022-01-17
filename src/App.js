import '@fontsource/roboto-mono';
import { Header } from './components/Header/Header';
import { Resume } from './components/Resume/Resume';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <div style={{ fontFamily: 'Roboto Mono' }}>
      <Header />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
