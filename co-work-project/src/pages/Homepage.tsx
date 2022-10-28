import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="w-[100vh]  flex justify-center items-center">
      <div className=" flex justify-center items-center">
        <Link to="/reservation" className="hover:text-red-500">
          Reservation
        </Link>
        <Link to="/productdetail">ProductDetail</Link>
      </div>
    </div>
  );
};

export default Homepage;
