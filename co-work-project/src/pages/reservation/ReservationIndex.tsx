import { Outlet } from 'react-router-dom';
import ReserveHeader from '../../components/ReserveHeader';

const ReservationIndex = () => {
  return (
    <div>
      <ReserveHeader />
      <Outlet />
      <div>footer</div>
    </div>
  );
};

export default ReservationIndex;
