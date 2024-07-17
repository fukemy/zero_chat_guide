import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
    AppBar,
    Box,
    CssBaseline,
    IconButton,
    ThemeProvider,
    Toolbar,
    Typography,
    createTheme,
    useMediaQuery
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import Home from "./Home";

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
            <IconButton onClick={togglePaletteMode} color="inherit">
                {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                ) : (
                    <Brightness4Icon />
                )}
            </IconButton>
            <div>
                <Home />
            </div>
        </ThemeProvider>
    );
}