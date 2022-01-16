import '@fontsource/roboto-mono';
import { Header } from './components/Header/Header';
import { Resume } from './components/Resume/Resume';

const App = () => {
  return (
    <div style={{ fontFamily: 'Roboto Mono' }}>
      <Header />
      <Resume />
    </div>
  );
};

export default App;
