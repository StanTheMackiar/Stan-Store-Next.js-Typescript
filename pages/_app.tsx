import React, { FunctionComponent } from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import "../styles/globals.scss";

import dynamic from "next/dynamic";
import createEmotionCache from "../src/utility/createEmotionCache";
import { ShoppingProvider } from "../src/context/ShoppingContext";
import { FiltersProvider } from "../src/context/FiltersContext";

const ColorModeProvider = dynamic(
  () => import("../src/context/ColorModeContext"),
  { ssr: false }
);

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeProvider>
        <ShoppingProvider>
          <FiltersProvider>
            <Component {...pageProps} />
          </FiltersProvider>
        </ShoppingProvider>
      </ColorModeProvider>
    </CacheProvider>
  );
};

export default MyApp;
