import "./App.css";
import { HangImage } from "./components/HangImage";
import { LettersBoard } from "./components/LettersBoard";

function App() {
  return (
    <>
      <div className="App">
        <HangImage imageNumber={3} />
        <h3>Palabra oculta</h3>
        <h3>Intentos</h3>
        <LettersBoard />
      </div>
    </>
  );
}

export default App;
