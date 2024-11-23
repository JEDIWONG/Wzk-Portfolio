import { Link } from "react-router-dom";
import "../style/header.css"

function Header(){

    return(
        <>
            <header className="header-container">
                <h3>
                    
                    <Link className="nav-link" to="/">
                        WONG ZHI KIN
                    </Link>
                </h3>
                
                <ul className="header-nav-bar">


                    <li>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>

                    
                    <li>
                        <Link className="nav-link" to="about/">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link className="nav-link" to="about/">
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link className="nav-link" to="contact/">
                            Contacts
                        </Link>
                    </li>

                </ul>


            </header>
        </>
    );
}

export default Header; 