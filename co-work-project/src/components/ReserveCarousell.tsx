import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import carousellImg from '../data/carousellImg';
import CarousellDot from './CarousellDot';
import ChooseButton from './ChooseButton';
import Label from './Label';
import { useMediaQuery } from 'usehooks-ts';
interface touchEventTypes {
  trace: number[];
}

const ReserveCarousell = () => {
  const onMobile = useMediaQuery('(max-width: 768px)');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [onPhoto, setOnPhoto] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const photoCount = (array: string[]) => array.length - 1;
  const nextPhoto = () => {
    console.log('next', photoIndex);
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
    //  TODO change trace to useref
    //  TODO move istouching to onTouchend ()
    if (!onPhoto) addTimer();
    setTouchEvent({ trace: [] });
    return () => {
      clearInterval(timerRef.current);
    };
  }, [addTimer, onPhoto, isTouching]);

  return (
    <div
      className="flex flex-col justify-center items-center"
      onMouseEnter={() => {
        if (onMobile) return;
        setOnPhoto(true);
      }}
      onMouseLeave={() => {
        if (onMobile) return;
        setOnPhoto(false);
      }}
      onMouseDown={(e) => {
        if (onMobile) return;
        setMouseDownX(e.pageX);
        clearInterval(timerRef.current);
      }}
      onMouseUp={(e) => {
        if (onMobile) return;
        dragPhoto(mouseDownX, e.pageX);
      }}
      onTouchMove={(e) => {
        if (!onMobile) return;
        setTouchEvent((prev) => {
          return { trace: [...prev.trace, e.targetTouches[0].clientX] };
        });
      }}
      onTouchEnd={() => {
        if (!onMobile) return;
        setIsTouching((prev) => !prev);
        const touchStartAt = touchEvent.trace[0];
        const touchEndAt = touchEvent.trace[touchEvent.trace.length - 1];
        if (touchStartAt && touchEndAt) dragPhoto(touchStartAt, touchEndAt);
      }}
    >
      <span className="relative w-[359px] h-[424px] flex overflow-hidden justify-center items-center">
        <span className=" absolute top-10 right-5 z-50">
          <Label total={photoCount(carousellImg) + 1} index={photoIndex + 1} />
        </span>
        <div className=" absolute bg-[#fafafa] w-full h-full top-0 left-0 z-10" />
        {carousellImg.map((photo, index) => (
          <img
            draggable={false}
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
          <span
            key={carousellImg[index]}
            onClick={() => {
              addTimer();
            }}
          >
            <CarousellDot
              isPlaying={photoIndex === index}
              index={index}
              clickFn={selectPhotoIndex}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReserveCarousell;
