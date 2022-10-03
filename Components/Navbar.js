import React from 'react'
import { links } from './Data'

const Navbar = () => {
  return (
    <div className="nav flex justify-between items-center border-b border-slate-300 py-2 px-[8%]">
      <h1 className='text-2xl font-bold uppercase'>
        Auto <span className='text-red-600'>Moto</span>
      </h1>
      <ul className="Navitems flex flex-row">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li className="mx-3 px-4 py-1 my-2 font-bold uppercase text-sm border-b-2 border-white hover:border-red-600 hover:text-red-600 transition-all duration-700" key={id}>
              <a href="#">{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar