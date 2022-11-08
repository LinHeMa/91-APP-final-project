import _ from 'lodash';
import { useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import ProductPicker from '../../components/ProductPicker';
import ProductSlider from '../../components/ProductSlider';
import { singleIphoneImg } from '../../data/carousellImg';
import { chooseActionKind, ContextType } from './ReservationIndex';

const Product = () => {
  const { state, dispatch, iphoneData } = useOutletContext<ContextType>();
  const { state: formState } = useLocation();
  const chooseImg = _.filter(
    singleIphoneImg,
    (item) => _.includes(item.iphone, state.model) && item.color === state.color
  )[0]?.img;
  useEffect(() => {
    if (chooseImg)
      dispatch({
        type: chooseActionKind.CHANGE_IMG,
        payload: chooseImg,
      });
  }, [state.color]);

  return (
    <div className="md:bg-[#f2f2f2] md:pb-[122px]">
      <h1 className="hidden md:block font-medium text-[64px] leading-80 text-center pt-[53px] mb-[43px]">
        選擇商品
      </h1>
      <div className="flex flex-col md:flex-row pb-2 px-2  md:items-start productPage:mx-auto md:bg-[#ffffff] max-w-[1080px]">
        <div className="mx-auto md:ml-[5%] md:mr-[5%] md:mr-0 md:mt-[72px] md:mb-[70px]">
          <ProductSlider />
        </div>
        <div className=" md:mt-[87px] px-4 md:pr-0  md:pl-2">
          <ProductPicker />
        </div>
      </div>
    </div>
  );
};

export default Product;
