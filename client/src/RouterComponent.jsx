import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import App from "./App.jsx";
import PresentationPage from './pages/PresentationPage.jsx';
import NewsletterPage from './pages/NewsletterPage.jsx';
import AgendaPage from './pages/AgendaPage.jsx';
import MembresPage from './pages/MembresPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import GaleriePage from './pages/GaleriePage.jsx';
import DevenirMembrePage from './pages/DevenirMembrePage.jsx';
import MatérielPromoPage from './pages/MatérielPromoPage.jsx';
import ParrainagePage from './pages/ParrainagePage.jsx';
import BénévolatPage from './pages/BénévolatPage.jsx';
import DonsPage from './pages/DonsPage.jsx';
import PlaintesPage from './pages/PlaintesPage.jsx';
import AnimauxPerdusTrouvésPage from './pages/AnimauxPerdusTrouvésPage.jsx';
import AdoptablesPage from './pages/AdoptablesPage.jsx';

function RouterComponent() {
    return (
        <>
            <Router>
                <Routes>
                <Route path="/" element={<App />} />
                <Route path="/presentation" element ={<PresentationPage/>}/>
                <Route path="/newsletter" element ={<NewsletterPage/>}/>
                <Route path="/agenda" element ={<AgendaPage/>}/>
                <Route path="/membres" element ={<MembresPage/>}/>
                <Route path="/contacts" element ={<ContactsPage/>}/>
                <Route path="/galerie" element ={<GaleriePage/>}/>
                <Route path="/devenir-membre" element ={<DevenirMembrePage/>}/>
                <Route path="/materiel-promotionnel" element ={<MatérielPromoPage/>}/>
                <Route path="/parrainage" element ={<ParrainagePage/>}/>
                <Route path="/bénévolat" element ={<BénévolatPage/>}/>
                <Route path="/dons" element ={<DonsPage/>}/>
                <Route path="/plaintes" element ={<PlaintesPage/>}/>
                <Route path="/animaux-perdus-trouvés" element ={<AnimauxPerdusTrouvésPage/>}/>
                <Route path="/adoptables" element ={<AdoptablesPage/>}/>


                </Routes>
            </Router>
        </>
    )
}

export default RouterComponent;

