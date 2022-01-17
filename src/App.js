import '@fontsource/roboto-mono';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <div style={{ fontFamily: 'Roboto Mono' }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
