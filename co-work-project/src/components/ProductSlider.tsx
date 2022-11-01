import React from 'react';
import { singleIphoneImg } from '../data/carousellImg';
import ProductPicker from './ProductPicker';

const ProductSlider = () => {
  return (
    <div className="flex flex-col max-w-[426px] w-full ">
      {singleIphoneImg.map(
        (photo, index) =>
          index === 0 && <img src={photo} alt="iphone照片" key={photo} />
      )}
      <ProductPicker />
    </div>
  );
};

export default ProductSlider;
