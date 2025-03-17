import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/Home';
import Favoritos from './rotas/Favoritos';
import Header from './components/Header'
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importe das rotas para a aplicação

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

li{
  list-style: none;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/minha estante' element={<p>minha estante</p>} />
        <Route path='/categorias' element={<p>categorias</p>} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode >
);

reportWebVitals();
