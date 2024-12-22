export interface LettersBoardProps {
  checkLetter: (letter: string) => void;
  alreadyPressed: (key: string) => void;
  usedKeys: string[];
  lose: boolean;
  won: boolean;
}
