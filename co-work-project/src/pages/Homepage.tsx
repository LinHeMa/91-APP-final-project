import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <Link to="/reservation">Reservation</Link>
      <Link to="/productdetail">ProductDetail</Link>
    </div>
  );
};

export default Homepage;
