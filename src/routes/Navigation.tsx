import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink } from 'react-router-dom'
import { FormikBasikPage } from '../03-forms/pages/FormikBasikPage'
import { FormikComponents } from '../03-forms/pages/FormikComponents'
import { FormikYupPage } from '../03-forms/pages/FormikYupPage'
import { RegisterPage } from '../03-forms/pages/RegisterPage'
import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="" />
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/register">
                                Register
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/formik-basic">
                                Formi Basic Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/formik-yup">
                                Formi Yup Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/formik-components">
                                Formik Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }
                                to="/users">
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/formik-basic" element={<FormikBasikPage />} />
                    <Route path="/formik-yup" element={<FormikYupPage />} />
                    <Route path="/formik-components" element={<FormikComponents />} />
                    <Route path="/users" element={<h1>Users Page</h1>} />
                    <Route path="/*" element={<h1>HOME</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
