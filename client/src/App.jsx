import React from 'react';
import './style/App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Caroussel from './components/Caroussel';
import DonationsButton from './components/DonationsButton';
import PresentationCard from './components/PresentationCard';
import useFetchAnimaux from './hooks/useFetchAnimaux';


function App() {

  const { images, loading, error } = useFetchAnimaux();

  return (
    <>
      <div className='mainContainer'>
        <Header />
        <main>
          <Banner />
          {loading ? (
            <p>Chargement des images...</p>
          ) : error ? (
            <p>Erreur : {error}</p>
          ) : (
            <Caroussel images={images} />
          )}
          <PresentationCard />
          <DonationsButton />
        </main>
        <Footer />
      </div>
    </>
  )
};

export default App;

