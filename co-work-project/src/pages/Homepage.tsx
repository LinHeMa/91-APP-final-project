import { Link } from 'react-router-dom';
import icon from '../assets/logo.svg';
const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#31324A] min-h-[100vh]">
      <img
        className=" w-40 h-auto animate-spin mb-[20px]"
        src={icon}
        alt="homepageIcon"
      />
      <div className="flex text-white ">
        <Link className="m-4 hover:text-stone-300" to="/reservation">
          Iphone Reservation Page
        </Link>
        <Link className="m-4 hover:text-stone-300" to="/productdetail">
          Sasa Product Page
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
