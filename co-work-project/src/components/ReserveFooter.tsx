import _ from 'lodash';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import {
  initialStateType,
  stateType,
} from '../pages/reservation/ReservationIndex';

interface ReserveFooterProps {
  state: initialStateType | stateType[];
}

const ReserveFooter = ({ state }: ReserveFooterProps) => {
  const location = useLocation();
  const firstPathName = _.split(location.pathname, '/')[1];
  const secondPathName = _.split(location.pathname, '/')[2];
  const navigate = useNavigate();
  const { model, color, memory } = state as initialStateType;
  console.log(state);
  return (
    <footer className="w-[100vw] bg-white flex h-[68px] justify-center items-center drop-shadow-sm flex-shrink-0">
      <button
        form="form"
        type={secondPathName === 'sumbitform' ? 'submit' : 'button'}
        id="form"
        onClick={() => {
          console.log(secondPathName);
          if (firstPathName !== 'reservation') return;
          if (secondPathName === 'product' && model && color && memory) {
            navigate('/reservation/successpage');
          }
          if (secondPathName === undefined) {
            navigate('/reservation/sumbitform');
          }
        }}
        className="cursor-pointer w-[85%] h-[40px] md:h-[50px] bg-[#FF5353] rounded-[5px] flex justify-center items-center text-white max-w-[1080px]"
      >
        搶先登記
      </button>
    </footer>
  );
};

export default ReserveFooter;
