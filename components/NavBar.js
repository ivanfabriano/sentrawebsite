import Switch from '@mui/material/Switch';

import logo from "../public/assets/images/logo.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="px-10 py-6 border-b">
      <div className="flex items-center">
        <div className="w-4/12 flex items-center">
          <Image
            src={logo}
            alt="Picture of the author"
            width="120px"
            height="40px"
          />
        </div>
        <div className="w-4/12 text-center font-semibold">En<Switch/>In</div>
        <div className="w-4/12 text-right">
          <div className="text-primary-gray text-right">
            <a className="font-semibold mx-6 cursor-pointer">Services</a>
            <a className="font-semibold mx-6 cursor-pointer">About</a>
            <a className="font-semibold mx-6 cursor-pointer">Showcase</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
