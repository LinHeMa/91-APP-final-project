import ProductFooter from '../../components/product/ProductFooter';
import ProductHeader from '../../components/product/ProductHeader';
import ProductContent from '../../components/product/ProductContent';
import {
  productData,
  productLookBook,
  productOtherLookBook,
  sidebarData,
  productImgArr,
} from '../../data/productData';
import ProductNav from '../../components/product/ProductNav';
import ProductLookbook from '../../components/product/ProductLookbook';
import ReserveCarousell from '../../components/ReserveCarousell';

const ProductDetail = () => {
  return (
    <div>
      <ProductHeader />
      <div className="max-w-[1180px] mx-auto">
        <div className="my-[14px]">
          <span className="text-[14px] text-[#c89185]">
            {'首頁 > 日本穿搭 > 穿搭介紹'}
          </span>
        </div>
        <div className="flex">
          <div className="w-[265px]  mr-[3px]">
            {productData.map((item, index) => (
              <div key={index}>
                <ProductContent dataContent={item} />
              </div>
            ))}
          </div>
          <div className="ml-[35px]">
            <div className="flex">
              <div>
                <div className="w-[528px] h-[703px]">
                  <ReserveCarousell
                    photoArr={productImgArr}
                    leftPosition="-left-[600px]"
                    rightPosition="left-[600px]"
                    currentPage="product"
                    directionIconWidth="w-[24px]"
                    directionIconHeight="h-[24px]"
                    directionIconTop="t-[339px]"
                    photoWidth="w-[528px]"
                    photoHeight="h-[703px]"
                  />
                </div>
              </div>
              <div className="w-[336px] ml-[17px]">
                <div className="flex flex-col mb-[30px]">
                  <span className="font-medium text-[20px]">
                    柏高島屋ステーションモール店
                  </span>
                  <span className="text-[14px]">GLOBAL WORK</span>
                  <span className="text-[14px]">152cm</span>
                </div>
                <span className="h-5 mb-2">穿著單品</span>
                <div className="mb-11">
                  {sidebarData.map((data, index) => (
                    <div key={index}>
                      <ProductNav
                        owner={data.owner}
                        title={data.title}
                        prevPrice={data.prevPrice}
                        currentPrice={data.currentPrice}
                        photo={data.photo}
                        status={data.status}
                        isLastData={index === sidebarData.length - 1}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <ProductLookbook data={productLookBook} />
            </div>
            <div className="mb-[100px]">
              <ProductLookbook data={productOtherLookBook} />
            </div>
          </div>
        </div>
      </div>
      <ProductFooter />
    </div>
  );
};

export default ProductDetail;
