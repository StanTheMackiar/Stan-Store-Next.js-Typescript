

const themeOptions = (mode: "light" | "dark" = "light" ) => ({
  palette: {
    mode,
          primary: {
            main: "rgb(24, 136, 139)",
            light: "rgb(35, 183, 188)",
            dark: "rgb(17, 97, 100)",
            contrastText: "rgb(250, 250, 250)",
          },
          secondary: {
            main: "rgb(255, 196, 0)",
            light: "rgb(238, 199, 73)",
            dark: "rgb(187, 145, 8)",
          },
        }
});

export default themeOptions;

