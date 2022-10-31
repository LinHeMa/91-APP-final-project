import classNames from 'classnames';
interface dotProps {
  isPlaying: boolean;
  clickFn: (index: number) => void;
  index: number;
}
const CarousellDot: React.FC<dotProps> = ({ isPlaying, clickFn, index }) => {
  const dotClass = classNames({
    'w-[13px] h-[13px] border border-solid border-[#D2D2D2] rounded-full cursor-pointer mx-[4px]':
      true,
    'bg-[#D9D9D9]': isPlaying,
  });
  return <div className={dotClass} onClick={() => clickFn(index)} />;
};

export default CarousellDot;
