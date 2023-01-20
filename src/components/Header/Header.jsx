import React from 'react';

const Header = () => {
  return (
    <div className='bg-primary'>
      <div className="navbar  container mx-auto">
      <div className="flex-1">
        <a className="flex gap-2 normal-case text-xl text-white"><img className='w-8' src="https://i.ibb.co/SK3yNmb/zendesk-logo.png" alt="" />  Daily Operational</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className='text-white text-xl'>Berlin Local Time: Monday, 17 Dec 2018 03:41 PM</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Header;