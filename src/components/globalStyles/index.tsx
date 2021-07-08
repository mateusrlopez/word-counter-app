import { Global } from '@emotion/react';
import React from 'react';
import { GlobalStyles as BaseStyles } from 'twin.macro';

import { customStyles } from './styles';

const GlobalStyles: React.FC = () => {
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  );
};

export default GlobalStyles;
