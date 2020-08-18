import React from 'react';
import logo from '../resources/img/logo.png';

const Header = () => {
    return (
        <header className="bg-dark">
            <h1 className=" text-warning text-uppercase">APP <img src={ logo } alt="Logo Liquidos" width="300" title="Liquidos.cl" /></h1>
        </header>
    )
}

export default Header
