import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src="/rasio-logo.webp" alt="Rasoi Group Logo" className="logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </nav>
      </div>
    </header>
  );
}
