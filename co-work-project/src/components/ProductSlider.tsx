import classNames from 'classnames';
import _ from 'lodash';
import { useOutletContext } from 'react-router-dom';
import carousellImg, { singleIphoneImg } from '../data/carousellImg';
import {
  chooseActionKind,
  ContextType,
} from '../pages/reservation/ReservationIndex';
import rightArrow from '../assets/reserve/rightArrowForSlider.png';
import leftArrow from '../assets/reserve/leftArrowforSlider.png';
import { useState } from 'react';

const ProductSlider = () => {
  const { state, dispatch, iphoneData } = useOutletContext<ContextType>();
  const [maxindex, setMaxindex] = useState(0);
  const clickLimit = (dataArray: any[]) => {
    const times = dataArray.length / 5;
    const remainder = dataArray.length % 5;
    const isDivisible = dataArray.length % 5 === 0;
    if (isDivisible) return 5 * (times - 1);
    return times + remainder;
  };
  console.log(state);
  return (
    <div className="w-[375px] md:w-[426px] relative productPage:pb-[98px] mx-[20px]">
      <img src={state.img || state.prevImg} alt="iphone" className="w-full" />
      <div
        className="cursor-pointer absolute bottom-[40px] -left-[17.57px]  hidden productPage:block"
        onClick={() => {
          if (maxindex === 0) return;
          setMaxindex((pre) => pre - 1);
        }}
      >
        <img src={leftArrow} alt="往左" />
      </div>
      <div className="max-w-[427px] w-[360px] h-[83.6px] overflow-hidden absolute hidden productPage:flex left-10 ">
        {singleIphoneImg.map((photo, index) => (
          <img
            src={photo.img}
            key={photo.img}
            style={{ left: `${70.2 * (index - maxindex)}px` }}
            className={classNames({
              'max-h-[83px] w-auto duration-300 transition-all': true,
              absolute: true,
            })}
            onClick={() => {
              dispatch({
                type: chooseActionKind.CHANGE_MODEL,
                payload: photo.iphone[0],
              });
              dispatch({
                type: chooseActionKind.CHANGE_COLOR,
                payload: photo.color,
              });
              dispatch({
                type: chooseActionKind.CHANGE_COLORNAME,
                payload: photo.colorName,
              });
            }}
            alt="iphone 13"
          />
        ))}
      </div>
      <div
        className="cursor-pointer absolute bottom-[45px] -right-[17.57px]  hidden productPage:block"
        onClick={() => {
          console.log(clickLimit(singleIphoneImg));
          if (maxindex >= clickLimit(singleIphoneImg)) return;
          setMaxindex((pre) => pre + 1);
        }}
      >
        <img src={rightArrow} alt="往右" />
      </div>
    </div>
  );
};

export default ProductSlider;
