import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Form from '../components/Form';

import RecetaDetalle from '../components/RecetaDetalle';

import CategoriasContext from '../context/CategoriasContext';
import RecetasContext from '../context/RecetasContext';
import RecetasItem from '../components/RecetasItem';

import Header from '../shared/Header';

const RecetasRouter = () => {
    return (
        <HashRouter basename="/">
            <Header/>
                <div>
                    <Switch>
                        <Route path="/detalle/:id" component={ RecetaDetalle } />
                        <CategoriasContext>
                            <RecetasContext>
                            <div className="container mt-5">
                                <div className="row">
                                    <Route exact path="/" component={ Form } />
                                    <RecetasItem/>
                                </div>
                            </div>
                            </RecetasContext>
                        </CategoriasContext>
                    </Switch>
                </div>
        </HashRouter>
    )
}

export default RecetasRouter
