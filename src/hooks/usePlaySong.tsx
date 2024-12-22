import { useState, useRef, useEffect } from "react";

export function usePlaySong(songSrc: string) {
  const [isPlayingSong, setIsPlayingSong] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(songSrc);

    audioRef.current.loop = true;
    audioRef.current.play();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [songSrc]);
  const togglePlaySong = () => {
    if (audioRef.current) {
      if (isPlayingSong) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlayingSong((prev) => !prev);
    }
  };
  return { isPlayingSong, setIsPlayingSong, togglePlaySong };
}
