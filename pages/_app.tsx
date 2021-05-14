import { Provider } from 'react-redux';
import { persistor, store } from '../components/redux/setup/store';
import { PersistGate } from 'redux-persist/integration/react';
import { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
