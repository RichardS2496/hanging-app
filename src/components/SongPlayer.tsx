import { usePlaySong } from "../hooks/usePlaySong";
import song01 from "../assets/songs/song01.mp3";

export function SongPlayer() {
  const { isPlayingSong, togglePlaySong } = usePlaySong(song01);

  return (
    <div>
      <button onClick={togglePlaySong}>
        {isPlayingSong ? "Pausar Canción" : "Reproducir Canción"}
      </button>
    </div>
  );
}
