import classNames from 'classnames';
import _ from 'lodash';
import { useOutletContext } from 'react-router-dom';
import carousellImg from '../data/carousellImg';
import { ContextType } from '../pages/reservation/ReservationIndex';
import rightArrow from '../assets/reserve/rightArrowForSlider.png';
import leftArrow from '../assets/reserve/leftArrowforSlider.png';

const ProductSlider = () => {
  const { state, dispatch, iphoneData } = useOutletContext<ContextType>();
  return (
    <div className="max-w-[426px]">
      <img src={state.img || state.prevImg} alt="iphone" />
      <div className="relative flex overflow-hidden">
        <div className=" absolute">
          <img src={leftArrow} alt="往左" />
        </div>
        {carousellImg.map((photo, index) => (
          <img
            src={photo}
            key={photo}
            className={classNames({ 'max-w-[83px]': true })}
            alt="iphone 13"
          />
        ))}
        <div className=" absolute">
          <img src={rightArrow} alt="往右" />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
