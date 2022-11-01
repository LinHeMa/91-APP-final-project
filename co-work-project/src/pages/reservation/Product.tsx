import ProductPicker from '../../components/ProductPicker';
import ProductSlider from '../../components/ProductSlider';

const Product = () => {
  return (
    <div className="flex flex-col md:flex-row w-full pb-2 items-center justify-center">
      <ProductSlider />
      <ProductPicker />
    </div>
  );
};

export default Product;
