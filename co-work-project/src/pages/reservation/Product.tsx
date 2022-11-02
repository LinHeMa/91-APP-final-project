import _ from 'lodash';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductPicker from '../../components/ProductPicker';
import ProductSlider from '../../components/ProductSlider';
import { singleIphoneImg } from '../../data/carousellImg';
import { chooseActionKind, ContextType } from './ReservationIndex';

const Product = () => {
  const { state, dispatch, iphoneData } = useOutletContext<ContextType>();
  const chooseImg = _.filter(
    singleIphoneImg,
    (item) => _.includes(item.iphone, state.model) && item.color === state.color
  )[0]?.img;
  useEffect(() => {
    console.log('product',state)
    if (chooseImg)
      dispatch({
        type: chooseActionKind.CHANGE_IMG,
        payload: chooseImg,
      });
  }, [state.color]);
  return (
    <div className="flex flex-col productPage:flex-row productPage:flex-wrap  pb-2 items-center justify-between productPage:max-w-[890px] productPage:mx-auto ">
      <ProductSlider />
      <ProductPicker />
    </div>
  );
};

export default Product;
