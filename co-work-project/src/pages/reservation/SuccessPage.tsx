import heartImg from '../../assets/reserve/img_heart.png';
import ReserveText from '../../components/ReserveText';

const SuccessPage = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="w-[300px] h-[40px] text-[24px] font-bold  mt-[30px] flex justify-center items-center mb-[2px] md:text-[64px] md:w-[713px] md:h-[80px]">
        恭喜您！驗證成功
      </h1>
      <div className="w-[191px] h-[152px]  mb-[2px] md:w-[294px] md:h-[235px]">
        <img className="w-[100%] h-[100%]" src={heartImg} alt="heartImg" />
      </div>
      <span className="w-[162px] h-[48px] text-[#333333] text-center mb-[18px] md:text-[24px] md:h-auto md:w-[250px]">
        已完成 iphone 13 登記 敬請等候開賣通知
      </span>
      <span className="text-[#ff5353] text-center w-[342px] h-[54px] font-semibold mb-5 md:text-[24px] md:max-w-[1028px] md:w-auto md:px-[10px]">
        注意：簡訊驗證通過才算有登記，完成登記的手機號碼需與會員手機號碼相同，每人限購一支
      </span>
      <div className="w-full md:bg-[#f2f2f2] ">
        <div className="h-[395px] bg-[#f2f2f2] pt-[30px]  w-full  md:h-[713px]">
          <div className="w-[343px] h-[348px] mx-auto md:w-auto md:max-w-[850px] md:px-[15px] leading-24 md:leading-48 text-[14px] md:text-[24px]">
            <span className="font-bold w-[98px] h-[20px] ">登記資訊如下：</span>
            <div className="border-b-[1px] border-b-[#D8D8D8] mt-[9px]"></div>
            <div className="w-[327px] h-[304px] mt-[15px]  md:w-full">
              <div className="flex justify-between leading-6">
                <span className="font-bold ">登記狀態</span>
                <span className="font-bold ">驗證通過</span>
              </div>
              <div className="mt-[10px]">
                <span className="font-bold ">商品資訊</span>
                <div className="mt-[10px] flex justify-between leading-6">
                  <span className=" text-[#333333]">商品</span>
                  <span className=" text-[#333333]">iPhone 13</span>
                </div>
                <div className=" flex justify-between leading-6">
                  <span className=" text-[#333333]">商品選項</span>
                  <span className=" text-[#333333]">
                    iphone 13 Pro Max, 512GB 黑色{' '}
                  </span>
                </div>
                <div className=" flex justify-between leading-6">
                  <span className=" text-[#333333]">商品數量</span>
                  <span className=" text-[#333333]">1</span>
                </div>
                <div className=" flex justify-between leading-6">
                  <span className=" text-[#333333]">單價</span>
                  <span className=" text-[#FF5353] ">{`NT$${(110000).toLocaleString()}`}</span>
                </div>
              </div>
              <div className="mt-[25px]">
                <span className="font-bold ">個人資訊</span>
                <div className="mt-[10px] flex justify-between leading-6">
                  <span className=" text-[#333333]">姓名</span>
                  <span className=" text-[#333333]">Sophie </span>
                </div>
                <div className=" flex justify-between leading-6">
                  <span className=" text-[#333333] ">手機號碼</span>
                  <span className=" text-[#333333]">{`+886 ${'091234567'}`}</span>
                </div>
                <div className=" flex justify-between">
                  <span className=" text-[#333333] ">Email</span>
                  <span className=" text-[#333333]">sophie@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReserveText />
      </div>
    </div>
  );
};

export default SuccessPage;
