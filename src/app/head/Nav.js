'use client'
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { Lora } from "next/font/google";

const NavbarContainer = styled.div`
  background-color: ;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ;
    padding: 1rem;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;


const roboto = Lora({
  weight: '400',
  subsets: ['latin'],
})

// stle

const headingStyle = {
  color: 'white',
  
  fontSize: '55px',
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer className='0 rounded-sm shadow-md   bg-slate-50'> <div  className=" flex justify-center "><h1> <span className="  text-[44px]">Code </span> <span className=" text-[44px] text-green-400">Solution</span> </h1></div>
      <Link href="/" >
        <NavbarLink className=' text-base no-underline' ><label style={headingStyle} className={roboto.className} class='  '></label></NavbarLink>
      </Link>
     
      <NavbarLinks className='   sm:bg-slate-100 hidden' isOpen={isOpen}>

  <Link className='   lg:mr-[3vw]  text-green-400 lg:text-2xl hover:text-black   mx-auto  no-underline hover:bg-gray-50 px-1 rounded-md   ' href="../">
          {/* <NavbarLink>About</NavbarLink> */} next.js 
        </Link>
        <Link className='  lg:mr-[3vw]  text-green-400 lg:text-2xl hover:text-black   mx-auto  no-underline hover:bg-gray-50 px-1 rounded-md   ' href="/movie/newmov">
          {/* <NavbarLink>About</NavbarLink> */}react.js

        </Link>
        <Link className='  lg:mr-[3vw]  text-green-400 lg:text-2xl hover:text-black   mx-auto  no-underline hover:bg-gray-50 px-1 rounded-md   ' href="/">
          {/* <NavbarLink>About</NavbarLink> */}java script
        </Link>
  
      
      
      
      </NavbarLinks>

      <button className='  text-white md:hidden sm:block   '  onClick={toggleNavbar}><AppsIcon className=' text-green-500 size-10'/>
      </button>

    
    </NavbarContainer>
  );
};

export default Navbar;