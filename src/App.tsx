import React, { useState } from 'react';

import AppContainer from './components/container';
import Form from './components/form';
import WordsTable from './components/wordsTable';
import { WordCount } from './utils/interfaces';

const App: React.FC = () => {
  const [wordCountArray, setWordCountArray] = useState<WordCount[]>([]);

  return (
    <AppContainer>
      <Form setWordCountArray={setWordCountArray} />
      {wordCountArray.length > 0 ? <WordsTable wordCountArray={wordCountArray} /> : undefined}
    </AppContainer>
  );
};

export default App;
