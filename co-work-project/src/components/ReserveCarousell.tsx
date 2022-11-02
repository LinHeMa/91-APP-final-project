import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import carousellImg from '../data/carousellImg';
import CarousellDot from './CarousellDot';
import ChooseButton from './ChooseButton';
import Label from './Label';
interface touchEventTypes {
  trace: number[];
}

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
  const [mouseDownX, setMouseDownX] = useState(0);
  const [touchEvent, setTouchEvent] = useState<touchEventTypes>({ trace: [] });

  const dragPhoto = (prevX: number, X: number) => {
    if (X - prevX < 0) return nextPhoto();
    if (X - prevX > 0) return prevPhoto();
  };
  const addTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setPhotoIndex((prev) => {
        if (prev === photoCount(carousellImg)) return 0;
        return prev + 1;
      });
    }, 2000);
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
        clearInterval(timerRef.current);
      }}
      onMouseLeave={() => {
        addTimer();
      }}
      onMouseDown={(e) => {
        setMouseDownX(e.pageX);
        clearInterval(timerRef.current);
        e.preventDefault();
      }}
      onMouseUp={(e) => {
        dragPhoto(mouseDownX, e.pageX);
      }}
      onTouchStart={(e) => {
        clearInterval(timerRef.current);
        e.preventDefault();
      }}
      onTouchMove={(e) => {
        setTouchEvent((prev) => {
          return { trace: [...prev.trace, e.targetTouches[0].clientX] };
        });
      }}
      onTouchEnd={() => {
        const touchStartAt = touchEvent.trace[0];
        const touchEndAt = touchEvent.trace[touchEvent.trace.length - 1];
        dragPhoto(touchStartAt, touchEndAt);
      }}
    >
      <span className="relative w-[359px] h-[424px] flex overflow-hidden justify-center items-center">
        <span className=" absolute top-10 right-5 z-50">
          <Label total={photoCount(carousellImg) + 1} index={photoIndex + 1} />
        </span>
        <div className=" absolute bg-white w-full h-full top-0 left-0 z-10" />
        {carousellImg.map((photo, index) => (
          <img
            src={photo}
            key={photo}
            alt="iphone照片"
            className={classNames({
              'absolute min-w-[358px] z-0 ': true,
              '-left-[359px] duration-700': index === photoIndex - 1,
              '-left-[359px] opacity-0 duration-700':
                index === photoCount(carousellImg) &&
                index !== photoIndex - 1 &&
                index !== photoIndex &&
                index !== photoIndex + 1,
              'left-0 z-40 duration-700': index === photoIndex,
              'left-[359px] duration-700': index === photoIndex + 1,
              'left-[359px] opacity-0 duration-700':
                index === 0 &&
                index !== photoIndex - 1 &&
                index !== photoIndex &&
                index !== photoIndex + 1,
            })}
          />
        ))}
        <span className="absolute top-[210px] right-0 z-50">
          <ChooseButton direction="left" clickFn={nextPhoto} />
        </span>
        <span className="absolute top-[210px] left-0 z-50">
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
