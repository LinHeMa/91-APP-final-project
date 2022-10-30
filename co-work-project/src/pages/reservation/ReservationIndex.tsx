import { Outlet } from 'react-router-dom';
import ReserveFooter from '../../components/ReserveFooter';
import ReserveHeader from '../../components/ReserveHeader';

const ReservationIndex = () => {
  return (
    <div className="flex flex-col">
      <ReserveHeader />
      <Outlet />
      <ReserveFooter />
    </div>
  );
};

export default ReservationIndex;
