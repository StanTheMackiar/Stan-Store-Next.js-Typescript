import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { PaletteMode } from "@mui/material/index";
import "../styles/globals.scss";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createEmotionCache from "../src/utility/createEmotionCache";
import { FiltersProvider } from "../src/context/FiltersContext";
import { ShoppingProvider } from "../src/context/ShoppingContext";
import themeOptions from "../styles/theme/themeOptions";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

// const initialTheme:'dark' | 'light' = window.localStorage.getItem('theme') as 'dark' | 'light';

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        window.localStorage.setItem("theme", mode);
      },
    }),
    [mode]
  );

  const theme = React.useMemo(() => createTheme(themeOptions(mode)), [mode]);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ShoppingProvider>
            <FiltersProvider>
              <Component {...pageProps} />
            </FiltersProvider>
          </ShoppingProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
};

export default MyApp;
