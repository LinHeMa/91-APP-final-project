import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import CarousellDot from './CarousellDot';
import ChooseButton from './ChooseButton';
import Label from './Label';
import { useMediaQuery } from 'usehooks-ts';
import _ from 'lodash';
import useVideoPlayer from '../hooks/useVideoPlayer';
import { carousellImgType } from '../data/carousellImg';

interface ReserveCarousellProps {
  photoArr: string[];
  photoArr2?: carousellImgType[];
  leftPosition: string;
  rightPosition: string;
  currentPage: string;
  directionIconWidth: string;
  directionIconHeight: string;
  directionIconTop: string;
  photoWidth: string;
  photoHeight: string;
}
interface touchEventTypes {
  trace: number[];
}

const ReserveCarousell = ({
  photoArr,
  leftPosition,
  rightPosition,
  currentPage,
  directionIconWidth,
  directionIconHeight,
  directionIconTop,
  photoWidth,
  photoHeight,
}: ReserveCarousellProps) => {
  const onMobile = useMediaQuery('(max-width: 768px)');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [onPhoto, setOnPhoto] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const photoCount = (array: string[]) => array.length - 1;
  const videoElement = useRef(null);

  const isVideo = (file: string) => {
    return _.findLast(_.split(file, '.')) === 'mp4';
  };
  const vidRef = useRef<number[]>();
  function findAllIndex(array: any[]) {
    const resultIndexArray = [];
    for (let i = 0; i < array.length; i += 1) {
      if (isVideo(array[i])) resultIndexArray.push(i);
    }
    return resultIndexArray;
  }
  vidRef.current = findAllIndex(photoArr);
  const {
    isPlaying,
    progress,
    setProgress,
    togglePlay,
    handleOnTimeUpdate,
    setIsPlaying,
  } = useVideoPlayer(videoElement);
  const nextPhoto = () => {
    if (photoIndex === photoCount(photoArr)) return setPhotoIndex(0);
    setPhotoIndex((prev) => prev + 1);
  };
  const prevPhoto = () => {
    if (photoIndex === 0) return setPhotoIndex(photoCount(photoArr));
    setPhotoIndex((prev) => prev - 1);
  };
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const [mouseDownX, setMouseDownX] = useState(0);
  const [touchEvent, setTouchEvent] = useState<touchEventTypes>({ trace: [] });

  const dragPhoto = (prevX: number, X: number) => {
    if (X - prevX < 0) return nextPhoto();
    if (X - prevX > 0) return prevPhoto();
  };
  const addTimer = _.throttle(() => {
    timerRef.current = setInterval(() => {
      setPhotoIndex((prev) => {
        if (prev === photoCount(photoArr)) return 0;
        return prev + 1;
      });
    }, 3000);
  }, 500);

  const selectPhotoIndex = (index: number) => {
    if (videoElement.current) {
      const video = videoElement.current as unknown as HTMLVideoElement;
      video.pause();
    }
    setPhotoIndex(index);
    setIsPlaying(false);
    clearInterval(timerRef.current);
  };
  useEffect(() => {
    if (!onPhoto) {
      addTimer();
    }
    setTouchEvent({ trace: [] });
    return () => {
      clearInterval(timerRef.current);
    };
  }, [onPhoto, isTouching]);

  useEffect(() => {
    if (_.includes(vidRef.current, photoIndex)) {
      clearInterval(timerRef.current);
      return togglePlay();
    }
    setIsPlaying(false);
  }, [photoIndex]);
  useEffect(() => {
    if (!onPhoto && !isPlaying && progress === 100) {
      addTimer();
      setProgress(0);
    }
  }, [isPlaying]);

  return (
    <div
      className="flex flex-col justify-center items-center"
      onMouseEnter={() => {
        if (onMobile || isPlaying) return;
        setOnPhoto(true);
      }}
      onMouseLeave={() => {
        if (onMobile || isPlaying) return;
        setOnPhoto(false);
      }}
      onMouseDown={(e) => {
        if (onMobile) return;
        setMouseDownX(e.pageX);
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
      <span
        className={`relative ${photoWidth} ${photoHeight} flex overflow-hidden justify-center items-center`}
      >
        {currentPage === 'reservation' && (
          <span className=" absolute top-10 right-5 z-50">
            <Label total={photoCount(photoArr) + 1} index={photoIndex + 1} />
          </span>
        )}

        <div
          className={classNames({
            'absolute  w-full h-full top-0 left-0 z-10': true,
            'bg-[#fafafa]': currentPage === 'reservation',
            'bg-white': currentPage === 'product',
          })}
        />
        <div
          className={`
            absolute w-full h-full top-0 left-0 z-10 ${
              currentPage === 'reservation'
                ? 'bg-[#fafafa]'
                : currentPage === 'product'
                ? 'bg-white'
                : ''
            } `}
        />
        {photoArr.map((photo, index) => (
          <div
            key={_.toString(index)}
            // style={{ transition: 'opacity 0.25s ease, position 0.7s linear' }}
            className={classNames({
              'absolute z-0 min-w-full transition-all': true,
              [`${leftPosition} duration-700 ease-in-out`]:
                index === photoIndex - 1,
              [`${leftPosition} duration-700 opacity-0 ease-in-out`]:
                index === photoCount(photoArr) &&
                index !== photoIndex - 1 &&
                index !== photoIndex &&
                index !== photoIndex + 1,
              'left-0 z-40 duration-700 ease-in-out': index === photoIndex,
              [`${rightPosition} duration-700 ease-in-out`]:
                index === photoIndex + 1,
              [`${rightPosition} duration-700 opacity-0 ease-in-out`]:
                index === 0 &&
                index !== photoIndex - 1 &&
                index !== photoIndex &&
                index !== photoIndex + 1,
            })}
          >
            {!isVideo(photo) && (
              <img
                src={photo}
                alt="iphone照片"
                draggable={false}
                className={'w-full h-auto'}
              />
            )}

            {isVideo(photo) && (
              <div>
                <video
                  onTimeUpdate={handleOnTimeUpdate}
                  src={photo}
                  draggable={false}
                  ref={photoIndex === index ? videoElement : null}
                  className={`${photoWidth} ${photoHeight}`}
                  controls
                  muted={true}
                />
              </div>
            )}
          </div>
        ))}
        <span
          className={`absolute ${directionIconTop} ${
            currentPage === 'product' ? 'right-2' : 'right-1'
          } z-50`}
        >
          <ChooseButton
            direction="right"
            clickFn={nextPhoto}
            currentPage={currentPage}
            width={directionIconWidth}
            height={directionIconHeight}
            shouldShowButton={photoIndex === photoArr.length - 1}
          />
        </span>
        <span
          className={`absolute ${directionIconTop} ${
            currentPage === 'product' ? 'left-2' : 'left-1'
          } z-50`}
        >
          <ChooseButton
            direction="left"
            clickFn={prevPhoto}
            currentPage={currentPage}
            width={directionIconWidth}
            height={directionIconHeight}
            shouldShowButton={photoIndex === 0}
          />
        </span>
      </span>
      <div className="flex">
        {photoArr.map((_, index) => (
          <span key={photoArr[index]}>
            <CarousellDot
              isPlaying={photoIndex === index}
              index={index}
              clickFn={selectPhotoIndex}
              // FIXME too much 三元判斷
              width={currentPage === 'reservation' ? 'w-[13px]' : 'w-[8px]'}
              height={currentPage === 'reservation' ? 'h-[13px]' : 'h-[8px]'}
              defaultBgColor={
                currentPage === 'reservation' ? '' : 'bg-[#D8D9D8]'
              }
              borderColor={
                currentPage === 'reservation' ? 'border-[#D2D2D2]' : ''
              }
              bgColor={
                currentPage === 'reservation' ? 'bg-[#D9D9D9]' : 'bg-[#4B4E5B]'
              }
              marginRight={
                currentPage === 'reservation' ? 'mr-[8px]' : 'mr-[10px]'
              }
              totalLength={photoArr.length}
              currentPage={currentPage}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReserveCarousell;
