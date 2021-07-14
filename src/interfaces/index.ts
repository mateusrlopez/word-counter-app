export interface WordCount {
  word: string;
  count: number;
}

export interface WordCountTableProps {
  wordCountArray: WordCount[];
}

export interface FormProps {
  setWordCountArray: (wordCountArray: WordCount[]) => void;
}
