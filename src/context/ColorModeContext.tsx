import { createContext, useEffect, useMemo, useState } from "react";
import themeOptions from "../../styles/theme/themeOptions";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";



interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ColorModeContextInterface {
  toggleColorMode: () => void;
}

const ColorModeContext = createContext({} as ColorModeContextInterface);

const ColorModeProvider = ({ children }: Props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const initialState = localStorage.theme
    ? (localStorage.getItem("theme") as "dark" | "light")
    : prefersDarkMode ? "dark" : "light"

  const [mode, setMode] = useState<"light" | "dark">(initialState);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode]
  );

  const theme = useMemo(() => createTheme(themeOptions(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { ColorModeContext };
export default ColorModeProvider;
