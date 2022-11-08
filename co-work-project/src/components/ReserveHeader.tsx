import logo from '../assets/reserve/91AppLogoDesktop.png';
import { useNavigate } from 'react-router-dom';

const ReserveHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#FF5353] h-[57px] md:h-[82px] flex items-center">
      <img
        src={logo}
        alt="91AppLogo"
        className="md:ml-[10.7%] ml-[4%] w-[75px] h-[21.69px] md:w-[90px] md:h-[26.03px] cursor-pointer"
        onClick={() => navigate('/reservation')}
      />
    </div>
  );
};

export default ReserveHeader;
