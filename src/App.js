import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homme from './pages/Homme';
import Accueil from './pages/Accueil';
import Enfant from './pages/Enfant';
import Femme from './pages/Femme';
import AirZoom from './pages/AirZoom';
import AirRed from './pages/AirRed';
import AirMax from './pages/AirMax';
import MaxReact from './pages/MaxReact';
import NikeMax from './pages/NikeMax';
import NikeZoom from './pages/NikeZoom';
import AdidasHome from './pages/AdidasHome';
import BallHome from './pages/BallHome';
import ShoesHome from './pages/ShoesHome';
import Shirt from './pages/Shirt';
import AdidasMen from './pages/AdidasMen';
import NikeAir from './pages/NikeAir';
import AdidasReact from './pages/AdidasReact';
import AirMaximum from './pages/AirMaximum';
import ZoomReact from './pages/ZoomReact';
import ReactZoom from './pages/ReactZoom';
import ReebokMen from './pages/ReebokMen';
import ReactNike from './pages/ReactNike';
import FootballMen from './pages/FootballMen';
import BasketballMen from './pages/BasketballMen';
import TennisMen from './pages/TennisMen';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/homme" element={<Homme />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/femme" element={<Femme />} />
        <Route path="/enfant" element={<Enfant />} />
        <Route path="/description-nike-air-zoom" element={<AirZoom />} />
        <Route path="/description-nike-air-red" element={<AirRed />} />
        <Route path="/description-nike-air-max" element={<AirMax />} />
        <Route path="/description-nike-air-max-270-react" element={<MaxReact />} />
        <Route path="/description-nike-air-max-280-react" element={<NikeMax />} />
        <Route path="/description-nike-air-zoom-promo" element={<NikeZoom />} />
        <Route path="/description-ballon-adidas" element={<AdidasHome />} />
        <Route path="/description-ballon-basket" element={<BallHome />} />
        <Route path="/description-chaussures-football" element={<ShoesHome />} />
        <Route path="/t-shirt" element={<Shirt />} />
        <Route path="/description-basket-adidas-homme" element={<AdidasMen />} />
        <Route path="/description-nike-air-react" element={<NikeAir />} />
        <Route path="/description-adidas-react" element={<AdidasReact />} />
        <Route path="/description-nike-air-max-homme" element={<AirMaximum />} />
        <Route path="/description-zoom-react-v3" element={<ZoomReact />} />
        <Route path="/description-zoom-react-v4" element={<ReactZoom />} />
        <Route path="/description-reebok-shaq-fu" element={<ReebokMen />} />
        <Route path="/description-nike-react-v3" element={<ReactNike />} />
        <Route path="/football-homme" element={<FootballMen />} />
        <Route path="/basketball-homme" element={<BasketballMen />} />
        <Route path="/tennis-homme" element={<TennisMen />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
