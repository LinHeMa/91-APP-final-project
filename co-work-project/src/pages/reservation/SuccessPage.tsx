import heartImg from '../../assets/reserve/img_heart.png';
import ReserveText from '../../components/ReserveText';

const SuccessPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-[100px]">
      <h1 className="w-[300px] h-[40px] text-[24px] font-bold  mt-[30px] flex justify-center items-center mb-[2px]">
        恭喜您！驗證成功
      </h1>
      <div className="w-[191px] h-[152px]  mb-[2px]">
        <img className="w-[100%] h-[100%]" src={heartImg} alt="heartImg" />
      </div>
      <span className="w-[162px] h-[48px] text-[#333333] text-center mb-[18px]">
        已完成 iphone 13 登記 敬請等候開賣通知
      </span>
      <span className="text-[#ff5353] text-center w-[342px] h-[54px] font-medium mb-5">
        注意：簡訊驗證通過才算有登記，完成登記的手機號碼需與會員手機號碼相同，每人限購一支
      </span>
      <div className="h-[378px] bg-[#f2f2f2] w-full">
        <div className="w-[343px] h-[348px] mt-[30px] mx-auto">
          <span className="font-bold w-[98px] h-[20px] ">登記資訊如下：</span>
          <div className="border-b-[1px] border-b-[#D8D8D8] mt-[9px]"></div>
          <div className="w-[327px] h-[304px] mt-[15px]">
            <div className="flex justify-between">
              <span className="font-bold text-[14px]">登記狀態</span>
              <span className="font-bold text-[14px]">驗證通過</span>
            </div>
            <div className="mt-[10px]">
              <span className="font-bold text-[14px]">商品資訊</span>
              <div className="mt-[10px] flex justify-between ">
                <span className="text-[14px] text-[#333333]">商品</span>
                <span className="text-[14px] text-[#333333]">iPhone 13</span>
              </div>
              <div className=" flex justify-between ">
                <span className="text-[14px] text-[#333333]">商品選項</span>
                <span className="text-[14px] text-[#333333]">
                  iphone 13 Pro Max, 512GB 黑色{' '}
                </span>
              </div>
              <div className=" flex justify-between ">
                <span className="text-[14px] text-[#333333]">商品數量</span>
                <span className="text-[14px] text-[#333333]">1</span>
              </div>
              <div className=" flex justify-between ">
                <span className="text-[14px] text-[#333333]">單價</span>
                <span className="text-[14px] text-[#FF5353] ">{`NT$${(110000).toLocaleString()}`}</span>
              </div>
            </div>
            <div className="mt-[25px]">
              <span className="font-bold text-[14px]">個人資訊</span>
              <div className="mt-[10px] flex justify-between ">
                <span className="text-[14px] text-[#333333]">姓名</span>
                <span className="text-[14px] text-[#333333]">Sophie </span>
              </div>
              <div className=" flex justify-between">
                <span className="text-[14px] text-[#333333] ">手機號碼</span>
                <span className="text-[14px] text-[#333333]">{`+886 ${'091234567'}`}</span>
              </div>
              <div className=" flex justify-between">
                <span className="text-[14px] text-[#333333] ">Email</span>
                <span className="text-[14px] text-[#333333]">
                  sophie@gmail.com
                </span>
              </div>
            </div>
          </div>

          <ReserveText />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
