import React, { useContext, useRef, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import ScrollTop from './utils/ScrollTop'
import { Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
    RichTextEditor,
} from "mui-tiptap";
import ThemeContext from './context/ThemeContext'
import { controls, editors, extensions } from './libraries/richtexteditor/extension'


const pages = ['Products', 'Pricing', 'Blog']


const exampleContent = `<div class="chart-container" style="min-height: 375px">
Đối với hệ thống Zero Chat, bạn cần thực hiện các loại thanh toán sau:
<ul>
    <li>Mua Agent: Được thực hiện khi nhấp vào nút Tạo Agent.</li>
    <li>Mua Truy vấn (giúp chatbot hoạt động): Được thực hiện khi nhấp vào nút
        Mua Truy vấn trong phần Thông tin dịch vụ khi cài đặt Agent.</li>
    <li>Nâng cấp tài khoản: Được thực hiện khi nhấp vào nút Nâng hạng trong phần
        Thông tin dịch vụ khi cài đặt Agent.</li>
</ul>
<p>
    Bạn có thể mua Agent, truy vấn hoặc nâng cấp tài khoản thông qua ví điện
    tử của mình hoặc có thể nạp tiền trước vào ví của hệ thống, sau đó trừ
    dần số tiền này trong tài khoản khi thực hiện các giao dịch. Để nạp
    tiền, nhấp chọn mục Thanh toán ở bên trái và chọn nút Nạp.
</p>
<p><strong>Đối với người dùng mới,</strong> chúng tôi khuyến khích bạn nạp tiền
    trước vào ví
    của hệ thống trong mục Thanh toán, với giá trị tối thiểu $20 - tương ứng
    với phí khởi tạo 1 Agent (1 Chatbot). Sau đó, khi bạn nhấp vào nút Tạo
    Agent, hệ thống sẽ tự trừ số tiền này và cho phép bạn tạo Agent mới.
    Thêm vào đó, khi bạn mua Agent mới, hệ thống sẽ tặng bạn 1000 truy vấn
    miễn phí. Để hiểu thêm về truy vấn, nhấp vào mục Giải thích truy vấn
    trong phần Thông tin dịch vụ ở cửa sổ cài đặt Agent. Khi hết truy vấn,
    bạn có thể mua thêm trong mục Mua truy vấn cũng ở phần Thông tin dịch
    vụ.
</p>
<p>
    Bạn có thể xem toàn bộ lịch sử nạp tiền và lịch sử giao dịch của mình
    với hệ thống trong mục Thanh toán.
</p>
<img class="vx-step-img" alt="account" src="../../images/payment/1.1.png">
</div>`


export default function Home(props) {
    const { theme, togglePaletteMode } = useContext(ThemeContext)
    const [anchorElNav, setAnchorElNav] = useState()

    const [htmlResult, setHtmlResult] = useState("");

    const rteRef = useRef(null)

    const handleOpenNavMenu = (event) => {
        console.log('fap', event.currentTarget)
        setAnchorElNav(event.currentTarget)

    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <React.Fragment>
            <AppBar position="static" id='appbar'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={process.env.PUBLIC_URL + './logo.png'} style={{ width: 30, height: 30 }} />
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
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            ZeroChat
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton onClick={togglePaletteMode} color="inherit">
                                {theme.palette.mode === "dark" ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <Toolbar id="back-to-top-anchor" />
                <RichTextEditor
                    ref={rteRef}
                    content={exampleContent}
                    extensions={extensions}
                    renderControls={() => controls}>
                    {() => editors}
                </RichTextEditor>

                <Button onClick={() => setHtmlResult(rteRef.current?.editor?.getHTML() ?? "")}>
                    Save and display HTML
                </Button>
                {htmlResult && (
                    <pre style={{ marginTop: 10, overflow: "scroll", maxWidth: "100%" }}>
                        <code>{htmlResult}</code>
                    </pre>
                )}
                <Box sx={{ my: 2 }}>
                    {[...new Array(100)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    )
}

