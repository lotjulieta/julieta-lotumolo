import { useState } from 'react';
import './styles-shared.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-zinc-950 border-gray-200 dark:bg-zinc-950 text-white py-4">
      <div className="mx-auto flex justify-between items-center md:ml-8 md:mr-8">
        <h1 className="text-xl font-bold md:text-left text-center sm:text-sm md:text-xl sm:ml-4 md:ml-0">Julieta Lotumolo</h1>
        <nav className="md:hidden mr-6">
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>
        <nav className={`md:flex ${isMobileMenuOpen ? 'flex fixed top-0 left-0 w-2/3 md:w-auto bg-zinc-950 justify-center z-50' : 'hidden'} md:ml-4 lg:ml-0`}>
          <ul className="md:flex flex-col md:flex-row md:space-x-4">
            <li>
              <a href="#aboutme" className="header-link" onClick={toggleMobileMenu}>
                About me
              </a>
            </li>
            <li>
              <a href="#skills" className="header-link" onClick={toggleMobileMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="header-link" onClick={toggleMobileMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="header-link" onClick={toggleMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
