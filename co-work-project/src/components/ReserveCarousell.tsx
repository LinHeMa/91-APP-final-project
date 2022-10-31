import { useState } from 'react';
import carousellImg from '../data/carousellImg';
import useInterval from '../hooks/useInterval';
const ReserveCarousell = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photoCount = (array: string[]) => array.length - 1;
  useInterval(() => {
    if (photoIndex >= photoCount(carousellImg)) return setPhotoIndex(0);
    setPhotoIndex((prev) => prev + 1);
    console.log(photoIndex);
  }, 1000);
  return (
    <div>
      <img src={carousellImg[photoIndex]} alt="iphone照片" />
    </div>
  );
};

export default ReserveCarousell;
