import React from 'react';
import './style/App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Caroussel from './components/Caroussel';
import DonationsButton from './components/DonationsButton';

// import d'images 
//import bergerImage from "./assets/berger-d-a.jpg";
//import chatImage from "./assets/chat-banderolle.jpg";

function App() {

  //const images = [bergerImage, chatImage] //tableau d'images pour tester

  return (
    <div className='mainContainer'>
      <Header />
      <main>
        <h2>Page d'acceuil</h2>
        <Caroussel />
        <DonationsButton />
      </main>
      <Footer />
    </div>
  );
};

export default App
