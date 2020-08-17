import React from 'react';
import Header from './shared/Header';
import Form from './components/Form';

import CategoriasContext from './context/CategoriasContext';
import RecetasContext from './context/RecetasContext';

import RecetasItem from './components/RecetasItem';

function App() {
  return (
     <CategoriasContext>
        <RecetasContext>
            <Header/>
            <div className="container mt-5">
                  <div className="row">
                     <Form/>
                  </div>
                  <RecetasItem/>
            </div>
        </RecetasContext>
     </CategoriasContext>
  );
}

export default App;
