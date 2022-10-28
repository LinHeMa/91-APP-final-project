import { Link, Outlet } from 'react-router-dom';
import ReserveHeader from '../../components/ReserveHeader';

const ReservationIndex = () => {
  return (
    <div>
      <ReserveHeader />
      <Link to="/reservation/successpage">success</Link>
      <Outlet />
      <div>footer</div>
    </div>
  );
};

export default ReservationIndex;
