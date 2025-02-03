'use client';

import NavBtn from '@/components/NavBar/NavBtn';
import HomeBtn from '@/components/NavBar/HomeBtn';
import { useState } from 'react';

export default function AppNav() {
  const [showNav, setShowNav] = useState(true);
  return (
    <div className=" w-full  flex items-center justify-center border-b-2 border-gray-800 backdrop-blur-md bg-gray-800 bg-opacity-50">
      <div className="w-full py-2 px-10 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-fit flex justify-between">
          <HomeBtn />
          <button onClick={() => setShowNav(!showNav)} className="md:hidden">
            X
          </button>
        </div>
        {showNav && (
          <div className="md:flex flex-col md:flex-row">
            <NavBtn route={'/about'}>About</NavBtn>
            <NavBtn route={'/recipes'}>Recipes</NavBtn>
            <NavBtn route={'/contact'}>Contact us</NavBtn>
            <NavBtn
              route={'/sign-in'}
              bgcolor={'bg-white'}
              txtcolor={'text-black'}
            >
              Sign in
            </NavBtn>
          </div>
        )}
      </div>
    </div>
  );
}
