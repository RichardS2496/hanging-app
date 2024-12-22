import { usePlaySong } from "../hooks/usePlaySong";
import song01 from "../assets/songs/song01.mp3";
import { PlaySongBtn } from "./PlaySongBtn";
import { PauseSongBtn } from "./PauseSongBtn";

export function SongPlayer() {
  const { isPlayingSong, togglePlaySong } = usePlaySong(song01);

  return (
    <div>
      <button onClick={togglePlaySong}>
        {isPlayingSong ? <PlaySongBtn /> : <PauseSongBtn />}
      </button>
    </div>
  );
}
