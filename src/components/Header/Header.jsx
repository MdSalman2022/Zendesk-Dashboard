import React from 'react';

const Header = () => {
  return (
    <div className='bg-primary'>
      <div className="navbar  lg:container mx-auto">
      <div className="flex-1">
        <a className="flex items-center gap-2 normal-case lg:text-xl text-white"><img className='lg:w-8 w-8 h-full' src="https://i.ibb.co/SK3yNmb/zendesk-logo.png" alt="" />  Daily Operational</a>
      </div>
      <div className="lg:flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li className='text-white text-right lg:text-xl text-sm w-60 lg:w-full'>Berlin Local Time: Monday, 17 Dec 2018 03:41 PM</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Header;