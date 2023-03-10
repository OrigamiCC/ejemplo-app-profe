import React from 'react';
import Login from './Componentes/Login';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Lugares from './Componentes/Lugares';
import Eventos from './Componentes/Eventos';
import Menu from './Componentes/Menu';
import Home from './Componentes/Home';
import NotFound from './Componentes/NotFound';
import Registro from './Componentes/Registro';
import Lugar from './Componentes/Lugar';
import User from './Componentes/User';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <Menu />
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/lugares" element={<Lugares />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/lugar/:id" element={<Lugar />} />
      <Route path="/user/:username" element={<User />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
