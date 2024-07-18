import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    useMediaQuery
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ThemeContext from "./context/ThemeContext"
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import GuidePage from "./pages/GuidePage";

const pages = [
    { title: 'Home', href: '/' },
    { title: 'Guide', href: '/guide' }
]

const routes = (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<GuidePage />} />
    </Routes>
)

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
            <AppBar position="static" id='appbar' color="default">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo' style={{ width: 30, height: 30 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                ml: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: '#87F7D2',
                                textDecoration: 'none',
                            }}>ZeroChat
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { md: 'flex', justifyContent: 'center' } }}>
                            {pages.map((page) => (
                                <Link key={page.title} to={page.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Button
                                        key={page.title}
                                        sx={{ my: 2 }}>
                                        {page.title}
                                    </Button>
                                </Link>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton onClick={togglePaletteMode} color="inherit">
                                {theme.palette.mode === "dark" ? (
                                    <Brightness4Icon sx={{ color: 'white' }} />
                                ) : (
                                    <Brightness7Icon sx={{ color: 'black' }} />
                                )}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {routes}
        </ThemeProvider>
    );
}