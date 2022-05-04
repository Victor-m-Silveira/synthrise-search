import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './Search';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-yellow-400 border-red-900 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Link to="/">
        <p> <img src="https://uploaddeimagens.com.br/images/003/834/054/original/synthmovies.png?1650310341" width={200} height={200} />
        </p>
      </Link>
      <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{darkTheme ? 'Light' : 'Dark'}</button>
    </div>
    <Search />
  </div>
);
