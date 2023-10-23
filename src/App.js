import './App.css';
import './components/IconImg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Crypto from './components/Crypto';
import Cryptostraps from './components/Cryptostraps';
import Team from './components/Team';
import Faq from './components/Faq';
import Cyberfooter from './components/Cyberfooter';
import Accsection from './components/Accsection';

function App() {
  return (
    <div >
      <Header />
      <Crypto />
      <Cryptostraps />
      <Team />
      <Accsection />
      <Faq />
      <Cyberfooter />
    </div>
  );
}

export default App;
