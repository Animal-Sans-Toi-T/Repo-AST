import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import App from "./App.jsx";
import PresentationPage from './pages/PresentationPage.jsx';

function RouterComponent() {
    return (
        <>
            <Router>
                <Routes>
                <Route path="/" element={<App />} />
                <Route path="/presentation" element ={<PresentationPage/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default RouterComponent;

