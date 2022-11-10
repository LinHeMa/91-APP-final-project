import rightArrow from '../assets/reserve/rightArrow.webp';
import leftArrow from '../assets/reserve/leftArrow.webp';
import rightImg from '../assets/productImgs/rightIcon.webp';
import leftImg from '../assets/productImgs/leftIcon.webp';

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
          src={direction === 'right' ? rightImg : leftImg}
          alt="directionBtn"
        />
      )}
    </div>
  );
};

export default ChooseButton;
