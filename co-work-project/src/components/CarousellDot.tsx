import classNames from 'classnames';
interface dotProps {
  isPlaying: boolean;
  clickFn: (index: number) => void;
  index: number;
  width: string;
  height: string;
  borderColor: string;
  bgColor: string;
  defaultBgColor: string;
  marginRight: string;
  totalLength: number;
  currentPage: string;
}
const CarousellDot: React.FC<dotProps> = ({
  isPlaying,
  clickFn,
  index,
  width,
  height,
  borderColor,
  bgColor,
  defaultBgColor,
  marginRight,
  totalLength,
  currentPage,
}) => {
  return (
    <div
      className={`${width} ${height} ${
        currentPage === 'product' ? 'mt-[12px]' : ''
      } ${
        currentPage === 'reservation'
          ? `border border-solid ${borderColor}`
          : ''
      }  rounded-full cursor-pointer ${
        totalLength - 1 !== index && marginRight
      } ${defaultBgColor} ${isPlaying && bgColor}`}
      onClick={() => clickFn(index)}
    />
  );
};

export default CarousellDot;
