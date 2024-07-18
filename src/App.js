import {
    CssBaseline,
    Tab,
    ThemeProvider,
    colors,
    createTheme,
    useMediaQuery
} from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Home from "./pages/HomePage";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GuidePage from "./pages/GuidePage";
import { maincolor } from "./utils/colors";

const pages = [
    { title: 'Trang chủ', href: '/', content: <Home /> },
    { title: 'Hướng dẫn', href: '/guide', content: <GuidePage /> }
]



export default function App() {
    const [tab, setTab] = useState(pages[0].title)
    const systemSettingsPrefersDarkMode = useMediaQuery(
        "(prefers-color-scheme: dark)"
    )
    const [paletteMode, setPaletteMode] = useState(
        systemSettingsPrefersDarkMode ? "dark" : "light"
    )
    const togglePaletteMode = useCallback(
        () =>
            setPaletteMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
        []
    )

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: paletteMode,
                },
            }),
        [paletteMode]
    )


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TabContext value={tab}>
                <AppBar position="sticky" id='appbar' color="inherit" sx={{ boxShadow: 'none' }}>
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
                                    color: maincolor,
                                    textDecoration: 'none',
                                }}>ZeroChat
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { md: 'flex', justifyContent: 'center' } }}>
                                <TabList
                                    // TabIndicatorProps={{
                                    //     style: {
                                    //         backgroundColor: maincolor,
                                    //         color: maincolor
                                    //     }
                                    // }}
                                    // sx={{
                                    //     ".Mui-selected": {
                                    //         color: maincolor,
                                    //     },
                                    // }}
                                    onChange={(_, val) => setTab(val)}
                                    aria-label="lab API tabs example">
                                    {pages.map((page) => (
                                        <Tab label={page.title} value={page.title} />
                                    ))}
                                </TabList>
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

                {pages.map((page) => (
                    <TabPanel value={page.title}>{page.content}</TabPanel>
                ))}
                {/* {routes} */}
            </TabContext>
        </ThemeProvider>
    );
}