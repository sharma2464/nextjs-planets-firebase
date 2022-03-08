import { KonstaProvider, Page, App } from "konsta/react";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <KonstaProvider theme="ios">
        <QueryClientProvider client={queryClient}>
          <App theme="ios">
            <Page>
              <Component {...pageProps} />
            </Page>
          </App>
        </QueryClientProvider>
      </KonstaProvider>
    </>
  );
}

export default MyApp;
