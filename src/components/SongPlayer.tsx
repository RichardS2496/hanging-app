import { usePlaySong } from "../hooks/usePlaySong";
import song01 from "../assets/songs/song01.mp3";
import { PlaySongBtn } from "./PlaySongBtn";
import { PauseSongBtn } from "./PauseSongBtn";
import "../styles/buttons.css";

export function SongPlayer() {
  const { isPlayingSong, togglePlaySong } = usePlaySong(song01);

  return (
    <>
      <button onClick={togglePlaySong} className="song-toggle-btn">
        {!isPlayingSong ? (
          <>
            <PauseSongBtn />
          </>
        ) : (
          <>
            <PlaySongBtn />
          </>
        )}
      </button>
    </>
  );
}
