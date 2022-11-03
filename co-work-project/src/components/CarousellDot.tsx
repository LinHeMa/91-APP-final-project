import classNames from 'classnames';
interface dotProps {
  isPlaying: boolean;
  clickFn: (index: number) => void;
  index: number;
  width: string;
  height: string;
  borderColor: string;
  bgColor: string;
  marginRight: string;
  totalLength: number;
}
const CarousellDot: React.FC<dotProps> = ({
  isPlaying,
  clickFn,
  index,
  width,
  height,
  borderColor,
  bgColor,
  marginRight,
  totalLength,
}) => {
  return (
    <div
      className={`${width} border ${height} border-solid ${borderColor} rounded-full cursor-pointer ${
        totalLength - 1 !== index && marginRight
      } ${isPlaying && bgColor}`}
      onClick={() => clickFn(index)}
    />
  );
};

export default CarousellDot;
