import React from 'react';
import ReactDOM from 'react-dom/client';

//https://mui.com/material-ui/getting-started/installation/
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './Home';
import { Backdrop, CircularProgress } from '@mui/material';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
