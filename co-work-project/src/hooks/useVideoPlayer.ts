import { useEffect, useState } from 'react';

export default function useVideoPlayer(
  videoElement: React.MutableRefObject<HTMLVideoElement | null>
) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  console.log(isPlaying,progress,isMuted)
  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    isPlaying ? videoElement.current?.play() : videoElement.current?.pause();
  }, [isPlaying, videoElement]);

  function toggleMute() {
    setIsMuted(!isMuted);
  }

  useEffect(() => {
    if (videoElement.current) {
      isMuted
        ? (videoElement.current.muted = true)
        : (videoElement.current.muted = false);
    }
  }, [isMuted, videoElement]);

  function handleOnTimeUpdate() {
    if (videoElement.current) {
      const progress =
        (videoElement.current.currentTime / videoElement.current.duration) *
        100;
      setProgress(progress);
    }
  }

  function handleVideoProgress(event: { target: { value: unknown } }) {
    const manualChange = Number(event.target.value);
    if (videoElement.current) {
      videoElement.current.currentTime =
        (videoElement.current.duration / 100) * manualChange;
      setProgress(manualChange);
    }
  }

  useEffect(() => {
    if (progress >= 100) {
      togglePlay();
    }
  }, [progress]);
  useEffect(() => {
    togglePlay();
  }, [videoElement]);
  return {
    isPlaying,
    progress,
    isMuted,
    setProgress,
    setIsPlaying,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute,
  };
}
