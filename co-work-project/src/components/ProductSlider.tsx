import classNames from 'classnames';
import _ from 'lodash';
import { useOutletContext } from 'react-router-dom';
import { singleIphoneImg } from '../data/carousellImg';
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
  return (
    <div className="flex md:block  w-full md:w-[426px]  relative md:pb-[98px] md:mx-[20px] mb-4">
      <div className=" flex justify-center mx-auto w-full md:h-[426px] bg-[#f2f2f2]">
        <img src={state.img || state.prevImg} alt="iphone" className=' max-w-[360px]'/>
      </div>
      <div
        className="cursor-pointer absolute bottom-[30px] -left-[30.57px]   hidden md:block"
        onClick={() => {
          if (maxindex === 0) return;
          setMaxindex((pre) => pre - 1);
        }}
      >
        <img src={leftArrow} alt="往左" />
      </div>
      <div className="max-w-[427px] w-[426px] h-[95.6px] overflow-hidden absolute hidden md:flex left-0 ">
        {singleIphoneImg.map((photo, index) => (
          <img
            src={photo.img}
            key={photo.img}
            style={{ left: `${86 * (index - maxindex)}px` }}
            className={classNames({
              'max-h-[83px] w-[83px] duration-300 transition-all cursor-pointer bg-[#f2f2f2] mt-3':
                true,
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
        className="cursor-pointer absolute bottom-[30px] -right-[30.57px]  hidden md:block"
        onClick={() => {
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
