import leftArrow from '../assets/reserve/leftArrow.png';
import rightArrow from '../assets/reserve/rightArrow.png';

interface ChooseProps {
  direction: string;
  clickFn: () => void;
}

const ChooseButton = ({ direction, clickFn }: ChooseProps) => {
  return (
    <div
      className=" cursor-pointer bg-white w-[42px] h-[42px] rounded-full flex justify-center items-center drop-shadow-sm"
      onClick={clickFn}
    >
      <img
        src={direction === 'right' ? rightArrow : leftArrow}
        alt="directionBtn"
      />
    </div>
  );
};

export default ChooseButton;
