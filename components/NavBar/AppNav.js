'use client';

import NavBtn from '@/components/NavBar/NavBtn';
import HomeBtn from '@/components/NavBar/HomeBtn';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export default function AppNav() {
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (window.innerWidth < 768) setShowNav(false);
  }, [pathname]);

  useEffect(function () {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className=" w-full  flex items-center justify-center border-b-2 border-gray-800 backdrop-blur-md bg-gray-800 bg-opacity-50">
      <div className="w-full py-2 px-10 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-fit flex justify-between">
          <HomeBtn />
          <button onClick={() => setShowNav(!showNav)} className="md:hidden">
            {showNav ? (
              <FontAwesomeIcon icon={faX} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x" />
            )}
          </button>
        </div>
        {showNav && (
          <div className="md:flex flex-col md:flex-row items-center justify-center">
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
