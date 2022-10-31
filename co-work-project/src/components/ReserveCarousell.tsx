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
  const dragItem = useRef<number>();
  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    const target = e.target as HTMLInputElement;
    dragItem.current = position;
    console.log(target?.innerHTML);
    console.log('drag');
  };

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
        clearInterval(timerRef.current);
      }}
      onMouseLeave={() => {
        addTimer();
      }}
      onMouseDown={(e) => {
        setMouseDownX(e.pageX);
        clearInterval(timerRef.current);
      }}
      onMouseUp={(e) => {
        dragPhoto(mouseDownX, e.pageX);
        addTimer();
      }}
      onTouchStart={(e) => {
        clearInterval(timerRef.current);
      }}
      onTouchMove={(e) => {
        setTouchEvent((prev) => {
          return { trace: [...prev.trace, e.targetTouches[0].clientX] };
        });
      }}
      onTouchEnd={(e) => {
        const touchStartAt = touchEvent.trace[0];
        const touchEndAt = touchEvent.trace[touchEvent.trace.length - 1];
        dragPhoto(touchStartAt, touchEndAt);
        addTimer();
      }}
    >
      <span className="relative w-[359px] h-[424px] overflow-hidden flex  justify-center items-center">
        <span className=" absolute top-10 right-5">
          <Label total={photoCount(carousellImg) + 1} index={photoIndex + 1} />
        </span>
        <img
          src={carousellImg[photoIndex]}
          alt="iphone照片"
          className="min-w-[358px]"
          draggable={true}
          onDragStart={(e) => dragStart(e, photoIndex)}
        />
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
