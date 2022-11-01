import _ from 'lodash';
import { useOutletContext } from 'react-router-dom';
import { ContextType } from '../pages/reservation/ReservationIndex';

const ProductSlider = () => {
  const { state, dispatch, iphoneData } = useOutletContext<ContextType>();
  return (
    <div>
      <img src={state.img || state.prevImg} alt="iphone" />
    </div>
  );
};

export default ProductSlider;