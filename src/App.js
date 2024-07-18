import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    useMediaQuery
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import Home from "./Home";
import ThemeContext from "./context/ThemeContext";

export default function App() {
    const systemSettingsPrefersDarkMode = useMediaQuery(
        "(prefers-color-scheme: dark)"
    );
    const [paletteMode, setPaletteMode] = useState(
        systemSettingsPrefersDarkMode ? "dark" : "light"
    );
    const togglePaletteMode = useCallback(
        () =>
            setPaletteMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
        []
    );
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: paletteMode,
                },
            }),
        [paletteMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ThemeContext.Provider value={{ theme, togglePaletteMode }}>
                <Home />
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}