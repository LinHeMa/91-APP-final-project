import logo from '../assets/reserve/91AppLogoDesktop.png';
import logoWebp from '../assets/reserve/91AppLogoDesktop.webp';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const ReserveHeader = React.memo(() => {
  console.count('header');
  return (
    <div className="w-full bg-[#FF5353] h-[57px] md:h-[82px] flex items-center">
      <Link to="/">
        <picture>
          <source media="(min-width: )" srcSet={logoWebp} type="image/webp" />
          <source media="(min-width: )" srcSet={logo} type="image/png" />
          <img
            src={logo}
            alt="91AppLogo"
            className="md:ml-[10.7%] ml-[4%] w-[75px] h-[21.69px] md:w-[90px] md:h-[26.03px] cursor-pointer"
          />
        </picture>
      </Link>
    </div>
  );
});

export default ReserveHeader;
