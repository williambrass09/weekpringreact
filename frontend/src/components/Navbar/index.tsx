import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './style.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMOVIE</h1>
          <a href="https://github.com/williambrass09">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/williambrass09</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
