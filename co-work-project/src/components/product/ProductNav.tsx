import classNames from 'classnames';
import favImg from '../../assets/productImgs/favIcon.png';
import shopcartImg from '../../assets/productImgs/shopcartIcon.png';
import ProductCard from '../../components/product/ProductCard';

interface ProductNavProps {
  owner: string;
  title: string;
  prevPrice: number;
  currentPrice: number;
  photo: string;
  status: string;
  isLastData: boolean;
}

function ProductNav({
  owner,
  title,
  prevPrice,
  currentPrice,
  photo,
  status,
  isLastData,
}: ProductNavProps) {
  return (
    <div className="pl-5">
      <div className="h-[168px] py-5 flex ">
        <div className="w-[108px] h-[128px] mr-4 relative">
          <img
            src={photo}
            alt="productImg"
            className="w-[100%] h-[100%] cursor-pointer"
          />
          {status !== '' && <ProductCard status={status} />}
        </div>
        <div className="flex flex-col w-[190px]">
          <span className=" h-5 text-[#999999] text-[14px] mb-1 cursor-pointer hover:underline">
            {owner}
          </span>
          <span className="text-[14px] mb-[36px] h-[42px] line-clamp-2 overflow-hidden cursor-pointer hover:text-[#ff655d]">
            {title}
          </span>
          <div className="flex justify-between items-end">
            <div className="flex flex-col h-[30px]  w-[92px] justify-end ">
              <p className="line-through text-[12px] text-[#999999] cursor-pointer">{`NT$${prevPrice}`}</p>
              <p className="text-[16px] text-[#ff655d] flex  cursor-pointer">{`NT$${currentPrice}`}</p>
            </div>
            <div className="flex ">
              <div className="w-5 h-5 mr-3 mb-1">
                <img src={favImg} alt="favImg" className="cursor-pointer" />
              </div>
              <div className="w-5 h-5">
                <img
                  src={shopcartImg}
                  alt="shopcartImg"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames({
          'w-[93%] h-[1px] border-[1px] border-[#ececec]': true,
          'border-0': isLastData,
        })}
      ></div>
    </div>
  );
}

export default ProductNav;
