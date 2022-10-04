

const themeOptions = (mode: any ): any => ({
  palette: {
    mode,
          primary: {
            main: "rgb(24, 136, 139)",
            light: "rgb(35, 183, 188)",
            dark: "rgb(17, 97, 100)",
            contrastText: "white",
          },
          secondary: {
            main: "rgb(255, 196, 0)",
            contrastText: "",
            light: "rgb(238, 199, 73)",
            dark: "rgb(187, 145, 8)",
          },
        }
});

export default themeOptions;

