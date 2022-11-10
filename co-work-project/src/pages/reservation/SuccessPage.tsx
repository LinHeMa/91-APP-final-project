import _ from 'lodash';
import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import heartImg from '../../assets/reserve/img_heart.webp';
import ReserveText from '../../components/ReserveText';
import { isFormDataCompelete, isProductDataCompelete } from '../../util/guard';
import { ContextType } from './ReservationIndex';

const SuccessPage = () => {
  const { state, iphoneData } = useOutletContext<ContextType>();
  const price = _.filter(iphoneData, (item) => {
    return item.model === state.model && item.memory === state.memory;
  })[0].price;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isFormDataCompelete(state) || !isProductDataCompelete(state))
      navigate('/reservation');
  });
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className=" h-[40px] text-[24px] font-bold  mt-[30px] flex justify-center items-center mb-[2px] md:text-[64px] md:w-[713px] md:h-[80px]">
        恭喜您！驗證成功
      </h1>
      <div className="w-[191px] h-[152px]  mb-[2px] md:w-[294px] md:h-[235px]">
        <img className="w-[100%] h-[100%]" src={heartImg} alt="heartImg" />
      </div>
      <span className=" h-[48px] text-[#333333] text-center mb-[18px] md:text-[24px] md:h-auto md:w-[350px]">
        已完成 {state.model} 登記 <br />
        敬請等候開賣通知
      </span>
      <div className="px-[25px] flex justify-center items-center">
        <span className="text-[#ff5353] text-center font-semibold mb-5 md:text-[24px] md:max-w-[1028px] md:w-auto md:px-[10px]">
          注意：簡訊驗證通過才算有登記，完成登記的手機號碼需與會員手機號碼相同，每人限購一支
        </span>
      </div>
      <div className="w-full md:bg-[#f2f2f2] pb-[150px] md:pb-[60px]">
        <div className="h-[395px] bg-[#f2f2f2] pt-[30px]  w-full  md:h-[690px]">
          <div className="w-full px-[25px] h-[348px] mx-auto md:w-auto md:max-w-[850px] md:px-[25px] leading-24 md:leading-48 text-[14px] md:text-[24px] ">
            <span className="font-bold w-[98px] h-[20px] ">登記資訊如下：</span>
            <div className="border-b-[1px] border-b-[#D8D8D8] mt-[9px]" />
            <div className=" h-[304px] mt-[15px]  w-full">
              <div className="flex justify-between leading-6">
                <span className="font-bold ">登記狀態</span>
                <span className="font-bold ">驗證通過</span>
              </div>
              <div className="mt-[10px]">
                <span className="font-bold ">商品資訊</span>
                <div className="mt-[10px] flex justify-between leading-6">
                  <span className=" text-[#333333] ml-[16px] md:ml-[24px]">
                    商品
                  </span>
                  <span className=" text-[#333333]">{state.model}</span>
                </div>
                <div className=" flex justify-between leading-6">
                  <span className=" text-[#333333] ml-[16px] md:ml-[24px]">
                    商品選項
                  </span>
                  <span className=" text-[#333333]">
                    {state.model +
                      ' , ' +
                      (state.memory === 1000 ? '1TB' : state.memory + 'GB ') +
                      state.colorName}
                  </span>
                </div>
                <div className=" flex justify-between leading-6">
                  <span className=" text-[#333333] ml-[16px] md:ml-[24px]">
                    商品數量
                  </span>
                  <span className=" text-[#333333]">1</span>
                </div>
                <div className=" flex justify-between leading-6">
                  <span className=" text-[#333333] ml-[16px] md:ml-[24px]">
                    單價
                  </span>
                  <span className=" text-[#FF5353] ">{`NT$${price || 0}`}</span>
                </div>
              </div>
              <div className="mt-[25px]">
                <span className="font-bold ">個人資訊</span>
                <div className="mt-[10px] flex justify-between leading-6">
                  <span className=" text-[#333333] ml-[16px] md:ml-[24px]">
                    姓名
                  </span>
                  <span className=" text-[#333333]">{state.userName}</span>
                </div>
                <div className=" flex justify-between leading-6">
                  <span className=" text-[#333333] ml-[16px] md:ml-[24px]">
                    手機號碼
                  </span>
                  <span className=" text-[#333333]">{`+886 ${state.userPhoneNum}`}</span>
                </div>
                <div className=" flex justify-between">
                  <span className=" text-[#333333] ml-[16px] md:ml-[24px]">
                    Email
                  </span>
                  <span className=" text-[#333333]">{state.userEmail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mb-[100px]">
          <ReserveText />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
