import fansImg from '../../assets/productImgs/fansImg.png';
import fbImg from '../../assets/productImgs/fbIcon.png';
import igImg from '../../assets/productImgs/igIcon.png';
import lineImg from '../../assets/productImgs/lineIcon.png';
import googlePlayImg from '../../assets/productImgs/googleplayIcon.png';
import appStoreImg from '../../assets/productImgs/appstoreIcon.png';
import {
  footerContactData,
  footerShopInfoData,
  footerSerivceData,
} from '../../data/productData';

const fansArr = [fbImg, lineImg, igImg];

function ProductFooter() {
  return (
    <div className="h-[260px] border-t-[1px] border-t-[#e5e5e5]">
      <div className="max-w-[1180px] mx-auto pt-10">
        <div className=" flex">
          <div className="mr-[84px]">
            <img src={fansImg} alt="fansImg" className="mb-2 cursor-pointer" />
            <div className="flex">
              {fansArr.map((item, index) => (
                <div key={index} className="w-4 h-4 mr-2">
                  <img src={item} alt={item} className={'cursor-pointer'} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[2px] mr-[80px]">
            {footerContactData.map((contact, index) => (
              <div
                key={index}
                className={`mb-2 w-[100px] h-5 ${
                  index === 0 ? 'text-[16px]' : 'text-[12px]'
                } text-[#333333] cursor-pointer`}
              >
                {contact}
              </div>
            ))}
          </div>
          <div className="mt-[2px] mr-[80px]">
            {footerShopInfoData.map((info, index) => (
              <div
                key={index}
                className={`mb-2 w-[100px] h-5 ${
                  index === 0 ? 'text-[16px]' : 'text-[12px]'
                } text-[#333333] cursor-pointer`}
              >
                {info}
              </div>
            ))}
          </div>
          <div className="mt-[2px] mr-[80px]">
            {footerSerivceData.map((service, index) => (
              <div
                key={index}
                className={`mb-2 w-[100px] h-5 ${
                  index === 0 ? 'text-[16px]' : 'text-[12px]'
                } text-[#333333] cursor-pointer`}
              >
                {service}
              </div>
            ))}
          </div>

          <div className="mt-[2px]">
            <div className={`mb-2 ${'text-[16px]'} text-[#333333]`}>
              官方APP
            </div>
            <input
              className="w-[200px] mb-2 h-10 rounded-[4px] border-[1px] border-[#dddddd] px-3 py-[10px] text-[14px]"
              placeholder="請輸入台灣手機號碼"
              maxLength={10}
            />
            <div className="w-[200px] h-[40px] bg-black flex items-center justify-center rounded-[4px] cursor-pointer">
              <p className="text-[#ffffff] w-[160px] h-5 text-[14px]">
                免費傳送載點至手機
              </p>
            </div>
            <div className="w-[200px] flex justify-between mt-2">
              <div className="w-[92px] h-6 cursor-pointer">
                <img src={googlePlayImg} alt="googlePlay" />
              </div>
              <div className="w-[92px] h-6 cursor-pointer">
                <img src={appStoreImg} alt="appleStore" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[340px] h-5">
            <p className="text-[12px] text-[#bbbbbb] mt-3">
              ＠2015 by 紘瑞國際股份有限公司
            </p>
          </div>
          <div className="w-[400px] h-5">
            <p className="text-[12px] text-[#bbbbbb] mt-3">
              本站最佳瀏覽環境請使用Google Chrome、Firefox或Edge以上版本
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFooter;
