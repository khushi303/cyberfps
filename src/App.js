import './App.css';
import React, { useEffect } from 'react';
import './components/IconImg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Crypto from './components/Crypto';
import Cryptostraps from './components/Cryptostraps';
import Team from './components/Team';
import Faq from './components/Faq';
import Cyberfooter from './components/Cyberfooter';
import Accsection from './components/Accsection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';


function App() {
  useEffect(() => {
    AOS.init(
      { once: true }
    );
    Aos.refresh()
  });
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
