import React from 'react';
import Layout from '../src/components/Layout';
import '../styles/globals.css';
import '../src/assets/styles.css'; // Import the original React app styles

function MyApp({ Component, pageProps }) {
  // Get the layout props from the page component
  const getLayout = Component.getLayout || ((page) => page);
  
  // Use the layout defined at the page level if available
  return (
    <Layout navOptions={pageProps.navOptions || {}}>
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  );
}

export default MyApp;
