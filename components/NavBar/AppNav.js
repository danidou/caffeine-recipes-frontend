import NavBtn from '@/components/NavBar/NavBtn';

export default function AppNav() {
  return (
    <div className=" w-full  flex items-center justify-center border-b-2 border-gray-800 backdrop-blur-md bg-gray-800 bg-opacity-50">
      <div className="w-full py-2 px-10 flex justify-between">
        {/* Todo Home button separate component */}
        <NavBtn route={'/'}>🍺 Home</NavBtn>
        <div className="hidden md:flex">
          <NavBtn route={'/about'}>About</NavBtn>
          <NavBtn route={'/recipes'}>Recipes</NavBtn>
          <NavBtn route={'/contact'}>Contact us</NavBtn>
          <NavBtn route={'/'} bgcolor={'bg-white'} txtcolor={'text-black'}>
            Sign in
          </NavBtn>
        </div>
      </div>
    </div>
  );
}
