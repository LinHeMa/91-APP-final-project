import { Link, Outlet } from 'react-router-dom';

const ReservationIndex = () => {
  return (
    <div>
      <div>header</div>
      <Link to="/reservation/successpage">success</Link>
      <Outlet />
      <div>footer</div>
    </div>
  );
};

export default ReservationIndex;
