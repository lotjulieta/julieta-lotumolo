import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = () => {
    setNav(false); 
  };

  const navItems = [
    { id: 2, text: 'About', target: '#about' },
    { id: 3, text: 'Skills', target: '#skills' },
    { id: 4, text: 'Experience', target: '#experience' },
    { id: 5, text: 'Contact', target: '#contact' },
  ];

  return (
    <div className='bg-zinc-950 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-xl text-[#ffffff]'>Julieta Lotumolo</h1>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='bg-zinc-950 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '
          >
            <a href={item.target} onClick={handleClick}>{item.text}</a>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden right-0 top-0 w-[60%] h-full border-l border-l-gray-900 bg-zinc-950 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <div className="flex justify-end mr-4 mt-4">
          <div onClick={handleNav}>
            <AiOutlineClose size={20} />
          </div>
        </div>

        {navItems.map(item => (
          <li
            key={item.id}
            className='bg-zinc-950 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            <a href={item.target} onClick={handleClick}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

