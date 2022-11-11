import logo from '../assets/reserve/91AppLogoDesktop.png';
import logoWebp from '../assets/reserve/91AppLogoDesktop.webp';
import { Link } from 'react-router-dom';
import React from 'react';

const ReserveHeader = React.memo(() => {
  return (
    <div className="flex items-center md:pl-[10.7%] bg-[#FF5353] pl-[4%] h-[57px] md:h-[82px] ">
      <Link to="/">
        <picture>
          <source media="(min-width: )" srcSet={logoWebp} type="image/webp" />
          <source media="(min-width: )" srcSet={logo} type="image/png" />
          <img
            src={logoWebp}
            alt="91AppLogo"
            className="  w-[75px] h-[21.69px] md:w-[90px] md:h-[26.03px]  cursor-pointer"
          />
        </picture>
      </Link>
    </div>
  );
});

export default ReserveHeader;
