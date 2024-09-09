import { AppProps } from 'next/app';
import { Toaster } from "react-hot-toast";
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Toaster /> {/* Add this to show toasts across the app */}
  </>
);

export default MyApp;
