import {
  createDOMRenderer,
  RendererProvider,
  SSRProvider,
} from "@fluentui/react-components";

function MyApp({ Component, pageProps, renderer }) {
  return (
    // 👇 accepts a renderer from <Document /> or creates a default one
    <RendererProvider renderer={renderer || createDOMRenderer()}>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </RendererProvider>
  );
}

export default MyApp;
