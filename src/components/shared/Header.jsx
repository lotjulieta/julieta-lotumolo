import './styles-shared.css';

export default function Header() {
  return (
    <header className="bg-zinc-950 border-gray-200 dark:bg-zinc-950 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Julieta Lotumolo</h1>
        <nav className="md:hidden">
          <button className="mobile-menu-button">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </nav>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#aboutme" className="header-link">About me</a>
            </li>
            <li>
              <a href="#skills" className="header-link">Skills</a>
            </li>
            <li>
              <a href="#experience" className="header-link">Experience</a>
            </li>
            <li>
              <a href="#contact" className="header-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}