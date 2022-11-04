import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import CarousellDot from './CarousellDot';
import ChooseButton from './ChooseButton';
import Label from './Label';
import { useMediaQuery } from 'usehooks-ts';
import _ from 'lodash';
import useVideoPlayer from '../hooks/useVideoPlayer';

interface ReserveCarousellProps {
  photoArr: string[];
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
  const {
    isPlaying,
    progress,
    isMuted,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    setIsPlaying,
    toggleMute,
  } = useVideoPlayer(videoElement);
  console.log(setIsPlaying);
  const nextPhoto = () => {
    console.log('next', photoIndex);
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
  const addTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setPhotoIndex((prev) => {
        if (prev === photoCount(photoArr)) return 0;
        return prev + 1;
      });
    }, 2000);
  }, [timerRef]);
  const selectPhotoIndex = (index: number) => {
    setPhotoIndex(index);
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

  const isVideo = (file: string) => {
    return _.findLast(_.split(file, '.'));
  };

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
      <span
        className={`relative ${photoWidth} ${photoHeight} flex overflow-hidden justify-center items-center`}
      >
        {currentPage === 'reservation' && (
          <span className=" absolute top-10 right-5 z-50">
            <Label total={photoCount(photoArr) + 1} index={photoIndex + 1} />
          </span>
        )}

        <div className=" absolute bg-[#fafafa] w-full h-full top-0 left-0 z-10" />
        {photoArr.map((photo, index) => (
          <div
            key={photo}
            className={classNames({
              'absolute z-0 min-w-full ': true,
              [`${leftPosition} duration-700`]: index === photoIndex - 1,
              [`${leftPosition} duration-700 opacity-0`]:
                index === photoCount(photoArr) &&
                index !== photoIndex - 1 &&
                index !== photoIndex &&
                index !== photoIndex + 1,
              'left-0 z-40 duration-700': index === photoIndex,
              [`${rightPosition} duration-700`]: index === photoIndex + 1,
              [`${rightPosition} duration-700 opacity-0`]:
                index === 0 &&
                index !== photoIndex - 1 &&
                index !== photoIndex &&
                index !== photoIndex + 1,
            })}
          >
            {isVideo(photo) === 'png' && (
              <img
                src={photo}
                alt="iphone照片"
                draggable={false}
                className={'w-full'}
              />
            )}
            {isVideo(photo) === 'mp4' && (
              <div>
                <div>
                  <button onClick={togglePlay}>start</button>
                </div>
                <video
                  src={photo}
                  draggable={false}
                  ref={videoElement}
                  onTimeUpdate={handleOnTimeUpdate}
                  className={'w-full'}
                  controls
                />
              </div>
            )}
          </div>
        ))}
        <span
          className={`absolute ${directionIconTop} ${
            currentPage === 'product' ? 'right-2' : 'right-0'
          } z-50`}
        >
          <ChooseButton
            direction="left"
            clickFn={nextPhoto}
            currentPage={currentPage}
            width={directionIconWidth}
            height={directionIconHeight}
            shouldShowButton={photoIndex === photoArr.length - 1}
          />
        </span>
        <span
          className={`absolute ${directionIconTop} ${
            currentPage === 'product' ? 'left-2' : 'left-0'
          } z-50`}
        >
          <ChooseButton
            direction="right"
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
