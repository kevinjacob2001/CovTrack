import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectUser } from '../../features/userSlice';
import ChatBot from './ChatBot';

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Jost',
  headerBgColor: '#232F41',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#232F41',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  
  userFontColor: '#4a4a4a',
};


const ThemedExample = () => (
  
  <ThemeProvider theme={theme}>
    <ChatBot />;
  </ThemeProvider>
);

export default ThemedExample;