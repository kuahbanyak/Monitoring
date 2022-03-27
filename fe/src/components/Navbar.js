import React from 'react'
import icon from '../assets/icon.png'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();
    const masuk = () => {
        navigate('/login')
    }


    return (
        <div>
            <nav className='navbar' role="navigation" aria-label="main navigation">
            <div className='container'>
                <div class="navbar-brand">
                    
                        <a className="navbar-item" href="/">
                            <img src={icon} alt='logo' />
                        </a>
                        <a  href="/"role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a href='/' class="navbar-item">
                                Home
                            </a>
                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <button onClick={masuk}class="button is-light">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Dashboard /> 
        </div>
    
    )
}

export default Navbar;