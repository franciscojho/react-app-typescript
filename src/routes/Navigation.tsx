import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { LazyPageOne, LazyPageTwo, LazyPageThree } from '../01-lazyload/pages'
import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="" />
                    <ul>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/lazy1">Lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/lazy2">Lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to="/lazy3">Lazy3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/lazy1" element={ <LazyPageOne/> }/>
                    <Route path="/lazy2" element={ <LazyPageTwo/> }/>
                    <Route path="/lazy3" element={ <LazyPageThree/> }/>

                    <Route path="/*" element={ <h1><Navigate to="/lazy1" replace/></h1> }/>
                </Routes>

            </div>
        </BrowserRouter>
    )
}
