import { useCallback, useEffect, useRef, useState } from 'react';
import carousellImg from '../data/carousellImg';
import CarousellDot from './CarousellDot';
import ChooseButton from './ChooseButton';
import Label from './Label';
const ReserveCarousell = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photoCount = (array: string[]) => array.length - 1;
  const nextPhoto = () => {
    if (photoIndex === photoCount(carousellImg)) return setPhotoIndex(0);
    setPhotoIndex((prev) => prev + 1);
  };
  const prevPhoto = () => {
    if (photoIndex === 0) return setPhotoIndex(photoCount(carousellImg));
    setPhotoIndex((prev) => prev - 1);
  };
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const addTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setPhotoIndex((prev) => {
        if (prev === photoCount(carousellImg)) return 0;
        return prev + 1;
      });
    }, 1000);
  }, [timerRef]);
  const selectPhotoIndex = (index: number) => {
    setPhotoIndex(index);
    clearInterval(timerRef.current);
  };
  useEffect(() => {
    addTimer();
    return () => {
      clearInterval(timerRef.current);
    };
  }, [addTimer]);

  return (
    <div
      className="flex flex-col justify-center items-center"
      onMouseEnter={() => {
        console.log('in');
        clearInterval(timerRef.current);
      }}
      onMouseLeave={() => {
        console.log('out');
        addTimer();
      }}
    >
      <span className="relative  h-[424px] flex  justify-center items-center">
        <span className=' absolute top-10 right-5'>
          <Label total={photoCount(carousellImg) + 1} index={photoIndex + 1} />
        </span>
        <img src={carousellImg[photoIndex]} alt="iphone照片"/>
        <span className="absolute top-[210px] right-0">
          <ChooseButton direction="left" clickFn={nextPhoto} />
        </span>
        <span className="absolute top-[210px] left-0">
          <ChooseButton direction="right" clickFn={prevPhoto} />
        </span>
      </span>
      <div className="flex">
        {carousellImg.map((_, index) => (
          <CarousellDot
            isPlaying={photoIndex === index}
            key={carousellImg[index]}
            index={index}
            clickFn={selectPhotoIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ReserveCarousell;
