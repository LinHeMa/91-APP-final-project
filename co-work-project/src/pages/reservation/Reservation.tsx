import ReserveCarousell from '../../components/ReserveCarousell';
import ReserveText from '../../components/ReserveText';
import flowImg from '../../assets/reserve/flow.png';
import carousellImg, { carousellImgWebp } from '../../data/carousellImg';

const Reservation = () => {
  return (
    <div className=" flex-grow basis-auto flex-shrink-0 bg-[#FAFAFA] md:pb-[150px] pt-[30px] md:pt-[61px]">
      <div className=" md:flex md:flex-row-reverse md:justify-center md:flex-wrap md:ml-[-50px]">
        <div className="md:ml-[29px]">
          <h1 className="font-bold text-[24px] text-center block h-10 md:h-[70px] lg:mt-[83px] md:text-[48px] ">
            iPhone新機搶先登記
          </h1>
          <span className="block text-center text-[#545454] text-[14px] font-medium md:text-[24px]  ">
            活動日期：即日起 - 9/23 (限量預約登記，額滿為止)
          </span>
          <span className="text-[#ff5353] block text-center text-[14px] mt-[7px] font-medium md:text-[24px] ">
            登記的手機號碼需與網購會員手機號碼相同，
            <br />
            每會員帳號限預約一支
          </span>
          <div className="mt-5 px-5 max-w-[571.94px] mx-auto md:w-[571.94px] md:h-[145px]">
            <img src={flowImg} alt="flowImg" className="w-[100%] h-[100%]" />
          </div>
        </div>
        <div className="mb-[36px] md:w-[544px] md:h-[544px]">
          <ReserveCarousell
            photoArr2={carousellImgWebp}
            photoArr={carousellImg}
            leftPosition="-left-[359px]"
            rightPosition="left-[359px]"
            currentPage="reservation"
            directionIconHeight="h-[42px]"
            directionIconWidth="w-[42px]"
            directionIconTop="top-[210px]"
            photoWidth="w-[359px]"
            photoHeight="h-[424px]"
          />
        </div>
      </div>
      <ReserveText />
    </div>
  );
};

export default Reservation;
