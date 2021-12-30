import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="" />
                    <ul>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/">Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/users">Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={ <ShoppingPage /> }/>
                    <Route path="/about" element={ <h1>About Page</h1> }/>
                    <Route path="/users" element={ <h1>Users Page</h1> }/>
                    <Route path="/*" element={ <h1><Navigate to="/" replace/></h1> }/>
                </Routes>

            </div>
        </BrowserRouter>
    )
}