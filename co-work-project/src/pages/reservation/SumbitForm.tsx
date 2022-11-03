import Form from '../../components/Form';

const SumbitForm = () => {
  return (
    <div className="w-full items-center bg-[#f2f2f2] md:pb-[143px]">
      <div className="text-center pt-[30px] pb-[20px] md:pt-[56px] ">
        <h1 className="hidden md:block font-bold text-[24px] leading-40 md:text-[64px] md:leading-80 mb-[66px]">
          iPhone新機搶先登記
        </h1>
        <h1 className="font-bold text-[24px] leading-40 md:text-[64px] md:leading-80 mb-[10px] md:hidden">
          立即登記！搶先擁有 iPhone 13
        </h1>
        <span className="md:hidden text-[14px] font-medium text-[#545454] block leading-19">
          預約時間：2021/9/17 13:00:00~ 2021/9/20 12:59:59
        </span>
        <span className="hidden md:block text-[24px] font-medium text-[#545454]  leading-30 mb-[7px]">
          活動日期：即日起 - 9/21
        </span>
        <span className="text-[14px] font-medium text-[#FF5353] block leading-19 md:text-[24px] md:leading-30 md:mb-[60px]">
          登記的手機號碼需與會員手機號碼相同，每人限購一支
        </span>
        <span className="underline text-[#428BCA] text-[14px] leading-19 md:hidden">
          {'加碼贈品與活動說明 >'}
        </span>
      </div>
      <Form />
    </div>
  );
};

export default SumbitForm;
