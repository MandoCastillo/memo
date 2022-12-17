import React from 'react';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';

import { MemoramaBoard } from '@/modules/memorama';
import { theme } from '@/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MemoramaBoard />
    </ChakraProvider>
  </React.StrictMode>
);
