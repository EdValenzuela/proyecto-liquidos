import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../shared/Header';

//Componentes
import Form from '../components/Form';
import RecetasItem from '../components/RecetasItem';
import RecetaDetalle from '../components/RecetaDetalle';

//Context
import CategoriasContext from '../context/CategoriasContext';
import RecetasContext from '../context/RecetasContext';


const RecetasRouter = () => {
    return (
        <HashRouter basename="/">
            <Header/>
                <div className="container mt-5">
                    <div className="row justify-content-center">   
                    <Switch>
                        <Route exact path="/">
                            <CategoriasContext>
                                <RecetasContext>
                                    <Form/>
                                    <RecetasItem/>
                                </RecetasContext>
                            </CategoriasContext>
                        </Route>
                        <Route exact path="/detalle/:id" component={ RecetaDetalle } />
                        <Redirect to='/' />
                    </Switch>
                    </div>
                </div>
        </HashRouter>
    )
}

export default RecetasRouter
