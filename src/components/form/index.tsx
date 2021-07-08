import React, { useState } from 'react';

import { SAMPLE_TEXT } from '../../utils/constants';
import { FormProps, WordCount } from '../../utils/interfaces';
import { FormButton, FormButtonBar, FormContainer, FormInput } from './styles';

const Form: React.FC<FormProps> = ({ setWordCountArray }) => {
  const [inputText, setInputText] = useState('');

  function countWords(): void {
    const matches = inputText.match(new RegExp(/([\wçáàãâéêóõôúíñ]+)/, 'gi'));

    if (!matches) return;

    const words = matches.map(value => value.toLowerCase());
    const uniqueWords = words.filter((value, index, array) => array.indexOf(value) === index);

    const wordCountArray: WordCount[] = uniqueWords
      ?.map(value => ({
        word: value,
        count: words.filter(subValue => subValue === value).length,
      }))
      .sort((word1, word2) =>
        word1.count === word2.count ? -(word2.count > word1.count) : word2.count - word1.count
      );

    setWordCountArray(wordCountArray);
  }

  function reset(): void {
    setInputText('');
    setWordCountArray([]);
  }

  return (
    <FormContainer>
      <FormInput
        placeholder='Insert the text here'
        value={inputText}
        onChange={event => setInputText(event.target.value)}
      />

      <FormButtonBar>
        <FormButton onClick={countWords} type='button'>
          Count
        </FormButton>
        <FormButton onClick={() => setInputText(SAMPLE_TEXT)} type='button'>
          Load Sample
        </FormButton>
        <FormButton onClick={reset} type='button'>
          Reset
        </FormButton>
      </FormButtonBar>
    </FormContainer>
  );
};

export default Form;
