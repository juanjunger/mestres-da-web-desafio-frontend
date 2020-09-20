import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import logo from '../../static/images/logo.png';
import avatar from '../../static/images/marcela.png';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <div className="desktop">
                        <div className="flex flex--space-between">
                            <div className="desktop__logo">
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className="desktop__menu">
                                <ul className="flex">
                                    <li><Link className="dashboardLink" to="/dashboard">Dashboard</Link></li>
                                    <li><Link className="dashboardLink" to="#">Bem Vinda, <strong>Marcela</strong></Link></li>
                                    <li>
                                        <img src={avatar} alt="Avatar" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}