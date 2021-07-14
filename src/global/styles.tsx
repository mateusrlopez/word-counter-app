import { css, Global } from '@emotion/react';
import React from 'react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');

  body {
    ${tw`font-serif bg-main bg-purple-600`}
  }
`;

const GlobalStyles: React.FC = () => {
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  );
};

export default GlobalStyles;
