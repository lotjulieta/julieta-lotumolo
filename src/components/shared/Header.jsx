import { BrowserRouter as Router, Link } from 'react-router-dom';


export default function Header() {
  return (
    <Router>
      <header className="bg-zinc-950 border-gray-200 dark:bg-zinc-950 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold items-left" style={{ marginLeft: '-150px'}}>Julieta Lotumolo</h1>
          <nav>
            <ul className="flex space-x-4" style={{ marginRight: '-150px'}}>
              <li>
                <Link href="/aboutme" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About me</Link>
              </li>
              <li>
                <Link to="/skills" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</Link>
              </li>
              <li>
                <Link to="/experience" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experience</Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      
    </Router>
  );
}
