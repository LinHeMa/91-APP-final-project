import leftArrow from '../assets/reserve/leftArrow.png';
import rightArrow from '../assets/reserve/rightArrow.png';
import rightImg from '../assets/productImgs/rightIcon.png';
import leftImg from '../assets/productImgs/leftIcon.png';

interface ChooseProps {
  direction: string;
  clickFn: () => void;
  width: string;
  height: string;
  currentPage: string;
  shouldShowButton: boolean;
}

const ChooseButton = ({
  direction,
  clickFn,
  width,
  height,
  currentPage,
  shouldShowButton,
}: ChooseProps) => {
  return (
    <div
      className={`${
        currentPage === 'product' && shouldShowButton ? 'hidden' : 'block'
      } cursor-pointer ${
        currentPage === 'reservation'
          ? 'bg-white rounded-full drop-shadow-sm'
          : ''
      } ${width} ${height}  flex justify-center items-center `}
      onClick={clickFn}
    >
      {currentPage === 'reservation' && (
        <img
          src={direction === 'right' ? rightArrow : leftArrow}
          alt="directionBtn"
        />
      )}
      {currentPage === 'product' && (
        <img
          src={direction === 'right' ? leftImg : rightImg}
          alt="directionBtn"
        />
      )}
    </div>
  );
};

export default ChooseButton;
