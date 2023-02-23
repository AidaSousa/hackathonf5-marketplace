import React from 'react'
import '../navbar/Navbar.css'
import Logo from '../../../assets/logoEasy.svg'



const Navbar = () => {
    return (
        <nav className="navContainer" >
            <div className="navbar">
                <img className="logoEasy" src={Logo} alt="LogoEasy"></img>
                <h2 className="navbarLog"> Iniciar sesión </h2>
                <form className="dFlex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"></input>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="input-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                        />
                    </svg>

                </form>
            </div>
        </nav>
    )
}

export default Navbar