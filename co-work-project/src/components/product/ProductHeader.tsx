import globalImg from '../../assets/productImgs/globeIcon.png';
import logoImg from '../../assets/productImgs/logo.png';
import moneyImg from '../../assets/productImgs/moneyIcon.png';
import phoneImg from '../../assets/productImgs/phoneIcon.png';
import profileIcon from '../../assets/productImgs/profileIcon.png';
import searchImg from '../../assets/productImgs/searchIcon.png';
import shopImg from '../../assets/productImgs/shopIcon.png';
import downImg from '../../assets/productImgs/Vector.png';
import { titleData } from '../../data/productData';

const navList = [phoneImg, profileIcon, shopImg];

function ProductHeader() {
  return (
    <div className="bg-[#c89185]   min-h-[100px]">
      <div className="w-[1180px]  h-[100%] mx-auto flex items-center">
        <div className="h-[100px] flex items-center  mr-[2%] shrink-0 self-start">
          <div className="w-[216.36px] h-[65px] bg-[#ffffff] flex justify-center items-center">
            <img src={logoImg} alt="logoImage" className="cursor-pointer" />
          </div>
        </div>
        <div className="grow">
          <div className="flex justify-end h-[50px] ">
            <div className="mr-6 flex justify-end items-center ">
              {navList.map((item, index) => (
                <div
                  key={index}
                  className={`w-[15px] h-[15px] flex justify-center items-center ${
                    index === navList.length - 1 ? 'mr-[5px]' : 'mr-[10px]'
                  }`}
                >
                  <img src={item} alt="navIcon" className="cursor-pointer" />
                </div>
              ))}
              <div className="px-[9px] py-[2px] bg-[#ff5353] text-white rounded-[100px] w-8 h-4 text-[12px] flex justify-center items-center font-['Noto Sans']">
                10
              </div>
            </div>
            <div className="flex justify-end items-center mr-[10px]">
              <img
                src={globalImg}
                alt="globalImg"
                className="w-[15px] h-[15px] mr-[5px]"
              />
              <p className="text-[12px] cursor-pointer text-center">繁體中文</p>
              <div className="w-[15px] h-[15px] flex justify-center items-center cursor-pointer">
                <img src={downImg} alt="downImg" />
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="w-[15px] h-[15px] mr-[5px]">
                <img src={moneyImg} alt="moneyImg" />
              </div>
              <p className="text-[12px] leading-[18px] cursor-pointer text-center">
                TWD
              </p>
              <div className="w-[15px] h-[15px] flex justify-center items-center cursor-pointer">
                <img src={downImg} alt="downImg" />
              </div>
            </div>
          </div>
          <div className="flex justify-between  ">
            <div className="flex flex-wrap max-w-[685px] pt-[15px]">
              {titleData.map((data, index) => (
                <div
                  key={index}
                  className="flex  mb-[15px] h-[20px] mr-5 cursor-pointer"
                >
                  <div className="text-[14px]">{data.title}</div>
                  {data.content.length !== 0 && (
                    <div className="w-5 h-5 flex justify-center items-center">
                      <img
                        src={downImg}
                        alt="downIcon"
                        className="w-[9.97px] h-[5.15px]"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="ml-9 h-[50px] self-start flex items-center relative">
              <input
                className="w-[214px] rounded-xl px-[10px] py-[11px] h-[26px] text-[14px]"
                maxLength={18}
                placeholder="搜尋商品"
              />
              <div className=" absolute right-[10.09px]">
                <img src={searchImg} alt="searchIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
